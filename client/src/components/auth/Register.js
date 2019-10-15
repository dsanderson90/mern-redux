import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
  }

  onChange = e => {
    this.setState( { [e.target.id]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }
    console.log(newUser)
  };

  render() {
    const { errors } = this.state;

    return (
      <div className='container'>
        <div className='row'>
          <div className='col s8 offset-s2'>

              <Link
                to='/'
                className='btn-flat waves-effect'
              >
                <i className='material-icons left'>keyboard_backspace</i>
                Home
              </Link>

            <div
              className='col s12'
              style={{ paddingLeft: '11.25px'}}>
                <h4>
                  <b>Register</b> below
                </h4>
                <p className='grey-text text-darken-1'>
                  Already have an account?

                  <Link to='login'>
                    Login
                  </Link>

                  <form noValidate onSubmit={this.onSubmit}>
                    <div className='input-field col s12'>
                      <input
                        onChange={this.onChange}
                        value={this.state.name}
                        error={errors.name}
                        id='name'
                        type='text'
                      />
                      <label htmlFor='name'>Name</label>
                    </div>
                    <div className='input-field col s12'>
                      <input
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id='email'
                        type='text'
                      />
                      <label htmlFor='email'>Email</label>
                    </div>
                    <div className='input-field col s12'>
                    <input
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors.password}
                        id='password'
                        type='text'
                      />
                      <label htmlFor='password'>Password</label>
                    </div>
                    <div className='input-field col s12'>
                    <input
                        onChange={this.onChange}
                        value={this.state.password2}
                        error={errors.password2}
                        id='password2'
                        type='text'
                      />
                      <label htmlFor='password2'>Confirm Password</label>
                    </div>
                    <div className='col s12'>
                      <button
                      style={{
                        width: '150px',
                        borderRadius: '3px',
                        letterSpacing: '1.5px',
                        marginTop: '1rem'
                      }}
                      type='submit'
                      className='btn btn-large waves-effect waves-light hoverable blue accent-3'>
                      >
                      Sign Up
                      </button>
                      </div>
                  </form>
                </p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}