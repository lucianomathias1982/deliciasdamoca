# Delícias da Moça 🍪

Site da **Delícias da Moça**, uma marca de biscoitos artesanais caseiros, polvilhados com açúcar de confeiteiro, para datas comemorativas.
As vendas são feitas por **WhatsApp** e **e-mail**: o cliente monta o pedido no site e envia a mensagem pronta com um clique. O site não tem pagamento online.

O site é estático (HTML + CSS + JS puro, sem build), então dá para hospedar de graça no **GitHub Pages**.

## Estrutura

```
index.html              página única
assets/css/style.css    visual
assets/js/config.js     ← EDITE AQUI: contatos, produtos, preços, prazos, calendário
assets/js/main.js       lógica (pedido, WhatsApp/e-mail, calendário automático)
assets/img/             fotos (geradas com Nano Banana / Gemini)
```

## Como editar o dia a dia (só `assets/js/config.js`)

| O quê | Campo |
|---|---|
| Número do WhatsApp | `whatsapp` (só números, com 55 + DDD, ex.: `5511912345678`) |
| E-mail | `email` |
| Instagram | `instagram` (sem @; vazio esconde) |
| Cidade/região | `cidade` |
| Coleção em destaque | `colecao` (título, texto, prazo `encomendasAte`, produtos) |
| Esconder preços | `colecao.mostrarPrecos: false` |
| Datas do calendário | `calendario` (o site calcula sozinho Páscoa, Carnaval, Dia das Mães e dos Pais) |

Depois de editar CSS ou JS, aumente o `?v=` no `index.html` (ex.: `style.css?v=3`) para os navegadores pegarem a versão nova.

### Trocar de coleção (ex.: depois do Halloween → Natal)
1. Gere as fotos da nova coleção e salve em `assets/img/` (ex.: `natal-arvore.jpg`).
2. Em `config.js`, troque `colecao.id` para `"natal"`, e atualize título, textos, prazos e `produtos`.
3. No `index.html`, troque o selo do topo ("🎃 Lançamento: Coleção Halloween") e a imagem `hero.jpg` se quiser.

## Ver localmente

```bash
python3 -m http.server 5178
```
Abra http://localhost:5178

## Publicação (GitHub Pages + domínio próprio)
O site é publicado pelo GitHub Pages a partir da branch `main` (raiz) e responde em **https://deliciasdamoca.com.br** (arquivo `CNAME`). Todo push na `main` atualiza o site em 1–2 minutos.

DNS (zona do domínio na Hostinger):

| Tipo | Nome | Valor |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | lucianomathias1982.github.io |

Remova os registros A/CNAME de "parking" que a Hostinger cria por padrão. Não mexa nos registros MX/TXT do e-mail.

## Datas comemorativas (calendário de coleções)
Já estão no site: Halloween, Black Friday, presentes de fim de ano para empresas, Natal, Ano Novo, Volta às aulas, Carnaval, Dia da Mulher, Páscoa, Dia das Mães, Dia dos Namorados, Festa Junina, Dia do Amigo, Dia dos Avós, Dia dos Pais, Dia do Cliente, Dia da Secretária, Dia das Crianças e Dia dos Professores.

Outras ideias: Dia do Médico (18/10), Dia do Enfermeiro (12/5), Dia do Nutricionista (31/8), Outubro Rosa e Novembro Azul (empresas), formaturas (dezembro), Copa do Mundo, chá revelação, batizado e aniversários.
