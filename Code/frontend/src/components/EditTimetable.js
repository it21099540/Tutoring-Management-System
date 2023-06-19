import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function UpdateTimetable() {
  //fetch admin's currnt details
  const [tt, setTimetable] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8070/timetables")
      .then((res) => {
         setTimetable(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  //store update values in variables
  const [TeacherName, setTeacherName] = useState(tt.TeacherName);
 const [Subject,setSubject] = useState(tt.Subject);
 const[Day,setDay] = useState(tt.Day);
 const[TimeStart,setTimeStart]=useState(tt.TimeStart);
 const[TimeEnd,setTimeEnd]=useState(tt.TimeEnd);
 
  function UpdateTimetable2(event) {
    event.preventDefault();

    //create object including updated details
    const updatedDetails = {
      TeacherName,Day,TimeStart,TimeEnd,
    };

    //update the database
    axios
      .put("http://localhost:8070/timetables/updateTimetable", updatedDetails)
      .then(() => {
        alert("Details Updated Successfully !");
        console.log(updatedDetails);
      })
      .catch((err) => {
        console.log(err);
        alert("Update Unsuccessfull !");
      });
  }

  return (
    <div>
      {tt?.map((ttData) => (
        <div key={ttData._id}>
          <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
              <div className="col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  
                  <span className="font-weight-bold"></span>
                </div>
              </div>
              <div className="col-md-5 border-right">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="text-right">Update Timetable</h3>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label className="labels">Teacher Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={ttData.TeacherName}
                        onChange={(event) => {
                          setTeacherName(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="labels">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={ttData.Subject}
                        onChange={(event) => {
                          setSubject(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="labels">Day</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={ttData.Day}
                        onChange={(event) => {
                          setDay(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="labels">Time Start</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={ttData.TimeStart}
                        onChange={(event) => {
                          setTimeStart(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="labels">Time End</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={ttData.TimeEnd}
                        onChange={(event) => {
                          setTimeEnd(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  
                  
                  <div class="mt-5 text-center">
                    <button
                      class="btn btn-primary profile-button"
                      onClick={UpdateTimetable2}
                      type="button"
                    >
                      Save 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpdateTimetable;
