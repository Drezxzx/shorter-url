"use client"
import {fechtData} from '@/app/libs/data'
import { useEffect } from 'react'
type Props = {
    params: {
        url: string
    }
}
export default function Page(params : Props) {
    useEffect(()=>{
        fechtData(params.params.url)
        .then(url  => {location.href = url})
    },[params.params.url])
    
    return (
    <div></div>
        )
}