import { use, useEffect,useState } from "react";
import {type Welcome, type Datum} from '@/app/libs/types'

export default function GetUrls() {
    const [urls,setUrls] = useState<any>();
    
    useEffect(() => {
        fetch('/api/urls')
        .then(res => res.json())
        .then(data => setUrls(data as Welcome))
    },[])
    
    
    return (
        <div>
            {
               
            }
        </div>
    )
}