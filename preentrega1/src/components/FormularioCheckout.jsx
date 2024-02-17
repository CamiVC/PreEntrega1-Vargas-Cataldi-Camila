import React from 'react'

const FormularioCheckout = ({datosForm, guardarDatosInput, enviarOrden}) => {
    return (
        <form onSubmit={enviarOrden} className='formCheckout'>
            <div className='parCheckout'>
                <label htmlFor="nombre" className='labelForm'>Nombre</label>
                <input type="text" id="nombre" value={datosForm.nombre} name="nombre"onChange={guardarDatosInput}/>
            </div>
            <div className='parCheckout'>
                <label htmlFor="telefono" className='labelForm'>Telefono</label>
                <input type="number" id="telefono" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput}/>
            </div>
            <div className='parCheckout'>
                <label htmlFor="email" className='labelForm'>Email</label>
                <input type="email" id="email" name="email" value={datosForm.email} onChange={guardarDatosInput} />
            </div>
            <div className='parCheckout'>
                <label htmlFor="repetirEmail" className='labelForm'> Repetir email</label>
                <input type="email" id="repetirEmail" name="repetirEmail" value={datosForm.repetirEmail} onChange={guardarDatosInput} />
            </div>
                
                <button type="submit" className='botonCheckout'>Enviar orden</button>

            </form>
    )
}

export default FormularioCheckout
