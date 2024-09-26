import "./EventsPage.css";
import events from './Images/events.jpeg';
import event from './Images/sports.jpeg';
export default function EventsPage(){
    return(
        <> 
        <div className="events">
       
        <h1>Events</h1>
          <h2>ScienceFair Event</h2>
          {/* <img src="/events.jpeg"></img> */}
          <img src={events} alt="event1"/>

          <p>A science fair or engineering fair is an event hosted by a school that offers students the opportunity to experience the practices of science and engineering for themselves.</p>
      
          <h2>Sports day</h2>
          {/* <img src="/sports.jpeg"></img> */}
          <img src={event} alt="event1"/>
          <p>A sports day in a college is a day dedicated to sports and physical activities</p>
       
          </div>
        </>
    )
}