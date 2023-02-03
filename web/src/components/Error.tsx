import React, { ComponentType } from 'react'

type props = {
	msg?: string;
}

const Error = ({ msg }: props) => {
	return (
		<div>Error: {msg ?? "NO_ERR"}</div>
	)
}

export default Error