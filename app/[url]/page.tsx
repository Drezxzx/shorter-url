"use client"
import {fechtData} from '@/app/libs/data'
import { useEffect } from 'react'
import "./styles.css"
type Props = {
    params: {
        url: string
    }
}
export default function Page(params : Props) {
    useEffect(()=>{
        fechtData(params.params.url)
        .then(url  => {
            if(url === undefined) return
            location.href = url})
    },[params.params.url])
    
    return (
    <div></div>
        )
}