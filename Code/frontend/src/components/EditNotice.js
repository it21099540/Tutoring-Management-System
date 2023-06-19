import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default class EditNotice extends Component {
  constructor(props) {
    super(props)
    this.onChangeNotice = this.onChangeNotice.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // State
    this.state = {
        Notice:'',
        Date:''
    }
  }
  componentDidMount() {
    axios.get('http://localhost:8070/notices/editNotice/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          Notice: res.data.Notice,
          Date: res.data.Date
         
        });
      })
      .catch((error) => {
        console.log(error);
      })
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
      Date: this.state.Date
      
    };
    axios.post('http://localhost:8070/notices/updateNotice/' + this.props.match.params.id, noticeObject)
      .then((res) => {
        console.log(res.data)
        console.log(' successfully updated')
      }).catch((error) => {
        console.log(error)
      })
    // Redirect to Student List 
    this.props.history.push('/ListNotice')
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
       
          <Form.Label>Notice</Form.Label>
          <Form.Control type="text" value={this.state.Notice} onChange={this.onChangeNotice} />
        
        
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" value={this.state.Date} onChange={this.onChangeDate} />
       
        
        <Button variant="danger" size="lg" block="block" type="submit">
          Update Student
        </Button>
      </Form>
    </div>);
  }
}