import React, {useState, useRef, useEffect} from 'react'


const Checkbox = () => {

  const checkboxRef = useRef()

  const [ isChecked , setIsChecked ] = useState(false)

  const handleClick = () => {
    setIsChecked(!isChecked)
  }

    useEffect(() => {
      if (!checkboxRef.current) return
      checkboxRef.current.classList.toggle('checked')
    }, [isChecked])

    const element = (
      <div 
        ref = {checkboxRef}
        className='input-checkbox'
        onClick={handleClick}
      ></div>
    );

    return element
  };

export default Checkbox