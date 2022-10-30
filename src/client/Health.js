import React, {useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
export default function Health(){
    
  const [form, setForm] = useState({
    appointment_id: "",
    date: "",
    doctor: "",
    time: "",
    cause: ""
  });

  // function success(){
  //   return (
  //     <h3>Form Submitted Successfully!</h3>
  //   );
  // }

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
  
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newAppointment = { ...form };
    if(newAppointment.doctor === "" || newAppointment.doctor === "Select"){
      window.alert("Select the doctor!");
      setForm({ appointment_id: newAppointment.appointment_id,
      date: newAppointment.date,
      doctor: newAppointment.doctor,
      time: newAppointment.time,
      cause: newAppointment.cause});
    }else{
      console.log(newAppointment);
  
      await fetch("http://localhost:5000/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAppointment),
      })
      .catch(error => {
        window.alert(error);
        return;
      });

      setForm({ appointment_id: "",
      date: "",
      doctor: "",
      time: "",
      cause: ""});
    }
    
  
   
  }

    return(
        <div>
          <Header title="Appointment Booking" />
          <div className="container">
            <form className="p-4 appointmentForm" onSubmit={onSubmit}>
              
              <div className="form-group row">


                <div className="form-group top col-md-7 mx-auto">
                  <label for="date">Date*</label>
                  <input type="date" className="form-control border border-dark rounded-0" id="date" value={form.date}
           onChange={(e) => updateForm({ date: e.target.value })} required />
                </div>

              </div>

            <div className="form-group row">

              <div className="form-group middle col-md-7 mx-auto">
                <label for="doctor">Doctor Name*</label>
                <select id="doctor" className="form-control border border-dark rounded-0" value={form.doctor}
           onChange={(e) => updateForm({ doctor: e.target.value })} required >
                  <option>Select</option>
                  <option>Doc1</option>
                  <option>Doc2</option>
                </select>
              </div>

              <div className="form-group col-md-7 mx-auto middle">
                <label for="time">Appointment Time*</label>
                <input type="time" class="form-control border border-dark rounded-0" id="time" value={form.time}
           onChange={(e) => updateForm({ time: e.target.value })} required />
              </div>
            </div>
          
              <div className="form-group bottom col-md-7 mx-auto">
                <label for="cause">Cause of Visit*</label>
                <textarea className="form-control border border-dark rounded-0" rows="3" id="cause" value={form.cause}
           onChange={(e) => updateForm({ cause: e.target.value })} required />
              </div>
              <p className="text-secondary d-flex justify-content-center">Mandatory fields are marked with asterisk*</p>
              
              <button type="submit" class="btn btn-primary btn-sm mt-4 mb-2 submit-button d-block mx-auto rounded-1">Submit</button>
              <div className="d-flex justify-content-center">
                <Link className="btn btn-danger rounded-1 btn-sm" to="">Cancel</Link>
              </div>
              
              
            </form>
          </div>
          
         
        </div>
    );
}