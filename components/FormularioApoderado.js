import React from 'react';

const FormularioApoderado = () => {
    return ( 

        <div className="apoderado">
        <h2>Rellana los campos de tu Apoderado</h2>
        <div className="form-row">
            <div className="form-group col-md-6">
            <label htmlFor="Nombres-apd">Nombres</label>
            <input type="text" className="form-control" id="Nombres-apd"  />
            </div>
            <div className="form-group col-md-6">
            <label htmlFor="Apellidos-apd">Apellidos</label>
            <input type="text" className="form-control" id="Apellidos-apd" />
            </div>
        </div>

     

    <div className="form-row">
     
        <div className="form-group col-md-6">
        <label htmlFor="ci-apd">Carnet de Identidad</label>
        <input type="text" className="form-control" id="ci-apd" />
        </div>

        <div className="form-group col-md-6">
        <label htmlFor="Expedido-apd">Expedido</label>
        <input type="text" className="form-control" id="Expedido-apd"  />
        </div>
    </div>

    <div className="form-row">
     


        <div className="form-group col-md-6">
        <label htmlFor="Pais-apd">País de Nacimiento</label>
        <input type="texto" className="form-control" id="Pais-apd" />
        </div>


        <div className="form-group col-md-6">
        <label htmlFor="fecha-apd">Fecha de Nacimiento</label>
        <input type="date" className="form-control" id="fecha-apd"  />
        </div>
    </div>

    <div className="form-row">
        <div className="form-group col-md-6">
        <label htmlFor="Ciudad-apd">Ciudad</label>
        <input type="text" className="form-control" id="Ciudad-apd"  />
        </div>

        <div className="form-group col-md-6">
        <label htmlFor="relacion-apd">Relación con alumno</label>
        <input type="texto" className="form-control" id="relacion-apd"  />
        </div>
    </div>

    <div className="form-row">
    <div className="form-group col-md-6">
        <label htmlFor="correo-apd">Email</label>
        <input type="email" className="form-control" id="correo-apd" />
    </div>

    <div className="form-group col-md-6">
        <label htmlFor="NivelEducacion-apd">Nivel de Educacion</label>
       
        <select id="NivelEducacion-apd" className="form-control" >
            <option key="" value="">-- Seleccione una opcion --</option>
            <option key="1" value="">Primario</option>
            <option key="2" value="">Secundario</option>
            <option key="3" value="">Técnico</option>
            <option key="4" value="">Profesional</option>
           
        </select>
    </div>
    </div>


    </div>



     );
}
 
export default FormularioApoderado;