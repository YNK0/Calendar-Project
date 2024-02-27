export default function Editwindow({ handleCloseModal, datos, handleInputChange, handleCheck, handleSubmit }) {
    function Todate(str) {
        const date = new Date(str);
        const options = { month: 'long', day: 'numeric' };
        return date.toLocaleDateString('es-ES', options);
    }

    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-4 rounded-lg">
                    <h2 className="text-lg font-bold mb-2">Modificar Cita</h2>
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
                                value={datos.motivo}
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
                                value={datos.nombre}
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
                                value={Todate(datos.date)}
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
                                value={datos.time}
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
                                value={datos.place}
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
                                    checked={datos.confirmed === 'CONFIRMED' ? true : false}
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
                                value={datos.phone}
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
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={handleCloseModal}
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}