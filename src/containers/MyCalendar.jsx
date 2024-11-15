import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
 
  const [events, setEvents] = useState([
    {
      title: 'Formation :Introduction à Javascript',
      start: new Date(2024, 10, 14, 10, 0), 
      end: new Date(2024, 10, 30, 12, 0),   
    },
    {
      title: 'Formation:Angular de A à Z ',
      start: new Date(2024, 10,30, 14, 0), 
      end: new Date(2024, 11, 20, 16, 0),   
    },
   
  ]);

  return (
    <div className="min-h-screen w-full bg-white">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default MyCalendar;
