import React, { Component } from 'react';

class Login extends Component {
    constructor () {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const { email, password} = this.state;
        const user = {
            email,
            password
        }
        console.log(user);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <input type="email" placeholder="email" onChange ={this.handleInputChange }
                         value={ this.state.email } name="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="password" onChange ={this.handleInputChange }
                         value={ this.state.password} name="password" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>    
                </form>
            </div>
        )
    }
}

export default Login;