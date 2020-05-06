import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Fomrulario = ({addApointment}) => {
  // state from apointments.
  const [apointment, updateApoinment] = useState({
    pacient: "",
    companion: "",
    date: "",
    time: "",
    sintoms: "",
  });

  const [error, updateError] = useState(false);

  const changeState = (e) => {
    updateApoinment({
      ...apointment,
      [e.target.name]: e.target.value,
    });
  };

  const { pacient, companion, date, time, sintoms } = apointment;

  const submitApointment = (e) => {
    e.preventDefault();

    // validate form
    if (
      pacient.trim() === "" ||
      companion.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      sintoms.trim() === ""
    ) {
      updateError(true);
      return;
    }

    // delete previus msg
    updateError(false);

    // Asign ID
    apointment.id = uuidv4();

    // Set Apointment
    addApointment(apointment);

    // Reset form
    updateApoinment({
      pacient: "",
      companion: "",
      date: "",
      time: "",
      sintoms: "",
    })
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={submitApointment}>
        <label>Nombre Del Paciente</label>
        <input
          type="text"
          name="pacient"
          className="u-full-width"
          placeholder="Nombre del Paciente"
          onChange={changeState}
          value={pacient}
        />

        <label>Nombre Del Acompañante</label>
        <input
          type="text"
          name="companion"
          className="u-full-width"
          placeholder="Nombre del Acompañante"
          onChange={changeState}
          value={companion}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={changeState}
          value={date}
        />

        <label>Hora</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={changeState}
          value={time}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintoms"
          onChange={changeState}
          value={sintoms}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

Fomrulario.propTypes = {
  addApointment: PropTypes.func.isRequired
}

export default Fomrulario;
