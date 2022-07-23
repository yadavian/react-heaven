import React, { useEffect, useRef, useState } from 'react'

const UseRefPage = () => {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])


    return (
        <div>

            <input type="text" ref={inputRef} />
        </div>
    )
}

export default UseRefPage