import { toast } from 'react-hot-toast'
import { BsFillPlayFill } from 'react-icons/bs'
import toastStyles from '../styles/toastStyle'
import { FC } from 'react'

interface RunButtonProps {
  setError: (error: boolean) => void
  setLoading: (loading: boolean) => void
  code: string
  selectedLanguage: {
    value: string
    label: string
  }
  input: string
  setResult: (result: string) => void
  buttonRef: any
  setExecutionTime: (executionTime: number) => void
}

interface resInterface {
  status: boolean
  data: string
  executionTime?: number
}

const RunButton: FC<RunButtonProps> = ({
  setError,
  setLoading,
  code,
  selectedLanguage,
  input,
  setResult,
  buttonRef,
  setExecutionTime,
}) => {
  const onClickRun = async () => {
    setError(false)
    toast.dismiss()
    setLoading(true)
    const response = await fetch('/api/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code,
        selectedLanguage,
        input,
      }),
    })
    const res = (await response.json()) as resInterface
    if (res.status === true) {
      toast.success('Code executed', toastStyles)
      setResult(res.data)
      setExecutionTime(res.executionTime ?? 0)
    } else {
      setError(true)
      toast.error('Code execution failed', toastStyles)
      setResult(res.data)
      setExecutionTime(0)
    }
    setLoading(false)
  }

  return (
    <button
      ref={buttonRef}
      onClick={onClickRun}
      className="bg-green-700 flex-grow-0 px-4 py-2 text-white rounded-xl font-medium text-sm mt-4 w-fit hover:bg-green-800 flex items-center justify-center gap-1 ml-auto"
    >
      Run
      <BsFillPlayFill />
    </button>
  )
}

export default RunButton
