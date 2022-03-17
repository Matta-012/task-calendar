import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import MyCalendar from './MyCalendar';
import TaskForm from './TaskForm';
import SelectedTaskCard from './SelectedTaskCard';
import SearchForm from './SearchForm';

function Main() {
  const { selectedTask } = useContext(AppContext);

  return (
    <main className="flex">
      <section id="searchbar">
        <SearchForm />
      </section>
      <section id="options" className="flex flex-col">
        <TaskForm />
        { selectedTask.title && <SelectedTaskCard /> }
      </section>
      <section id="calendar">
        <MyCalendar />
      </section>
    </main>
  );
}

export default Main;
