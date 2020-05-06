import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';


function App() {

  // apointments on storage.
  let initialApointments = JSON.parse(localStorage.getItem('apointments'));
  if(!initialApointments) {
    initialApointments = [];
  }

  const [apointments, saveApointments] = useState(initialApointments);

  // Use effect for do certain operations where the state changes.
  useEffect( () => {
    if (initialApointments) {
      localStorage.setItem('apointments', JSON.stringify(apointments))
    } else {
      localStorage.setItem('apointments', JSON.stringify([]))
    }
  }, [apointments])

  // function for old date and add new
  const addApointment = apointment => {
    saveApointments([
      ...apointments,
      apointment
    ])
  }

  // delete apointmens by id
  const deleteApointment = id => {
    const newApointments = apointments.filter(apointment => apointment.id !== id)
    saveApointments(newApointments)
  }

  // conditional msj
  const title = apointments.length > 0 ? "Administra tus citas" : "Agrega una nueva cita";

  return (
    <Fragment>
    <h1>Administrador de pacientes</h1>

    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Formulario

            addApointment = {addApointment}
          />
        </div>
        <div className="one-half column">
          <h2>{title}</h2>
          {apointments.map(apointment =>(
            <Cita 
              key={apointment.id}
              apointment={apointment}
              deleteApointment={deleteApointment}
            />
          ))}
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
