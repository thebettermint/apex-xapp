/*global chrome*/
import React, {useState, useRef, useEffect, MouseEventHandler, FocusEventHandler, ReactNode, RefCallback, RefAttributes, RefObject, forwardRef, LegacyRef, ChangeEventHandler} from 'react';
import style from './index.module.scss'

interface IThemeList {
    [index: string]:any
}

interface IBorder {
    line?: string
    width?: number
    color?: string
    radius?: number
    }

interface Props {
    type:string
    theme?:string
    value?:string|undefined
    width?:number|string
    height?:number|string
    margin?:number|string
    color?:string
    accent?:string
    border?:IBorder
    placeholder?:string
    label?:string
    children?:
    | JSX.Element
    | JSX.Element[]
    | ReactNode
    className?: string
    onFocus?:(e:React.FocusEvent<HTMLInputElement>) => void
    onUnfocus?:(e:React.FocusEvent<HTMLInputElement>) => void
    onClick?: MouseEventHandler<HTMLDivElement>
    onChange?: ChangeEventHandler<HTMLInputElement>
  };

  var invalidChars = [
    "-",
    "+",
    "e",
  ];
  

const Input = forwardRef(({
        type,
        theme,
        value,
        width,
        height,
        margin,
        color, 
        accent, 
        border, 
        placeholder,
        label,
        children,
        className,
        onFocus,
        onUnfocus,
        onChange}:Props, ref:LegacyRef<HTMLInputElement> | undefined) => {

    const labelRef = useRef<HTMLLabelElement>(null)

    const [ inputValue, setInputValue ] = useState<string|undefined>(value?value:undefined)

    const handleFocus = (e:React.FocusEvent<HTMLInputElement>) => {
        if (!labelRef || !labelRef.current ) return 
        labelRef.current.style.display='block'
        if (onFocus) onFocus(e)
    }

    const handleUnfocus = (e:React.FocusEvent<HTMLInputElement>) => {
        if (onUnfocus) onUnfocus(e)
        if (e.target.value || !labelRef.current) return
        labelRef.current.style.display='none'
    }

    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (type =='secretnumber' && e.target.value) {
            let number = Number(e.target.value)
            if( !Number.isInteger(number)) return
        }
        if (type =='secretnumber' && e.target.value.length > 6) return
        if (onChange) onChange(e)
        setInputValue(e.target.value)
    }

    const handleOnKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if (type =='secretnumber' && e.key) {
            if (invalidChars.includes(e.key)) {
                e.preventDefault();
              }
        }
    }

    useEffect(() => {
        if (!inputValue || !labelRef.current ) return 
        labelRef.current.style.display='block'
    })

    const autocomplete = type=='email' ? "email" :
                            type=='password' && label=='repeat password' ? "new-password" :
                            type=='password' ? "current-password" : 
                            type=='text' && label=='username' ? "username" : 
                            type=='number' ? "number" : undefined


    return (
                <div className={className}>
                    <div className={style.inputWrapper}>
                        <input 
                            ref={ref}
                            className={style.input}
                            type={type =="secretnumber"? 'number' :type}
                            name="input" 
                            onFocus={handleFocus}
                            onBlur={handleUnfocus}
                            onChange={handleOnChange}
                            onKeyDown={handleOnKeyDown}
                            value={inputValue}
                            maxLength={type =="secretnumber"? 6: undefined}
                            placeholder={ placeholder }
                            autoComplete={autocomplete}/>
                        <label 
                            htmlFor='input' 
                            ref={labelRef}
                            className={type =="secretnumber"? style.inputLabelSecretNumber :style.inputLabel}>
                                { label }
                        </label>  
                    </div>
                    {children}            
                </div>
        )
    })

export default Input


