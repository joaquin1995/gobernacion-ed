import React from 'react';

const InputDinamico = ({nombre,eliminar,guardarInput, inputProfesional}) => {

    if(nombre.length === 0) return;
 
    const cambiarEstado = () =>{
        eliminar(false);
        
        const valor = inputProfesional;
        if(valor !== 0 ){
            console.log(valor);
            const aux = valor - 1;
            guardarInput(aux);
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
                <div className="input-group-append">
                    <button id="removeRow" 
                    type="button" 
                    className="btn btn-danger"
                    onClick={cambiarEstado}
                    >-
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default InputDinamico;