'use client'

import Button from '@mui/material-next/Button'

import { useDispatch, useSelector } from 'react-redux'
import { focusOnCard, focusOnCalendar } from '@/lib/redux/actions'
import { State } from '@/lib/interfaces'

import s from './ButtonSection.module.sass'

export default function ButtonSection() {
  const dispatch = useDispatch()

  const btnFocus = useSelector((state: State) => state?.btnFocus?.btnFocus)

  const onFocuse = (e: { target: { name: string } }) => {
    const name = e.target.name
    switch (name) {
      case 'cards':
        dispatch(focusOnCard())
        return

      case 'calendar':
        dispatch(focusOnCalendar())
        return

      default:
        break
    }
  }

  return (
    <div className={s.wrapper}>
      <div className={s.btnContainer}>
        <Button
          className={`${s.btn} ${btnFocus.card && s.active}`}
          name='cards'
          autoFocus={btnFocus.card}
          onFocus={onFocuse}
        >
          Cards
        </Button>
        <Button
          className={`${s.btn} ${btnFocus.calendar && s.active}`}
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
