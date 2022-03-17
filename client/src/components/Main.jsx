import React from 'react';
import MyCalendar from './MyCalendar';
import TaskForm from './TaskForm';

function Main() {
  return (
    <main className="flex">
      <section id="options" className="flex flex-col">
        <TaskForm />
      </section>
      <section id="calendar">
        <MyCalendar />
      </section>
    </main>
  );
}

export default Main;