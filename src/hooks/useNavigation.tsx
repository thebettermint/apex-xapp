import { useState, useEffect } from 'react'

const getSavedValue = (key:string, initialValue:any) => {
    let savedValue
    let item = localStorage.getItem(key)
    if (item) savedValue = JSON.parse(item)
    if (savedValue) return savedValue

    if (initialValue instanceof Function) return initialValue()
    return initialValue;
}

const useLocalStorage = (key:string, initialValue:string|boolean) => {
    const [value, setValue ] = useState(() => {
        return getSavedValue(key, initialValue)})

        useEffect(() => {
                localStorage.setItem(key, JSON.stringify(value))
        }, [value])

    return [ value, setValue ]
}

export default useLocalStorage;