import React from 'react'
import Link from 'next/link'

const BackOptionsButton = () => {
  return (
    <div className='absolute top-6 left-4 text-5xl font-bold'>
        <Link href='/options'><span>&#8249;</span></Link>
    </div>
  )
}

export default BackOptionsButton