import React, { useState, useEffect, useRef } from "react";
import CalendarLogo from "../img/calendar.svg";
import Pin from "../img/pin.svg";
import WPMsg from "./WPMsg";
import Edit from "../Modules/Editwindow";
import Cancel from "../Modules/Cancel";

export default function Meetings() {
    // Get data from the API
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const [edit, setEdit] = useState(false);
    const [editData, setEditData] = useState({});
    const [cancel, setCancel] = useState(false);

    const handleCancelMeeting = (id) => {
        setEditData({ id }); // Set the ID of the meeting to editData
        setCancel(true);
    };

    const handleEditMeeting = (data) => {
        setEdit(true);
        setEditData(data);
    };

    const handleCloseModal = () => {
        setEdit(false);
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setEditData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleCheck(event) {
        const { name } = event.target;
        setEditData(prevState => ({
            ...prevState,
            [name]: !prevState[name]
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(editData);
        handleCloseModal();
    };

    const handleCloseCancel = () => {
        setCancel(false);
    };

    const handleConfirmCancel = (id) => {
        console.log("Cita cancelada");
        handleCloseCancel();
    };

    // Estado para controlar el menú desplegable
    const [showDropdown, setShowDropdown] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                !event.target.closest('.option-menu-burger')
            ) {
                setShowDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    function Todate(str) {
        const date = new Date(str);
        const options = { month: 'long', day: 'numeric' };
        return date.toLocaleDateString('es-ES', options);
    }

    return (
        <div className="flex justify-center items-center flex-col py-10">
            {data.map((meeting) => (
                <div key={meeting.id} className="relative border-solid border-2 border-gray-400 p-2 my-2 rounded-lg w-3/4 ">
                    <div ref={dropdownRef} className="absolute top-0 right-0 p-3" >
                        {/* Icono de tres puntos que muestra el menú desplegable */}
                        <svg onClick={() => setShowDropdown(meeting.id)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v.01M12 12v.01M12 18v.01"></path>
                        </svg>
                        {/* Menú desplegable */}
                        {showDropdown === meeting.id && (
                            <div className="absolute top-0 right-0 mt-8 w-40 bg-white border border-gray-200 rounded-lg shadow-md z-10">
                                <button onClick={() => handleEditMeeting(meeting)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left option-menu-burger">Modificar</button>
                                <button onClick={() => handleCancelMeeting(meeting.id)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left option-menu-burger">Cancelar cita</button>
                            </div>
                        )}
                    </div>
                    <h2 className="text-3xl font-medium py-2">{meeting.motivo} - {meeting.nombre}</h2>
                    <p className="font-semibold my-2">
                        <img src={CalendarLogo} alt="Icono" className="inline-block w-6 h-6 mx-1" />
                        {Todate(meeting.date)} a las {meeting.time} | <img src={Pin} alt="Icono" className="inline-block w-6 h-6 mx-1" />{meeting.place}
                    </p>
                    <p className={`my-2 font-semibold mx-1 ${meeting.confirmed === 'CONFIRMED' ? 'text-green-600' : 'text-red-600'}`}>
                        {meeting.confirmed === 'CONFIRMED' ? "Cita confirmada" : "Por confirmar"}
                    </p>
                    {meeting.confirmed === 'CONFIRMED' ? null : <WPMsg item={meeting} />}
                </div>
            ))}
            {edit && <Edit
                handleCloseModal={handleCloseModal}
                datos={editData}
                handleInputChange={handleInputChange}
                handleCheck={handleCheck}
                handleSubmit={handleSubmit}
            />}
            {cancel && <Cancel
                datos={editData} // Pasar editData como datos
                handleCloseModal={handleCloseCancel}
            />}
        </div>
    );
}
