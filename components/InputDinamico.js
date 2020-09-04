import React from 'react';

const InputDinamico = ({nombre,eliminar,guardarInput, inputProfesional,arrayObjetoProfesional,idButtonProfesional,valMinimo}) => {

    if(nombre.length === 0) return;
 
    const cambiarEstado = e =>{
        eliminar(false);
        console.log(e.target.id); 
        const valor = inputProfesional;
        if(valor !== valMinimo ){
            console.log(valor);
            const aux = valor - 1;
            guardarInput(aux);
            let i = arrayObjetoProfesional.indexOf( Number(e.target.id) );
            arrayObjetoProfesional.splice( i, 1 );       
        }
    }


    return ( 

        <div id="inputFormRow">
            <div className="input-group mb-3">
                <input 
                type="text" 
                name={nombre} 
                className="form-control m-input" 
                placeholder={nombre} 
                autoComplete="off"
                />
                <div className="input-group-append" >
                    <button
                    type="button" 
                    className="btn btn-danger"
                    onClick={cambiarEstado}
                    id={idButtonProfesional}
                    >-
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default InputDinamico;