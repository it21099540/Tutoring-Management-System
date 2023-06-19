import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';

import TimetableCard from "./timetableCard";
import "../css/tt.css";


export default class ListTimetable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timetables: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:8070/timetables/')
      .then(res => {
        this.setState({
          timetables: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  DataTable() {
    return this.state.timetables.map((res, i) => {
      
        return <TimetableCard obj={res} key={i} />;
      });
  }

  render() {
    return (<div className="table-wrapper">
      <h2 className="header2">Timetables</h2><br/>
       <Table style={{borderStyle:"none"}}className="card1"striped bordered hover >
        
          <tr>Teacher Name</tr>
          <th>Subject</th>
          <th>Date</th>
          <th>Time Start</th>
          <th>Time End</th>
        
        
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table> 
      {/* <a href="https://google-calendar-clone.netlify.app/">Calendar</a> */}
    </div>);
  }
}