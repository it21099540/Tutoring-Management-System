import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';

import NoticeCard from "./noticeCard";
import "../css/notice.css";


export default class ListNotice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notices: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:8070/notices/')
      .then(res => {
        this.setState({
          notices: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  DataTable() {
    return this.state.notices.map((res, i) => {
      
        return <NoticeCard obj={res} key={i} />;
      });
  }

  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover >
        <h2 className="header1">Notices</h2>
        <tbody className="card">
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}