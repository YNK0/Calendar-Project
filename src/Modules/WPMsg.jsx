import React from 'react'
import wpmsg from '../img/wp.svg'
import check from '../img/calendar-check.svg'
import { useState } from 'react'

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

    return (
        <div>
            <a href={url} target="_blank"><img src={wpmsg} alt="Icono" className="inline-block w-12 h-12 mx-1" /></a>
            <button className='font-bold'><img src={check} alt="Icono" className="inline-block w-6 h-6 ml-4 mr-1" />Confirmar cita</button>
        </div>
    )
}
