export default function Cancel({ handleCloseModal, handleSubmit }) {
    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg">
                    <h2 className="text-lg font-bold mb-2">Cancelar Cita</h2>
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-6 focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Volver
                            </button>
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={handleCloseModal}
                            >
                                Eliminar cita
                            </button>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}