import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default class AdsCalendar extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: '',
          center: 'prev,title,next',
          right: '',
        }}
        events={[
          {
            start: '2020-10-12',
            end: '2020-10-15',
            extendedProps: {
              status: 'done',
            },
          },
        ]}
        eventDidMount={function (info) {
          if (info.event.extendedProps.status === 'done') {
            // Change background color of row
            info.el.style.backgroundColor = 'yellow'
            info.el.style.border = 'none'
            console.log(info)
          }
        }}
        dateClick={function (info) {
          console.log(info.dayEl.dataset.date)
        }}
      />
    )
  }
}
