import React,{useEffect,useState} from 'react'

const Test = ()=>{
	const [message,setMessage] = useState<string>("")
	const fetchAPI = async () => {
		const res = await fetch("http://localhost:3000/api")
		const data = await res.json()
		setMessage(data);
	}
	useEffect(()=>{
		fetchAPI();
	})
	return (
		<h1>Message: {message}</h1>
	)
}

export default Test;