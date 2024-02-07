import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function LoadingSpinner({ size = 30 }: { size?: number }) {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <AiOutlineLoading3Quarters size={size} className='animate-spin' />
    </div>
  )
}
