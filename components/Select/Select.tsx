'use client'

import { useDispatch, useSelector } from 'react-redux'
import { selectYear, selectDataByYear } from '@/lib/redux/actions'

import Select, { selectClasses } from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import { State } from '@/lib/interfaces'

import s from './Select.module.sass'

const options = ['2021', '2022']

export default function SelectIndicator() {

  const dispatch = useDispatch()
  const currentYear = useSelector((state:State) => state?.selectedYear?.year)

  const onChange = (e:any) => {
    const yearString = e.target.innerText
    const yearOnly = yearString.split(' - ')[1]
    dispatch(selectYear(yearOnly))
    dispatch(selectDataByYear(yearOnly))
  }

  return (
    <div className={s.container}>
      <Select
        value={currentYear}
        placeholder='Select a year'
        indicator={<KeyboardArrowDown />}
        onChange={onChange}
        sx={{
          fontSize: '13px',
          minWidth: 116,
          color: 'white',
          display: 'inline-flex',
          background: '#FF653A',
          padding: '6px 10px',
          border: 'none',
          borderRadius: '12px',
          '&:hover': {
            background: '#FF8C6E',
          },
          '&.Mui-focused': {
            background: '#FF8C6E',
          },
          [`& .${selectClasses.indicator}`]: {
            transition: '0.2s',
            [`&.${selectClasses.expanded}`]: {
              transform: 'rotate(-180deg)',
            },
          },
        }}
      >
        {options?.map((option, i) => (
          <Option key={i} value={option}>
            Year - {option}
          </Option>
        ))}
      </Select>
    </div>
  )
}