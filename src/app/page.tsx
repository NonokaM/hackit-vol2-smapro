'use client'
import GameRules from './game-rules/gameRoules'
import Link from 'next/link'
import Image from 'next/image'
import { useGameData } from './GameDataProvider'
import '@/styles/home.css'
import logo from '@/styles/images/logo.png'
import catImage from '@/styles/images/cat-image.png'

export default function Home() {
  return (
    <div className='container'>
      <div className='main-container'>
      <Image
            src={logo}
            height={400}
            alt='cat-image'
            className='logo-image'
        ></Image>
        <Link href='/course-selection'>
          <button className='courseBtn'>スタート</button>
        </Link>
        <GameRules buttonLabel='遊び方' />
      </div>
      <div className='sub-container'>
        <Image
            src={catImage}
            height={530}
            alt='cat-image'
            className='cat-image'
        ></Image>
      </div>
    </div>
  )
}
