'use client'
import { useState, useEffect } from 'react'

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue)

  const initializeValue = () => {
    const localStorageValue = localStorage.getItem(key)
    if (localStorageValue) {
      setValue(JSON.parse(localStorageValue))
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    initializeValue()
  }, [])

  const setLocalStorageValue = (newValue: T) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }
  return [value, setLocalStorageValue] as const
}

export default useLocalStorage
