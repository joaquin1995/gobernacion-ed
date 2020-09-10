import React,{useState,useEffect} from 'react';
import InputDinamico from './InputDinamico';
import FormularioApoderado from './FormularioApoderado';
import Cookie from "js-cookie";


const FormularioEstudiante = () => {

        /* inputs para poder generar dinamicametne 3 profesiones */
    const [inputUno , guardarInputUno ]= useState(false);
    const [inputDos, guardarInputdos ] = useState(false);
    const [inputTres, guardarInputTres ] = useState(false);
    const [inputProfesional,guardarInput] = useState(0);
    const [arrayObjetoProfesional,guadarObjetoProfesional] = useState([]);


      // estado,array,insertArray,primerInput,segundoInput,tercerInput,val1,val2,val3,cant
      const agregarInput = (limite,cantidad,nuevoLimite,funcInputUno,funcInputDos,funcInputTres,array,guardarArray,valUno,valDos,valTres)=>{
        console.log('click');
        // const cantida = 3;
        const valor = limite;
        console.log(valor);
        if(valor !== cantidad){

            const aux = valor + 1;
            nuevoLimite(aux);


            if(!array.includes(valUno)) { 
                funcInputUno(true);
                guardarArray([
                    ...array,
                    valUno
                ]);
                return;
            }

            if(!array.includes(valDos)) { 
                funcInputDos(true); 
                guardarArray([
                    ...array,
                    valDos
                ]);
                return;
            }
            if(!array.includes(valTres)) { 
                funcInputTres(true);
                guardarArray([
                    ...array,
                    valTres
                ]);
                 return;
            }
        };   
    }


    
    const [registro,guardarRegistro] = useState({
        nombres: '',
        apellidos: '',
        email: '',
        telefono: ''
    });

    const {nombres,apellidos,email,telefono} = registro;

    const obtenerInformacion = e => {
        guardarRegistro({
            ...registro,
            [e.target.name] : e.target.value
        })
    }


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



    useEffect(()=>{
        const result = Cookie.getJSON('registro');
        if(result !== undefined ){
            console.log(result);
            const {nombres,apellidos,email,telefono}  = result;
            console.log(nombres);
           actualizarRegistro(nombres,apellidos,email,telefono);
        }
        
    },[]);

    const actualizarRegistro = (nm,ap,em,tl) => {
        guardarRegistro({
            nombres: nm,
            apellidos: ap,
            email: em,
            telefono: tl
        });
    }


    return (  

      <div className="info info-left">
          <h1>Formulario Estudiante</h1>

                <form>

               
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="Nombres">Nombres</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="Nombres"
                    name="nombres"
                    onChange={obtenerInformacion}
                    value= {nombres} 
                    />
                    <span className="asterisk_input">  </span> 
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="Apellidos">Apellidos</label>
                    <input type="text" 
                    className="form-control" 
                    id="Apellidos" 
                    name="apellidos"
                    onChange={obtenerInformacion}
                    value={apellidos}
                    />
                    <span className="asterisk_input">  </span> 
                    
                    </div>
                </div>

                <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="Correo">Correo Electronico</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="correo"
                    name="email"
                    onChange={obtenerInformacion}
                    value={email}
                    />
                    <span className="asterisk_input">  </span>
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="Telefono">Teléfono / Celular</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="Telefono" 
                    name="telefono"
                    onChange={obtenerInformacion}
                    value={telefono}
                    />
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
                                    <button id="addRow"
                                     type="button"
                                      className="btn btn-info"
                                      onClick={e => agregarInput(inputProfesional,3,guardarInput,guardarInputUno,guardarInputdos,guardarInputTres,arrayObjetoProfesional,guadarObjetoProfesional,1,2,3)}
                                      >+
                                      </button>
                                </div>
                            </div>
                        </div>

                        <div id="newRow">
                        { inputUno ? <InputDinamico nombre="Idioma" eliminar ={guardarInputUno}  guardarInput= {guardarInput} inputProfesional={inputProfesional} arrayObjetoProfesional={arrayObjetoProfesional} guadarObjetoProfesional={guadarObjetoProfesional}  idButtonProfesional="1" valMinimo="0" /> : null }
                                { inputDos ? <InputDinamico nombre="Idioma"  eliminar ={guardarInputdos} guardarInput= {guardarInput}  inputProfesional={inputProfesional} arrayObjetoProfesional={arrayObjetoProfesional}  guadarObjetoProfesional={guadarObjetoProfesional} idButtonProfesional="2" valMinimo="0" /> : null }
                                { inputTres ? <InputDinamico nombre="Idioma"  eliminar ={guardarInputTres} guardarInput= {guardarInput}  inputProfesional={inputProfesional} arrayObjetoProfesional={arrayObjetoProfesional}  guadarObjetoProfesional={guadarObjetoProfesional} idButtonProfesional="3" valMinimo="0"/> : null }
                        </div>
                    </div>
                
                </div>
                {/* componente del Formulario de apoderados */}
                { datosApoderado ? <FormularioApoderado /> :  null  }


                <button type="submit" className="btn btn-dark">Registrar</button>
            </form>
      </div>


    );
}
 
export default FormularioEstudiante;