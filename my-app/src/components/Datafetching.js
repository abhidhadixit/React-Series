import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Datafetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const clickHandle = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [idFromButtonClick])

    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <button type='button' onClick={clickHandle}>Fetch Post</button>
            <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    )
}

export default Datafetching
