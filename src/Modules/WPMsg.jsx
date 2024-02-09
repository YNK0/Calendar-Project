import React from 'react'
import wpmsg from '../img/wp.svg'
import check from '../img/calendar-check.svg'

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
    }

    const confirmationMessage = `Estimado/a ${user.nombre}, le escribo para confirmar nuestra cita programada para ${user.date} a las ${user.time}. ¡Espero su confirmacion! - Abogados Salazar y Salazar.`;

    const encodedMessage = encodeURIComponent(confirmationMessage);
    const url = `https://wa.me/1${user.phone}?text=${encodedMessage}`;


    function toDate(date) {
        console.log(new Date(date.date))
    }

    return (
        <div>
            <a href={url} target="_blank"><img src={wpmsg} alt="Icono" className="inline-block w-12 h-12 mx-1 transform transition-transform hover:scale-110" /></a>
            <button onClick={() => toDate(user)} className='font-bold transition-transform hover:-translate-y-1'><img src={check} alt="Icono" className="inline-block w-6 h-6 ml-4 mr-1 " />Confirmar cita</button>
        </div>
    )
}
