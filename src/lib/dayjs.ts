import dayjs from 'dayjs/esm'
import calendar from 'dayjs/esm/plugin/calendar'
import es from './dayjsEs'

dayjs.extend(calendar)
dayjs.locale(es)

const toCalendar = (date: any) => dayjs(date).calendar(null, {
  lastDay: '[Ayer a las] h:mm A',
  sameDay: '[Hoy a las]  h:mm A',
  nextDay: '[Mañana a las] h:mm A',
  lastWeek: '[El último] dddd [a las] h:mm A',
  nextWeek: 'dddd [a las] h:mm A',
  sameElse: 'DD/MM/YYYY'
})

export {
  dayjs,
  toCalendar as calendar,
}
