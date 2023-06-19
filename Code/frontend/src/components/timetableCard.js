import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import "../css/tt.css";
export default class TimetableCard extends Component {
    constructor(props) {
        super(props);
        this.deleteTimetable = this.deleteTimetable.bind(this);
    }
    deleteTimetable() {
        axios.delete('http://localhost:8070/timetables/deleteTimetable/' + this.props.obj._id)
            .then((res) => {
                console.log(' successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            

            
            
            <tr>
                <td>{this.props.obj.TeacherName}</td>
                <td>{this.props.obj.Subject}</td>
                <td>{this.props.obj.Day}</td>
                <td>{this.props.obj.TimeStart}</td>
                <td>{this.props.obj.TimeEnd}</td>
                
                 <td>
                    <a href ="/editTimetable"><button type="button" class="btn btn-primary" >Edit</button>
                       
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button bsstyle="danger" style={{borderStyle:"None"}} onClick={this.deleteTimetable}>Delete</Button>
                </td> 
            </tr>
        );
    }
}