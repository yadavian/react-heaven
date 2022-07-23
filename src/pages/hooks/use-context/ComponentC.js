import React from 'react'
import { UserContext, AgeContext } from '../../../App'

const ComponentC = () => {
    return (
        <>
            <h4>ComponentC</h4>

            <UserContext.Consumer>
                {
                    user => {
                        return <div>{user}</div>
                    }
                }
            </UserContext.Consumer>

            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <AgeContext.Consumer>
                                {
                                    age => {
                                        return <div>{user}   {age}</div>
                                    }
                                }
                            </AgeContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </>
    )
}

export default ComponentC