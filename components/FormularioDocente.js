import React,{useState, useEffect} from 'react';
import InputDinamico from './InputDinamico';
import Cookie from "js-cookie";

const FormularioDocente = () => { 


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


    /* inputs para poder generar dinamicametne 3 profesiones */
    const [inputUno , guardarInputUno ]= useState(false);
    const [inputDos, guardarInputdos ] = useState(false);
    const [inputTres, guardarInputTres ] = useState(false);
    const [inputProfesional,guardarInput] = useState(0);
    const [arrayObjetoProfesional,guadarObjetoProfesional] = useState([]);


       /* inputs para poder generar dinamicametne 3 postgrado */
       const [inputUnoP , guardarInputUnoP ]= useState(false);
       const [inputDosP, guardarInputdosP ] = useState(false);
       const [inputTresP, guardarInputTresP ] = useState(false);
       const [inputProfesionalP,guardarInputP ] = useState(3);
       const [arrayObjetoProfesionalP,guadarObjetoProfesionalP] = useState([]);

        /* inputs para poder generar dinamicametne 3 Diplomado */
        const [inputUnoD , guardarInputUnoD ]= useState(false);
        const [inputDosD, guardarInputdosD ] = useState(false);
        const [inputTresD, guardarInputTresD ] = useState(false);
        const [inputProfesionalD,guardarInputD ] = useState(6);
        const [arrayObjetoProfesionalD,guadarObjetoProfesionalD] = useState([]);

       /* inputs para poder generar dinamicametne 3 Doctorado */
       const [inputUnoDo , guardarInputUnoDo ]= useState(false);
       const [inputDosDo, guardarInputdosDo ] = useState(false);
       const [inputTresDo, guardarInputTresDo ] = useState(false);
       const [inputProfesionalDo,guardarInputDo ] = useState(9);
       const [arrayObjetoProfesionalDo,guadarObjetoProfesionalDo] = useState([]);


          /* inputs para poder generar dinamicametne 3 Otros Cursos */
        const [inputUnoO, guardarInputUnoO]= useState(false);
        const [inputDosO, guardarInputdosO] = useState(false);
        const [inputTresO, guardarInputTresO] = useState(false);
        const [inputProfesionalO,guardarInputO] = useState(12);
        const [arrayObjetoProfesionalO,guadarObjetoProfesionalO] = useState([]);

            /* inputs para poder generar dinamicametne 3 Otros Idiomas */
        const [inputUnoI , guardarInputUnoI ]= useState(false);
        const [inputDosI, guardarInputdosI ] = useState(false);
        const [inputTresI, guardarInputTresI ] = useState(false);
        const [inputProfesionalI,guardarInputI ] = useState(15);
        const [arrayObjetoProfesionalI,guadarObjetoProfesionalI] = useState([]);

 
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
          <h1>Formulario Docentes</h1>

                <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="Nombres">Nombres</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="nombres"
                    name="nombres"
                    onChange={obtenerInformacion}
                    value= {nombres} 
                     />
                    <span className="asterisk_input">  </span>
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="PrimerApellido">Apellidos</label>
                    <input type="text" 
                    className="form-control" 
                    id="PrimerApellido"
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
                        <input type="email" 
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
                    <input type="text" 
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
                        <input type="text" className="form-control" id="Expedido" />
                        <span className="asterisk_input">  </span>
                    </div>
                </div>

                <div className="form-row">
                    {/* <div className="form-group col-md-6">
                    <label htmlFor="EstadoCivil">Estado Civil</label>
                    
                    <select id="estado" className="form-control" >
                        <option key="" value="">-- Seleccione una opcion --</option>
                        <option key="1" value="">Casado(a)</option>
                        <option key="2" value="">Soltero(a)</option>
                        <option key="3" value="">Viudo(a)</option>
                    </select>
                    </div> */}
                    <div className="form-group col-md-12">
                    <label htmlFor="FechaNacimiento">Fecha de Nacimiento</label>
                    <input type="date" className="form-control" id="FechaNacimiento" />
                    </div>
                </div>


            

                <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="Pais">País de Nacimiento</label>
                    <input type="texto" className="form-control" id="Pais" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="Ciudad">Ciudad</label>
                    <input type="text" className="form-control" id="Ciudad"  />
                </div>
                 
                </div>

             

                {/* <div className="form-group">
                    <label htmlFor="NivelEducacion">Nivel de Educacion al que Quiero Enseñar</label>
                   
                    <select id="NivelEducacion" className="form-control" >
                        <option key="" value="">-- Seleccione una opcion --</option>
                        <option key="1" value="">Primario</option>
                        <option key="2" value="">Secundario</option>
                        <option key="3" value="">Técnico</option>
                        <option key="4" value="">Profesional</option>
                       
                    </select>
                </div> */}

                <div className="form-row">
                    <div className="form-group col-md-6">
                    <div id="inputFormRow">
                        <label htmlFor="Profesion">Profesión</label>
                        <p className="sub">Puedes Adicionar 3 Profesiones</p>
                            <div className="input-group mb-3">
                            
                                <input type="text" id="Profesion" name="title[]" className="form-control m-input"
                                    autoComplete="off" />
                                <div className="input-group-append">
                                    <button 
                                    id="addRow" 
                                    type="button" 
                                    className="btn btn-info"
                                    onClick={e => agregarInput(inputProfesional,3,guardarInput,guardarInputUno,guardarInputdos,guardarInputTres,arrayObjetoProfesional,guadarObjetoProfesional,1,2,3)}
                                    >+
                                    </button>
                                </div>
                            </div>
                        </div>

                            <div id="newRow">
                                { inputUno ? <InputDinamico nombre="Profesíon" eliminar ={guardarInputUno}  guardarInput= {guardarInput} inputProfesional={inputProfesional} arrayObjetoProfesional={arrayObjetoProfesional} guadarObjetoProfesional={guadarObjetoProfesional}  idButtonProfesional="1" valMinimo="0" /> : null }
                                { inputDos ? <InputDinamico nombre="Profesíon"  eliminar ={guardarInputdos} guardarInput= {guardarInput}  inputProfesional={inputProfesional} arrayObjetoProfesional={arrayObjetoProfesional}  guadarObjetoProfesional={guadarObjetoProfesional} idButtonProfesional="2" valMinimo="0" /> : null }
                                { inputTres ? <InputDinamico nombre="Profesíon"  eliminar ={guardarInputTres} guardarInput= {guardarInput}  inputProfesional={inputProfesional} arrayObjetoProfesional={arrayObjetoProfesional}  guadarObjetoProfesional={guadarObjetoProfesional} idButtonProfesional="3" valMinimo="0"/> : null }
                            </div>
                    </div>
                    <div className="form-group col-md-6">
                    <div id="inputFormRow">
                        <label htmlFor="Profesion">Postgrado</label>
                        <p className="sub">Puedes Adicionar 3 Postgrado</p>

                            <div className="input-group mb-3">
                            
                                <input type="text" id="Profesion" name="title[]" className="form-control m-input"
                                    autoComplete="off" />
                                <div className="input-group-append">
                                    <button 
                                    type="button"
                                    className="btn btn-info"
                                    onClick={e => agregarInput(inputProfesionalP,6,guardarInputP,guardarInputUnoP,guardarInputdosP,guardarInputTresP,arrayObjetoProfesionalP,guadarObjetoProfesionalP,4,5,6)}
                                    >+</button>
                                </div>
                            </div>
                        </div>

                        <div id="newRow">
                        { inputUnoP ? <InputDinamico nombre="Postgrado" eliminar ={guardarInputUnoP}  guardarInput= {guardarInputP} inputProfesional={inputProfesionalP} arrayObjetoProfesional={arrayObjetoProfesionalP} guadarObjetoProfesional={guadarObjetoProfesionalP}  idButtonProfesional="4" valMinimo="3" /> : null }
                        { inputDosP ? <InputDinamico nombre="Postgrado"  eliminar ={guardarInputdosP} guardarInput= {guardarInputP}  inputProfesional={inputProfesionalP} arrayObjetoProfesional={arrayObjetoProfesionalP}  guadarObjetoProfesional={guadarObjetoProfesionalP} idButtonProfesional="5" valMinimo="3" /> : null }
                        { inputTresP ? <InputDinamico nombre="Postgrado"  eliminar ={guardarInputTresP} guardarInput= {guardarInputP}  inputProfesional={inputProfesionalP} arrayObjetoProfesional={arrayObjetoProfesionalP}  guadarObjetoProfesional={guadarObjetoProfesionalP} idButtonProfesional="6" valMinimo="3"/> : null }
                        </div>
                    </div>
                
                </div>


                <div className="form-row">
                    <div className="form-group col-md-6">
                    <div id="inputFormRow">
                        <label htmlFor="Diplomado">Diplomado</label>
                        <p className="sub">Puedes Adicionar 3 Diplomado</p>

                            <div className="input-group mb-3">
                            
                                <input type="text" id="Diplomado" name="title[]" className="form-control m-input"
                                    autoComplete="off" />
                                <div className="input-group-append">
                                    <button
                                     type="button" 
                                     className="btn btn-info"
                                     onClick={ e => agregarInput(inputProfesionalD,9,guardarInputD,guardarInputUnoD,guardarInputdosD,guardarInputTresD,arrayObjetoProfesionalD,guadarObjetoProfesionalD,7,8,9)}
                                     >+</button>
                                </div>
                            </div>
                        </div>

                        <div id="newRow">
                        { inputUnoD ? <InputDinamico nombre="Diplomado" eliminar ={guardarInputUnoD}  guardarInput= {guardarInputD} inputProfesional={inputProfesionalD} arrayObjetoProfesional={arrayObjetoProfesionalD} guadarObjetoProfesional={guadarObjetoProfesionalD}  idButtonProfesional="7" valMinimo="6" /> : null }
                        { inputDosD ? <InputDinamico nombre="Diplomado"  eliminar ={guardarInputdosD} guardarInput= {guardarInputD}  inputProfesional={inputProfesionalD} arrayObjetoProfesional={arrayObjetoProfesionalD}  guadarObjetoProfesional={guadarObjetoProfesionalD} idButtonProfesional="8" valMinimo="6" /> : null }
                        { inputTresD ? <InputDinamico nombre="Diplomado"  eliminar ={guardarInputTresD} guardarInput= {guardarInputD}  inputProfesional={inputProfesionalD} arrayObjetoProfesional={arrayObjetoProfesionalD}  guadarObjetoProfesional={guadarObjetoProfesionalD} idButtonProfesional="9" valMinimo="6"/> : null }

                        </div>
                    </div>
                    <div className="form-group col-md-6">
                    <div id="inputFormRow">
                        <label htmlFor="Profesion">Doctorado</label>
                        <p className="sub">Puedes Adicionar 3 Doctorado</p>

                            <div className="input-group mb-3">
                            
                                <input type="text" id="Profesion" name="title[]" className="form-control m-input"
                                    autoComplete="off" />
                                <div className="input-group-append">
                                    <button 
                                    type="button" 
                                    className="btn btn-info"
                                    onClick={ e => agregarInput(inputProfesionalDo,12,guardarInputDo,guardarInputUnoDo,guardarInputdosDo,guardarInputTresDo,arrayObjetoProfesionalDo,guadarObjetoProfesionalDo,10,11,12)}
                                    >+</button>
                                </div>
                            </div>
                        </div>

                        <div id="newRow">

                        { inputUnoDo ? <InputDinamico nombre="Doctorado" eliminar ={guardarInputUnoDo}  guardarInput= {guardarInputDo} inputProfesional={inputProfesionalDo} arrayObjetoProfesional={arrayObjetoProfesionalDo} guadarObjetoProfesional={guadarObjetoProfesionalDo}  idButtonProfesional="10" valMinimo="9" /> : null }
                        { inputDosDo ? <InputDinamico nombre="Doctorado"  eliminar ={guardarInputdosDo} guardarInput= {guardarInputDo}  inputProfesional={inputProfesionalDo} arrayObjetoProfesional={arrayObjetoProfesionalDo}  guadarObjetoProfesional={guadarObjetoProfesionalDo} idButtonProfesional="11" valMinimo="9" /> : null }
                        { inputTresDo ? <InputDinamico nombre="Doctorado"  eliminar ={guardarInputTresDo} guardarInput= {guardarInputDo}  inputProfesional={inputProfesionalDo} arrayObjetoProfesional={arrayObjetoProfesionalDo}  guadarObjetoProfesional={guadarObjetoProfesionalDo} idButtonProfesional="12" valMinimo="9"/> : null }


                        </div>
                    </div>
                
                </div>


                <div className="form-row">
                    <div className="form-group col-md-6">
                    <div id="inputFormRow">
                        <label htmlFor="Profesion">Otros Cursos</label>
                        <p className="sub">Puedes Adicionar 3 Cursos</p>

                            <div className="input-group mb-3">
                            
                                <input type="text" id="Profesion" name="title[]" className="form-control m-input"
                                    autoComplete="off" />
                                <div className="input-group-append">
                                    <button  
                                    type="button" 
                                    className="btn btn-info"
                                    onClick={ e => agregarInput(inputProfesionalO,15,guardarInputO,guardarInputUnoO,guardarInputdosO,guardarInputTresO,arrayObjetoProfesionalO,guadarObjetoProfesionalO,13,14,15)}
                                    
                                    >+</button>
                                </div>
                            </div>
                        </div>

                        <div id="newRow">
                        { inputUnoO ? <InputDinamico nombre="Otros Cursos" eliminar ={guardarInputUnoO}  guardarInput= {guardarInputO} inputProfesional={inputProfesionalO} arrayObjetoProfesional={arrayObjetoProfesionalO} guadarObjetoProfesional={guadarObjetoProfesionalO}  idButtonProfesional="13" valMinimo="12" /> : null }
                        { inputDosO ? <InputDinamico nombre="Otros Cursos"  eliminar ={guardarInputdosO} guardarInput= {guardarInputO}  inputProfesional={inputProfesionalO} arrayObjetoProfesional={arrayObjetoProfesionalO}  guadarObjetoProfesional={guadarObjetoProfesionalO} idButtonProfesional="14" valMinimo="12" /> : null }
                        { inputTresO ? <InputDinamico nombre="Otros Cursos"  eliminar ={guardarInputTresO} guardarInput= {guardarInputO}  inputProfesional={inputProfesionalO} arrayObjetoProfesional={arrayObjetoProfesionalO}  guadarObjetoProfesional={guadarObjetoProfesionalO} idButtonProfesional="15" valMinimo="12"/> : null }
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                    <div id="inputFormRow">
                        <label htmlFor="Profesion">Habla Otros Idiomas</label>
                        <p className="sub">Puedes Adicionar 3 Idiomas</p>

                            <div className="input-group mb-3">
                            
                                <input type="text" id="Profesion" name="title[]" className="form-control m-input"
                                    autoComplete="off" />
                                <div className="input-group-append">
                                    <button 
                                     type="button"
                                     className="btn btn-info"
                                    onClick={ e => agregarInput(inputProfesionalI,18,guardarInputI,guardarInputUnoI,guardarInputdosI,guardarInputTresI,arrayObjetoProfesionalI,guadarObjetoProfesionalI,16,17,18)}
                                     >+</button>
                                </div>
                            </div>
                        </div>

                        <div id="newRow">
                        { inputUnoI ? <InputDinamico nombre="Otros Idiomas" eliminar ={guardarInputUnoI}  guardarInput= {guardarInputI} inputProfesional={inputProfesionalI} arrayObjetoProfesional={arrayObjetoProfesionalI} guadarObjetoProfesional={guadarObjetoProfesionalI}  idButtonProfesional="16" valMinimo="15" /> : null }
                        { inputDosI ? <InputDinamico nombre="Otros Idiomas"  eliminar ={guardarInputdosI} guardarInput= {guardarInputI}  inputProfesional={inputProfesionalI} arrayObjetoProfesional={arrayObjetoProfesionalI}  guadarObjetoProfesional={guadarObjetoProfesionalI} idButtonProfesional="17" valMinimo="15" /> : null }
                        { inputTresI ? <InputDinamico nombre="Otros Idiomas"  eliminar ={guardarInputTresI} guardarInput= {guardarInputI}  inputProfesional={inputProfesionalI} arrayObjetoProfesional={arrayObjetoProfesionalI}  guadarObjetoProfesional={guadarObjetoProfesionalI} idButtonProfesional="18" valMinimo="15"/> : null }
                        </div>
                    </div>
                
                </div>


                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="titulo">¿Cuál seria el titulo sobre el tema que enseñaría?</label>
                    <input type="text" className="form-control" id="titulo"  />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="educacion_nivel">¿Cuál seria el nivel sobre el tema que enseñé?</label>
                    <br />
                    <br />
                    <select className="selectpicker" multiple data-live-search="true" id="educacion_nivel" title="Seleccione 1 o más">
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
                    <p className="sub">(Cada curso dure entre 15 minutos a 1 hora)</p>
                    <input type="number" className="form-control" id="duracion" />
                    </div>
                </div>

                <div className="form-row">
              
                    <div className="form-group col-md-12">
                    <label htmlFor="educacion_nivel">¿Qué materiales necesitas?</label>
                    <select className="selectpicker" multiple data-live-search="true" id="educacion_nivel"  title="Seleccione 1 o más">
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