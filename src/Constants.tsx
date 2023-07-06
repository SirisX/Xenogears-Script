import { Chapter } from './Types'
import text0000 from './text/0000_CONTENTS.txt'
import text000 from './text/000_Opening_Movie.txt'
import text00 from './text/00_Prologue.txt'
import text01 from './text/01_Lahan_Village.txt'
import text02 from './text/02_Mountain_Path.txt'
import text03 from './text/03_House_On_a_Hill.txt'
import text04 from './text/04_Fallen_Shadows.txt'
import text05 from './text/05_Attack_on_Lahan.txt'
import text06 from './text/06_Into_the_Woods.txt'
import text07 from './text/07_Girl_in_Forest.txt'
import text08 from './text/08_Broken_Silence.txt'
import text09 from './text/09_Path_to_Aveh.txt'
import text10 from './text/10_Dazil.txt'
import text11 from './text/11_Desert_Attack.txt'
import text12 from './text/12_Stalactite_Cave.txt'
import text13 from './text/13_Pirates_Lair.txt'



import japaneseText0000 from './text/0000_JP_CONTENTS.txt'
import japaneseText000 from './text/000_JP_Opening_Movie.txt'

export const DefaultChapters: Chapter[] = [
    {
        name: "Contents",
        number: -2,
        text: text0000,
        japaneseText: japaneseText0000
    },
    {
        name: "Opening Movie",
        number: -1,
        text: text000,
        japaneseText: japaneseText000
    },
    {
        name: "Prologue",
        number: 0,
        text: text00,
    },
    {
        name: "Lahan Village",
        number: 1,
        text: text01,
    },
    {
        name: "Mountain Path",
        number: 2,
        text: text02,
    },
    {
        name: "House On a Hill",
        number: 3,
        text: text03,
    },
    {
        name: "Fallen Shadows",
        number: 4,
        text: text04,
    },
    {
        name: "Attack on Lahan",
        number: 5,
        text: text05,
    },
    {
        name: "Into the Woods",
        number: 6,
        text: text06,
    },
    {
        name: "Girl in Forest",
        number: 7,
        text: text07,
    },
    {
        name: "Broken Silence",
        number: 8,
        text: text08,
    },
    {
        name: "Path to Aveh",
        number: 9,
        text: text09,
    },
    {
        name: "Dazil",
        number: 10,
        text: text10,
    },
    {
        name: "Desert Attack",
        number: 11,
        text: text11,
    },
    {
        name: "Stalactite Cave",
        number: 12,
        text: text12,
    },
    {
        name: "Pirate's Lair",
        number: 13,
        text: text13,
    }
]
