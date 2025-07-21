
import React, { useEffect, useState } from 'react'

function UseFetch(url) {
    const [data, setData] = useState([]);


    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch(url);
            if(res.ok){
                const resData = await res.json();
                setData(resData)
            }
        }
        fetchData();
        
    }, [])
  return [data, setData];
}

export default UseFetch
