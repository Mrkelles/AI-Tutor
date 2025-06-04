import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center h-screen'>
      <h1 className='text-2xl underline'>Welcome to my SAAS</h1>
      <Button>Let&apos;s get started</Button>
    </div>
  )
}

export default Page