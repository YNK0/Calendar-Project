import React from 'react';
import Meetings from './Modules/meetings';
import Calendar from 'react-calendar';

export default function App() {

  function onChange() {
    console.log("Pruebaaaaa")
  }

  return (
    <div className="flex flex-col">
      <div className="mb-4 font-bold text-4xl p-4">Upcoming meetings</div>
      <div className="flex">
        <div className="flex-1">
          <Meetings />
        </div>
        <div className="flex-1" >

        </div>
      </div>
    </div >

  )
}