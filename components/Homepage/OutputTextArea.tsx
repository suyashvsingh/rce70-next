import { FC } from 'react'

interface OuptutTextAreaProps {
  result: string
  error: boolean
  executionTime: number
}

const OuptutTextArea: FC<OuptutTextAreaProps> = ({
  result,
  error,
  executionTime,
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-3 rounded-xl w-full bg-[#1c2333] rounded-b-none border-b-2 border-b-[#0f1327] flex justify-between">
        <div className="font-semibold">Output</div>
        {error ? (
          <span className="text-red-500 font-semibold">
            Code execution failed
          </span>
        ) : (
          <span className="text-green-500 font-semibold">
            No errors detected {`(${executionTime}ms)`}
          </span>
        )}
      </div>
      <textarea
        className="p-3 rounded-xl w-full h-full resize-none bg-[#1c2333] rounded-t-none"
        readOnly
        placeholder="Output"
        value={result}
      />
    </div>
  )
}

export default OuptutTextArea
