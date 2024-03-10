/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { useParams, redirect } from 'react-router-dom';

function Search(event) {
	event.preventDefault();
	const data = `${event.target[0].value}/board/${event.target[1].value}/${event.target[2].value}`
	let search = encodeURI(`archive/${data}`)
	document.head.innerHTML = `<meta http-equiv="refresh" content="0;URL='${search}'" />`
}

function Archive() {
	const [data, setData] = useState(null);
	const params = useParams()
	if (params.button) {
		axios.get(
			`https://v-archive.net/api/archive/${params.user}/board/${params.button}/${params.difficulty}`,
			{
				responseType: 'json'
			}
		).then(response => {
			setData(response.data)
		})
	
		return (
			<div>
				{data && (
					<span>
						{JSON.stringify(data.floors)}
					</span>
				)}
			</div>
		)
	}
	else {
		return (
			<>
				<form onSubmit={Search}>
					<input type="text" placeholder="닉네임" name="user"></input>
					<select name="button">
						<option value='4B'>4B</option>
						<option value='5B'>5B</option>
						<option value='6B'>6B</option>
						<option value='8B'>8B</option>
					</select>
					<select name="difficulty" defaultValue='SC'>
						<option value='NM'>NM</option>
						<option value='HD'>HD</option>
						<option value='MX'>MX</option>
						<option value='SC'>SC</option>
					</select>
					<button type='submit'>검색</button>
				</form>
			</>
		)
	}
}

export default Archive