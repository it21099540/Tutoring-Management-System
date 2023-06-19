import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function UpdateEmployee() {
  //fetch admin's currnt details
  const [emp, setEmp] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8070/employees")
      .then((res) => {
        setEmp(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  //store update values in variables
  const [firstName, setfirstName] = useState(emp.firstName);
  const [lastName, setlastName] = useState(emp.lastName);
  const [email, setemail] = useState(emp.email);
  const [phone, setphone] = useState(emp.phone);
  
 
  function UpdateEmployee2(event) {
    event.preventDefault();

    //create object including updated details
    const updatedDetails = {
      firstName,lastName,email,phone,
    };

    //update the database
    axios
      .post("http://localhost:8070/employees/updateEmployee", updatedDetails)
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
      {emp?.map((empData) => (
        <div key={empData._id}>
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
                    <h3 className="text-right">Update Satff Member</h3>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label className="labels">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={empData.firstName}
                        onChange={(event) => {
                          setfirstName(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="labels">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={empData.lastName}
                        onChange={(event) => {
                          setlastName(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="labels">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={empData.email}
                        onChange={(event) => {
                          setemail(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="labels">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={empData.phone}
                        onChange={(event) => {
                          setphone(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  
                  
                  <div class="mt-5 text-center">
                    <button
                      class="btn btn-primary profile-button"
                      onClick={UpdateEmployee2}
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

export default UpdateEmployee;
