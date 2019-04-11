import React, { Component } from 'react';

class Register extends Component {
    constructor () {
        super();
        this.state = {
            name: '',
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
        const { name, email, password} = this.state;
        const user = {
            name,
            email,
            password
        }
        console.log(user);
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <input type="text" placeholder="name" onChange ={this.handleInputChange }
                         value={ this.state.name } name="name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="email" onChange ={this.handleInputChange }
                         value={ this.state.email } name="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="password" onChange ={this.handleInputChange }
                         value={ this.state.password} name="password" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>    
                </form>
            </div>
        )
    }
}

export default Register;