import { Button, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import "./Error.css";
import CloseIcon from "@material-ui/icons/Close";

export default function Error({ title, message }) {
	const [isVisible, setIsVisible] = useState("Error");

	const hideError = (e) => {
		setIsVisible("error-hide");
	};

	return (
		<div className={isVisible}>
			<div className='error-header'>
				<h3 className='wrap-text'>{title}</h3>
				<IconButton onClick={hideError}>
					<CloseIcon fontSize='small' />
				</IconButton>
			</div>

			<p className='wrap-text'>{message}</p>
		</div>
	);
}
