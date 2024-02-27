import React, { useState } from 'react';
import wpmsg from '../img/wp.svg';
import check from '../img/calendar-check.svg';

export default function WPMsg(item) {
    const user = {
        id: item.item.id,
        motivo: item.item.title,
        nombre: item.item.nombre,
        date: item.item.date,
        time: item.item.time,
        place: item.item.place,
        confirmed: item.item.confirmed,
        phone: item.item.phone
    };

    function Todate(str) {
        const date = new Date(str);
        const options = { month: 'long', day: 'numeric' };
        return date.toLocaleDateString('es-ES', options);
    }

    const [modalOpen, setModalOpen] = useState(false);

    const confirmationMessage = `Estimado/a ${user.nombre}, le escribo para confirmar nuestra cita programada para ${Todate(user.date)} a las ${user.time}. ¡Espero su confirmacion! - Salazar y Salazar.`;

    const encodedMessage = encodeURIComponent(confirmationMessage);
    const url = `https://wa.me/1${user.phone}?text=${encodedMessage}`;

    const confirmCita = () => {
        setModalOpen(true);
    };

    return (
        <div>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={wpmsg} alt="Icono Whastapp" className="inline-block w-12 h-12 mx-1 transform transition-transform hover:scale-110" />
            </a>
            <button onClick={confirmCita} className='font-bold transition-transform hover:-translate-y-1'>
                <img src={check} alt="Icono" className="inline-block w-6 h-6 ml-4 mr-1 " />
                Confirmar cita
            </button>

            {modalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <p className="mb-4">¿Estás seguro de que quieres confirmar la cita?</p>
                        <div className="flex justify-center space-x-4">
                            <button onClick={() => setModalOpen(false)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">Cancelar</button>
                            <button onClick={() => {
                                fetch(`http://localhost:3000/confirm/${user.id}`, {});
                                setModalOpen(false);
                                window.location.reload();
                            }} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Confirmar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
