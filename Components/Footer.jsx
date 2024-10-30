import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
      <Link href="/" passHref>
        <Image src={assets.logo_light} alt='' width={120} />
      </Link>
      <p className='text-sm text-white'>All right reserved. Copyright @KrishSatasiya</p>
      <div className='flex'>
        <Link href="https://www.facebook.com/krish.satasiya.5811/" passHref>
          <Image src={assets.facebook_icon} alt='Facebook' width={40} />
        </Link>
        <Link href="https://twitter.comhttps://x.com/Krish_Satasiya" passHref>
          <Image src={assets.twitter_icon} alt='Twitter' width={40} />
        </Link>
        <Link href="mail:krishsatasiya44@gmail.com" passHref>
          <Image src={assets.googleplus_icon} alt='Google Plus' width={40} />
        </Link>
      </div>
    </div>
  )
}

export default Footer
