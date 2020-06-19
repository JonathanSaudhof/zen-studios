import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import axios from "axios"

class ContactForm extends Component {
  state = {
    contactReason: "",
    name: "",
    firstName: "",
    email: "",
    phone: "",
    message: "",
    instrument: "",
    nrOfBandMembers: "",
    nrOfPracticeDaysPerWeek: "",
    musicalStyle: "",
    recording: "",
    mixing: "",
    videoShoot: "",
  }

  handleChange = event => {
    console.log(event.target.name, event.target.value)
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  sendMessage = event => {
    event.preventDefault()
    console.log("Submit clicked")
    console.log(event)
    axios.post("https://", {
      contactReason: this.state.contactReason,
      name: this.state.name,
      firstName: this.state.firstName,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
      instrument: this.state.instrument,
      nrOfBandMembers: this.state.nrOfBandMembers,
      nrOfPracticeDaysPerWeek: this.state.nrOfPracticeDaysPerWeek,
      musicalStyle: this.state.musicalStyle,
      recording: this.state.recording,
      mixing: this.state.mixing,
      videoShoot: this.state.videoShoot,
    })
  }

  render() {
    return <div></div>
  }
}

const contactFormPage = props => {
  return <div>hello</div>
}

export default contactFormPage
