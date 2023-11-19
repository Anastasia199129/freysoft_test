import Image from 'next/image'

import s from './Header.module.sass'

interface Props {
  title: string
  avatarSrc: string
}

export default function Header({ title, avatarSrc }: Props) {
  return (
    <div className={s.container}>
      <Image width={43} height={43} src={avatarSrc} alt='avatar' />
      <h2>{title}</h2>
      <Image width={25} height={27} src='/img/header/bell.svg' alt='bell' />
    </div>
  )
}
