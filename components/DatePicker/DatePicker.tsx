'use client'

import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import s from './DatePicker.module.sass'

export default function DateCalendarReferenceDate() {
  return (
   <div className={s.container}>
     <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar']}>
        <DateCalendar
        monthsPerRow={3}
          referenceDate={dayjs('2022-04-17')}
          views={['year', 'month', 'day']}
        />
      </DemoContainer>
    </LocalizationProvider>
   </div>
  );
}