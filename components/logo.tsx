import Image from 'next/image'
import Link from 'next/link'
import localFont from 'next/font/local'

import { cn } from '@/lib/utils'

const headingFont = localFont({
  src: '../public/fonts/font.woff2'
})

export const Logo = () => {
  return (
    <Link href='/'>
      <div className='hover:opacity-75 transition items-center gap-x-3 hidden md:flex'>
        <Image
          alt='Logo'
          src='/logo.svg'
          height={30}
          width={30}
        />
        <p
          className={cn('text-lg text-neutral-700 mt-1', headingFont.className)}
        >
          Taskify
        </p>
      </div>
    </Link>
  )
}
