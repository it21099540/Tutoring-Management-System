import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../css/notice.css';

const customStyle = {
  width:"700px"

}
export default class AddNotice extends Component {
  constructor(props) {
    super(props)
    // Setting up functions
    this.onChangeNotice = this.onChangeNotice.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);
    // Setting up state
    this.state = {
      Notice:'',
      Date:''
    }
  }
  onChangeNotice(e) {
    this.setState({ Notice: e.target.value })
  }
  onChangeDate(e) {
    this.setState({ Date: e.target.value })
  }
  
  onSubmit(e) {
    e.preventDefault()
    const noticeObject = {
      Notice: this.state.Notice,
      Date: this.state.Date,
      
    };
    axios.post('http://localhost:8070/notices/addNotice', noticeObject)
      .then(res =>
         console.log(res.data));
         alert("Notice Added")
    this.setState({ Notice:'', Date:''})
  }
  render() {
    return (<div className="form-wrapper">
      <h2 className="header1">Add Notice</h2>
      <Form className="container4" onSubmit={this.onSubmit}>
       
          <Form.Label>Notice</Form.Label> <br/>
         
          <textarea style={customStyle} type="text" value={this.state.Notice} onChange={this.onChangeNotice} >
          </textarea>
          
        <br/>
       
          <Form.Label>Date</Form.Label>
          <Form.Control style={customStyle}type="date" value={this.state.Date} onChange={this.onChangeDate} />
        
       <br/>
          <input
        type="submit"
        value="Add Notice"
        className="btn btn-primary"
        />
      </Form>
    </div>);
  }
}