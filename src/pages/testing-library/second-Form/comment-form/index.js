import React, { useState } from 'react'
import CommentList from '../comment-list';

const SecondForm = () => {
    const [text, setText] = useState("");
    const [checked, setChecked] = useState(false)
    const data = [
        { id: 1, text: "Comment 1" },
        { id: 2, text: "Comment 2" }
    ];

    return (
        <div>
            <h2>comment form</h2>
            <input placeholder="write your comment here" value={text} onChange={e => setText(e.target.value)} />
            <input type="checkbox" id="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)} />

            <label htmlFor="checkbox">I agree to terms and conditions</label>
            <button disabled={!checked || !text} onClick={() => console.log('clicked')} >Submit</button>


            <CommentList allotments={data} />
        </div>

    )
}

export default SecondForm

