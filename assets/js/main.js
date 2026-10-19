(function () {
  "use strict";
  const C = window.CONFIG;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const hoje = new Date(); hoje.setHours(0, 0, 0, 0);
  const parseData = (iso) => { const [a, m, d] = iso.split("-").map(Number); return new Date(a, m - 1, d); };
  const fmtData = (d, opts = { day: "2-digit", month: "long" }) => d.toLocaleDateString("pt-BR", opts);

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

  /* ---------- Imagens com plano B (emoji) ---------- */
  function imagemOuEmoji(img, emoji, classeExtra = "") {
    img.addEventListener("error", () => {
      const ph = document.createElement("div");
      ph.className = `ph ${classeExtra}`.trim();
      ph.setAttribute("role", "img");
      ph.setAttribute("aria-label", img.alt);
      ph.textContent = emoji;
      img.replaceWith(ph);
    }, { once: true });
  }
  $$("img[data-fallback]").forEach((img) => {
    imagemOuEmoji(img, img.dataset.fallback);
    if (img.complete && img.naturalWidth === 0) img.dispatchEvent(new Event("error"));
  });

  /* ---------- Coleção da vez ---------- */
  const col = C.colecao;
  $("[data-colecao-titulo]").textContent = col.titulo;
  $("[data-colecao-chamada]").textContent = col.chamada;
  $("[data-colecao-texto]").textContent = col.texto;

  const limite = parseData(col.encomendasAte);
  const encerrada = hoje > limite;
  const diasRestantes = Math.round((limite - hoje) / 864e5);
  $$("[data-prazo]").forEach((el) => {
    if (encerrada) el.textContent = "Encomendas desta coleção encerradas. Veja as próximas abaixo!";
    else if (diasRestantes === 0) el.textContent = "⏰ Último dia para encomendar!";
    else el.textContent = `⏰ Encomendas até ${fmtData(limite)}. Faltam ${diasRestantes} dia${diasRestantes > 1 ? "s" : ""}!`;
  });

  const pedido = new Map(); // id -> qtd
  const grade = $("#produtos");
  col.produtos.forEach((p) => {
    const card = document.createElement("article");
    card.className = "produto";
    card.dataset.id = p.id;
    const preco = col.mostrarPrecos && p.preco
      ? `<div class="produto__preco"><b>${brl(p.preco)}</b><span>/ ${p.unidade}</span></div>`
      : `<div class="produto__preco"><span>${p.unidade}</span></div>`;
    card.innerHTML = `
      ${p.destaque ? '<span class="produto__tag">Mais pedido</span>' : ""}
      <img class="produto__img" src="${p.img}" alt="${p.nome}" loading="lazy" width="600" height="600">
      <div class="produto__corpo">
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
        ${preco}
        <div class="qtd">
          <button type="button" data-acao="menos" aria-label="Diminuir ${p.nome}">−</button>
          <output aria-live="polite">0</output>
          <button type="button" data-acao="mais" aria-label="Aumentar ${p.nome}">+</button>
          <button type="button" class="btn btn--sm btn--laranja" data-acao="add">Adicionar</button>
        </div>
      </div>`;
    imagemOuEmoji($("img", card), p.emoji);
    if (encerrada) $$(".qtd button", card).forEach((b) => (b.disabled = true));
    grade.appendChild(card);
  });

  grade.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-acao]");
    if (!btn) return;
    const card = btn.closest(".produto");
    const p = col.produtos.find((x) => x.id === card.dataset.id);
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

  function itensPedido() {
    return [...pedido].map(([id, q]) => ({ p: col.produtos.find((x) => x.id === id), q }));
  }
  function atualizar() {
    $$(".produto").forEach((card) => {
      const q = pedido.get(card.dataset.id) || 0;
      $("output", card).textContent = q;
      card.classList.toggle("no-pedido", q > 0);
    });
    const itens = itensPedido();
    const totalQtd = itens.reduce((s, i) => s + i.q, 0);
    sacolaBtn.hidden = totalQtd === 0;
    $("#sacolaQtd").textContent = totalQtd;
    $("#sacolaItens").innerHTML = itens.length
      ? itens.map(({ p, q }) => `<li><span>${q}× ${p.nome}<small>${p.unidade}</small></span>${col.mostrarPrecos ? `<b>${brl(p.preco * q)}</b>` : ""}</li>`).join("")
      : "<li>Seu pedido está vazio. Escolha seus biscoitos!</li>";
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
      `Olá! Quero encomendar da *${col.titulo}* 🍪`,
      "",
      ...itensPedido().map(({ p, q }) => `• ${q}× ${p.nome} (${p.unidade})${col.mostrarPrecos ? ` — ${brl(p.preco * q)}` : ""}`),
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
  if (!encerrada) pData.max = col.entregaAte;

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
      const agora = ev.id === col.id && !encerrada;
      const item = document.createElement("article");
      item.className = "cal__item" + (agora ? " cal__item--agora" : "");
      const msg = agora
        ? `Olá! Quero encomendar da ${col.titulo} 🍪`
        : `Olá! Quero ser avisado(a) quando abrirem as encomendas de ${ev.nome} 🍪`;
      item.innerHTML = `
        ${ev.img ? `<img class="cal__img" src="${ev.img}" alt="Biscoitos decorados de ${ev.nome}" loading="lazy" width="400" height="300">` : `<div class="ph" aria-hidden="true">${ev.emoji}</div>`}
        <div class="cal__corpo">
          <span class="cal__data">${agora ? "Encomendas abertas" : fmtData(ev.data, { day: "2-digit", month: "short", year: "numeric" }).replace(" de ", " ").replace(".", "")}</span>
          <span class="cal__nome">${ev.emoji} ${ev.nome}</span>
          ${agora ? `<a class="cal__btn" href="#colecao">Ver coleção</a>` : `<a class="cal__btn" data-zap="${msg}" href="#">Me avise</a>`}
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
