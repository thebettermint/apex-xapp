import React, { useState, useRef, useEffect } from 'react';

const useCheckbox = () => {
  const checkboxRef = useRef<React.MutableRefObject<any>>(null);

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (!checkboxRef.current) return;
    checkboxRef.current.classList.toggle('checked');
  }, [isChecked]);

  const element = (
    <div ref={checkboxRef} className="input-checkbox checked" onClick={handleClick}></div>
  );

  return [element, isChecked];
};

export default useCheckbox;
