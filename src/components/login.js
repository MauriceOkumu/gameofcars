import React, { Component } from 'react';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentication';

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
        this.props.loginUser(user, this.props.history);
    }
    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/');
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <input type="email" placeholder="email" 
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.email
                           })}
                         onChange ={this.handleInputChange }
                         value={ this.state.email } name="email" className="form-control"/>
                         {errors.email && (<div classnames="invalid-feedback">{errors.email}</div>)}
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="password" 
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.password
                           })}
                        onChange ={this.handleInputChange }
                         value={ this.state.password} name="password" className="form-control"/>
                         {errors.password && (<div classnames="invalid-feedback">{errors.password}</div>)}
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>    
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    errors: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors,
    auth: state.auth
});

const mapDispatchToProps = dispatch => bindActionCreators({loginUser}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Login);