import React, { Component } from 'react';

class Contact extends Component {
  giveEm = () => {
    alert("OK, OK! Du får den bare her: laosdirg@gmail.com :)");
  }

  render() {
    return (
      <div className="Crib-contact container">
        <form>
          <div className="row">
            <div className="six columns">
              <label for="exampleEmailInput">Din email</label>
              <input className="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput"></input>
            </div>
            <div className="six columns">
              <label for="exampleRecipientInput">Grunden for kontakt</label>
              <select className="u-full-width" id="exampleRecipientInput">
                <option value="Option 3">Må jeg få jeres mail?</option>
              </select>
            </div>
          </div>
          <label for="exampleMessage">Besked</label>
          <textarea className="u-full-width" placeholder="Hej Laosdirg …" id="exampleMessage"></textarea>
          <input className="button-primary" type="submit" value="Send" onClick={(e) => this.giveEm(e)}></input>
        </form>
      </div>
    );
  }
}

export default Contact;
