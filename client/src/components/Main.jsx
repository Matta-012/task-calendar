import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import MyCalendar from './MyCalendar';
import TaskForm from './TaskForm';
import SelectedTaskCard from './SelectedTaskCard';
import SearchForm from './SearchForm';

function Main() {
  const { selectedTask } = useContext(AppContext);

  return (
    <div className="flex py-4 mx-4">
      <section id="options" className="h-screen flex flex-col 2xl:justify-around">
        <TaskForm />
        { selectedTask.title && <SelectedTaskCard /> }
      </section>
      <main className="w-full flex flex-col items-center">
        <section id="searchbar" className="w-2/4">
          <SearchForm />
        </section>
        <section id="calendar">
          <MyCalendar />
        </section>
      </main>
    </div>
  );
}

export default Main;
