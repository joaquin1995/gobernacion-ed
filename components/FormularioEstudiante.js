import React from 'react';


const FormularioEstudiante = () => {
    
    return (  

      <div className="info info-left">
          <h1>Formulario Estudiante</h1>

                <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="Nombres">Nombres</label>
                    <input type="text" className="form-control" id="Nombres"  />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="PrimerApellido">Primer Apellido</label>
                    <input type="text" className="form-control" id="PrimerApellido" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="SegundoApellido">Segundo Apellido</label>
                    <input type="text" className="form-control" id="SegundoApellido"  />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="Telefono">Teléfono / Celular</label>
                    <input type="text" className="form-control" id="Telefono" />
                    </div>
                </div>


                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="EstadoCivil">Estado Civil</label>
                    <input type="text" className="form-control" id="EstadoCivil"  />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="Correo">Correo Electronico</label>
                    <input type="email" className="form-control" id="correo" />
                    </div>
                </div>


                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="FechaNacimiento">Fecha de Nacimiento</label>
                    <input type="date" className="form-control" id="FechaNacimiento" />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="Ci">Carnet de Identidad</label>
                    <input type="texto" className="form-control" id="Ci" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="Expedido">Expedido</label>
                    <input type="text" className="form-control" id="Expedido"  />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="Pais">País de Nacimiento</label>
                    <input type="texto" className="form-control" id="Pais" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-12">
                    <label htmlFor="Ciudad">Ciudad</label>
                    <input type="text" className="form-control" id="Ciudad"  />
                    </div>
                    {/* <div className="form-group col-md-6">
                    <label htmlFor="Nacionalidad">Pais de Nacimiento</label>
                    <input type="texto" className="form-control" id="Nacionalidad"  />
                    </div> */}
                </div>

                <div className="form-group">
                    <label htmlFor="NivelEducacion">Nivel de Educacion al que Quiero Aprender</label>
                   
                    <select id="NivelEducacion" className="form-control" >
                        <option key="" value="">-- Seleccione una opcion --</option>
                        <option key="1" value="">Primario</option>
                        <option key="2" value="">Secundario</option>
                        <option key="3" value="">Técnico</option>
                        <option key="4" value="">Profesional</option>
                       
                    </select>
                </div>


                {/* <div className="form-row">
                    <div className="row">
                    <div className="col-md-12">

        
                        <div id="inputFormRow">
                        <label htmlFor="Profesion">Profesion</label>
                            <div className="input-group mb-3">
                            
                                <input type="text" id="Profesion" name="title[]" className="form-control m-input"
                                    autoComplete="off" />
                                <div className="input-group-append">
                                    <button id="addRow" type="button" className="btn btn-info">+</button>
                                </div>
                            </div>
                        </div>

                        <div id="newRow"></div>

                    </div>

                </div>
            </div> */}

            

        
                {/* <div className="form-group">
                    <label htmlFor="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
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
 
export default FormularioEstudiante;