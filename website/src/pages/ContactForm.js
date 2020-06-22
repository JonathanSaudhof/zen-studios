import React, { Component } from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"

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
        <form method="post" action="/contactform">
          <label htmlFor="contact_reason">
            <select
              className="input"
              name="contact_reason"
              id="contact_reason"
              value=""
            >
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
              placeholder="Name*"
              required
            />
          </label>
          <label htmlFor="first_name">
            <input
              className="input"
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Vorname*"
              required
            />
          </label>
          <label htmlFor="email">
            <input
              className="input"
              type="email"
              name="email"
              id="email"
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
              placeholder="Telefon (optional)"
            />
          </label>
          <label htmlFor="message">
            <textarea
              name="message"
              id="message"
              rows="5"
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
              placeholder="Instrument"
            />
          </label>
          <label htmlFor="band_members">
            <select className="dropdown" name="band_members" id="band_members">
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
              name="practice_days"
              id="practice_days"
            >
              <option value="" selected>
                Probentage/Woche
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3+">3+</option>
            </select>
          </label>
          <label htmlFor="musical_style">
            <input
              className="input"
              type="text"
              name="musical_style"
              id="musical_style"
              placeholder="Musikstil"
            />
          </label>
          <div className="checkboxes">
            <p>
              <input
                type="checkbox"
                id="recording"
                name="recording"
                value="recording"
              />
              <label htmlFor="recording">Aufnahme</label>
            </p>

            <p>
              <input type="checkbox" id="mixing" name="mixing" value="mixing" />
              <label htmlFor="mixing">Mixing</label>
            </p>

            <p>
              <input
                type="checkbox"
                id="videoshoot"
                name="videoshoot"
                value="videoshoot"
              />
              <label htmlFor="videoshoot">Videodreh</label>
            </p>

            <span>* Pflichtfeld</span>
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
  background-color: #eeeeee;
  height: 100%;
  width: 350px;
  display: flex;
  justify-content: center;
  form {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  form textarea {
    width: 100%;
    height: 150px;
    padding-left: 10px;
  }

  .input {
    width: 100%;
    height: 40px;
    padding-left: 10px;
  }

  .dropdown {
    width: 100%;
    height: 40px;
  }

  .checkboxes {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }

  .checkboxes label {
    margin-left: 10px;
  }

  .checkboxes p,
  span {
    width: 100%;
    height: 40px;
  }

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
    color: #ffffff;
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
      border: 2px solid #d6300a;
    }
  }
`

const contactFormPage = props => {
  console.log("test")
  return (
    <div>
      <ContactForm></ContactForm>
    </div>
  )
}

export default contactFormPage
