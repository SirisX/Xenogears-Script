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
import chap21Text from "./text/chapters/21_Kislev_Capital.txt";
import chap22Text from "./text/chapters/22_Brave_Battlers.txt";
import chap23Text from "./text/chapters/23_Sewer_Horror.txt";
import chap24Text from "./text/chapters/24_Battling_Champ.txt";
import chap25Text from "./text/chapters/25_Gear_Dock_Raid.txt";
import chap26Text from "./text/chapters/26_Night_Purge.txt";
import chap27Text from "./text/chapters/27_Secret_Weapon.txt";
import chap28Text from "./text/chapters/28_Escape_Ignas.txt";
import chap29Text from "./text/chapters/29_Adrift_at_Sea.txt";
import chap30Text from "./text/chapters/30_Men_of_the_Sea.txt";
import chap31Text from "./text/chapters/31_Friends_Again.txt";
import chap32Text from "./text/chapters/32_Betrayal.txt";
import chap33Text from "./text/chapters/33_Ramsus_Attack.txt";
import chap34Text from "./text/chapters/34_A_Young_Priest.txt";
import chap35Text from "./text/chapters/35_The_Orphanage.txt";
import chap36Text from "./text/chapters/36_Reapers_Ship.txt";
import chap37Text from "./text/chapters/37_Burning_Souls.txt";
import chap38Text from "./text/chapters/38_Ocean_Floor.txt";
import chap39Text from "./text/chapters/39_Deep_Sea_Girl.txt";
import chap40Text from "./text/chapters/40_Babel_Tower.txt";
import chap41Text from "./text/chapters/41_Sky_City_Shevat.txt";
import chap42Text from "./text/chapters/42_Intruder_Alert.txt";
import chap43Text from "./text/chapters/43_Raid_of_Shevat.txt";
import chap44Text from "./text/chapters/44_Protect_Nisan.txt";
import chap45Text from "./text/chapters/45_Gate1_Margie.txt";
import chap46Text from "./text/chapters/46_Gate2_Babel.txt";
import chap47Text from "./text/chapters/47_Gate3_The_Deep.txt";
import chap48Text from "./text/chapters/48_Into_Solaris.txt";
import chap49Text from "./text/chapters/49_Escape_Solaris.txt";
import chap50Text from "./text/chapters/50_Lone_Wolf.txt";
import chap51Text from "./text/chapters/51_Krelians_Lab.txt";
import chap52Text from "./text/chapters/52_Tears_for_Fears.txt";
import chap53Text from "./text/chapters/53_Fall_of_Solaris.txt";
import chap54Text from "./text/chapters/54_Shevats_Move.txt";
import chap55Text from "./text/chapters/55_Broken_Ties.txt";
import chap56Text from "./text/chapters/56_Shot_Down.txt";
import chap57Text from "./text/chapters/57_Break_the_Seal.txt";
import chap58Text from "./text/chapters/58_Soul_Vessel.txt";
import chap59Text from "./text/chapters/59_The_Stars_Know.txt";
import chap60Text from "./text/chapters/60_Above_Mahanon.txt";
import chap61Text from "./text/chapters/61_Paradise.txt";
import chap62Text from "./text/chapters/62_Promised_Land.txt";
import chap63Text from "./text/chapters/63_Waiting_Death.txt";
import chap64Text from "./text/chapters/64_Merkava_Calls.txt";
import chap65Text from "./text/chapters/65_Dreams.txt";
import chap66Text from "./text/chapters/66_Fallen_Star.txt";
import chap67Text from "./text/chapters/67_Xenogears_Wakes.txt";
import chap68Text from "./text/chapters/68_First_and_Last.txt";

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
    name: "Xenogears",
    number: -4,
    text: headerText,
    japaneseText: jpHeaderText,
    japaneseName: "ゼノギアス",
    hideTitle: true,
    hideInMainContents: true
  },
  {
    name: "Contents",
    japaneseName: "Contents",
    number: -3,
    text: contentsHeader,
    japaneseText: contentsHeader,
    hideTitle: true,
    hideInMainContents: true
  },
  {
    name: "Contents",
    number: -3,
    text: contentsText,
    japaneseText: jpContentsText,
    japaneseName: "Contents",
    hideTitle: true,
    hideInSidebar: true,
    hideInMainContents: true
  },
  {
    name: "Quote",
    number: -2,
    text: quoteText,
    japaneseText: jpQuoteText,
    hideInSidebar: true,
    hideInMainContents: true,
    hideTitle: true,
  },
  {
    name: "———DISC 1———",
    number: -2,
    text: "———DISC 1———",
    japaneseText: "test",
    japaneseName: "———DISC 1———",
    isDiscText: true,
    hideTitle: true,
  },
  {
    name: "Opening Movie",
    number: -1,
    text: openingMovieText,
    japaneseText: jpMovieText,
    japaneseName: "オープニング",
    defaultCollapsed: true,
    hideTitle: true,
  },
  {
    name: "Prologue",
    number: 0,
    text: prologueText,
    japaneseText: jpPrologueText,
    japaneseName: "プロローグ",
    hideTitle: true,
  },
  {
    name: "Lahan Village",
    number: 1,
    text: chap1Text,
    japaneseText: jpChap1Text,
    japaneseName: "始まり、ラハン",
    // isCollapsable: true
    /* hideInSidebar: true, */
    /* defaultCollapsed: true */
    /* hideInMainContents: true, */
  },
  {
    name: "Mountain Path",
    number: 2,
    text: chap2Text,
    japaneseText: jpChap2Text,
    japaneseName: "山道をゆけば",
  },
  {
    name: "House On a Hill",
    number: 3,
    text: chap3Text,
    japaneseText: jpChap3Text,
    japaneseName: "山頂の家にて",
  },
  {
    name: "Fallen Shadows",
    number: 4,
    text: chap4Text,
    japaneseText: jpChap4Text,
    japaneseName: "闇にふるもの",
  },
  {
    name: "Attack on Lahan",
    number: 5,
    text: chap5Text,
    japaneseText: jpChap5Text,
    japaneseName: "黒き災い",
  },
  {
    name: "Into the Woods",
    number: 6,
    text: chap6Text,
    japaneseText: jpChap6Text,
    japaneseName: "樹海へ……",
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
    japaneseName: "緑の静寂",
  },
  {
    name: "Path to Aveh",
    number: 9,
    text: chap9Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "アヴェ領土へ",
  },
  {
    name: "Dazil",
    number: 10,
    text: chap10Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "砂漠の街",
  },
  {
    name: "Desert Attack",
    number: 11,
    text: chap11Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "熱砂のシャチ",
  },
  {
    name: "Stalactite Cave",
    number: 12,
    text: chap12Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "地底の隠者",
  },
  {
    name: "Pirate's Lair",
    number: 13,
    text: chap13Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "戦う理由、死ぬ理由",
  },
  {
    name: "Operation Aveh",
    number: 14,
    text: chap14Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "偽りの王",
  },
  {
    name: "The Tournament",
    number: 15,
    text: chap15Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "嵐を呼ぶ大武会",
  },
  {
    name: "Margie's Rescue",
    number: 16,
    text: chap16Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "ファティマ城脱出",
  },
  {
    name: "Road to Nisan",
    number: 17,
    text: chap17Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "一路ニサンへ",
  },
  {
    name: "City of Peace",
    number: 18,
    text: chap18Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "ニザンの聖母",
  },
  {
    name: "Recapture Aveh",
    number: 19,
    text: chap19Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "決死の反撃",
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
    hideInMainContents: true,
    // defaultCollapsed: true,
    // isCollapsable: true,
    hideTitle: true,
    japaneseText: SWAP_ME_OUT,
    // japaneseName: "緋の鬼神",
  },
  {
    name: "Desert Despair Part 2",
    number: 20,
    text: chap20Text,
    hideInSidebar: true,
    hideInMainContents: true,
    hideTitle: true,
    japaneseText: SWAP_ME_OUT,
    // japaneseName: "緋の鬼神",
  },
  {
    name: "Kislev Capital",
    number: 21,
    text: chap21Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "囚われの鳥",
  },
  {
    name: "Brave Battlers",
    number: 22,
    text: chap22Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "バトリングの勇者",
  },
  {
    name: "Sewer Horror",
    number: 23,
    text: chap23Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "闇にはうもの",
  },
  {
    name: "Battling Champ",
    number: 24,
    text: chap24Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "無敵のバトラーキング",
  },
  {
    name: "Gear Dock Raid",
    number: 25,
    text: chap25Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "地に落ちた英雄",
  },
  {
    name: "Night Purge",
    number: 26,
    text: chap26Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "粛清!",
  },
  {
    name: "Secret Weapon",
    number: 27,
    text: chap27Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "秘密兵器を奪え!",
  },
  {
    name: "Escape Ignas",
    number: 28,
    text: chap28Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "めざせ新天地",
  },
  {
    name: "Adrift at Sea",
    number: 29,
    text: chap29Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "漂流 星空の海",
  },
  {
    name: "Men of the Sea",
    number: 30,
    text: chap30Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "海の男の心意気",
  },
  {
    name: "Friends Again",
    number: 31,
    text: chap31Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "昨日の友は今日の……",
  },
  {
    name: "Betrayal",
    number: 32,
    text: chap32Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "裏切りの代償",
  },
  {
    name: "Ramsus' Attack",
    number: 33,
    text: chap33Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "ラムサス急襲!",
  },
  {
    name: "A Young Priest",
    number: 34,
    text: chap34Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "少年司祭",
  },
  {
    name: "The Orphanage",
    number: 35,
    text: chap35Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "海発のなかの強児たち",
  },
  {
    name: "Reaper's Ship",
    number: 36,
    text: chap36Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "死霊のわらう船",
  },
  {
    name: "Burning Souls",
    number: 37,
    text: chap37Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "信仰 炎の海",
  },
  {
    name: "Ocean Floor",
    number: 38,
    text: chap38Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "海底遺跡へ",
  },
  {
    name: "Deep Sea Girl",
    number: 39,
    text: chap39Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "魂の在処",
  },
  {
    name: "Babel Tower",
    number: 40,
    text: chap40Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "天にとどく道",
  },
  {
    name: "Sky City Shevat",
    number: 41,
    text: chap41Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "風の歌を聴け",
  },
  {
    name: "Intruder Alert!",
    number: 42,
    text: chap42Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "侵入者!",
  },
  {
    name: "Raid of Shevat!",
    number: 43,
    text: chap43Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "父の遺産",
  },
  {
    name: "Protect Nisan!",
    number: 44,
    text: chap44Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "ニサンの微笑み",
  },
  {
    name: "Gate1 -Margie",
    number: 45,
    text: chap45Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "マルーの祈り",
  },
  {
    name: "Gate2 -Babel",
    number: 46,
    text: chap46Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "バベルの輝きは",
  },
  {
    name: "Gate3 -The Deep",
    number: 47,
    text: chap47Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "暗き海の底",
  },
  {
    name: "Into Solaris",
    number: 48,
    text: chap48Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "天上の楽園",
  },
  {
    name: "Escape Solaris",
    number: 49,
    text: chap49Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "なつかしの我が家",
  },
  {
    name: "Lone Wolf",
    number: 50,
    text: chap50Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "孤独な狼",
  },
  {
    name: "Krelian's Lab",
    number: 51,
    text: chap51Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "疑惑",
  },
  {
    name: "Tears for Fears",
    number: 52,
    text: chap52Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "脱出!",
  },
  {
    name: "Fall of Solaris",
    number: 53,
    text: chap53Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "憎しみの炎",
  },
  {
    name: "Shevat's Move",
    number: 54,
    text: chap54Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "忌むべき者よ",
  },
  {
    name: "Broken Ties",
    number: 55,
    text: chap55Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "明日なき逃走",
  },
  {
    name: "———DISC 2———",
    number: 56,
    text: "———DISC 2———",
    japaneseText: "test",
    japaneseName: "———DISC 2———",
    isDiscText: true,
  },
  {
    name: "Shot Down!",
    number: 56,
    text: chap56Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "大樹海に消えて",
  },
  {
    name: "Break the Seal",
    number: 57,
    text: chap57Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "刻印を打ち破れ",
  },
  {
    name: "Soul Vessel",
    number: 58,
    text: chap58Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "星よ知る",
  },
  {
    name: "The Stars Know",
    number: 59,
    text: chap59Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "我らが魂の器",
  },
  {
    name: "Above Mahanon",
    number: 60,
    text: chap60Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "天帝暗殺",
  },
  {
    name: "Paradise",
    number: 61,
    text: chap61Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "神の楽園に帰る",
  },
  {
    name: "Promised Land",
    number: 62,
    text: chap62Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "失われし約束の地",
  },
  {
    name: "Waiting Death",
    number: 63,
    text: chap63Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "死の要塞で待つ",
  },
  {
    name: "Merkava Calls",
    number: 64,
    text: chap64Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "哀しみのメルカバー",
  },
  {
    name: "Dreams...",
    number: 65,
    text: chap65Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "夢の形見は……",
  },
  {
    name: "Fallen Star",
    number: 66,
    text: chap66Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "墜ちた星",
  },
  {
    name: "Xenogears Wakes",
    number: 67,
    text: chap67Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "覚醒 ゼノギアス!!",
  },
  {
    name: "First and Last",
    number: 68,
    text: chap68Text,
    japaneseText: SWAP_ME_OUT,
    japaneseName: "最初で最後",
  }
];
