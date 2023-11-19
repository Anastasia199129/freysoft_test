'use client'

import Button from '@mui/material-next/Button'

import s from './ButtonSection.module.sass'
import { useState, useEffect } from 'react'

export default function ButtonSection() {
  const isClient = typeof window !== 'undefined'
  const [btnFocus, setBtnFocus] = useState(
    isClient && JSON.parse(localStorage.getItem('btnFocus'))
      ? JSON.parse(localStorage.getItem('btnFocus'))
      : { card: true, calendar: false }
  )

  console.log(btnFocus)

  useEffect(() => {
    const storedBtnFocusString = localStorage.getItem('btnFocus')
    if (storedBtnFocusString !== null) {
      try {
        const storedBtnFocus = JSON.parse(storedBtnFocusString)
        setBtnFocus(storedBtnFocus)
      } catch (error) {
        console.error('Error parsing storedBtnFocus:', error)
      }
    }
  }, [])

  const onFocuse = (e: { target: { name: string } }) => {
    console.log(e.target.name)
    const name = e.target.name
    switch (name) {
      case 'cards':
        setBtnFocus({ calendar: false, card: true })
        localStorage.setItem(
          'btnFocus',
          JSON.stringify({ calendar: false, card: true })
        )
        break

      case 'calendar':
        setBtnFocus({ calendar: true, card: false })
        localStorage.setItem(
          'btnFocus',
          JSON.stringify({ calendar: true, card: false })
        )
        break

      default:
        break
    }
  }

  return (
    <div className={s.wrapper}>
      <div className={s.btnContainer}>
        <Button
          className={s.btn}
          name='cards'
          autoFocus={btnFocus.card}
          onFocus={onFocuse}
        >
          Cards
        </Button>
        <Button
          className={s.btn}
          autoFocus={btnFocus.calendar}
          name='calendar'
          onFocus={onFocuse}
        >
          Calendar
        </Button>
      </div>
    </div>
  )
}
