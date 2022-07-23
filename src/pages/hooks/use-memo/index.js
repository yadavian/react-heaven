import React, { useMemo, useState } from 'react'

const UseMemoPage = () => {
    const [counterOne, setcounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)
    
    const fn_inc_one = () => {
        setcounterOne(counterOne + 1)
    }
    const fn_inc_two = () => {
        setCounterTwo(counterTwo + 1)
    }

    // ye function jisme counter one ka value change ho raha h ki wajah se counter two bhi slow ho jaa raha h
    const isEven = useMemo(() => {
        for (let i = 0; i < 2000000000; i++);
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <>
            <button onClick={fn_inc_one}>Count - One {counterOne}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span><br />
            <button onClick={fn_inc_two}>Count - Two {counterTwo}</button><br />
        </>
    )
}

export default UseMemoPage