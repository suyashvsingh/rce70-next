import { FC } from 'react'
import fileDownload from 'js-file-download'
import random from 'random'
import { TbDownload } from 'react-icons/tb'

interface DownloadButtonProps {
  code: string
  selectedLanguage: {
    value: string
  }
}

const DownloadButton: FC<DownloadButtonProps> = ({
  code,
  selectedLanguage,
}) => {
  const OnClickDownload = () => {
    const fileExtensions = {
      javascript: 'js',
      python: 'py',
      java: 'java',
      c: 'c',
      cpp: 'cpp',
    }

    const fileName: string = `${random.int(0, 1000000)}.${
      fileExtensions[selectedLanguage.value as keyof typeof fileExtensions]
    }`

    fileDownload(code, fileName)
  }

  return (
    <button
      onClick={OnClickDownload}
      className="bg-[#1c2333] flex-grow-0 px-4 py-2 text-white rounded-xl text-sm mt-4 w-fit flex items-center justify-center gap-1 font-semibold"
    >
      Download
      <TbDownload />
    </button>
  )
}

export default DownloadButton
