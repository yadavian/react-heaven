import React, { useState } from 'react'

const UseStatePage = () => {
    const [count, setCount] = useState(0)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(count => count + 1)
        }
    }
    return (
        <div>
            <h1>Count = {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement </button>
            <button onClick={incrementFive}>Increment 5</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default UseStatePage