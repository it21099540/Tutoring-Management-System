import React, { Component } from 'react';
import axios from 'axios';
import '../css/tt.css';
const customStyle = {
    width:"700px"

}
 
export default class AddTimetable extends Component {
constructor(props) {
super(props);
 this.state = {
    TeacherName:'',
    Subject:'',
    Day:'',
    TimeStart:'',
    TimeEnd:''
 }
}
 
 // When value changes of the fields
handleChange = (event) => {
 this.setState({ [event.target.name]: event.target.value });
}
 
 // To add new employee when user submits the form
handleSubmit = (event) => {
 event.preventDefault();
 const { TeacherName,Subject,Day,TimeStart,TimeEnd } = this.state;
 axios.post('http://localhost:8070/timetables/addTimetable', {
   TeacherName:TeacherName,
   Subject:Subject,
   Day:Day,
   TimeStart:TimeStart,
   TimeEnd:TimeEnd
 })
 .then((response) => {
    alert("Timetable Added")
 console.log(response);
 this.props.history.push('/');
 })
 .catch((error) => {
 console.log(error);
 });
}
 
        render() {
        return (
        <div className="container" >
            <h4 className='header2'>Add Timetable</h4>
        <form className='container2'   onSubmit={this.handleSubmit}>
        <label >
            Teacher Name
        <input style={customStyle}
            name="TeacherName"
            type="text"
            value={this.state.TeacherName}
            onChange={this.handleChange}
            className="form-control"
            required/>
        </label>
        <br />
        
        <label>
            Subject
        <input style={customStyle}
            name="Subject"
            type="text"
            value={this.state.Subject}
            onChange={this.handleChange}
            className="form-control" 
            required/>
        </label>
        <br />

        <label>
            Day
        <input style={customStyle}
            name="Day"
            type="text"
            value={this.state.Day}
            onChange={this.handleChange}
            className="form-control"
            required/>
        </label>
        <br />

        <label>
            Time Start
        <input style={customStyle}
            name="TimeStart"
            type="text"
            value={this.state.TimeStart}
            onChange={this.handleChange}
            className="form-control"/>
        </label>
        <br />

        <label>
            Time End
        <input style={customStyle}
            name="TimeEnd"
            type="text"
            value={this.state.TimeEnd}
            onChange={this.handleChange}
            className="form-control"/>
        </label>
        <br/>
        <br/>

        <input
        type="submit"
        value="submit"
        className="btn btn-primary"
        />
       
        </form>
        
        </div>
 );
 }
 }
 
