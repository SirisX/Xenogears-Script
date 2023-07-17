import { Chapter } from './Types'
import headerText from './text/intro/0_HEADER.txt'
import contentsText from './text/intro/01_CONTENTS.txt'
import quoteText from './text/intro/02_OPENING_QUOTE.txt'
import openingMovieText from './text/intro/03_Opening_Movie.txt'
import prologueText from './text/intro/04_Prologue.txt'
import contentsHeader from './text/intro/CONTENTS_HEADER.txt'


import chap1Text from './text/chapters/01_Lahan_Village.txt'
import chap2Text from './text/chapters/02_Mountain_Path.txt'
import chap3Text from './text/chapters/03_House_On_a_Hill.txt'
import chap4Text from './text/chapters/04_Fallen_Shadows.txt'
import chap5Text from './text/chapters/05_Attack_on_Lahan.txt'
import chap6Text from './text/chapters/06_Into_the_Woods.txt'
import chap7Text from './text/chapters/07_Girl_in_Forest.txt'
import chap8Text from './text/chapters/08_Broken_Silence.txt'
import chap9Text from './text/chapters/09_Path_to_Aveh.txt'
import chap10Text from './text/chapters/10_Dazil.txt'
import chap11Text from './text/chapters/11_Desert_Attack.txt'
import chap12Text from './text/chapters/12_Stalactite_Cave.txt'
import chap13Text from './text/chapters/13_Pirates_Lair.txt'

import jpHeaderText from './text/intro/0_JP_HEADER.txt'
import jpContentsText from './text/intro/01_JP_CONTENTS.txt'
import jpQuoteText from './text/intro/02_JP_OPENING_QUOTE.txt'
import jpMovieText from './text/intro/03_JP_Opening_Movie.txt'
import jpPrologueText from './text/intro/04_JP_Prologue.txt'


import jpChap1Text from './text/chapters/01_JP_Lahan_Village.txt'
import jpChap2Text from './text/chapters/02_JP_Mountain_Path.txt'
import jpChap3Text from './text/chapters/03_JP_House_on_a_Hill.txt'
import jpChap4Text from './text/chapters/04_JP_Fallen_Shadows.txt'
import jpChap5Text from './text/chapters/05_JP_Attack_on_Lahan.txt'
import jpChap6Text from './text/chapters/06_JP_Into_the_Woods.txt'

export const SIDEBAR_WIDTH = '340px'

export const DefaultChapters: Chapter[] = [
    {
        name: "Title",
        number: -4,
        text: headerText,
        japaneseText: jpHeaderText
    },
    {
        name: "ContentsHeader",
        number: -3,
        text: contentsHeader,
        japaneseText: contentsHeader
    },
    {
        name: "Contents",
        number: -3,
        text: contentsText,
        japaneseText: jpContentsText
    },
    {
        name: "Quote",
        number: -2,
        text: quoteText,
        japaneseText: jpQuoteText
    },
    {
        name: "Opening Movie",
        number: -1,
        text: openingMovieText,
        japaneseText: jpMovieText
    },
    {
        name: "Prologue",
        number: 0,
        text: prologueText,
        japaneseText: jpPrologueText
    },
    {
        name: "Lahan Village",
        number: 1,
        text: chap1Text,
        japaneseText: jpChap1Text
    },
    {
        name: "Mountain Path",
        number: 2,
        text: chap2Text,
        japaneseText: jpChap2Text
    },
    {
        name: "House On a Hill",
        number: 3,
        text: chap3Text,
        japaneseText: jpChap3Text
    },
    {
        name: "Fallen Shadows",
        number: 4,
        text: chap4Text,
        japaneseText: jpChap4Text
    },
    {
        name: "Attack on Lahan",
        number: 5,
        text: chap5Text,
        japaneseText: jpChap5Text
    },
    {
        name: "Into the Woods",
        number: 6,
        text: chap6Text,
        japaneseText: jpChap6Text
    },
    {
        name: "Girl in Forest",
        number: 7,
        text: chap7Text,
    },
    {
        name: "Broken Silence",
        number: 8,
        text: chap8Text,
    },
    {
        name: "Path to Aveh",
        number: 9,
        text: chap9Text,
    },
    {
        name: "Dazil",
        number: 10,
        text: chap10Text,
    },
    {
        name: "Desert Attack",
        number: 11,
        text: chap11Text,
    },
    {
        name: "Stalactite Cave",
        number: 12,
        text: chap12Text,
    },
    {
        name: "Pirate's Lair",
        number: 13,
        text: chap13Text,
    }
]
