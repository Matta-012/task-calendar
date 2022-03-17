import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from '@fullcalendar/interaction'
import ptBrLocale from '@fullcalendar/core/locales/pt-br';

function MyCalendar() {
  const { taskList } = useContext(AppContext);

  return (
    <div className="">
      <FullCalendar
        locales={[ ptBrLocale ]}
        headerToolbar={{
          left: "prev,next,today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        events={taskList}
      />
    </div>
  );
}

export default MyCalendar;