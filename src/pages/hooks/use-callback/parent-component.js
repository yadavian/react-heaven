import React, { useCallback, useState } from 'react'
import Button from './button'
import Count from './count'
import Title from './title'

const UseCallBackParentComponent = () => {

  // Problem :             when we click on increment Age then all 5 components renders.
  // need    :             when we click on increment Age then only 2 components i.e Count Age and Increment Age should re-render.

  // so use React.memo() : allows functional component to re-render only if it's state and props not changed. 
  // new problem :         now after click on inc age => it render Count age, fn_incrementAge age but also  fn_incrementSalary. title ke pas props ya state nahi h isliye wo re-render nahi hua. inc age, age state pe depend karta h isliye age change hone pe button bhi render hua aur count age bhi. lekin jab bhi parent componennt render hota h to fn_incrementSalary create hota h har baar. so function jo pehle execute hua aur ab hua wo dono alga h, same nhi.   <Button handleClick={fn_incrementSalary}>Increment Salary</Button> => isme props change hua isliye wo run hogya.

  // use useCallback() =  useCallback me dependency jab tak badalta nhi tab tak wo function ko memorize in cached version karke rakhta h. normally used in reference equality, function before exection not same as after execution.


  const [age, setAge] = useState(50)
  const [salary, setSalary] = useState(50000)

  const fn_incrementAge = useCallback(() => {
    setAge(age + 1)
  }, [age])

  const fn_incrementSalary = useCallback(() => {
    setSalary(salary + 100)
  }, [salary])


  return (
    <>
      <Title />
      <Count text="Age" count={age}>Increment Age</Count>
      <Button handleClick={fn_incrementAge} >Increment Age</Button>

      <Count text="Salary" count={salary}>Increment Salary</Count>
      <Button handleClick={fn_incrementSalary}>Increment Salary</Button>
    </>
  )
}

export default UseCallBackParentComponent