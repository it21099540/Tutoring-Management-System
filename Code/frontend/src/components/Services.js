import axios from 'axios';
 
export default class EmployeeService {
 
 deleteEmployee(id) {
 axios.get('http://localhost:8070/employees/deleteEmployee/' + id)
 .then(() => {
 console.log('Employee Deleted !!!')
 })
 .catch((error) => {
 console.log(error)
 })
 }
 }

