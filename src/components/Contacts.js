import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit } = useForm();

  const serviceID = "service_rxv95bx";
  const templateID = "template_nnnqw6p";
  const userID = "user_ICffHtKJ6iAAUIMyhb9Nm";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        contact_number: data.contact_number,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userID
    )
    r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Formular gesendet, ich werde Sie in der nächste");
      }).catch(err => console.error(`Etwas ist schief gelaufen!! ${err}`));
  }

  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>kontakt</h1>
        <p>Neue Ideen, Intersse an einem Proket oder auch für allgemeine Fragen, füllen die Kontaktformular!</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  for="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="user_name"
                  {
                    ...register('test', {
                      required: "Beschreibung..",
                      maxLength: {
                        value: 20,
                        message: "Name muss weniger als 20 Buchstaben haben"
                      }
                    })
                  }
                />
                <div className="line"></div>
              </div>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                for="number"
                  type="text"
                  className="form-control"
                  placeholder="Telefon oder Handy-Nummer"
                  name="number"
                  {
                    ...register('test', {
                      required: "Geben Sie Ihre Telefon oder Handy-Nummer ein! ",
                    })
                  }
                />
                <div className="line"></div>
              </div>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  for="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  {
                    ...register('test', {
                      required: "Geben Sie Ihre Email Addresse ein!",
                      pattern: {
                        value: 50,
                        message: "invalid Email"
                      }
                    })
                  }
                />
                <div className="line"></div>
              </div>
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  for="subject"
                  type="text"
                  className="form-control"
                  placeholder="Thema"
                  name="subject"
                  {
                    ...register('test', {
                      required: "OOPS, you forget to add the subject.",
                    })
                  }
                />
                <div className="line"></div>
              </div>
              </div>
            <div className="col-md-6 col-xs-12">
              {/* DESCRIPTION */}
              <div className="text-center">
                <textarea
                 for="description"
                  type="text"
                  className="form-control"
                  placeholder="Beschreiben Sie Ihre Idee..."
                  name="description"
                  {
                    ...register('test', {
                      required: "Beschreiben Sie Ihre Idee...",
                    })
                  }
                ></textarea>
                <div className="line"></div>
              </div>
              
              <button className="btn-main-offer contact-btn" type="submit">Absenden</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts;
