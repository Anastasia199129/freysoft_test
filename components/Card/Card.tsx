'use client'

import data from '@/public/data/card.json'

import s from './Card.module.sass'
import formatNumberString from '@/lib/helpers/halpers'

export default function Card() {

  
  return (
    <div className={s.container}>
      <div className={s.card}>
        <h3>{data.title}</h3>
        <p className={s.balance}>{data.balance}</p>
        <div className={s.cardNumber}>
          <p>{formatNumberString(data.cardNumber)}</p>
        </div>
      </div>
    </div>
  )
}
