import axios from 'axios';
import React, { useEffect, useState } from 'react'

const DataFetchingPage = () => {
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    })


    return (
        <div>
        </div>
    )
}

export default DataFetchingPage