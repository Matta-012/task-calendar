import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'
import ptBrLocale from '@fullcalendar/core/locales/pt-br';

function MyCalendar() {
  const { taskList, setSelectedTask } = useContext(AppContext);

  // Select an event on click and set it in a global state to render on Task Card.
  const handleTaskClick = (e) => {
    const id = Number(e.event.id);

    const selectedTask = taskList.find((task) => task.id === id);
    setSelectedTask(selectedTask);
  };

  return (
    <div className="h-95%">
      <FullCalendar
        locales={ [ptBrLocale] }
        headerToolbar={{
          left: 'prev,next,today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        plugins={ [dayGridPlugin, timeGridPlugin, interactionPlugin] }
        events={ taskList }
        eventClick={ (e) => handleTaskClick(e) }
        height={'100%'}
      />
    </div>
  );
}

export default MyCalendar;