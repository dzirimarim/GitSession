import React, { Component } from 'react'
import EmployeeService from '../Services/EmployeeService';

export default class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id : this.props.match.params.id , 
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.UpdateEmployee= this.UpdateEmployee.bind(this);
    }  
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({ firstName : employee.firstName ,
            lastName : employee.lastName , 
            emailId : employee.emailId }) ; 
        });
    }
    UpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName : this.state.firstName , lastName : this.state.lastName , emailId: this.state.emailId};
       
        console.log('employee => ' + JSON.stringify(employee)); 
        EmployeeService.updateEmployee(employee ,this.state.id ).then(res => {
            this.props.history.push('/employees');
        });
        
    }
    changeFirstNameHandler = (event)=>{
        this.setState({firstName: event.target.value});
    } 
    changeLastNameHandler = (event)=>{
        this.setState({lastName: event.target.value});
    }  
    changeEmailIdHandler = (event)=>{
        this.setState({emailId: event.target.value});
    }   
    cancel (){
        this.props.history.push('/employees')
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Update Employee</h3>
                            <div className="card-body">
                                <form>
                                <div className="form-group" >
                                        <label>First Name : </label>
                                        <input placeholder="first Name " name="firstname" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group" >
                                        <label>Last Name : </label>
                                        <input placeholder="Last Name " name="lastname" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className="form-group" >
                                        <label>Email ID : </label>
                                        <input placeholder="Email Address " name="emailId" className="form-control" value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.UpdateEmployee} >Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
