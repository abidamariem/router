import React, { useState } from 'react'
import "./AddMovie.css"
export default function AddMovie({handleAdd}) {
    const[title,setTitle]=useState("")
    const[released,setReleased]=useState("")
    const[director,setDirector]=useState("")
    const[rating,setRating]=useState("")
    const[poster,setPoster]=useState("")
    const[plot,setPlot]=useState("")
  const handleSubmit=(e)=>{
e.preventDefault()   
if (!title|| !released || !director || !rating || !plot || !poster){
    alert("Please add all field") 
} else
 {const newMovie={
        Title:title,
        Released:released,
        Director:director,
        Rating:rating,
        Images:[poster],
        Plot:plot

    }
    handleAdd(newMovie);
    setTitle("")
    setReleased("")
    setPlot("")
    setDirector("")
    setRating("")
    setPoster("")
}
  }
    console.log(title)
  return (
    <div class="container">
    <div class="text">
       Contact us Form
    </div>
    <form action="#">
       <div class="form-row">
          <div class="input-data">
             <input  value={title} type="text" onChange={(e)=>setTitle(e.target.value)} required/>
             <div class="underline"></div>
             <label for="">Movie Title</label>
          </div>
          <div class="input-data">
             <input value={released} type="text" onChange={(e)=>setReleased(e.target.value)} required/>
             <div class="underline"></div>
             <label for="">Released</label>
          </div>
       </div>
       <div class="form-row">
          <div class="input-data">
             <input  value={director} type="text"  onChange={(e)=>setDirector(e.target.value)} required/>
             <div class="underline"></div>
             <label for="">Director</label>
          </div>
          <div class="input-data">
             <input  value={rating} type="number" onChange={(e)=>setRating(e.target.value)}  required/>
             <div class="underline"></div>
             <label for="">Rating</label>
          </div>
         
       </div>
       <div class="form-row">
       <div class="input-data">
             <input value={poster} type="text" onChange={(e)=>setPoster(e.target.value)} required/>
             <div class="underline"></div>
             <label for="">Poster</label>
          </div>
       <div class="input-data textarea">
          <input value={plot} type="text" onChange={(e)=>setPlot(e.target.value)} required/>
          <br />
          <div class="underline"></div>
          <label for="">Plot</label>
          <br />
          <div class="form-row submit-btn">
             <div class="input-data">
                <div class="inner"></div>
                <input type="submit"  onClick={handleSubmit} value="submit"/>
             </div>
          </div>
          </div>
          </div>
    </form>
    </div>
  )
}
