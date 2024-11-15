import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
 
  const [events, setEvents] = useState([
    {
      title: 'Training :Introduction to Javascript',
      start: new Date(2024, 10, 14, 10, 0), 
      end: new Date(2024, 10, 30, 12, 0),   
    },
    {
      title: 'Training:Angular from  A to  Z ',
      start: new Date(2024, 10,30, 14, 0), 
      end: new Date(2024, 11, 20, 16, 0),   
    },
   
  ]);

  return (
    <div className="min-h-screen w-full ">
      <div className="shadow bg-white py-4  font-bold  px-2 "><h1 className='text-red-800 text-2xl'>Training Sessions Calendar</h1></div>
      <div className="mt-4 bg-white ">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
      </div>
     
    </div>
  );
};

export default MyCalendar;
