/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import { song } from "../interface/song.interface"
import '../css/songs.css';
let a: any[] = []
song.map(songs => {
	a.push(
		<>
			<div className="song">
				<img className="jacket" src={require(`../assets/images/jackets/${songs.no}.jpg`)} title={`${songs.title}`} key={`${songs.no}`}></img>
				<a className="songName" href={`songs/${songs.no}`}>{songs.title}</a>
			</div>
		</>
	)
})
function Songs() {
	return (
		<div className="songs">
			{a}
		</div>
	)
}
export default Songs;