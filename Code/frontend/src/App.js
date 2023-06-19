import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/header';
import HomePage from './components/homePage';
import ListEmployee from './components/ListEmployee';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import AddTimetable from './components/AddTimetable';
import ListTimetable from './components/ListTimetable';
import EditTimetable from './components/EditTimetable';
import AddNotice from './components/AddNotice';
import ListNotice from './components/ListNotice';
import ProfilePage from './components/StaffProfile';
import UpdateNotice from './components/updateNotice';
import Question from './components/question';
export default function App () {
return (
<div>
    <Header/>
    <Router>
      <Routes>
            <Route path='/' element={<HomePage/>}/> 
            <Route path='/list' element={<ListEmployee/>} /> 
            <Route path='/addemployee' element={<AddEmployee/>} />
            <Route path='/editEmployee' element={<EditEmployee/>} />
            <Route path='/addtimetable' element={<AddTimetable/>}/>
            <Route path='/get' element={<ListTimetable/>}/>
            <Route path='/editTimetable' element={<EditTimetable/>}/>
            <Route path='/addNotice' element={<AddNotice/>}/>
            <Route path='/listNotice' element={<ListNotice/>}/>
            <Route path='/profile' element={<ProfilePage/>}/> 
            <Route path='/updateNotice' element={<UpdateNotice/>}/>
            <Route path='/question' element={<Question/>}/>
            

     </Routes>
    </Router> 
  
</div>
);
}


 


 
 
 
