import React from 'react'

const Button = (props) => {
    const { handleClick, children } = props;
    console.log(`Rendering Button `, children)
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

export default React.memo(Button)