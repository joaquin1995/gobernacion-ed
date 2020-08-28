import React from 'react';


const FormularioDocente = () => {
    return (  

      <div className="info">
          <h1>Formulario Docentes</h1>

                <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="Nombres">Nombres</label>
                    <input type="text" className="form-control" id="Nombres" placeholder="Nombres" />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="PrimerApellido">Primer Apellido</label>
                    <input type="text" className="form-control" id="PrimerApellido" placeholder="Primer Apellido" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="SegundoApellido">Segundo Apellido</label>
                    <input type="text" className="form-control" id="SegundoApellido" placeholder="Segundo Apellido" />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="Telefono">Telefono / Celular</label>
                    <input type="text" className="form-control" id="Telefono" placeholder="Telefono / Celular" />
                    </div>
                </div>


                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="EstadoCivil">Estado Civil</label>
                    <input type="text" className="form-control" id="EstadoCivil" placeholder="Estado Civil" />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="Correo">Correo Electronico</label>
                    <input type="email" className="form-control" id="correo" placeholder="Correo Electronico" />
                    </div>
                </div>


                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="FechaNacimiento">Fecha de Nacimiento</label>
                    <input type="date" className="form-control" id="FechaNacimiento" placeholder="Fecha de Nacimiento" />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="Ci">Carnet de Identidad</label>
                    <input type="texto" className="form-control" id="Ci" placeholder="Cante de Identidad" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="Expedido">Expedido</label>
                    <input type="text" className="form-control" id="Expedido" placeholder="Expedido" />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="Pais">Pais de Nacimiento</label>
                    <input type="texto" className="form-control" id="Pais" placeholder="Pais de Nacimiento" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="Ciudad">Ciudad</label>
                    <input type="text" className="form-control" id="Ciudad" placeholder="Ciudad" />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="Nacionalidad">Pais de Nacimiento</label>
                    <input type="texto" className="form-control" id="Nacionalidad" placeholder="Nacionalidad" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="NivelEducacion">Nivel de Educacion al que Quiero Enseñar</label>
                    {/* <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" /> */}
                    <select id="NivelEducacion" className="form-control">
                        <option value="">-- Seleccione una opcion --</option>
                        <option value="">Primario</option>
                        <option value="">Secundario</option>
                        <option value="">Tecnico</option>
                        <option value="">Profecional</option>
                       
                    </select>
                </div>


                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="Profesion">Profesion</label>
                    <input type="text" className="form-control" id="Profesion" placeholder="Profesion"/>
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="Universidad">Colegio / Instituto /Universidad</label>
                    <input type="text" className="form-control" id="Universidad" placeholder="Colegio / Instituto /Universidad"/>
                    </div>
                    <div className="form-group col-md-2">
                    <label htmlFor="Nrotitulo">Nro de Titulo</label>
                    <input type="text" className="form-control" id="Nrotitulo" placeholder="Nro Titulo"/>
                    </div>
                </div>

        
                {/* <div className="form-group">
                    <label htmlFor="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div> */}
                {/* <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select id="inputState" className="form-control">
                        <option value="">Choose...</option>
                        <option>...</option>
                    </select>
                    </div>
                    <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                    </div>
                </div> */}
                {/* <div className="form-group">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div> */}
                <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
      </div>

    );
}
 
export default FormularioDocente;