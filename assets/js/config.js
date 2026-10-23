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
    // disponivel: true → mostra a tag "Disponível para encomendas" e o sabor aparece primeiro
    sabores: [
      { id: "principal", disponivel: true, nome: "Amanteigado da Moça", origem: "O biscoito da casa", descricao: "Massa amanteigada de baunilha e amêndoa que desmancha na boca, coberta de açúcar de baunilha. Feito em estrela, árvore, sino, anjo, coração e outros formatos.", img: "assets/img/natal/principal.jpg", emoji: "⭐" },
      { id: "laranja", nome: "Amanteigado de laranja", origem: "Só no Advento", descricao: "A massa da casa com raspas de laranja, em meia-lua. Aparece no dia 8, festa da Imaculada Conceição.", img: "assets/img/natal/laranja.jpg", emoji: "🌙" },
      { id: "castanha", disponivel: true, nome: "Nevadinha de castanha-do-pará", origem: "Amanteigados", descricao: "Bolinha amanteigada de castanha-do-pará tostada, coberta de açúcar duas vezes, como neve.", img: "assets/img/natal/castanha.jpg", emoji: "🌰" },
      { id: "especiarias", disponivel: true, nome: "Biscoito de especiarias", origem: "Especiarias", descricao: "Cravo, canela, noz-moscada e gengibre, no molde de madeira ou em bonequinhos com olhos e botões de glacê.", img: "assets/img/natal/especiarias.jpg", emoji: "🎄" },
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

    // Caixas de Natal (ficam "Disponível" só quando todos os sabores da caixa estão disponíveis)
    caixas: [
      {
        id: "caixa-tradicao", nome: "Caixa Tradição", qtd: "8 biscoitos", preco: 54,
        descricao: "Para quem ama o Natal de antigamente: 4 Amanteigados da Moça em formatos de Natal, 2 Nevadinhas de castanha-do-pará e 2 biscoitos de especiarias.",
        sabores: ["principal", "castanha", "especiarias"],
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
      descricao: "Um biscoito por dia, de 1º a 24 de dezembro, com um roteiro católico para viver o Advento em família: cada dia traz um tema, uma reflexão, uma ação e o biscoito que abre a janela do dia. São Nicolau no dia 6, a Imaculada Conceição no dia 8, Santa Luzia no dia 13 e as Antífonas do Ó de 17 a 23. A meia-lua, a lua aos pés de Maria, só aparece no dia 8.",
      encomendasAte: "2026-11-20",
      entrega: "entre 25 e 30 de novembro",
      img: "assets/img/natal/principal.jpg", emoji: "📅",
      // foto específica do dia (a meia-lua só existe no Advento); nos outros dias usa a foto do sabor
      imgDia: {
        7: "assets/img/natal/dias/dia-07-colmeia.jpg", 8: "assets/img/natal/laranja.jpg",
        10: "assets/img/natal/dias/dia-10-cajado.jpg", 12: "assets/img/natal/dias/dia-12-rosa.jpg",
        14: "assets/img/natal/dias/dia-14-estrela.jpg", 18: "assets/img/natal/dias/dia-18-chama.jpg",
        20: "assets/img/natal/dias/dia-20-chave.jpg", 22: "assets/img/natal/dias/dia-22-coroa.jpg",
        24: "assets/img/natal/dias/dia-24-estrela.jpg",
      },
      // Roteiro do Advento 2026: tema, reflexão, ação para a família e o biscoito do dia
      // tipo: "festa" (santos e festas de Maria) ou "antifona" (Antífonas do Ó, 17 a 23)
      dias: {
        1: {"sabor": "pistache", "tema": "A Vigilância", "reflexao": "Jesus pede que fiquemos atentos à sua vinda (Mc 13,33).", "acao": "Escreva uma intenção espiritual ou um propósito para dezembro.", "biscoito": "A coroa e as velas de quem vigia."},
        2: {"sabor": "xadrez", "tema": "A Criação", "reflexao": "Deus cria o mundo por amor e, desde o início, planeja a nossa salvação.", "acao": "Arrume ou limpe com cuidado um cômodo da casa.", "biscoito": "O dia separado da noite (Gn 1,4)."},
        3: {"sabor": "craquelado", "tema": "A Promessa", "reflexao": "Deus promete um Salvador à humanidade caída (Gn 3,15).", "acao": "Reze um mistério do terço em família pela paz do mundo.", "biscoito": "A promessa guardada lá dentro."},
        4: {"sabor": "doce-de-leite", "tema": "O Profeta Isaías", "reflexao": "A Virgem conceberá e dará à luz um filho (Is 7,14).", "acao": "Envie uma mensagem ou carta de agradecimento a alguém querido.", "biscoito": "A vida guardada no ventre."},
        5: {"sabor": "castanha", "tema": "A Casa de Davi", "reflexao": "O Salvador virá da linhagem do rei Davi.", "acao": "Separe roupas, agasalhos ou sapatos em bom estado para doação.", "biscoito": "O fruto de uma árvore antiga."},
        6: {"sabor": "especiarias", "tema": "São Nicolau", "reflexao": "O bispo de Mira viveu a caridade escondida de Cristo.", "acao": "Faça hoje um gesto generoso em segredo.", "biscoito": "Feito no molde, como os biscoitos da festa de São Nicolau.", "tipo": "festa"},
        7: {"sabor": "pao-de-mel", "tema": "A Voz no Deserto", "reflexao": "“Preparai o caminho do Senhor” (Mt 3,3).", "acao": "Escolha um pequeno sacrifício, como passar uma hora sem celular.", "biscoito": "Em colmeia: João Batista vivia de mel silvestre (Mt 3,4)."},
        8: {"sabor": "laranja", "tema": "Imaculada Conceição", "reflexao": "Maria é preservada do pecado para ser a morada do Salvador.", "acao": "Reze a Ave-Maria com devoção pela santidade da família.", "biscoito": "Em meia-lua: a lua crescente aos pés de Maria.", "tipo": "festa"},
        9: {"sabor": "craquelado", "tema": "O Arrependimento", "reflexao": "Preparar o caminho exige olhar com honestidade para as próprias falhas.", "acao": "Anote três motivos de gratidão e peça perdão por uma falta.", "biscoito": "A casca que se abre, como o coração arrependido."},
        10: {"sabor": "pistache", "tema": "O Bom Pastor", "reflexao": "Jesus vem buscar a ovelha perdida (Lc 15,4).", "acao": "Reze por um parente ou amigo afastado da Igreja.", "biscoito": "Em cajado: o cajado de quem sai à procura."},
        11: {"sabor": "doce-de-leite", "tema": "A Humildade", "reflexao": "Deus escolhe o que é simples para confundir os soberbos (1Cor 1,27).", "acao": "Elogie com sinceridade o trabalho de quem te serve no dia a dia.", "biscoito": "Simples por fora, doce por dentro."},
        12: {"sabor": "espiral", "tema": "Nossa Senhora de Guadalupe", "reflexao": "A padroeira da América Latina aparece trazendo o Menino no ventre.", "acao": "Monte um cantinho de oração ou acenda a vela do Advento em família.", "biscoito": "Em botão de rosa: as rosas no manto de Juan Diego.", "tipo": "festa"},
        13: {"sabor": "coco", "tema": "A Luz do Mundo", "reflexao": "No dia de Santa Luzia, lembramos que Cristo dissipa as trevas.", "acao": "Ligue ou mande um áudio carinhoso a um parente idoso ou distante.", "biscoito": "A borda dourada como coroa de luz.", "tipo": "festa"},
        14: {"sabor": "janelinha", "tema": "Alegria (Gaudete)", "reflexao": "“Alegrai-vos sempre no Senhor; o Senhor está perto” (Fl 4,4-5).", "acao": "Prepare um lanche surpresa ou faça um elogio a quem mora com você.", "biscoito": "Com janela em estrela: a janela que brilha."},
        15: {"sabor": "sonho-canela", "tema": "São José", "reflexao": "O homem justo que acolheu os planos de Deus sem hesitar.", "acao": "Ajude numa tarefa doméstica pesada, sem que ninguém precise pedir.", "biscoito": "Deus falou a José em sonho (Mt 1,20)."},
        16: {"sabor": "espiral", "tema": "A Visitação", "reflexao": "Maria parte apressada para servir a prima Isabel (Lc 1,39).", "acao": "Doe alimentos não perecíveis à paróquia ou a uma obra social.", "biscoito": "Duas massas abraçadas, como Maria e Isabel."},
        17: {"sabor": "xadrez", "tema": "Ó Sabedoria", "reflexao": "Começam as Antífonas do Ó: Cristo é a Sabedoria de Deus.", "acao": "Leia em silêncio o primeiro capítulo do Evangelho de Lucas.", "biscoito": "O tabuleiro, jogo dos sábios.", "tipo": "antifona"},
        18: {"sabor": "pao-de-mel", "tema": "Ó Adonai", "reflexao": "O Senhor que guiou Israel e falou a Moisés na sarça ardente.", "acao": "Reze de joelhos por cinco minutos, entregando a Deus a direção da sua vida.", "biscoito": "Em chama: a sarça que ardia sem se consumir.", "tipo": "antifona"},
        19: {"sabor": "castanha", "tema": "Ó Raiz de Jessé", "reflexao": "O sinal erguido diante dos povos.", "acao": "Monte o presépio e deixe a manjedoura vazia até o dia 24.", "biscoito": "A raiz que dá fruto.", "tipo": "antifona"},
        20: {"sabor": "janelinha", "tema": "Ó Chave de Davi", "reflexao": "Aquele que abre as portas trancadas do coração.", "acao": "Procure a confissão ou faça um exame de consciência sem pressa.", "biscoito": "Com janela em forma de chave: a fechadura recortada na massa.", "tipo": "antifona"},
        21: {"sabor": "coco", "tema": "Ó Sol Nascente", "reflexao": "O Sol da Justiça vem iluminar quem está nas trevas.", "acao": "Passe o dia sem reclamar de nenhuma contrariedade.", "biscoito": "O sol dourado, no dia mais longo do ano.", "tipo": "antifona"},
        22: {"sabor": "especiarias", "tema": "Ó Rei das Nações", "reflexao": "O desejado de todos os povos, a pedra angular.", "acao": "Escreva uma carta de intenções para deixar aos pés do presépio no Natal.", "biscoito": "Em coroa dourada: a coroa do Rei.", "tipo": "antifona"},
        23: {"sabor": "sonho-canela", "tema": "Ó Emanuel", "reflexao": "“Deus conosco”: Ele assume a nossa carne.", "acao": "Reze pelas gestantes e pelas crianças em risco ou abandonadas.", "biscoito": "O sonho que se cumpre.", "tipo": "antifona"},
        24: {"sabor": "principal", "tema": "A Véspera de Natal", "reflexao": "Não houve lugar na hospedaria, mas o coração da família está pronto.", "acao": "Reúnam-se ao redor do presépio, coloquem o Menino na manjedoura, acendam as velas da coroa e leiam Lc 2,1-14 antes da ceia ou da Missa do Galo.", "biscoito": "Em estrela: a estrela sobre a manjedoura.", "tipo": "festa"},
      },
    },

    // Saquinhos menores
    saquinhos: [
      { id: "saq-sabor", escolha: true, nome: "Saquinho de um sabor", qtd: "5 biscoitos do mesmo sabor", preco: 26, descricao: "Escolha um dos sabores disponíveis no campo de observações do pedido. É um ótimo mimo para professores, vizinhos e amigo-secreto.", img: "assets/img/natal/saq-sabor.jpg?v=2", emoji: "🛍️" },
      { id: "saq-trio", nome: "Trio de Natal", qtd: "3 biscoitos", preco: 16, sabores: ["principal", "especiarias", "sonho-canela"], descricao: "Amanteigado da Moça, biscoito de especiarias e sonho de canela, cada um embalado separado, num envelope kraft com fita.", img: "assets/img/natal/saq-trio.jpg?v=2", emoji: "✉️" },
      { id: "saq-arvore", nome: "Biscoito para a árvore", qtd: "1 biscoito com fita", preco: 7, minimo: 10, sabores: ["principal"], descricao: "Um Amanteigado da Moça em estrela ou árvore, em saquinho com fita bordô para pendurar ou marcar o lugar na ceia. Pedido mínimo de 10.", img: "assets/img/natal/saq-arvore.jpg?v=2", emoji: "🎀" },
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
