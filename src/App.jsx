import React, { useState } from 'react';
import Meetings from './Modules/meetings';
import './App.css';
import 'react-day-picker/dist/style.css';
import { es } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [citaData, setCitaData] = useState({
    motivo: '',
    nombre: '',
    date: '',
    time: '',
    place: '',
    confirmed: false,
    phone: ''
  });


  function handleAddCita() {
    setModalVisible(true);
  }

  function handleCloseModal() {
    setModalVisible(false);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCitaData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleCloseModal();
  }

  function handleCheck(event) {
    const { name } = event.target;
    setCitaData(prevState => ({
      ...prevState,
      [name]: !prevState[name]
    }));
  }

  const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
  }

  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: black;
    --rdp-cell-size: 40px
  }
`;

  const [selected, setSelected] = React.useState(null);

  return (
    <div className="flex flex-col h-screen">
      <div className="mb-4 font-bold text-4xl p-4 mx-auto">CITAS PROXIMAS @franciscovmag</div>
      <div className="flex flex-1">
        <div className="flex-1">
          <Meetings />
        </div>
        <div className="flex-1 py-10 flex flex-col items-center justify-center h-4/5" >
          <style>{css}</style>
          <DayPicker
            styles={{
              cell: { height: '60px', fontSize: '1em', padding: '0.5em' },
            }}

            className=' bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
            mode="single"
            selected={selected}
            onSelect={setSelected}
            showOutsideDays
            fixedWeeks
            locale={es}
            modifiersClassNames={{
              selected: 'my-selected',
              today: 'my-today',

            }}


          />
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/4" onClick={handleAddCita}>
            Agregar cita
          </button>
          {modalVisible && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg">
                <h2 className="text-lg font-bold mb-2">Agregar Cita</h2>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="motivo">
                      Motivo:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="motivo"
                      type="text"
                      name="motivo"
                      value={citaData.motivo}
                      onChange={handleInputChange}
                      placeholder="Motivo"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                      Nombre:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="nombre"
                      type="text"
                      name="nombre"
                      value={citaData.nombre}
                      onChange={handleInputChange}
                      placeholder="Nombre"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                      Fecha:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="date"
                      type="text"
                      name="date"
                      value={citaData.date}
                      onChange={handleInputChange}
                      placeholder="Fecha"
                      disabled
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                      Hora:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="time"
                      type="text"
                      name="time"
                      value={citaData.time}
                      onChange={handleInputChange}
                      placeholder="Hora"

                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="place">
                      Lugar:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="place"
                      type="text"
                      name="place"
                      value={citaData.place}
                      onChange={handleInputChange}
                      placeholder="Lugar"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-500"
                        name="confirmed"
                        checked={citaData.confirmed}
                        onChange={handleCheck}
                      />
                      <span className="ml-2 text-gray-700">Confirmado</span>
                    </label>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                      Teléfono:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="phone"
                      type="text"
                      name="phone"
                      maxLength="10"
                      value={citaData.phone}
                      onChange={handleInputChange}
                      placeholder="Teléfono"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Guardar
                    </button>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={handleCloseModal}
                    >
                      Cancelar
                    </button>
                  </div>
                </form>

              </div>
            </div>
          )}
        </div>
      </div>
    </div >
  );
}
