import Link from 'next/link'

import data from '@/public/data/footer.json'

import s from './Footer.module.sass'

export default function Footer() {
  return (
    <div className={s.container}>
      {data?.map(({ id, link, icon }) => (
        <Link className={s.link} key={id} href={link}>
          <img 
            src={icon.url} 
            alt={icon.alt} 
            title={icon.title} 
          />
        </Link>
      ))}
    </div>
  )
}
