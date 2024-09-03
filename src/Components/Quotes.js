import React, { useState,useEffect } from "react"
import axios from "axios"

function Quotes(){
    const [quotes,setQuotes]=useState([])
    useEffect(()=>{
        axios.get("https://dummyjson.com/quotes")
        .then(res=>{
            console.log(res)
            setQuotes(res.data.quotes)
        }).catch(error=>{
            console.log(error)
        })
    },[])



    return(
        <div>
           
               <ul>
                {quotes.map(quote=><li> <h1>{quote.quote} </h1></li>).slice(0,10)}
                </ul>  
           
        </div>
    )
}

export default Quotes