import praiaTambau from "../assets/img/praia-tambau.avif";
import praiaCaboBranco from "../assets/img/praia-cabo-branco.avif";
import praiaPontaSeixa from "../assets/img/praia-ponta-seixas.avif";
import farolCaboBranco from "../assets/img/farol-cabo-branco.webp";
import teatroSantaRoza from "../assets/img/teatro-santa-roza.jpg";
import parqueSolonLucena from "../assets/img/parque-solon-lucena.jpg";

export const homeCardsData = [
  {
    id: "praias",
    titulo: "Praias Paradisíacas",
    descricao:
      "Litorais de águas mornas, coqueirais encantadores e cenários inesquecíveis.",
    classeImagem: "card-img praia",
    to: "/praias",
  },
  {
    id: "pontos-turisticos",
    titulo: "Pontos Turísticos",
    descricao:
      "Explore a rica história, a cultura vibrante e os cartões-postais da cidade.",
    classeImagem: "card-img ponto-turistico",
    to: "/pontos-turisticos",
  },
];

export const praiasData = [
  {
    id: "tambau",
    nome: "Praia de Tambaú",
    imagem: praiaTambau,
    descricao:
      "Uma das praias mais vibrantes e queridas da cidade. Conta com um calçadão movimentado, ótima infraestrutura de quiosques, águas mornas e é o principal ponto de partida para os famosos passeios de barco até as piscinas naturais.",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Praia+de+Tambaú+João+Pessoa",
  },
  {
    id: "cabo-branco",
    nome: "Praia de Cabo Branco",
    imagem: praiaCaboBranco,
    descricao:
      "Conhecida pela sua atmosfera tranquila e larga faixa de areia. É o destino favorito para quem quer caminhar ao amanhecer, pedalar na ciclovia à beira-mar ou simplesmente relaxar apreciando o mar calmo e a paisagem arborizada.",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Praia+de+Cabo+Branco+João+Pessoa",
  },
  {
    id: "ponta-do-seixas",
    nome: "Ponta do Seixas",
    imagem: praiaPontaSeixa,
    descricao:
      "Um lugar verdadeiramente especial por ser o ponto mais oriental de todas as Américas — onde o sol nasce primeiro no continente. Cercada por falésias e águas cristalinas, oferece um cenário rústico e uma vista marinha de tirar o fôlego.",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Ponta+do+Seixas+João+Pessoa",
  },
];

export const pontosTuristicosData = [
  {
    id: "farol-cabo-branco",
    nome: "Farol do Cabo Branco",
    imagem: farolCaboBranco,
    descricao:
      "Um dos cartões-postais mais famosos da capital paraibana. Situado no alto de uma falésia na Ponta do Seixas, destaca-se pelo seu formato triangular único e proporciona uma vista panorâmica inesquecível do oceano Atlântico.",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Farol+do+Cabo+Branco+João+Pessoa",
  },
  {
    id: "teatro-santa-roza",
    nome: "Teatro Santa Roza",
    imagem: teatroSantaRoza,
    descricao:
      "Um verdadeiro tesouro da arquitetura clássica e um dos teatros mais antigos do país. Com detalhes ornamentados impressionantes, o espaço é um importante marco da história, da arte e da rica cena cultural da Paraíba.",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Teatro+Santa+Roza+João+Pessoa",
  },
  {
    id: "parque-solon-de-lucena",
    nome: "Parque Solon de Lucena",
    imagem: parqueSolonLucena,
    descricao:
      'Carinhosamente conhecido como "a Lagoa", este grande parque público fica bem no coração da cidade. É um verdadeiro refúgio verde rodeado por imponentes palmeiras imperiais, ideal para caminhadas relaxantes ao redor da água.',
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Parque+Solon+de+Lucena+João+Pessoa",
  },
];