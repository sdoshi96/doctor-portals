import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { get } from 'idb-keyval';
import './Login.css'


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password:'', city:'' };
      }
      emailHandleChange = (event) => {
        this.setState({email: event.target.value});
      }
      passwordHandleChange = (event) => {
        this.setState({password: event.target.value});
      }

      authenticate = async () => {
        const value = await get(this.props.password)
        console.log(value)
      }

    render() {
        
        return (
            <div className="container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.emailHandleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.passwordHandleChange} />
                        </div>
                        <p>Dont have any account?
                            <Link to="/signup" style={{ textDecoration: 'none' }}>
                                <span>Register</span>
                            </Link>
                        </p>
                        <button type="submit" className="btn btn-primary" onClick={this.authenticate}>Submit</button>
                    </form>
            </div>
        );
    }
}