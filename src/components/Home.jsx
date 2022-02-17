import React from "react";
import { Typewriter } from "react-simple-typewriter";
import NavBar from "./NavBar";

export default function Home() {

  const joinMeeting = (event) => {
    event.preventDefault()
    const room = document.getElementById('room-name')
    window.location = 'https://meet.jit.si/' + room.value
  }


  return (
    <div>
      <NavBar />
      <div className="demo">
        <div className="text-container">
          <h1>Meetings Made Easier</h1>
          <p className="typewriting">
            <Typewriter
              loop
              cursor
              cursorStyle="|"
              typespeed={40}
              deleteSpeed={70}
              delaySpeed={1000}
              words={["#tired_of_remembering_room_codes"]}
            />
          </p>
          <form action="/">
            <input
              type="text"
              id="room-name"
              placeholder="Enter Room Name"
              required
            />
            <br />
            <button onClick={(event) => joinMeeting(event)}>Join</button>
          </form>
          <div>
            <button onClick={() => window.location = '/create'}>Create</button>
            <button onClick={() => window.location = '/schedule'}>Schedule</button>
          </div>
        </div>
      </div>
    </div>
  );
}
