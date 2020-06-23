import React, { Component } from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import Layout from "../layouts/layout"

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
    console.log(
      "EVENT NAME:",
      event.target.name,
      "EVENT VALUE",
      event.target.value
    )
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleCheckboxChange = event => {
    console.log(
      "EVENT NAME:",
      event.target.name,
      "EVENT VALUE",
      event.target.value
    )
    this.setState({
      [event.target.name]: event.target.checked,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log("Submit clicked")
    console.log(event)
    axios.post("https://", {
      contactReason: this.state.contactReason, //
      name: this.state.name, //
      firstName: this.state.firstName, //
      email: this.state.email, //
      phone: this.state.phone, //
      message: this.state.message, //
      instrument: this.state.instrument, //
      nrOfBandMembers: this.state.nrOfBandMembers, //
      nrOfPracticeDaysPerWeek: this.state.nrOfPracticeDaysPerWeek, //
      musicalStyle: this.state.musicalStyle, //
      recording: this.state.recording, //
      mixing: this.state.mixing, //
      videoShoot: this.state.videoShoot, //
    })
  }

  render() {
    return (
      <MyFormContainer>
        <form
          method="post"
          action="https://formspree.io/slady@zenstudios.de "
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="contactReason">
            <select
              className="dropdown"
              name="contactReason"
              value={this.state.contactReason}
              onChange={this.handleChange}
              id="contact_reason"
            >
              <option value="" selected>
                Kontaktgrund
              </option>
              <option value="music_lesson">Musikunterricht</option>
              <option value="rehearsal_room">Proberaum</option>
              <option value="recording">Aufnahmen</option>
              <option value="networking_events">Networking/Events</option>
            </select>
          </label>
          <label htmlFor="name">
            <input
              className="input"
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Name*"
              required
            />
          </label>
          <label htmlFor="first_name">
            <input
              className="input"
              type="text"
              name="firstName"
              id="first_name"
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder="Vorname*"
              required
            />
          </label>
          <label htmlFor="email">
            <input
              className="input"
              type="email"
              name="_replyto"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="E-Mail*"
              required
            />
          </label>
          <label htmlFor="phone">
            <input
              className="input"
              type="tel"
              name="phone"
              id="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              placeholder="Telefon (optional)"
            />
          </label>
          <label htmlFor="message">
            <textarea
              name="message"
              id="message"
              rows="5"
              value={this.state.message}
              onChange={this.handleChange}
              placeholder="Nachricht*"
              required
            />
          </label>
          <label htmlFor="instrument">
            <input
              className="input"
              type="text"
              name="instrument"
              id="instrument"
              value={this.state.instrument}
              onChange={this.handleChange}
              placeholder="Instrument"
            />
          </label>
          <label htmlFor="band_members">
            <select
              className="dropdown"
              name="nrOfBandMembers"
              id="band_members"
              value={this.state.nrOfBandMembers}
              onChange={this.handleChange}
            >
              <option value="" selected>
                Anzahl Bandmitglieder
              </option>
              <option value="1-3">1-3</option>
              <option value="4-6">4-6</option>
              <option value="6+">6+</option>
            </select>
          </label>
          <label htmlFor="practice_days">
            <select
              className="dropdown"
              name="nrOfPracticeDaysPerWeek"
              id="practice_days"
              value={this.state.nrOfPracticeDaysPerWeek}
              onChange={this.handleChange}
            >
              <option value="" selected>
                Probentage/Woche
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </label>
          <label htmlFor="musical_style">
            <input
              className="input"
              type="text"
              name="musicalStyle"
              id="musical_style"
              value={this.state.musicalStyle}
              onChange={this.handleChange}
              placeholder="Musikstil"
            />
          </label>
          <div className="checkboxes">
            <p>
              <input
                type="checkbox"
                id="recording"
                name="recording"
                checked={this.state.recording}
                onChange={this.handleCheckboxChange}
              />
              <label htmlFor="recording">Aufnahme</label>
            </p>

            <p>
              <input
                type="checkbox"
                id="mixing"
                name="mixing"
                checked={this.state.mixing}
                onChange={this.handleCheckboxChange}
              />
              <label htmlFor="mixing">Mixing</label>
            </p>

            <p>
              <input
                type="checkbox"
                id="videoshoot"
                name="videoShoot"
                checked={this.state.videoShoot}
                onChange={this.handleCheckboxChange}
              />
              <label htmlFor="videoshoot">Videodreh</label>
            </p>

            <span className="mandatory-info">* Pflichtfeld</span>
            <button className="btn btn-primary" type="submit">
              Senden
            </button>
          </div>
        </form>
      </MyFormContainer>
    )
  }
}

const MyFormContainer = styled(Container)`
  /* form container */
  background-color: #eeeeee;
  height: 100%;
  width: 350px;
  padding-top: 30px;
  margin: 50px auto;
  border: 1px solid #888888;
  border-radius: 3px;
  display: flex;
  justify-content: center;

  /* form */
  form {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  /* message field */
  form textarea {
    width: 100%;
    height: 200px;
    padding-left: 10px;
    border: 1px solid #888888;
    border-radius: 3px;
    box-sizing: border-box;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #888888;
    background: #ffffff;
  }

  /* input fields */
  .input {
    width: 100%;
    height: 40px;
    padding-left: 10px;
    border: 1px solid #888888;
    border-radius: 3px;
    box-sizing: border-box;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #888888;
    background: #ffffff;
  }

  ${"" /* input::placeholder {
    color: red;
  } */}

  /* dropdown fields */
  .dropdown {
    width: 100%;
    height: 40px;
    padding-left: 10px;
    ${"" /* -webkit-appearance: none; */}
    border: 1px solid #888888;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #888888;
    background: #ffffff;
  }

  ${"" /* .dropdown select option {
    color: red;
  }
  select:not(:checked) {
    color: gray;
  } */}

  /* checkbox container */
  .checkboxes {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }

  /* checkbox icon styling */
  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label::before {
    width: 15px;
    height: 15px;
    margin-top: 5px;
    margin-left: 5px;
    border-radius: 2px;
    border: 2px solid #cf6e14;
    background-color: #fff;
    display: block;
    content: "";
    float: left;
    margin-right: 5px;
  }
  input[type="checkbox"]:checked + label::before {
    box-shadow: inset 0px 0px 0px 1px #fff;
    background-color: #e98120;
  }

  /* checkboxes including text */
  .checkboxes p {
    width: 100%;
    height: 40px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    color: #141414;
  }

  /* mandatory info line */
  .mandatory-info {
    width: 100%;
    height: 40px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    color: #888888;
  }

  /* form submit button */
  .checkboxes button {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
    width: 100%;
    height: 60px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      #cf6e14;
    border: 2px solid #d5e3fb;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    &:hover {
      background-color: ${props => props.theme.blockCTAHover};
      border: 3px solid #d6300a;
    }
  }
`

const HeadlineWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
  h2 {
    color: #fff;
  }
`

const contactFormPage = props => {
  console.log("test")
  return (
    <Layout showHeader showLogo>
      <HeadlineWrapper>
        <h2>Schreibe uns eine Nachricht!</h2>
      </HeadlineWrapper>
      <ContactForm></ContactForm>
    </Layout>
  )
}

export default contactFormPage
