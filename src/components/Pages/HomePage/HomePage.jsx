import "./HomePage.css";
import saveetha from './Images1/saveetha.jpeg';
export default function HomePage(){
    return(
        <>
        <div className="homepage">
        <h1>Welcome to Our College</h1>
        {/* <img src="/sec.jpg"></img> */}
        <img src={saveetha} alt="event1"/>
            </div>
         
   
    </>
    )
}