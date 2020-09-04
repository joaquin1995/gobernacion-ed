import React,{useState} from 'react';
import FormularioApoderado from './FormularioApoderado';



const FormularioEstudiante = () => {
    

    const [datosApoderado,guardarApoderado] = useState(false);
    const [nivel , guardarNivel] = useState(false);
    // funcion para calcular la edad
    // Todo: poner este codigo dentro de una helper y no se vea muy 
    // cargado el componente

    const calcularEdad = (fecha)=> {
        console.log('fecha',fecha);
        var hoy = new Date();
        var cumpleanos = new Date(fecha);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
    
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
    
        return edad;
    } 

    const obtenerFecha = e =>{
        const fecha = e.target.value;
        const edad = calcularEdad(fecha);
        console.log(edad);
        if(edad < 18){
            guardarApoderado(true);
            return;
        }
        guardarApoderado(false);
    };

    const nivelSelect = e => {
         const valor = e.target.value;
         if(Number(valor) === 1 || Number(valor) === 2 )
         guardarNivel(true);
         else guardarNivel(false);
         
    }


    return (  

      <div className="info info-left">
          <h1>Formulario Estudiante</h1>

                <form>

               
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="Nombres">Nombres</label>
                    <input type="text" className="form-control" id="Nombres" />
                    <span className="asterisk_input">  </span> 
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="Apellidos">Apellidos</label>
                    <input type="text" className="form-control" id="Apellidos" />
                    <span className="asterisk_input">  </span> 
                    
                    </div>
                </div>

                <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="Correo">Correo Electronico</label>
                    <input type="email" className="form-control" id="correo" />
                    <span className="asterisk_input">  </span>
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="Telefono">Teléfono / Celular</label>
                    <input type="text" className="form-control" id="Telefono" />
                    <span className="asterisk_input">  </span> 
                    </div>
                </div>


              


                <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="Ci">Carnet de Identidad</label>
                    <input type="texto" className="form-control" id="Ci" />
                    <span className="asterisk_input">  </span>
                    </div>

                    <div className="form-group col-md-6">
                    <label htmlFor="Expedido">Expedido</label>
                    <input type="text" className="form-control" id="Expedido"  />
                    <span className="asterisk_input">  </span>
                    </div>
                  
                </div>

                <div className="form-row">
                  
                <div className="form-group col-md-6">
                    <label htmlFor="Pais">País de Nacimiento</label>
                    <input type="texto" className="form-control" id="Pais" />
                    <span className="asterisk_input">  </span>
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="FechaNacimiento">Fecha de Nacimiento</label>
                    <input 
                    type="date" 
                    className="form-control"
                    id="FechaNacimiento" 
                    onChange={obtenerFecha} 
                    />
                    <span className="asterisk_input">  </span>
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

                <div className="form-row">
                <div className="form-group col-md-6">
                <label htmlFor="NivelEducacion">Nivel Educativo </label>
                   
                    <select id="NivelEducacion" className="form-control" 
                    
                        onChange={nivelSelect}
                    >
                        <option key="" value="">-- Seleccione una opcion --</option>
                        <option key="1" value="1">Primario</option>
                        <option key="2" value="2">Secundario</option>
                        <option key="3" value="3">Técnico</option>
                        <option key="4" value="4">Profesional</option>
                       
                    </select>
                    </div>
    
                

                    { nivel ?  (
                        <div className="form-group col-md-6">
                        <label htmlFor="NivelEducacion">Nivel </label>
                                        
                        <select id="NivelEducacion" className="form-control" >
                            <option key="" value="">-- Seleccione una opcion --</option>
                            <option key="1" value="1">1</option>
                            <option key="2" value="2">2</option>
                            <option key="3" value="3">3</option>
                            <option key="4" value="4">4</option>
                            <option key="5" value="5">5</option>
                            <option key="6" value="6">6</option>
                        
                        </select>
                        </div>
                    ) : null}

                    
                  
                </div>


                <div className="form-row">
                    <div className="form-group col-md-6">
                    <div id="inputFormRow">
                    <label htmlFor="NivelEducacion">Nivel de Educacion al que Quiero Aprender</label>

                   
                   <select id="NivelEducacion" className="form-control" >
                       <option key="" value="">-- Seleccione una opcion --</option>
                       <option key="1" value="">Primario</option>
                       <option key="2" value="">Secundario</option>
                       <option key="3" value="">Técnico</option>
                       <option key="4" value="">Profesional</option>
                      
                   </select>
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
                {/* componente del Formulario de apoderados */}
                { datosApoderado ? <FormularioApoderado /> :  null  }


                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
      </div>


    );
}
 
export default FormularioEstudiante;