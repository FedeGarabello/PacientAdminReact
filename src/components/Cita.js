import React from 'react';

const Cita = ({apointment, deleteApointment}) => (
    <div className="cita">
        <p>Paciente: <span>{apointment.pacient}</span></p>
        <p>Acompañante: <span>{apointment.companion}</span></p>
        <p>Dia: <span>{apointment.date}</span></p>
        <p>Hora: <span>{apointment.time}</span></p>
        <p>Sintomas: <span>{apointment.sintoms}</span></p>

        <button
            className="button eliminar u-full-width"
            onClick={ () => deleteApointment(apointment.id)}
        >Eliminar &times;</button>
    </div>
)
 
export default Cita;