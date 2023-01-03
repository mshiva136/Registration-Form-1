import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    isTrue: false,
    first: '',
    last: '',
    condition1: false,
    condition2: false,
  }

  resetForm = () => {
    this.setState({isTrue: false})
  }

  firstName = e => {
    this.setState({first: e.target.value})
  }

  secondName = e => {
    this.setState({last: e.target.value})
  }

  checkField1 = e => {
    if (e.target.value === '') {
      this.setState({condition1: true})
    } else {
      this.setState({condition1: false})
    }
  }

  checkField2 = e => {
    if (e.target.value === '') {
      this.setState({condition2: true})
    } else {
      this.setState({condition2: false})
    }
  }

  submitForm = e => {
    e.preventDefault()
    const {first, last} = this.state
    if (first !== '' && last !== '') {
      console.log('bksd')
      this.setState({
        isTrue: true,
        condition1: false,
        condition2: false,
        first: '',
        last: '',
      })
    } else if (first === '' && last !== '') {
      this.setState({condition1: true, condition2: false})
    } else if (first !== '' && last === '') {
      this.setState({condition1: false, condition2: true})
    } else {
      this.setState({condition1: true, condition2: true})
    }
  }

  render() {
    const {isTrue, first, last, condition1, condition2} = this.state
    const firstClass = condition1 ? 'red' : ''
    const lastClass = condition2 ? 'red' : ''
    return (
      <div className="bg-registration">
        <h1 className="main-heading">Registration</h1>
        {!isTrue && (
          <form className="form-element" onSubmit={this.submitForm}>
            <label className="label" htmlFor="input1">
              FIRST NAME
            </label>
            <input
              className={`name ${firstClass}`}
              type="text"
              id="input1"
              onChange={this.firstName}
              onBlur={this.checkField1}
              value={first}
              placeholder="First name"
            />
            {condition1 && <p className="err-msg">Required</p>}
            <label className="label" htmlFor="input2">
              LAST NAME
            </label>
            <input
              className={`name ${lastClass}`}
              type="text"
              id="input2"
              onChange={this.secondName}
              value={last}
              onBlur={this.checkField2}
              placeholder="Last name"
            />
            {condition2 && <p className="err-msg">Required</p>}
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        )}
        {isTrue && (
          <>
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              className="success-image"
              alt="success"
            />
            <p className="submitted">Submitted Successfully</p>
            <button
              type="button"
              className="try-again"
              onClick={this.resetForm}
            >
              Submit Another Response
            </button>
          </>
        )}
      </div>
    )
  }
}

export default RegistrationForm
