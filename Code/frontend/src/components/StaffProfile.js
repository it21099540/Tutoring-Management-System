import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
 
} from 'mdb-react-ui-kit';
import '../css/staff.css';

export default function ProfilePage() {
  return (
    <section style={{ backgroundColor: '#eee' }}>
        <h2>Staff Profile</h2>
      <MDBContainer className="py-5">
       

        <MDBRow >
          <MDBCol lg="4">
            <MDBCard className='image'>
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                  <br/>
                  <br/>
                
                
              </MDBCardBody>
            </MDBCard>

            
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody >
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>First Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted"></MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Last Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted"></MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted"></MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted"></MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                
              </MDBCardBody>
            </MDBCard>

           

              
                    
              </MDBCol>
            </MDBRow>
         
      </MDBContainer>
      <div className='container5'>
        
        <a href='/addtimetable'><button type="button" class="btn btn-primary" >Add Timetable</button></a>&nbsp;&nbsp;
        
        
       
        <a href='/addNotice'><button type="button" class="btn btn-primary" >Add Notice</button></a>&nbsp;&nbsp;

        <a href="/addemployee"><button type="button" class="btn btn-primary" >Add Staff</button></a><br/><br/>
       
      </div>
      
    </section>
  );
}