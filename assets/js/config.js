/*
 * ============================================================
 *  CONFIGURAÇÃO DO SITE — Delícias da Moça
 *  Edite APENAS este arquivo para trocar contatos, sabores,
 *  caixas, preços e prazos. Não precisa mexer no resto.
 * ============================================================
 */
window.CONFIG = {
  marca: "Delícias da Moça",
  slogan: "Biscoitos artesanais da casa",

  // WhatsApp: só números, com 55 + DDD. Ex.: "5511912345678"
  whatsapp: "5511999672229",
  email: "contato@deliciasdamoca.com.br", // TODO: criar a caixa de e-mail ou trocar
  instagram: "", // ex.: "deliciasdamoca" (deixe vazio para esconder)
  cidade: "São Paulo - SP", // TODO: cidade/região de entrega

  // Faixa no topo (some sozinha depois da data "ate")
  aviso: {
    texto: "🎃 Últimas encomendas de Halloween até 28/10.",
    link: "Peça pelo WhatsApp",
    zap: "Olá! Ainda dá para encomendar biscoitos de Halloween? 🎃",
    ate: "2026-10-28",
  },

  // Coleção em destaque
  colecao: {
    id: "natal",
    titulo: "Coleção de Natal",
    chamada: "Natal de 2026",
    texto:
      "Clássicos de Natal com sotaque brasileiro, como goiabada, castanha-do-pará e doce de leite, assados em pequenos lotes. Cada biscoito vai embalado um a um, para chegar crocante e com o aroma de cada sabor separado.",
    encomendasAte: "2026-12-15",
    entregaAte: "2026-12-23",
    mostrarPrecos: true,

    // Os sabores da linha (ficha de teste de Natal 2026)
    sabores: [
      { id: "principal", nome: "Amanteigado da Moça", origem: "O biscoito da casa", descricao: "Massa amanteigada de baunilha e amêndoa que desmancha na boca, coberta de açúcar de baunilha. Feito em estrela, árvore, sino, anjo, coração e outros formatos.", img: "assets/img/natal/principal.jpg", emoji: "⭐" },
      { id: "laranja", nome: "Amanteigado de laranja", origem: "Só no Advento", descricao: "A massa da casa com raspas de laranja, em meia-lua. Aparece no dia 8, festa da Imaculada Conceição.", img: "assets/img/natal/laranja.jpg", emoji: "🌙" },
      { id: "castanha", nome: "Nevadinha de castanha-do-pará", origem: "Amanteigados", descricao: "Bolinha amanteigada de castanha-do-pará tostada, coberta de açúcar duas vezes, como neve.", img: "assets/img/natal/castanha.jpg", emoji: "🌰" },
      { id: "especiarias", nome: "Biscoito de especiarias", origem: "Especiarias", descricao: "Cravo, canela, noz-moscada e gengibre, no molde de madeira ou em bonequinhos com olhos e botões de glacê.", img: "assets/img/natal/especiarias.jpg", emoji: "🎄" },
      { id: "pao-de-mel", nome: "Pão de mel de cacau, café e cardamomo", origem: "Especiarias", descricao: "Massa de mel macia e escura, com cardamomo moído na hora e uma camada fina de glacê de cacau.", img: "assets/img/natal/pao-de-mel.jpg", emoji: "🍯" },
      { id: "sonho-canela", nome: "Sonho de canela", origem: "Especiarias", descricao: "Leve, rachado e sequinho, com canela, cardamomo e açúcar em pérolas. É o que mais dura da coleção.", img: "assets/img/natal/sonho-canela.jpg", emoji: "✨" },
      { id: "xadrez", nome: "Xadrez de matcha e morango", origem: "Amanteigados", descricao: "Quadradinhos de massa de baunilha em verde e rosa, coloridos só com matcha e morango.", img: "assets/img/natal/xadrez.jpg", emoji: "🟩" },
      { id: "espiral", nome: "Espiral de morango", origem: "Amanteigados", descricao: "Massa de baunilha enrolada com massa de morango, com borda de açúcar cristal.", img: "assets/img/natal/espiral.jpg", emoji: "🌀" },
      { id: "joia-goiabada", nome: "Joia de goiabada", origem: "Amanteigados", descricao: "Bolinha amanteigada com goiabada cascão assada no centro, firme e brilhante.", img: "assets/img/natal/joia-goiabada.jpg", emoji: "🍬" },
      { id: "janelinha", nome: "Janelinha de goiabada", origem: "Amanteigados", descricao: "Sanduíche amanteigado com uma janela recortada e recheio de goiabada cascão.", img: "assets/img/natal/janelinha.jpg", emoji: "⭐" },
      { id: "pistache", nome: "Guirlanda de pistache", origem: "Amanteigados", descricao: "Guirlanda feita no bico de confeitar, com pasta de pistache, pistache picado e um laço de cranberry.", img: "assets/img/natal/pistache.jpg", emoji: "💚" },
      { id: "coco", nome: "Coroa de coco", origem: "Amanteigados", descricao: "Amanteigado de coco tostado e amêndoa, com borda de coco que doura no forno, como uma coroa de luz.", img: "assets/img/natal/coco.jpg", emoji: "🥥" },
      { id: "craquelado", nome: "Craquelado de chocolate com Nutella", origem: "Chocolate", descricao: "Chocolate rachado no açúcar de confeiteiro, com Nutella no centro.", img: "assets/img/natal/craquelado.jpg", emoji: "🍫" },
      { id: "doce-de-leite", nome: "Cookie de chocolate e doce de leite", origem: "Chocolate", descricao: "Cookie de chocolate recheado de doce de leite, com uma pitada de flor de sal.", img: "assets/img/natal/doce-de-leite.jpg", emoji: "🍮" },
      { id: "botao-avela", nome: "Botão de chocolate e avelã", origem: "Chocolate", descricao: "Chocolate com uma avelã caramelizada presa no centro e flor de sal. Só vem na caixa grande.", img: "assets/img/natal/botao-avela.jpg", emoji: "🌰" },
    ],

    // Caixas de Natal
    caixas: [
      {
        id: "caixa-tradicao", nome: "Caixa Tradição", qtd: "8 biscoitos", preco: 54,
        descricao: "Os amanteigados e as especiarias, para quem ama o Natal de antigamente.",
        sabores: ["principal", "castanha", "especiarias", "sonho-canela"],
        img: "assets/img/natal/caixa-tradicao.jpg", emoji: "📦",
      },
      {
        id: "caixa-jardim", nome: "Caixa Jardim de Inverno", qtd: "12 biscoitos", preco: 89,
        descricao: "A caixa mais colorida da coleção, só com cores naturais.",
        sabores: ["xadrez", "espiral", "joia-goiabada", "janelinha", "pistache", "coco"],
        img: "assets/img/natal/caixa-jardim.jpg", emoji: "🎁",
      },
      {
        id: "caixa-noite", nome: "Caixa Noite Feliz", qtd: "24 biscoitos", preco: 169, destaque: "A mais completa",
        descricao: "Dois de cada um dos 12 sabores, incluindo o botão de avelã, que só vem nesta caixa.",
        sabores: ["principal", "castanha", "especiarias", "pao-de-mel", "sonho-canela", "xadrez", "janelinha", "pistache", "coco", "craquelado", "doce-de-leite", "botao-avela"],
        img: "assets/img/natal/caixa-noite.jpg", emoji: "🎄",
      },
    ],

    // Calendário do Advento, ligado ao calendário católico (dia → sabor e festa)
    advento: {
      id: "advento", nome: "Calendário do Advento", qtd: "24 saquinhos numerados", preco: 189,
      descricao: "Um biscoito por dia, de 1º a 24 de dezembro, escolhido de acordo com o calendário católico: São Nicolau no dia 6, a Imaculada Conceição no dia 8, a coroa de luz de Santa Luzia no dia 13 e as Antífonas do Ó de 17 a 23. A meia-lua, que lembra Maria sobre a lua, só aparece aqui.",
      encomendasAte: "2026-11-20",
      entrega: "entre 25 e 30 de novembro",
      img: "assets/img/natal/advento.jpg", emoji: "📅",
      dias: {
        1: ["pistache", "1ª semana do Advento"], 2: ["craquelado"], 3: ["xadrez", "São Francisco Xavier"], 4: ["espiral"],
        5: ["doce-de-leite"], 6: ["especiarias", "2º Domingo do Advento · São Nicolau"], 7: ["pao-de-mel", "Santo Ambrósio, padroeiro dos apicultores"],
        8: ["laranja", "Imaculada Conceição · meia-lua"], 9: ["doce-de-leite", "São Juan Diego"], 10: ["janelinha", "Nossa Senhora de Loreto · janela de estrela"],
        11: ["craquelado"], 12: ["xadrez", "Nossa Senhora de Guadalupe"], 13: ["coco", "3º Domingo do Advento · Santa Luzia"],
        14: ["pistache", "São João da Cruz"], 15: ["sonho-canela"], 16: ["coco"], 17: ["espiral", "Ó Sabedoria · início das Antífonas do Ó"],
        18: ["pao-de-mel", "Ó Adonai · a sarça ardente"], 19: ["castanha", "Ó Raiz de Jessé"], 20: ["janelinha", "4º Domingo do Advento · Ó Chave de Davi"],
        21: ["castanha", "Ó Sol Nascente"], 22: ["especiarias", "Ó Rei das Nações · a coroa"], 23: ["sonho-canela", "Ó Emanuel"],
        24: ["principal", "Véspera de Natal · meia-lua"],
      },
    },

    // Saquinhos menores
    saquinhos: [
      { id: "saq-sabor", nome: "Saquinho de um sabor", qtd: "5 biscoitos do mesmo sabor", preco: 26, descricao: "Escolha o sabor no campo de observações do pedido. É um ótimo mimo para professores, vizinhos e amigo-secreto.", img: "assets/img/natal/saq-sabor.jpg", emoji: "🛍️" },
      { id: "saq-trio", nome: "Trio de Natal", qtd: "3 biscoitos", preco: 16, descricao: "Amanteigado da Moça, biscoito de especiarias e sonho de canela, cada um embalado separado, num envelope kraft com fita.", img: "assets/img/natal/saq-trio.jpg", emoji: "✉️" },
      { id: "saq-arvore", nome: "Biscoito para a árvore", qtd: "1 biscoito com fita", preco: 7, minimo: 10, descricao: "Um Amanteigado da Moça em estrela ou árvore, em saquinho com fita bordô para pendurar ou marcar o lugar na ceia. Pedido mínimo de 10.", img: "assets/img/natal/saq-arvore.jpg", emoji: "🎀" },
    ],
  },

  /*
   * Calendário de coleções. O site calcula sozinho a próxima data
   * de cada uma (inclusive Páscoa, Carnaval, Dia das Mães e dos Pais).
   *  regra:  "fixa:MM-DD" | "pascoa:+N" | "domingo:MM:N" | "ultsexta:MM"
   */
  calendario: [
    { id: "halloween", nome: "Halloween", regra: "fixa:10-31", emoji: "🎃", img: "assets/img/cal-halloween.jpg" },
    { id: "blackfriday", nome: "Black Friday", regra: "ultsexta:11", emoji: "🖤", img: "assets/img/cal-blackfriday.jpg" },
    { id: "natal", nome: "Natal", regra: "fixa:12-25", emoji: "🎄", img: "assets/img/cal-natal.jpg" },
    { id: "empresas", nome: "Presentes de fim de ano (empresas)", regra: "fixa:12-15", emoji: "🎁", img: "assets/img/cal-empresas.jpg" },
    { id: "anonovo", nome: "Ano Novo", regra: "fixa:12-31", emoji: "🥂", img: "assets/img/cal-anonovo.jpg" },
    { id: "voltaaulas", nome: "Volta às aulas", regra: "fixa:02-02", emoji: "✏️", img: "assets/img/cal-voltaaulas.jpg" },
    { id: "carnaval", nome: "Carnaval", regra: "pascoa:-47", emoji: "🎭", img: "assets/img/cal-carnaval.jpg" },
    { id: "mulher", nome: "Dia da Mulher", regra: "fixa:03-08", emoji: "🌷", img: "assets/img/cal-mulher.jpg" },
    { id: "pascoa", nome: "Páscoa", regra: "pascoa:0", emoji: "🐰", img: "assets/img/cal-pascoa.jpg" },
    { id: "maes", nome: "Dia das Mães", regra: "domingo:05:2", emoji: "💐", img: "assets/img/cal-maes.jpg" },
    { id: "namorados", nome: "Dia dos Namorados", regra: "fixa:06-12", emoji: "💘", img: "assets/img/cal-namorados.jpg" },
    { id: "junina", nome: "Festa Junina", regra: "fixa:06-24", emoji: "🌽", img: "assets/img/cal-junina.jpg" },
    { id: "amigo", nome: "Dia do Amigo", regra: "fixa:07-20", emoji: "🤝", img: "assets/img/cal-amigo.jpg" },
    { id: "avos", nome: "Dia dos Avós", regra: "fixa:07-26", emoji: "👵", img: "assets/img/cal-avos.jpg" },
    { id: "pais", nome: "Dia dos Pais", regra: "domingo:08:2", emoji: "👔", img: "assets/img/cal-pais.jpg" },
    { id: "cliente", nome: "Dia do Cliente", regra: "fixa:09-15", emoji: "⭐", img: "assets/img/cal-cliente-2.jpg" },
    { id: "secretaria", nome: "Dia da Secretária", regra: "fixa:09-30", emoji: "📎", img: "assets/img/cal-secretaria.jpg" },
    { id: "criancas", nome: "Dia das Crianças", regra: "fixa:10-12", emoji: "🧸", img: "assets/img/cal-criancas.jpg" },
    { id: "professores", nome: "Dia dos Professores", regra: "fixa:10-15", emoji: "🍎", img: "assets/img/cal-professores.jpg" },
  ],
};
