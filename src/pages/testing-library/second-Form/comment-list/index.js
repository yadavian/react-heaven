import React from 'react'

const CommentList = (props) => {
    const { allotments } = props
    console.log(allotments)
    return (
        <div>
            {allotments ?
                allotments.map((d, i) => {
                    return <li key={d.id}>{d.text}</li>
                }) : <h2>no comments</h2>}

        </div>
    )
}

export default CommentList