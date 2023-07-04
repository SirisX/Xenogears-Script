import { Chapter } from './Types'
import text0000 from './text/0000_CONTENTS.txt'
import text000 from './text/000_Opening_Movie.txt'
import text00 from './text/00_Prologue.txt'
import text01 from './text/01_Lahan_Village.txt'
import text02 from './text/02_Mountain_Path.txt'
import text03 from './text/03_House_On_a_Hill.txt'

export const DefaultChapters: Chapter[] = [
    {
        name: "Contents",
        number: -2,
        text: text0000,
    },
    {
        name: "Opening Movie",
        number: -1,
        text: text000,
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
    }
    {
        name: "Mountain Path",
        number: 2,
        text: text02,
    }
{
        name: "House On a Hill",
        number: 3,
        text: text03,
    }
]
