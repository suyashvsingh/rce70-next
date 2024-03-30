import { toast } from 'react-hot-toast'
import { BsFillPlayFill } from 'react-icons/bs'
import toastStyles from '@/styles/toastStyle'
import { FC } from 'react'
import { executeCode } from '@/app/actions'

type RunButtonProps = {
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

type Res = {
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
    const res = (await executeCode(code, selectedLanguage, input)) as Res
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
