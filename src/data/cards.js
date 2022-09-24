const pernalongaImage = require('../images/Pernalonga-Rei.webp');
const isshinImage = require('../images/Isshin.png');
const jokerImage = require('../images/joker.webp');
const danteImage = require('../images/dante.jpg');
const vergilImage = require('../images/vergil.webp');
const atemImage = require('../images/atem.jpeg');
const meruemImage = require('../images/meruem.webp');
const denjiImage = require('../images/denji.webp');
const nameLessKingImage = require('../images/rei-sem-nome.jpg');

const muitoRaro = 'muito raro';

const cards = [
  {
    nome: 'Rei Pernalonga XVI',
    desc: 'O único sobrevivente de uma longa linhagem de reis.',
    atr1: 30,
    atr2: 90,
    atr3: 90,
    img: pernalongaImage,
    rari: muitoRaro,
    superTrun: false,
    indeletavel: true,
  },
  {
    nome: 'Isshin, a Divindade da Espada',
    desc: 'Uma máquina de matar obstinada.',
    atr1: 70,
    atr2: 70,
    atr3: 70,
    img: isshinImage,
    rari: muitoRaro,
    superTrun: false,
    indeletavel: true,
  },
  {
    nome: 'Joker',
    desc: 'Líder dos Phantom Thieves.',
    atr1: 50,
    atr2: 70,
    atr3: 90,
    img: jokerImage,
    rari: muitoRaro,
    superTrun: false,
    indeletavel: true,
  },
  {
    nome: 'Dante Sparda',
    desc: 'O lendário caçador de demônios.',
    atr1: 90,
    atr2: 90,
    atr3: 30,
    img: danteImage,
    rari: muitoRaro,
    superTrun: false,
    indeletavel: true,
  },
  {
    nome: 'Vergil Sparda',
    desc: 'O Alfa e o Ômega.',
    atr1: 60,
    atr2: 90,
    atr3: 60,
    img: vergilImage,
    rari: muitoRaro,
    superTrun: false,
    indeletavel: true,
  },
  {
    nome: 'Atem',
    desc: 'Um antigo faraó egípcio e o eterno Rei dos Jogos.',
    atr1: 60,
    atr2: 60,
    atr3: 90,
    img: atemImage,
    rari: muitoRaro,
    superTrun: false,
    indeletavel: true,
  },
  {
    nome: 'Meruem',
    desc: 'O Rei das Formigas Quimera.',
    atr1: 60,
    atr2: 70,
    atr3: 80,
    img: meruemImage,
    rari: muitoRaro,
    superTrun: false,
    indeletavel: true,
  },
  {
    nome: 'Denji',
    desc: 'O homem motoserra.',
    atr1: 90,
    atr2: 90,
    atr3: 30,
    img: denjiImage,
    rari: muitoRaro,
    superTrun: false,
    indeletavel: true,
  },
  {
    nome: 'Rei sem nome',
    // eslint-disable-next-line max-len
    desc: 'Um antigo deus da guerra destruidor de dragões que sacrificou tudo para se aliar aos  dragões.',
    atr1: 90,
    atr2: 90,
    atr3: 30,
    img: nameLessKingImage,
    rari: muitoRaro,
    superTrun: false,
    indeletavel: true,
  },
];

export default cards;
