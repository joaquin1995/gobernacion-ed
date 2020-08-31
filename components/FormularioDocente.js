import React from 'react';


const FormularioDocente = () => {
    
    return (  

      <div className="info info-left">
          <h1>Formulario Docentes</h1>

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
                    <label htmlFor="NivelEducacion">Nivel de Educacion al que Quiero Enseñar</label>
                   
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
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <div id="inputFormRow">
                        <label htmlFor="Profesion">Profesión</label>
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
                    <div className="form-group col-md-6">
                    <div id="inputFormRow">
                        <label htmlFor="Profesion">Postgrado</label>
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


                <div className="form-row">
                    <div className="form-group col-md-6">
                    <div id="inputFormRow">
                        <label htmlFor="Profesion">Diplomado</label>
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
                    <div className="form-group col-md-6">
                    <div id="inputFormRow">
                        <label htmlFor="Profesion">Doctorado</label>
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


                <div className="form-row">
                    <div className="form-group col-md-6">
                    <div id="inputFormRow">
                        <label htmlFor="Profesion">Otros Cursos</label>
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
                    <div className="form-group col-md-6">
                    <div id="inputFormRow">
                        <label htmlFor="Profesion">Habla Otros Idiomas</label>
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


                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="titulo">¿Cuál seria el titulo sobre el tema que enseñaría?</label>
                    <input type="text" className="form-control" id="titulo"  />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="educacion_nivel">¿Cuál seria el nivel sobre el tema que enseñaría?</label>
                    <select className="selectpicker" multiple data-live-search="true" id="educacion_nivel" title="Seleccione 1 o mas">
                        <option value="">Inicial</option>
                        <option value="">Primario</option>
                        <option value="">Secundario</option>
                        <option value="">Profesional</option>
                    </select>

                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="total">¿Cuántas Clases necesitaría para Webinar?</label>
                    <p className="sub">Cada clase tiene maximo de una hora por clase</p>
                    <input type="number" className="form-control" id="total"  />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="duracion">¿Duración de cada curso?</label>
                    <p className="sub">(Cada curso dure entre 15 minutos a 1 hora</p>
                    <input type="number" className="form-control" id="duracion" />
                    </div>
                </div>

                <div className="form-row">
              
                    <div className="form-group col-md-12">
                    <label htmlFor="educacion_nivel">¿Cuál seria el nivel sobre el tema que enseñaría?</label>
                    <select className="selectpicker" multiple data-live-search="true" id="educacion_nivel"  title="Seleccione 1 o mas">
                        <option value="">Pizarra</option>
                        <option value="">Diapositiva</option>
                        <option value="">Papelografo</option>
                        <option value="">Proyecotra</option>
                    </select>

                    </div>
                </div>
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