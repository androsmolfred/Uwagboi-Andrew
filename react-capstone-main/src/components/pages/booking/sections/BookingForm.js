import { useState } from "react";
import { useNavigate } from 'react-router-dom';
export default function BookingForm(props) {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    tel: "",
    people: "",
    date: "",
    occasion: "",
    preferences: "",
    comments: "",
    finalTime: props.availableTimes.map((times) => <option key={times}>{times}</option>)
  });

  function handleDateChange(e) {
    setData({
      ...data,
      date: e.target.value
    })

    var stringify = e.target.value;
    const date = new Date(stringify);
    props.updateTimes(date);
  }

  function submit(e) {
    e.preventDefault()
    console.log(data)
    navigate('/confirmation');
  }

  return (
    <form onSubmit={submit} className="bookingForm">
        Please reserve a table for 
        <input
          type="text"
          id="fName"
          placeholder="First Name"
          required
          minLength={2}
          maxLength={50}
          value={data.fName}
          onChange={(e) =>  setData({...data, fName: e.target.value})}
        ></input>
        <input
          type="text"
          id="lName"
          placeholder="Last Name"
          minLength={2}
          maxLength={50}
          value={data.lName}
          onChange={(e) => setData({...data, lName: e.target.value})}
        ></input><br/>
        After booking the reservation will be sent to
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={data.email}
          required
          minLength={4}
          maxLength={200}
          onChange={(e) => setData({...data, email: e.target.value})}
        ></input><br/>
        In case of questions we can contact you at 
        <input
          type="tel"
          id="phonenum"
          placeholder="(xxx)-xxx-xxxx"
          value={data.tel}
          required
          minLength={10}
          maxLength={25}
          onChange={(e) => setData({...data, tel: e.target.value})}
        ></input><br/>
         You will be dinning with 
        <input
          type="number"
          id="people"
          placeholder="Number of People"
          value={data.people}
          required
          min={1}
          max={100}
          onChange={(e) => setData({...data, people: e.target.value})}
        ></input> people on
        <input
          type="date"
          id="date"
          required
          value={data.date}
          onChange={handleDateChange}
        ></input>
        <select id="time" required>
          {data.finalTime}
        </select>
        <h2> Additional information</h2>
         <label htmlFor="occasion">Occasion: </label>
        <select
          id="occasion"
          value={data.occasion}
          onChange={(e) => setData({...data, occasion: e.target.value})}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
        <br></br>
        <label htmlFor="preferences">Seating preferences</label>
        <select
          id="preferences"
          value={data.preferences}
          onChange={(e) => setData({...data, preferences: e.target.value})}
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </select>

        <br></br>
        <label htmlFor="comments">Additional Comments</label>   <br/>
        <textarea
          id="comments"
          rows={8}
          cols={50}
          placeholder="Additional Comments"
          value={data.comments}
          onChange={(e) => setData({...data, comments: e.target.value})}
        ></textarea>

        <br/>
        <p>
            Note: You cannot edit your reservation after submission. Pleasedouble-check your answer before submitting your reservation request.
        </p>
        <br/>
        <button className="action-button">
          Book Table
        </button>
    </form>
  );
}
