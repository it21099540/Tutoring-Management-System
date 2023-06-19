import React, { Component } from 'react';
import axios from 'axios'; 
import "../css/addEmp.css";



const customStyle = {
     width:"700px"
 
}
 
export default class AddEmployee extends Component {
constructor(props) {
 super(props);
   this.state = {
   UserID:'',
   firstName: '',
   lastName: '',
   email: '',
   phone: '',
   password:''
 } 
}
 
 // When value changes of the fields
handleChange = (event) => {
 this.setState({ [event.target.name]: event.target.value });
}
 
 // To add new employee when user submits the form
handleSubmit = (event) => {
 event.preventDefault();
 const { UserID,firstName, lastName, email, phone,password } = this.state;
 axios.post('http://localhost:8070/employees/addEmployee', {
   UserID:UserID,
   firstName: firstName,
   lastName: lastName,
   email: email,
   phone: phone,
   password:password
 })
 .then((response) => {
     alert("Staff Member Added")
 console.log(response);
 this.props.history.push('/');
 })
 .catch((error) => {
 console.log(error);
 });
}
 
render() {
return (
     
 <div className="container">
   
     <h2 className='head'>Add Staff Member</h2>
 <form className="container3"onSubmit={this.handleSubmit}>
 <label >
 User ID
 <input style={customStyle}
      name="UserID" 
      type="text"
      value={this.state.UserID}
      onChange={this.handleChange}
      className="form-control"
      
      required
      />
 </label>
 <br />

 <label>
 First Name
 <input style={customStyle}
      name="firstName"
      type="text"
      value={this.state.firstName}
      onChange={this.handleChange}
      className="form-control"
      required placeholder="ex: Sarath"
      />
 </label>
 <br />

 <label>
 Last Name
 <input style={customStyle}
      name="lastName"
      type="text"
      value={this.state.lastName}
      onChange={this.handleChange}
      className="form-control"
      placeholder="ex: Perera"/>
 </label>
 <br />

 <label>
 Email
 <input style={customStyle}
      name="email"
      type="text"
      value={this.state.email}
      onChange={this.handleChange}
      className="form-control"
      required placeholder="abc@gmail.com"
      
      />
 </label>
 <br />

 <label>
 Phone No
 <input style={customStyle}
      name="phone"
      type="text"
      pattern="[0-9]{10}" required title="10 digits"
      value={this.state.phone}
      onChange={this.handleChange}
      className="form-control"/>
 </label>


 <br />
 <label>
 Password
 <input style={customStyle}
      name="password"
      type="password"
      value={this.state.password}
      onChange={this.handleChange}
      className="form-control"
      required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
      title="Must contain at least one number and one uppercase and lowercase letter, and at least 10 or more characters"/>
 </label>
 <br />
 <br />
 <br />

 <input
 type="submit"
 value="submit"
 className="btn btn-primary"
/>

 
 </form>

 <a href='/list'><button type="button" class="btn btn-primary" style={{marginLeft:"60%",marginTop:"-5.1%"}} >View Staff Details</button></a>
 
 </div>


 );
 }
 }
 
