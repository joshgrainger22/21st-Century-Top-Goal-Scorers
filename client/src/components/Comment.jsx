import axios from 'axios'
import React from 'react'
import { useState } from 'react'
//import { createComments } from '../services/CitiesAttracService'
//import { CreateCommentsAction } from '../store/actions/CitiesAttracAction'
//import { useNavigate } from 'react-router-dom'

const Comment = (props) => {
  console.log(props)
  const url ='http://localhost:3001/api/createComment'
  //const navigate = useNavigate()
  //const [name, setName] = useState('')
  const [posts, setPosts] = useState('')
  const [create, setCreate] = useState(false)
  const [data, setData] = useState({ name: '', text: ''})

  function CreateComments(e) {
    e.preventDefault()
    axios.post(url, {name: data.name, text: data.text})
    window.location.reload(true)
  }

  function onChange(e) {
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  return (
    <div>
      {/* {props.allComments.map((comments) => {
        return (
          <div>
        <p> name={comments.name} </p>
        <p> text={comments.text}</p>
      
      <h2>Comment</h2>
      </div> 
        )})} */}

      <div>
        {create ? (
          <form onSubmit={CreateComments}>
            <label>New Comment</label>
            <div>
              <input type="text" id={'name'} placeholder={'name'} onChange={(e) => onChange(e)} />
              <textarea
                className="comments-input"
                placeholder="Add your comment here"
                value={posts}
                onChange={(e) => onChange(e)}
              />
            </div>
            <button>Submit</button>
          </form>
        ) : (
          <button
            type="submit"
            className="review-button"
            onClick={() => setCreate(true)}
          >
            Create a Comment
          </button>
        )}
      </div>
    </div>
  )
}

export default Comment
