import songs from "../songs.json"

/**
 * TECHNIKA TUNE & Q -> TECHNIKA T&Q
 * Emotinal Sense -> EMOTIONAL S.
 */
const Pack = [
	"RESPECT",
	"PORTABLE 1",
	"PORTABLE 2",
	"PORTABLE 3",
	"TRILOGY",
	"CLAZZIQUAI",
	"BLACK SQUARE",
	"TECHNIKA 1",
	"TECHNIKA 2",
	"TECHNIKA 3",
	"TECHNIKA TUNE & Q",
	"Emotional Sense",
	"V EXTENSION",
	"V EXTENSION 2",
	"V EXTENSION 3",
	"V EXTENSION 4",
	"V EXTENSION 5",
	"COLLABORATION",
	"CLEAR PASS"
]

class SongData {
	title: string
	no: number
	composer: string
	pack: string
	patterns: {}

	constructor(title: string, no:number, composer: string, pack: string, patterns: {}) {
		this.title = title
		this.no = no
		this.composer = composer
		this.pack = pack
		this.patterns = patterns
	}
}

const song: SongData[] = [];

// eslint-disable-next-line array-callback-return
songs.map(s => {
	song.push(new SongData(s.name, s.title, s.composer, s.dlc, s.patterns))
})

export {
	song, Pack
};