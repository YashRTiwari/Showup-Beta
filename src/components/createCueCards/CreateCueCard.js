import { React, useRef } from "react";
import "./CreateCueCard.css";
import { TextField, Button } from "@material-ui/core";
import CueCard from "../cueCards/CueCards.js";
import { useSelector, useDispatch } from "react-redux";
import {
	addCueCardsToRoomDetail,
	removeCueCardsFromRoomDetail,
} from "../../actions/createRoomActions.js";

export default function CreateCueCard({ readOnly }) {
	const titleRef = useRef(null);
	const descRef = useRef(null);

	const cues = useSelector((state) =>
		readOnly ? state.roomDetailReducer.cueCards : state.tempRoomDetailReducer.cueCards
	);
	const dispatch = useDispatch();

	const addCueCard = (e) => {
		e.preventDefault();
		dispatch(addCueCardsToRoomDetail(titleRef.current.value, descRef.current.value));
		titleRef.current.value = "";
		descRef.current.value = "";
	};

	const handleDelete = (itemToRemove) => {
		dispatch(removeCueCardsFromRoomDetail(itemToRemove));
	};

	return (
		<div className='CreateCueCard'>
			<h3>Cue Cards</h3>
			<form onSubmit={addCueCard} className='add-cue-cards'>
				<TextField label='Title' variant='outlined' inputRef={titleRef} />

				<TextField
					className='add-cue-input'
					label='Description'
					variant='outlined'
					inputRef={descRef}
				/>

				<Button type='submit' className='add-cue-btn' variant='contained' color='primary'>
					Add
				</Button>
			</form>

			<div className='add-cue-list'>
				{cues &&
					cues.map((item, index) => {
						return <CueCard key={index} data={item} handleDelete={handleDelete} />;
					})}
			</div>
		</div>
	);
}
