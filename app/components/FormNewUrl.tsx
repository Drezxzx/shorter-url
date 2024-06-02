"use client";
import React, { useState } from 'react';
import {IconCopy} from '@tabler/icons-react'
 interface resUrl {
    msg:    string;
    newurl: string;
}
export default function FormNewUrl() {
    const [url, setUrl] = useState("")
    const [result, setResult] = useState("")
    const [error, setError] = useState("")
    const [copy, setCopy] = useState(false)

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (url.length <= 0) {
            setError("Introduzca una url")
            return false
        }
        try {
            setError("")
            const res = await fetch("/api/u", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    url
                })
            }) 
            const response = await res.json() as resUrl
            console.log(response);
            if (res.status !== 200){
                setResult("")
                setError(response.msg)
                throw new Error(response.msg)
            }
            setResult(response.newurl)
            
            
        } catch (error) {
            console.error(error);
        }
        
        
        
    }
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        setError("")
        setUrl(e.target.value);
        
    }
    const handleCoppy = (e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        navigator.clipboard.writeText(result)
        setCopy(!copy)
        setTimeout(() => {
            setCopy(!copy) 
        }, 2000);
    }
    const classname = error.length > 0 ? "border-red-400/90":"border-slate-300/90"
    const classCapy = copy ? "bg-emerald-500 text-white":"text-black"
    return (
        <form className="h-52 w-[50rem] flex justify-center items-center gap-4 p-2 flex-col">
            {error && <p className='text-xs font-semibold'>{error}</p>}
            <input type="text" className={`w-full border transition-all ${classname} rounded-md focus:outline-none  p-2`} onChange={handleChange} placeholder="Introduce Tu Url" />
            <button className='p-2 w-28 hover:bg-emerald-500 transition-all hover:scale-105  bg-emerald-600 text-white font-semibold rounded-md' onClick={handleClick}>Acortar</button>
            {result&&
            <div className={`flex gap-4 p-1 justify-center items-center rounded-md `}>
                <p>{result}</p>
                <button className={`${classCapy} border transition-all hover:scale-110  p-1 rounded-md`} onClick={handleCoppy}><IconCopy></IconCopy></button>
            </div>
            }
        </form>
    );
}
