import React, { useEffect, useState } from 'react'

const useEffectPage = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    // if no []     => every time eny event happens use effect runs.
    // if [count]   => on renders when count changes.
    // return()     => clean up code runs when second component is called.
    useEffect(() => {
        console.log("useEffect - updating document title.");
        document.title = `count => ${count}`;

        return () => {
            console.log("unmount code");
            window.removeEventListener('mousemove', () => console.log("name of function => logMousePosition"))
        }

    },[])


    return (
        <div>
            <h1>Count = {count}</h1>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default useEffectPage