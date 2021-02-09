import { Button, TextField } from "@material-ui/core";
import React, { useRef, useState } from "react";
import "./EventDetail.css";
import Tag from "../tags/Tag";
import { useSelector, useDispatch } from "react-redux";
import {
	updateTempRoomDetails,
	addTagToTempRoomDetail,
	addTitleToTempRoomDetail,
	addDescToTempRoomDetail,
	addStartDateToTempRoomDetail,
	addEndDateToTempRoomDetail,
	addNOPToTempRoomDetail,
	addImageToTempRoomDetail,
	removeTagFromTempRoomDetail,
} from "../../actions";
import { useParams } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";

function EventDetail({ readOnly }) {
	const titleRef = useRef(null);
	const descRef = useRef(null);
	const tagRef = useRef(null);
	const numOfParticipantsRef = useRef(null);
	const startDateRef = useRef(null);
	const endDateRef = useRef(null);
	const fileSelector = useRef(null);

	const params = useParams();
	const dispatch = useDispatch();

	const eventData = useSelector((state) =>
		readOnly ? state.roomListReducer[params.index] : state.tempRoomDetailReducer
	);

	const handleTitleChange = (e) => {
		dispatch(addTitleToTempRoomDetail(e.target.value));
	};

	const handleDescChange = (e) => {
		dispatch(addDescToTempRoomDetail(e.target.value));
	};

	const handleStartDateChange = (e) => {
		// const startDateSelected = new Date(startDateRef.current.value);
		// const now = new Date();
		// const diffTime = startDateSelected - now;
		// if (diffTime > 0) {
		// 	dispatch(addStartDateToTempRoomDetail(e.target.value));
		// }
		dispatch(addStartDateToTempRoomDetail(e.target.value));
	};

	const handleEndDateChange = (e) => {
		// const endDateSelected = new Date(endDateRef.current.value);
		// const startDateSelected = new Date(startDateRef.current.value);
		// // const now = new Date();
		// // const diffFromNow = startDateSelected - now;
		// // const diffFromStart = endDateSelected - start;

		dispatch(addEndDateToTempRoomDetail(e.target.value));
	};

	const handleNOPChange = (e) => {
		dispatch(addNOPToTempRoomDetail(e.target.value));
	};

	const handleTagDelete = (tag, index) => {
		dispatch(removeTagFromTempRoomDetail(tag, index));
	};

	const keyPress = (e) => {
		const valueToAdd = tagRef.current.value;
		if (valueToAdd.length > 0 && e.keyCode == 13) {
			var temp = eventData.tags.filter((item) => item.name === valueToAdd);
			if (temp.length === 0) {
				dispatch(addTagToTempRoomDetail(valueToAdd));
				tagRef.current.value = "";
			} else {
				tagRef.current.helperText = "Tag already added";
			}
		}
	};

	const handleFileSelector = (e) => {
		if (e.target.files && e.target.files[0]) {
			dispatch(addImageToTempRoomDetail(URL.createObjectURL(e.target.files[0])));
		}
	};

	return (
		<div className='EventDetail'>
			{
				<>
					<input
						ref={fileSelector}
						accept='image/*'
						style={{ display: "none" }}
						type='file'
						onChange={(e) => handleFileSelector(e)}
					/>
					<Button
						className='event-image'
						onClick={() => {
							if (!readOnly) {
								fileSelector.current.click();
							}
						}}
					>
						{eventData && eventData.img && (
							<img className='event-image2' src={eventData && eventData.img} />
						)}
						{!eventData || (!eventData.img && <AddIcon />)}
					</Button>
				</>
			}

			<div className='event-info'>
				<TextField
					className='event-input'
					defaultValue={eventData && eventData.title}
					label='Title'
					variant='outlined'
					inputRef={titleRef}
					onChange={handleTitleChange}
					InputLabelProps={{
						shrink: true,
					}}
					InputProps={{
						readOnly: readOnly,
					}}
				/>

				<TextField
					className='event-input'
					multiline
					InputLabelProps={{
						shrink: true,
					}}
					onChange={handleDescChange}
					inputRef={descRef}
					InputProps={{
						readOnly: readOnly,
					}}
					label='Description'
					defaultValue={eventData && eventData.desc}
					variant='outlined'
				/>

				{!readOnly && (
					<TextField
						className='event-tag-header'
						label='Tags'
						variant='outlined'
						inputRef={tagRef}
						InputLabelProps={{ shrink: true }}
						onKeyDown={keyPress}
						InputProps={{ readOnly: readOnly }}
					/>
				)}

				<div className='event-tags'>
					{eventData &&
						eventData.tags &&
						eventData.tags.map((item, index) => {
							return (
								<Tag
									deleteTag={handleTagDelete}
									index={index}
									tag={item["name"]}
									readOnly={readOnly}
								/>
							);
						})}
				</div>

				<div className='event-dates'>
					<TextField
						className='event-datetime'
						label='Start Date'
						type='datetime-local'
						onChange={handleStartDateChange}
						defaultValue={eventData && eventData.startDate}
						inputRef={startDateRef}
						InputLabelProps={{
							shrink: true,
						}}
						InputProps={{
							readOnly: readOnly,
						}}
					/>

					<h4 className='to'>to</h4>

					<TextField
						className='event-datetime'
						label='End Date'
						type='datetime-local'
						onChange={handleEndDateChange}
						inputRef={endDateRef}
						defaultValue={eventData && eventData.endDate}
						InputLabelProps={{
							shrink: true,
						}}
						InputProps={{
							readOnly: readOnly,
						}}
					/>
				</div>

				<div>
					<TextField
						className='event-n-part'
						label='Number of participants'
						defaultValue={eventData && eventData.numOfParticipants}
						onChange={handleNOPChange}
						inputRef={numOfParticipantsRef}
						type='number'
						InputLabelProps={{
							shrink: true,
						}}
						InputProps={{
							readOnly: readOnly,
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default EventDetail;
