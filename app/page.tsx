'use client'
import { Language } from '@/types'
import { useState, useEffect, useRef } from 'react'
import Loading from '@/components/Homepage/Loading'
import OuptutTextArea from '@/components/Homepage/OutputTextArea'
import InputTextArea from '@/components/Homepage/InputTextArea'
import RunButton from '@/components/Homepage/RunButton'
import boilerplate from '@/data/boilerplate'
import ResetButton from '@/components/Homepage/ResetButton'
import DownloadButton from '@/components/Homepage/DownloadButton'
import useLocalStorage from '@/hooks/useLocalStorage'
import SelectComponent from '@/components/Homepage/SelectComponent'
import EditorComponent from '@/components/Homepage/EditorComponent'

const Home = () => {
  const [input, setInput] = useState<string>('')
  const [result, setResult] = useState<string>('')
  const [executionTime, setExecutionTime] = useState<number>(0)
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const defaultLanguage: Language = {
    value: 'javascript',
    label: 'JavaScript',
  }

  const [selectedLanguage, setSelectedLanguage] = useLocalStorage<Language>(
    'selected-language',
    defaultLanguage
  )

  const [code, setCode] = useLocalStorage<string>(
    selectedLanguage.value,
    boilerplate[selectedLanguage.value]
  )

  useEffect(() => {
    const storedCode = localStorage.getItem(selectedLanguage.value)
    if (storedCode) {
      setCode(JSON.parse(storedCode))
    } else setCode(boilerplate[selectedLanguage.value])
  }, [selectedLanguage, setCode])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && e.altKey && buttonRef.current) {
        buttonRef.current.click()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="h-screen gap-1 p-3 grid grid-cols-2 grid-rows-[3em_calc(48%-3em)_calc(48%-3em)_3.5em] bg-[#0f1327]">
      <div className="flex gap-2 items-center col-span-2">
        <SelectComponent
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
        <ResetButton
          setCode={setCode}
          setInput={setInput}
          setResult={setResult}
          setError={setError}
          selectedLanguage={selectedLanguage}
        />
      </div>
      <div className="h-full p-3 rounded-xl col-span-2 md:row-span-2 md:col-span-1 bg-[#1c2333]">
        <EditorComponent
          code={code}
          setCode={setCode}
          selectedLanguage={selectedLanguage}
        />
      </div>
      <InputTextArea input={input} setInput={setInput} />
      <div className="rounded-xl w-full h-full">
        {loading ? (
          <Loading />
        ) : (
          <OuptutTextArea
            result={result}
            error={error}
            executionTime={executionTime}
          />
        )}
      </div>
      <DownloadButton code={code} selectedLanguage={selectedLanguage} />
      <RunButton
        buttonRef={buttonRef}
        setError={setError}
        setLoading={setLoading}
        code={code}
        selectedLanguage={selectedLanguage}
        input={input}
        setResult={setResult}
        setExecutionTime={setExecutionTime}
      />
    </div>
  )
}

export default Home
