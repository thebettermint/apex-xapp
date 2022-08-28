import React, { ReactInstance, ReactNode } from 'react'
import { useState, useRef, useEffect } from 'react'


function useHover() {
    const [value, setValue] = useState(false);
  
    const ref = useRef<HTMLElement>(null);
  
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
  
    useEffect(
      () => {
        const node = ref.current;
        if (!node) return
        if (node) {
          node.addEventListener("mouseover", handleMouseOver);
          node.addEventListener("mouseout", handleMouseOut);
  
          return () => {
            node.removeEventListener("mouseover", handleMouseOver);
            node.removeEventListener("mouseout", handleMouseOut);
          };
        }
      },
      [ref.current] // Recall only if ref changes
    );
  
    return [ref, value];
  }

export default useHover;