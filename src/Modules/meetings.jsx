import React, { useState, useEffect, useRef } from "react";
import CalendarLogo from "../img/calendar.svg";
import Pin from "../img/pin.svg";
import WPMsg from "./WPMsg";


export default function Meetings() {
    // se hace el get a la api para obtener las citas proximas

    const sampleData = [
        {
            id: 1,
            motivo: "Cita",
            nombre: "Jose Antonio Perez",
            date: "10 de Enero, 2022",
            time: "12:00 PM",
            place: "Nacajuca",
            confirmed: false,
            phone: "9931234567"
        }, {
            id: 2,
            motivo: "Reunión",
            nombre: "Maria Hernandez",
            date: "15 de Enero, 2022",
            time: "10:00 AM",
            place: "Villahermosa",
            confirmed: true,
            phone: "9931234567"
        }, {
            id: 3,
            motivo: "Cita",
            nombre: "Juan Perez",
            date: "20 de Enero, 2022",
            time: "11:00 AM",
            place: "Cunduacan",
            confirmed: false,
            phone: "9931234567"
        }
    ];

    function toDate(date) {
        return new Date(date);
    }

    const handleCancelMeeting = (id) => {
        console.log("sasas");
    };

    const handleEditMeeting = (id) => {
        // Lógica para editar la cita con el ID proporcionado
    };

    // Estado para controlar el menú desplegable
    const [showDropdown, setShowDropdown] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <div className="flex justify-center items-center flex-col py-10">
            {sampleData.map((meeting) => (
                <div key={meeting.id} className="relative border-solid border-2 border-gray-400 p-2 my-2 rounded-lg w-3/4 ">
                    <div ref={dropdownRef} className="absolute top-0 right-0 p-3" >
                        {/* Icono de tres puntos que muestra el menú desplegable */}
                        <svg onClick={() => setShowDropdown(meeting.id)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v.01M12 12v.01M12 18v.01"></path>
                        </svg>
                        {/* Menú desplegable */}
                        {showDropdown === meeting.id && (
                            <div className="absolute top-0 right-0 mt-8 w-40 bg-white border border-gray-200 rounded-lg shadow-md z-10">
                                <button onClick={() => handleEditMeeting(meeting.id)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">Modificar</button>
                                <button onClick={() => handleCancelMeeting(meeting.id)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">Cancelar cita</button>
                            </div>
                        )}
                    </div>
                    <h2 className="text-3xl font-medium py-2">{meeting.motivo} - {meeting.nombre}</h2>
                    <p className="font-semibold my-2">
                        <img src={CalendarLogo} alt="Icono" className="inline-block w-6 h-6 mx-1" />
                        {meeting.date} a las {meeting.time} | <img src={Pin} alt="Icono" className="inline-block w-6 h-6 mx-1" />{meeting.place}
                    </p>
                    <p className={`my-2 font-semibold mx-1 ${meeting.confirmed ? 'text-green-600' : 'text-red-600'}`}>{meeting.confirmed ? "Cita confirmada" : "Por confirmar"}</p>
                    {meeting.confirmed ? null : <WPMsg item={meeting} />}

                </div>
            ))}
        </div>
    );
}
