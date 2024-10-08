import React, { useState ,useCallback} from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

function TempComponent() {
  const [age, setAge] = useState(25)
  const [salary, setSalary] = useState(500000)

  const incrementAge = useCallback(() => {
    setAge(age + 1)
  },[age])

  const incrementSalary = useCallback(() => {
    setSalary(salary + 100000)
  },[salary])

  return (
    <div>
      ParentComponent
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default TempComponent
