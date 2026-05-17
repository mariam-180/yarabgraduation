import React, { useEffect, useState } from 'react'
import Style from './Article.module.css';

export default function Article() {
    const [counter, setcounter] = useState(0)
    useEffect(()=> {

    }
    ,
[])
    
  return <>
     <div className={`${Style.article}`}>
         <h1>template name</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
     </div>
    </>
  
}
