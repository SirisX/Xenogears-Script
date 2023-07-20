import { Chapter } from "./Types";
import headerText from "./text/intro/0_HEADER.txt";
import contentsText from "./text/intro/01_CONTENTS.txt";
import quoteText from "./text/intro/02_OPENING_QUOTE.txt";
import openingMovieText from "./text/intro/03_Opening_Movie.txt";
import prologueText from "./text/intro/04_Prologue.txt";
import contentsHeader from "./text/intro/CONTENTS_HEADER.txt";

import chap1Text from "./text/chapters/01_Lahan_Village.txt";
import chap2Text from "./text/chapters/02_Mountain_Path.txt";
import chap3Text from "./text/chapters/03_House_On_a_Hill.txt";
import chap4Text from "./text/chapters/04_Fallen_Shadows.txt";
import chap5Text from "./text/chapters/05_Attack_on_Lahan.txt";
import chap6Text from "./text/chapters/06_Into_the_Woods.txt";
import chap7Text from "./text/chapters/07_Girl_in_Forest.txt";
import chap8Text from "./text/chapters/08_Broken_Silence.txt";
import chap9Text from "./text/chapters/09_Path_to_Aveh.txt";
import chap10Text from "./text/chapters/10_Dazil.txt";
import chap11Text from "./text/chapters/11_Desert_Attack.txt";
import chap12Text from "./text/chapters/12_Stalactite_Cave.txt";
import chap13Text from "./text/chapters/13_Pirates_Lair.txt";
import chap14Text from "./text/chapters/14_Operation_Aveh.txt";
import chap15Text from "./text/chapters/15_The_Tournament.txt";
import chap16Text from "./text/chapters/16_Margies_Rescue.txt";
import chap17Text from "./text/chapters/17_Road_to_Nisan.txt";
import chap18Text from "./text/chapters/18_City_of_Peace.txt";
import chap19Text from "./text/chapters/19_Recapture_Aveh.txt";
import chap20Text from "./text/chapters/20_Desert_Despair.txt";

import jpHeaderText from "./text/intro/0_JP_HEADER.txt";
import jpContentsText from "./text/intro/01_JP_CONTENTS.txt";
import jpQuoteText from "./text/intro/02_JP_OPENING_QUOTE.txt";
import jpMovieText from "./text/intro/03_JP_Opening_Movie.txt";
import jpPrologueText from "./text/intro/04_JP_Prologue.txt";

import jpChap1Text from "./text/chapters/01_JP_Lahan_Village.txt";
import jpChap2Text from "./text/chapters/02_JP_Mountain_Path.txt";
import jpChap3Text from "./text/chapters/03_JP_House_on_a_Hill.txt";
import jpChap4Text from "./text/chapters/04_JP_Fallen_Shadows.txt";
import jpChap5Text from "./text/chapters/05_JP_Attack_on_Lahan.txt";
import jpChap6Text from "./text/chapters/06_JP_Into_the_Woods.txt";

import SWAP_ME_OUT from "./text/chapters/06_JP_Into_the_Woods.txt";

export const SIDEBAR_WIDTH = "0";
// export const SIDEBAR_WIDTH = '340px'

export const DefaultChapters: Chapter[] = [
  {
    name: "Title",
    number: -4,
    text: headerText,
    japaneseText: jpHeaderText,
    japaneseName: "Title",
  },
  {
    name: "ContentsHeader",
    number: -3,
    text: contentsHeader,
    japaneseText: contentsHeader,
    hideInSidebar: true,
  },
  {
    name: "Contents",
    number: -3,
    text: contentsText,
    japaneseText: jpContentsText,
    japaneseName: "Contents"
  },
  {
    name: "Quote",
    number: -2,
    text: quoteText,
    japaneseText: jpQuoteText,
    hideInSidebar: true,
  },
  {
    name: "Opening Movie",
    number: -1,
    text: openingMovieText,
    japaneseText: jpMovieText,
    japaneseName: "オープニング",
    defaultCollapsed: true,
  },
  {
    name: "Prologue",
    number: 0,
    text: prologueText,
    japaneseText: jpPrologueText,
    japaneseName: "プロローグ",
  },
  {
    name: "Lahan Village",
    number: 1,
    text: chap1Text,
    japaneseText: jpChap1Text,
    japaneseName: "の村ラハン",
  },
  {
    name: "Mountain Path",
    number: 2,
    text: chap2Text,
    japaneseText: jpChap2Text,
    japaneseName: "山道",
  },
  {
    name: "House On a Hill",
    number: 3,
    text: chap3Text,
    japaneseText: jpChap3Text,
    japaneseName: "山頂の家",
  },
  {
    name: "Fallen Shadows",
    number: 4,
    text: chap4Text,
    japaneseText: jpChap4Text,
    japaneseName: "夜道で見た！",
  },
  {
    name: "Attack on Lahan",
    number: 5,
    text: chap5Text,
    japaneseText: jpChap5Text,
    japaneseName: "ラハンへの攻撃",
  },
  {
    name: "Into the Woods",
    number: 6,
    text: chap6Text,
    japaneseText: jpChap6Text,
    japaneseName: "樹海に",
  },
  {
    name: "Girl in Forest",
    number: 7,
    text: chap7Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "緑の森の少女",
  },
  {
    name: "Broken Silence",
    number: 8,
    text: chap8Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "静寂をやぶる",
  },
  {
    name: "Path to Aveh",
    number: 9,
    text: chap9Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "王国アヴェ領土へ",
  },
  {
    name: "Dazil",
    number: 10,
    text: chap10Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "砂漠の街ダジル",
  },
  {
    name: "Desert Attack",
    number: 11,
    text: chap11Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "砂漠での攻撃",
  },
  {
    name: "Stalactite Cave",
    number: 12,
    text: chap12Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "大鍾乳洞",
  },
  {
    name: "Pirate's Lair",
    number: 13,
    text: chap13Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "海賊アジト",
  },
  {
    name: "Operation Aveh",
    number: 14,
    text: chap14Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "潜入、王都アヴェ！",
  },
  {
    name: "The Tournament",
    number: 15,
    text: chap15Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "トーナメント",
  },
  {
    name: "Margie's Rescue",
    number: 16,
    text: chap16Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "マルー救出",
  },
  {
    name: "Road to Nisan",
    number: 17,
    text: chap17Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "ニサンへの道",
  },
  {
    name: "City of Peace",
    number: 18,
    text: chap18Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "平和の町",
  },
  {
    name: "Recapture Aveh",
    number: 19,
    text: chap19Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "アヴェ奪回作戦！",
  },
  {
    name: "Desert Despair",
    number: 20,
    text: chap20Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "緋の鬼神",
  },
  {
    name: "Desert Despair (SIDE CONTENT)",
    number: 20,
    text: chap20Text,
    hideInSidebar: true,
    defaultCollapsed: true,
    japaneseText: SWAP_ME_OUT,
    // japaneseName: "緋の鬼神",
  },
  {
    name: "Desert Despair Part 2",
    number: 20,
    hideInSidebar: true,
    text: chap20Text,
    japaneseText: SWAP_ME_OUT,
    // japaneseName: "緋の鬼神",
  },
];
