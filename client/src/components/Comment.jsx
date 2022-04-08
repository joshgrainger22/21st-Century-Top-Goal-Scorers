import React from "react";
import axios from 'axios'
import { useState } from 'react'

export default function Comment() {

    const [update, setUpdate] = useState(false)
    const [description, setDescription] = useState('')


    const UpdateComment = async (e) => {
        e.preventDefault()
        await axios.put(`https://localhost:3001/api/topscorers`, {
            description })
        window.location.reload(true)
    }
    console.log(description)

return (

    <div>
        {update?
        
    <form onSubmit={(e)=>UpdateComment(e)}>
        <input name='comments' type='text' placeholder='update your description here' onChange={(e)=>setDescription(e.target.value)} ></input>
        <button className="button-button" type='submit'>Submit</button>
    </form> : 
    <button className="delete-button" onClick={() => setUpdate(true)} >Update</button>}
    </div>
)