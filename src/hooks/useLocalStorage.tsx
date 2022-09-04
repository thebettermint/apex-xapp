import React, { useState, useEffect } from 'react';

const getSavedValue = (key: string, initialValue: any) => {
  let savedValue;
  if (typeof window !== 'undefined') {
    let item = localStorage.getItem(key);
    if (item) savedValue = JSON.parse(item);
    if (savedValue) return savedValue;

    if (initialValue instanceof Function) return initialValue();
    return initialValue;
  }
  return;
};

const useLocalStorage = (key: string, initialValue: string | boolean | undefined) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let saved = getSavedValue(key, initialValue);
      if (initialValue == undefined && !saved) return localStorage.removeItem(key);
      localStorage.setItem(key, JSON.stringify(saved));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log(value);
      if (value == undefined) return localStorage.removeItem(key);
      localStorage.setItem(key, JSON.stringify(value));
    }
    return;
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
