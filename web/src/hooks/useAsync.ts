import { useState } from "react";

export type AsyncResult<T> = {
	executeCall: (params?: any) => void;
	isLoading: boolean;
	error?: string;
	data?: T

}

const useAsync = <T>(asyncFunction: any): AsyncResult<T> => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState("")
	const [data, setData] = useState<any>()

	const executeCall = async (params?: {}) => {
		try {
			setIsLoading(true)
			const result = params ? await asyncFunction(params) : await asyncFunction()
			setIsLoading(false)
			setData(result)

		} catch (error) {
			console.log("", error);
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

export default useAsync