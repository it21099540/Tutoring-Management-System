import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import "../css/notice.css";

export default class NoticeCard extends Component {
    constructor(props) {
        super(props);
        this.deleteNotice = this.deleteNotice.bind(this);
    }
    deleteNotice() {
        axios.delete('http://localhost:8070/notices/deleteNotice/' + this.props.obj._id)
            .then((res) => {
                console.log(' successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <tr className='card'>
                <td>{this.props.obj.Notice}</td>
                <td>{this.props.obj.Date}</td>
                
                <td>
                    <a href ="/updateNotice"><button type="button" class="btn btn-primary" >Edit</button>
                        
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button bsstyle="danger" style={{borderStyle:"None"}} onClick={this.deleteNotice}>Delete</Button>
                </td>
            </tr>
        );
    }
}