import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function UpdateNotice() {
  //fetch admin's currnt details
  const [notice, setNotices] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8070/notices")
      .then((res) => {
        setNotices(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  //store update values in variables
  const [Notice, setNotice] = useState(notice.Notice);
  const [Date, setDate] = useState(notice.Date);
 
  function UpdateNotice2(event) {
    event.preventDefault();

    //create object including updated details
    const updatedDetails = {
      Notice,Date,
    };

    //update the database
    axios
      .put("http://localhost:8070/notices/updateNotice/", updatedDetails)
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
      {notice?.map((noticeData) => (
        <div key={noticeData._id}>
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
                    <h3 className="text-right">Update Notice</h3>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label className="labels">Notice</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={noticeData.Notice}
                        onChange={(event) => {
                          setNotice(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="labels">Date</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={noticeData.Date}
                        onChange={(event) => {
                          setDate(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  
                  
                  <div class="mt-5 text-center">
                    <button
                      class="btn btn-primary profile-button"
                      onClick={UpdateNotice2}
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

export default UpdateNotice;
