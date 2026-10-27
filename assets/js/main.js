(function () {
  "use strict";
  const C = window.CONFIG;
  const col = C.colecao;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const hoje = new Date(); hoje.setHours(0, 0, 0, 0);
  const parseData = (iso) => { const [a, m, d] = iso.split("-").map(Number); return new Date(a, m - 1, d); };
  const fmtData = (d, opts = { day: "2-digit", month: "long" }) => d.toLocaleDateString("pt-BR", opts);
  const sabor = (id) => col.sabores.find((s) => s.id === id);

  /* ---------- Links de WhatsApp e e-mail ---------- */
  const linkZap = (msg) => `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(msg)}`;
  const linkMail = (assunto, corpo = "") =>
    `mailto:${C.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
  function ligarContatos(raiz = document) {
    $$("[data-zap]", raiz).forEach((a) => {
      a.href = linkZap(a.dataset.zap);
      a.target = "_blank";
      a.rel = "noopener";
    });
    $$("[data-mail]", raiz).forEach((a) => { a.href = linkMail(a.dataset.mail); });
  }
  $$("[data-email]").forEach((el) => (el.textContent = C.email));
  $$("[data-cidade]").forEach((el) => (el.textContent = C.cidade));
  $$("[data-ano]").forEach((el) => (el.textContent = hoje.getFullYear()));
  if (C.instagram) {
    const a = $("[data-insta]");
    a.hidden = false;
    a.href = `https://instagram.com/${C.instagram}`;
    a.textContent = `@${C.instagram} no Instagram`;
    a.target = "_blank";
    a.rel = "noopener";
  }

  /* ---------- Faixa de aviso ---------- */
  if (C.aviso && hoje <= parseData(C.aviso.ate)) {
    $("#aviso").hidden = false;
    $("[data-aviso-texto]").textContent = C.aviso.texto;
    const a = $("[data-aviso-link]");
    a.textContent = C.aviso.link;
    a.dataset.zap = C.aviso.zap;
  }

  /* ---------- Imagens com plano B (emoji) ---------- */
  function imagemOuEmoji(img, emoji) {
    const trocar = () => {
      const ph = document.createElement("div");
      ph.className = "ph";
      ph.setAttribute("role", "img");
      ph.setAttribute("aria-label", img.alt);
      ph.textContent = emoji;
      img.replaceWith(ph);
    };
    img.addEventListener("error", trocar, { once: true });
    if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) trocar();
  }
  $$("img[data-fallback]").forEach((img) => imagemOuEmoji(img, img.dataset.fallback));

  /* ---------- Textos e prazos da coleção ---------- */
  $$("[data-colecao-titulo]").forEach((el) => (el.textContent = col.titulo));
  $$("[data-colecao-chamada]").forEach((el) => (el.textContent = col.chamada));
  $$("[data-colecao-texto]").forEach((el) => (el.textContent = col.texto));

  function textoPrazo(isoLimite, rotulo) {
    const limite = parseData(isoLimite);
    const dias = Math.round((limite - hoje) / 864e5);
    if (dias < 0) return { encerrado: true, texto: `Encomendas ${rotulo} encerradas.` };
    if (dias === 0) return { encerrado: false, texto: `Último dia para encomendar ${rotulo}!` };
    return { encerrado: false, texto: `Encomendas ${rotulo} até ${fmtData(limite)}` };
  }
  const prazoCol = textoPrazo(col.encomendasAte, "de Natal");
  $$("[data-prazo]").forEach((el) => (el.textContent = prazoCol.texto));
  const adv = col.advento;
  const prazoAdv = textoPrazo(adv.encomendasAte, "do calendário");

  /* ---------- Sabores ---------- */
  const grade = $("#saboresGrade");
  [...col.sabores].sort((a, b) => (b.disponivel ? 1 : 0) - (a.disponivel ? 1 : 0)).forEach((s) => {
    const el = document.createElement("article");
    el.className = "sabor moldura " + (s.disponivel ? "sabor--disponivel" : "sabor--breve");
    el.innerHTML = `
      ${s.disponivel ? '<span class="sabor__tag">Disponível para encomendas</span>' : '<span class="sabor__tag sabor__tag--breve">Em breve</span>'}
      <div class="sabor__img"><img src="${s.img}" alt="${s.nome}" loading="lazy" width="300" height="300"></div>
      <p class="sabor__origem">${s.origem}</p>
      <h3>${s.nome}</h3>
      <p>${s.descricao}</p>`;
    imagemOuEmoji($("img", el), s.emoji);
    grade.appendChild(el);
  });

  /* ---------- Produtos (caixas, advento, saquinhos) ---------- */
  const produtos = [...col.caixas, adv, ...col.saquinhos];
  const prod = (id) => produtos.find((p) => p.id === id);
  const pedido = new Map(); // id -> qtd

  // Um produto fica disponível quando todos os seus sabores estão disponíveis
  // (no saquinho de escolha livre, basta haver algum sabor disponível)
  const saborOk = (id) => !!sabor(id).disponivel;
  const saboresDe = (p) => (p.id === adv.id ? [...new Set(Object.values(adv.dias).map((d) => d.sabor))] : p.sabores || []);
  const disponivel = (p) => (p.escolha ? col.sabores.some((s) => s.disponivel) : saboresDe(p).every(saborOk));
  const meAvise = (p) => `<a class="btn btn--sm btn--linha" data-zap="Olá! Quero ser avisado(a) quando abrirem as encomendas de: ${p.nome} 🎄" href="#">Me avise quando abrir</a>`;

  function controles(p, encerrado) {
    return `
      <div class="qtd" data-produto="${p.id}">
        <button type="button" data-acao="menos" aria-label="Diminuir ${p.nome}" ${encerrado ? "disabled" : ""}>−</button>
        <output aria-live="polite">0</output>
        <button type="button" data-acao="mais" aria-label="Aumentar ${p.nome}" ${encerrado ? "disabled" : ""}>+</button>
        <button type="button" class="btn btn--sm btn--terracota" data-acao="add" ${encerrado ? "disabled" : ""}>Adicionar</button>
      </div>`;
  }
  function cartao(p) {
    const el = document.createElement("article");
    el.className = "produto moldura";
    el.dataset.id = p.id;
    const ok = disponivel(p);
    el.classList.add(ok ? "produto--disponivel" : "produto--breve");
    const chips = (p.escolha ? col.sabores.filter((s) => s.disponivel).map((s) => s.id) : p.sabores || [])
      .map((id) => `<li class="${saborOk(id) ? "ok" : "breve"}">${sabor(id).nome}${saborOk(id) ? "" : " <small>em breve</small>"}</li>`).join("");
    el.innerHTML = `
      <span class="produto__tag ${ok ? "" : "produto__tag--breve"}">${ok ? "Disponível para encomendas" : "Em breve"}</span>
      <div class="produto__img"><img src="${p.img}" alt="${p.nome}" loading="lazy" width="640" height="480"></div>
      <div class="produto__corpo">
        <h3>${p.nome}</h3>
        <p class="produto__qtd">${p.qtd}${p.destaque ? ` · ${p.destaque}` : ""}</p>
        <p>${p.descricao}</p>
        ${chips ? `<ul class="produto__sabores">${chips}</ul>` : ""}
        ${col.mostrarPrecos && p.preco ? `<p class="produto__preco">${brl(p.preco)}${p.minimo ? ` <small>cada · mín. ${p.minimo}</small>` : ""}</p>` : ""}
        ${ok ? controles(p, prazoCol.encerrado) : meAvise(p)}
      </div>`;
    imagemOuEmoji($("img", el), p.emoji);
    return el;
  }
  col.caixas.forEach((p) => $("#caixasGrade").appendChild(cartao(p)));
  col.saquinhos.forEach((p) => $("#saquinhosGrade").appendChild(cartao(p)));

  /* ---------- Calendário do Advento ---------- */
  $("[data-advento-nome]").textContent = adv.nome;
  $("[data-advento-desc]").textContent = adv.descricao;
  $("[data-advento-qtd]").textContent = adv.qtd;
  $("[data-advento-entrega]").textContent = `Entregue ${adv.entrega}`;
  // o amanteigado de laranja é variação do Amanteigado da Moça, não conta como sabor à parte
  const saborBase = (id) => col.sabores.find((s) => s.id === id)?.variacaoDe || id;
  $("[data-advento-sabores]").textContent = `${new Set(Object.values(adv.dias).map((d) => saborBase(d.sabor))).size} sabores ao longo do mês`;
  $("[data-advento-preco]").textContent = col.mostrarPrecos ? brl(adv.preco) : "";
  $("[data-advento-prazo]").textContent = prazoAdv.texto;
  const advImg = $("[data-advento-img]");
  advImg.src = adv.img;
  const fotoDia = (d, s) => (adv.imgDia && adv.imgDia[d]) || s.img;
  if (prazoAdv.encerrado) $$("#advento .qtd button").forEach((b) => (b.disabled = true));
  if (!disponivel(adv)) {
    $("[data-advento-nome]").insertAdjacentHTML("beforebegin", '<span class="advento__tag">Em breve</span>');
    $("[data-advento-prazo]").innerHTML = `<span class="advento__breve">Em breve</span> Avisamos quando abrirem as encomendas do calendário.`;
    $("#advento .qtd").outerHTML = meAvise(adv);
  }

  const advGrade = $("#adventoGrade"), dica = $("#adventoDica");
  const diaHoje = hoje.getMonth() === 11 && hoje.getDate() <= 24 ? hoje.getDate() : 0;
  const botoesDia = [];

  // Mostra um dia: destaca o botão, troca o texto e a foto juntos (sempre sincronizados)
  function mostrarDia(d) {
    const dia = adv.dias[d];
    const s = sabor(dia.sabor);
    botoesDia.forEach((x, i) => x.classList.toggle("ativo", i + 1 === d));
    dica.innerHTML = `
      <span class="roteiro__dia">Dia ${d}</span>
      <strong class="roteiro__tema">${dia.tema}</strong>
      <span class="roteiro__reflexao">${dia.reflexao}</span>
      <span class="roteiro__acao"><b>Em família:</b> ${dia.acao}</span>
      <span class="roteiro__biscoito"><b>${s.nome}</b> · ${dia.biscoito}</span>`;
    const nova = fotoDia(d, s);
    if (advImg.getAttribute("src") === nova) return;
    advImg.classList.add("trocando");
    const pre = new Image();
    pre.onload = pre.onerror = () => {
      advImg.src = nova;
      advImg.alt = `${s.nome}, o biscoito do dia ${d}`;
      requestAnimationFrame(() => advImg.classList.remove("trocando"));
    };
    pre.src = nova;
  }

  for (let d = 1; d <= 24; d++) {
    const dia = adv.dias[d];
    const s = sabor(dia.sabor);
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("role", "listitem");
    b.textContent = d;
    b.title = `Dia ${d}: ${dia.tema} · ${s.nome}`;
    b.setAttribute("aria-label", b.title);
    if (dia.tipo) b.classList.add(dia.tipo);
    if (d === diaHoje) b.classList.add("hoje");
    new Image().src = fotoDia(d, s); // pré-carrega para a troca ser instantânea
    b.addEventListener("click", () => mostrarDia(d));
    botoesDia.push(b);
    advGrade.appendChild(b);
  }
  mostrarDia(diaHoje || 1); // já abre com um dia escolhido: nome e foto sempre combinando

  /* ---------- Quantidades ---------- */
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".qtd button[data-acao]");
    if (!btn) return;
    const p = prod(btn.closest(".qtd").dataset.produto);
    const min = p.minimo || 1;
    let q = pedido.get(p.id) || 0;
    if (btn.dataset.acao === "mais") q = q === 0 ? min : q + 1;
    if (btn.dataset.acao === "add") q = q === 0 ? min : q;
    if (btn.dataset.acao === "menos") q = q <= min ? 0 : q - 1;
    q ? pedido.set(p.id, q) : pedido.delete(p.id);
    atualizar();
    if (btn.dataset.acao === "add") abrirSacola();
  });

  /* ---------- Sacola / pedido ---------- */
  const sacola = $("#sacola"), sacolaBtn = $("#sacolaBtn");
  let fundo;
  const itensPedido = () => [...pedido].map(([id, q]) => ({ p: prod(id), q }));

  function atualizar() {
    $$(".qtd[data-produto]").forEach((box) => {
      const q = pedido.get(box.dataset.produto) || 0;
      $("output", box).textContent = q;
      const card = box.closest(".produto");
      if (card) card.classList.toggle("no-pedido", q > 0);
    });
    const itens = itensPedido();
    const totalQtd = itens.reduce((s, i) => s + i.q, 0);
    sacolaBtn.hidden = totalQtd === 0;
    $("#sacolaQtd").textContent = totalQtd;
    $("#sacolaItens").innerHTML = itens.length
      ? itens.map(({ p, q }) => `<li><span>${q}× ${p.nome}<small>${p.qtd}</small></span>${col.mostrarPrecos ? `<b>${brl(p.preco * q)}</b>` : ""}</li>`).join("")
      : "<li>Seu pedido está vazio.</li>";
    const total = itens.reduce((s, i) => s + (i.p.preco || 0) * i.q, 0);
    $("#sacolaTotal").textContent = col.mostrarPrecos && total ? `Total estimado: ${brl(total)}` : "";
    if (!totalQtd && !sacola.hidden) fecharSacola();
  }
  function abrirSacola() {
    sacola.hidden = false;
    sacolaBtn.setAttribute("aria-expanded", "true");
    fundo = document.createElement("div");
    fundo.className = "sacola-fundo";
    fundo.addEventListener("click", fecharSacola);
    document.body.appendChild(fundo);
    $(".sacola__fechar").focus();
  }
  function fecharSacola() {
    sacola.hidden = true;
    sacolaBtn.setAttribute("aria-expanded", "false");
    fundo && fundo.remove();
  }
  sacolaBtn.addEventListener("click", abrirSacola);
  $(".sacola__fechar").addEventListener("click", fecharSacola);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !sacola.hidden) fecharSacola(); });

  function mensagemPedido() {
    const nome = $("#pNome").value.trim();
    const data = $("#pData").value;
    const obs = $("#pObs").value.trim();
    const linhas = [
      `Olá! Quero encomendar da *${col.titulo}* 🎄`,
      "",
      ...itensPedido().map(({ p, q }) => `• ${q}× ${p.nome} (${p.qtd})${col.mostrarPrecos ? ` — ${brl(p.preco * q)}` : ""}`),
    ];
    const total = itensPedido().reduce((s, i) => s + (i.p.preco || 0) * i.q, 0);
    if (col.mostrarPrecos && total) linhas.push("", `Total estimado: ${brl(total)}`);
    linhas.push("");
    if (nome) linhas.push(`Nome: ${nome}`);
    if (data) linhas.push(`Data desejada: ${fmtData(parseData(data), { day: "2-digit", month: "2-digit", year: "numeric" })}`);
    linhas.push(`Entrega ou retirada: ${$("#pEntrega").value}`);
    if (obs) linhas.push(`Obs.: ${obs}`);
    return linhas.join("\n");
  }
  $("#enviarZap").addEventListener("click", () => window.open(linkZap(mensagemPedido()), "_blank", "noopener"));
  $("#enviarMail").addEventListener("click", () => {
    location.href = linkMail(`Pedido — ${col.titulo}`, mensagemPedido().replace(/\*/g, ""));
  });
  const pData = $("#pData");
  pData.min = hoje.toISOString().slice(0, 10);
  pData.max = col.entregaAte;

  /* ---------- Calendário de coleções ---------- */
  function pascoa(ano) { // algoritmo de Meeus/Jones/Butcher
    const a = ano % 19, b = Math.floor(ano / 100), c = ano % 100, d = Math.floor(b / 4), e = b % 4;
    const f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30, i = Math.floor(c / 4), k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451);
    const mes = Math.floor((h + l - 7 * m + 114) / 31), dia = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(ano, mes - 1, dia);
  }
  function dataNoAno(regra, ano) {
    const [tipo, a, b] = regra.split(":");
    if (tipo === "fixa") { const [m, d] = a.split("-").map(Number); return new Date(ano, m - 1, d); }
    if (tipo === "pascoa") { const d = pascoa(ano); d.setDate(d.getDate() + Number(a)); return d; }
    if (tipo === "domingo") {
      const d = new Date(ano, Number(a) - 1, 1);
      d.setDate(1 + ((7 - d.getDay()) % 7) + 7 * (Number(b) - 1));
      return d;
    }
    if (tipo === "ultsexta") {
      const d = new Date(ano, Number(a), 0);
      d.setDate(d.getDate() - ((d.getDay() + 2) % 7));
      return d;
    }
  }
  const proxima = (regra) => {
    const d = dataNoAno(regra, hoje.getFullYear());
    return d >= hoje ? d : dataNoAno(regra, hoje.getFullYear() + 1);
  };
  const cal = $("#cal");
  C.calendario
    .map((ev) => ({ ...ev, data: proxima(ev.regra) }))
    .sort((x, y) => x.data - y.data)
    .forEach((ev) => {
      const agora = ev.id === col.id && !prazoCol.encerrado;
      const item = document.createElement("article");
      item.className = "cal__item" + (agora ? " cal__item--agora" : "");
      const msg = `Olá! Quero ser avisado(a) quando abrirem as encomendas de ${ev.nome} 🍪`;
      item.innerHTML = `
        ${ev.img ? `<img class="cal__img" src="${ev.img}" alt="Biscoitos de ${ev.nome}" loading="lazy" width="400" height="300">` : `<div class="ph" aria-hidden="true">${ev.emoji}</div>`}
        <div class="cal__corpo">
          <span class="cal__data">${agora ? "Encomendas abertas" : fmtData(ev.data, { day: "2-digit", month: "short", year: "numeric" }).replace(" de ", " ").replace(".", "")}</span>
          <span class="cal__nome">${ev.nome}</span>
          ${agora ? `<a class="cal__btn" href="#caixas">Ver coleção</a>` : `<a class="cal__btn" data-zap="${msg}" href="#">Me avise</a>`}
        </div>`;
      const img = $("img", item);
      if (img) imagemOuEmoji(img, ev.emoji);
      cal.appendChild(item);
    });

  /* ---------- Menu mobile ---------- */
  const menuBtn = $(".menu-btn"), nav = $("#nav");
  menuBtn.addEventListener("click", () => {
    const aberto = nav.classList.toggle("aberto");
    menuBtn.setAttribute("aria-expanded", aberto);
  });
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) nav.classList.remove("aberto"); });

  ligarContatos();
  atualizar();
})();
