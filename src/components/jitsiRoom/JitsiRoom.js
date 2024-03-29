import PropTypes from "prop-types";
import React, { useEffect } from "react";
import useJitsi from "./useJitsi";

const JitsiRoom = ({
	loadingComponent,
	errorComponent,
	containerStyles,
	jitsiContainerStyles,
	onError,
	onJitsi,
	...options
}) => {
	console.log(options);

	const { loading, error, jitsi } = useJitsi({
		parentNode: "jitsi-container",
		...options,
	});

	useEffect(() => {
		if (jitsi && onJitsi) onJitsi(jitsi);
	}, [jitsi]);

	useEffect(() => {
		if (error && onError) onError(error);
	}, [error]);

	return (
		<div style={{ ...{ width: "100%", height: "100%" }, ...containerStyles }}>
			{error && (errorComponent || <p>{error}</p>)}
			{!error && loading && (loadingComponent || <p>Loading ...</p>)}
			<div
				id='jitsi-container'
				style={{
					...{
						display: loading ? "none" : "block",
						width: "100%",
						height: "100%",
					},
					...jitsiContainerStyles,
				}}
			/>
		</div>
	);
};

JitsiRoom.propTypes = {
	jwt: PropTypes.string,
	domain: PropTypes.string,
	subject: PropTypes.string,
	password: PropTypes.string,
	roomName: PropTypes.string.isRequired,
	displayName: PropTypes.string,
	onMeetingEnd: PropTypes.func,
	loadingComponent: PropTypes.object,
	errorComponent: PropTypes.object,
	containerStyles: PropTypes.object,
	jitsiContainerStyles: PropTypes.object,
	configOverwrite: PropTypes.object,
	interfaceConfigOverwrite: PropTypes.object,
	onError: PropTypes.func,
	onJitsi: PropTypes.func,
};

export { JitsiRoom, useJitsi };
