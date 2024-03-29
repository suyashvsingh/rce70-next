import ClipLoader from 'react-spinners/ClipLoader'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full w-full bg-[#1c2333] rounded-xl">
      <ClipLoader color="white" />
    </div>
  )
}

export default Loading
