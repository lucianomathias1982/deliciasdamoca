/*
 * ============================================================
 *  CONFIGURAÇÃO DO SITE — Delícias da Moça
 *  Edite APENAS este arquivo para trocar contatos, produtos,
 *  preços e a coleção da vez. Não precisa mexer no resto.
 * ============================================================
 */
window.CONFIG = {
  marca: "Delícias da Moça",
  slogan: "Biscoitos artesanais feitos com carinho",

  // WhatsApp: só números, com 55 + DDD. Ex.: "5511912345678"
  whatsapp: "5511999672229",
  email: "contato@deliciasdamoca.com.br", // TODO: trocar quando o domínio estiver pronto
  instagram: "", // ex.: "deliciasdamoca" (deixe vazio para esconder)
  cidade: "São Paulo - SP", // TODO: cidade/região de entrega

  // Coleção em destaque na página
  colecao: {
    id: "halloween",
    titulo: "Coleção Halloween",
    chamada: "Doces ou travessuras? Os dois!",
    texto:
      "Abóboras, fantasminhas, caveirinhas, monstrinhos e morcegos — biscoitos amanteigados caseiros, cortados à mão e polvilhados com açúcar de confeiteiro. Perfeitos para festa, lembrancinha da escola ou para assustar (de felicidade) quem você ama.",
    encomendasAte: "2026-10-28", // último dia para encomendar
    entregaAte: "2026-10-31",
    mostrarPrecos: true,
    produtos: [
      {
        id: "abobora",
        nome: "Abóbora Sorridente",
        descricao: "Amanteigado em formato de abóbora, polvilhado com açúcar de confeiteiro e com carinha simples. Embalado individualmente com laço.",
        unidade: "unidade",
        preco: 9.0,
        img: "assets/img/halloween-abobora.jpg",
        emoji: "🎃",
      },
      {
        id: "fantasminha",
        nome: "Fantasminha Camarada",
        descricao: "Fantasminha de baunilha, branquinho de açúcar de confeiteiro, com olhinhos de chocolate.",
        unidade: "unidade",
        preco: 9.0,
        img: "assets/img/halloween-fantasma.jpg",
        emoji: "👻",
      },
      {
        id: "caveirinha",
        nome: "Caveirinha",
        descricao: "Caveirinha amanteigada polvilhada com açúcar de confeiteiro, com olhinhos e sorriso de chocolate.",
        unidade: "unidade",
        preco: 9.0,
        img: "assets/img/halloween-caveira.jpg",
        emoji: "💀",
      },
      {
        id: "monstrinhos",
        nome: "Monstrinhos",
        descricao: "Monstrinhos de massa de especiarias com olhos de confeito e pitadas de açúcar. Cada um sai de um jeito!",
        unidade: "unidade",
        preco: 10.0,
        img: "assets/img/halloween-monstro.jpg",
        emoji: "👾",
      },
      {
        id: "kit-travessuras",
        nome: "Kit Doces ou Travessuras",
        descricao: "6 biscoitos sortidos (abóbora, fantasma, caveirinha, monstrinho, morcego e gatinho) polvilhados com açúcar, em caixinha de presente.",
        unidade: "kit c/ 6",
        preco: 52.0,
        img: "assets/img/halloween-kit6.jpg",
        emoji: "🧙‍♀️",
        destaque: true,
      },
      {
        id: "caixa-assombrada",
        nome: "Caixa Assombrada",
        descricao: "12 biscoitos sortidos de Halloween. Ideal para festas e para dividir com a turma.",
        unidade: "caixa c/ 12",
        preco: 98.0,
        img: "assets/img/halloween-caixa12.jpg",
        emoji: "🦇",
      },
      {
        id: "lembrancinha",
        nome: "Lembrancinha da Escola",
        descricao: "Saquinho com 3 mini biscoitos e tag personalizada com o nome da criança. Pedido mínimo: 10.",
        unidade: "saquinho",
        preco: 12.0,
        img: "assets/img/halloween-lembrancinha.jpg",
        emoji: "🍬",
        minimo: 10,
      },
      {
        id: "pirulito",
        nome: "Biscoito no Palito",
        descricao: "Biscoito-pirulito de morcego ou gatinho, de massa de especiarias. Sucesso garantido na mesa de doces.",
        unidade: "unidade",
        preco: 10.0,
        img: "assets/img/halloween-pirulito.jpg",
        emoji: "🦇",
      },
    ],
  },

  /*
   * Calendário de coleções. O site calcula sozinho a próxima data
   * de cada uma (inclusive Páscoa, Carnaval, Dia das Mães e dos Pais)
   * e mostra as próximas em ordem.
   *  regra:  "fixa:MM-DD"       → mesma data todo ano
   *          "pascoa:+N"         → N dias depois/antes da Páscoa
   *          "domingo:MM:N"      → N-ésimo domingo do mês
   *          "ultsexta:MM"       → última sexta-feira do mês
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
    { id: "cliente", nome: "Dia do Cliente", regra: "fixa:09-15", emoji: "⭐", img: "" },
    { id: "secretaria", nome: "Dia da Secretária", regra: "fixa:09-30", emoji: "📎", img: "assets/img/cal-secretaria.jpg" },
    { id: "criancas", nome: "Dia das Crianças", regra: "fixa:10-12", emoji: "🧸", img: "assets/img/cal-criancas.jpg" },
    { id: "professores", nome: "Dia dos Professores", regra: "fixa:10-15", emoji: "🍎", img: "assets/img/cal-professores.jpg" },
  ],
};
