import { useEffect, useState } from "react";

export type AsyncResult<T> = {
	executeCall: () => void;
	isLoading: boolean;
	error?: string;
	data?: T

}

export const useAsync = (asyncFunction: any): AsyncResult<any> => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState("")
	const [data, setData] = useState({})

	const executeCall = async () => {
		try {
			setIsLoading(true)
			let result = await asyncFunction()
			setIsLoading(false)
			setData(result)
		} catch (error) {
			setIsLoading(false)
			setError(JSON.stringify(error))
		}
	}


	return {
		executeCall,
		isLoading,
		error,
		data
	}
}