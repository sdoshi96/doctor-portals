import React, { Component } from "react";
import { set } from "idb-keyval";


export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', password:'', city:'' };
      }
    
    nameHandleChange = (event) => {
        this.setState({name: event.target.value});
    }
    emailHandleChange = (event) => {
        this.setState({email: event.target.value});
    }
    passwordHandleChange = (event) => {
        this.setState({password: event.target.value});
    }
    cityHandleChange = (event) => {
        this.setState({city: event.target.value});
    }

    register = async () => {
        await set(this.props.email, this.props.email)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="email" className="form-control" id="exampleInputName" aria-describedby="nameHelp" onChange={this.nameHandleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.emailHandleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.passwordHandleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputCity">City</label>
                            <input type="password" className="form-control" id="exampleInputCity" onChange={this.cityHandleChange} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}