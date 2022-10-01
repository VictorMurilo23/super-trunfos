const pernalongaImage = require('../images/Pernalonga-Rei.webp');
const isshinImage = require('../images/Isshin.png');
const jokerImage = require('../images/joker.webp');
const danteImage = require('../images/dante.jpg');
const vergilImage = require('../images/vergil.webp');
const atemImage = require('../images/atem.jpeg');
const meruemImage = require('../images/meruem.webp');
const denjiImage = require('../images/denji.webp');
const nameLessKingImage = require('../images/rei-sem-nome.jpg');
const jetStreamSamImage = require('../images/jetstreamsam.jpg');
const aangImage = require('../images/Aang.webp');
const goblinSlayerImage = require('../images/goblin-slayer.jpg');
const gutsImage = require('../images/guts.jpg');
const gonImage = require('../images/gon.jpg');
const killuaImage = require('../images/killua.jpg');
const esqueletoGif = require('../images/esqueleto.gif');
const soldadoEsqueletoImage = require('../images/soldado-esqueleto.webp');
const mewtwoImage = require('../images/mewtwo.jpg');
const fantasmaticoImage = require('../images/fantasmatico.jpg');

const muitoRaro = 'muito raro';

const cards = [
  {
    nomeDaCarta: 'Rei Pernalonga XVI',
    descricaoDaCarta: 'O único sobrevivente de uma longa linhagem de reis.',
    atributo1: 30,
    atributo2: 90,
    atributo3: 90,
    imagemDaCarta: pernalongaImage,
    raridade: muitoRaro,
    superTrunfo: false,
    indeletavel: true,
  },
  {
    nomeDaCarta: 'Isshin, a Divindade da Espada',
    descricaoDaCarta: 'Uma máquina de matar obstinada.',
    atributo1: 70,
    atributo2: 70,
    atributo3: 70,
    imagemDaCarta: isshinImage,
    raridade: muitoRaro,
    superTrunfo: false,
    indeletavel: true,
  },
  {
    nomeDaCarta: 'Joker',
    descricaoDaCarta: 'Líder dos Phantom Thieves.',
    atributo1: 50,
    atributo2: 70,
    atributo3: 90,
    imagemDaCarta: jokerImage,
    raridade: muitoRaro,
    superTrunfo: false,
    indeletavel: true,
  },
  {
    nomeDaCarta: 'Dante Sparda',
    descricaoDaCarta: 'O lendário caçador de demônios.',
    atributo1: 90,
    atributo2: 90,
    atributo3: 30,
    imagemDaCarta: danteImage,
    raridade: muitoRaro,
    superTrunfo: false,
    indeletavel: true,
  },
  {
    nomeDaCarta: 'Vergil Sparda',
    descricaoDaCarta: 'O Alfa e o Ômega.',
    atributo1: 60,
    atributo2: 90,
    atributo3: 60,
    imagemDaCarta: vergilImage,
    raridade: muitoRaro,
    superTrunfo: false,
    indeletavel: true,
  },
  {
    nomeDaCarta: 'Atem',
    descricaoDaCarta: 'Um antigo faraó egípcio e o eterno Rei dos Jogos.',
    atributo1: 60,
    atributo2: 60,
    atributo3: 90,
    imagemDaCarta: atemImage,
    raridade: muitoRaro,
    superTrunfo: false,
    indeletavel: true,
  },
  {
    nomeDaCarta: 'Meruem',
    descricaoDaCarta: 'O Rei das Formigas Quimera.',
    atributo1: 60,
    atributo2: 70,
    atributo3: 80,
    imagemDaCarta: meruemImage,
    raridade: muitoRaro,
    superTrunfo: false,
    indeletavel: true,
  },
  {
    nomeDaCarta: 'Denji',
    descricaoDaCarta: 'O homem motoserra.',
    atributo1: 90,
    atributo2: 90,
    atributo3: 30,
    imagemDaCarta: denjiImage,
    raridade: muitoRaro,
    superTrunfo: false,
    indeletavel: true,
  },
  {
    nomeDaCarta: 'Rei sem nome',
    // eslint-disable-next-line max-len
    descricaoDaCarta: 'Um antigo deus da guerra destruidor de dragões que sacrificou tudo para se aliar aos  dragões.',
    atributo1: 90,
    atributo2: 90,
    atributo3: 30,
    imagemDaCarta: nameLessKingImage,
    raridade: muitoRaro,
    superTrunfo: false,
    indeletavel: true,
  },
  {
    nomeDaCarta: 'Jetstream Sam',
    descricaoDaCarta: 'Um samurai brasileiro capaz de realizar um pulo duplo.',
    atributo1: 80,
    atributo2: 80,
    atributo3: 50,
    imagemDaCarta: jetStreamSamImage,
    raridade: muitoRaro,
    superTrunfo: false,
    indeletavel: true,
  },
  {
    nomeDaCarta: 'Aang',
    descricaoDaCarta: 'O avatar.',
    atributo1: 60,
    atributo2: 90,
    atributo3: 60,
    imagemDaCarta: aangImage,
    raridade: muitoRaro,
    superTrunfo: false,
    indeletavel: true,
  },
  {
    nomeDaCarta: 'Goblin Slayer',
    descricaoDaCarta: 'Só tem interesse em matar goblins.',
    atributo1: 60,
    atributo2: 60,
    atributo3: 90,
    imagemDaCarta: goblinSlayerImage,
    raridade: muitoRaro,
    superTrunfo: false,
    indeletavel: true,
  },
  {
    nomeDaCarta: 'Guts',
    descricaoDaCarta: 'Um homem com uma força de vontade admirável.',
    atributo1: 90,
    atributo2: 60,
    atributo3: 60,
    imagemDaCarta: gutsImage,
    raridade: muitoRaro,
    superTrunfo: false,
    indeletavel: true,
  },
  {
    nomeDaCarta: 'Gon Freecss',
    descricaoDaCarta: 'Amiguinho do Killua.',
    atributo1: 90,
    atributo2: 90,
    atributo3: 30,
    imagemDaCarta: gonImage,
    raridade: muitoRaro,
    superTrunfo: false,
    indeletavel: true,
  },
  {
    nomeDaCarta: 'Killua Zoldyck',
    descricaoDaCarta: 'Amiguinho do Gon.',
    atributo1: 30,
    atributo2: 90,
    atributo3: 90,
    imagemDaCarta: killuaImage,
    raridade: muitoRaro,
    superTrunfo: false,
    indeletavel: true,
  },
  {
    nomeDaCarta: 'Esqueleto Capoeirista',
    descricaoDaCarta: 'Um capoeirista excelente.',
    atributo1: 70,
    atributo2: 90,
    atributo3: 50,
    imagemDaCarta: esqueletoGif,
    raridade: muitoRaro,
    superTrunfo: false,
    indeletavel: true,
  },
  {
    nomeDaCarta: 'Soldado Esqueleto',
    descricaoDaCarta: 'Um guerreiro capaz de absorver poder dos mortos.',
    atributo1: 70,
    atributo2: 70,
    atributo3: 70,
    imagemDaCarta: soldadoEsqueletoImage,
    raridade: muitoRaro,
    superTrunfo: false,
    indeletavel: true,
  },
  {
    nomeDaCarta: 'Mewtwo',
    // eslint-disable-next-line max-len
    descricaoDaCarta: 'Geralmente permanece imóvel para economizar energia, para que possa liberar todo o seu poder em batalha.',
    atributo1: 50,
    atributo2: 70,
    atributo3: 90,
    imagemDaCarta: mewtwoImage,
    raridade: muitoRaro,
    superTrunfo: false,
    indeletavel: true,
  },
  {
    nomeDaCarta: 'Fantasmatico',
    descricaoDaCarta: 'Um alienígena sombrio como um fantasma.',
    atributo1: 60,
    atributo2: 90,
    atributo3: 60,
    imagemDaCarta: fantasmaticoImage,
    raridade: muitoRaro,
    superTrunfo: false,
    indeletavel: true,
  },
];

export default cards;
