/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { useParams } from 'react-router-dom';


function Archive() {
	const [data, setData] = useState(null);
	const params = useParams()
	if (params.user) {
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
				<form action="/">
					<input type="text" placeholder="닉네임"></input>
					<select name="버튼">
						<option value='4B'>4B</option>
						<option value='5B'>5B</option>
						<option value='6B'>6B</option>
						<option value='8B'>8B</option>
					</select>
					<select name="난이도" defaultValue='SC'>
						<option value='NM'>NM</option>
						<option value='HD'>HD</option>
						<option value='MX'>MX</option>
						<option value='SC'>SC</option>
					</select>
				</form>
			</>
		)
	}
}

export default Archive