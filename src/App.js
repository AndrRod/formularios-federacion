// import logo from './logo.svg';
import './App.css';
// import React, {PureComponent} from 'react'
// import React, {Component} from 'react'
import { useState } from "react";
import jsPDF from 'jspdf';
// import App from './App';

import moment from "moment";
import 'moment/locale/es';
// import acuerdoIndividualEfectivo from './AcuerdoIndividualEfectivo';
// import jsPdfGenerator from './AcuerdoIndividualEfectivo';

 
function App(){
  // funcion jspdf
  
  let anioActual =  moment().format('YYYY');
  let mesActual = moment().format('MMMM')
  let diaActual = moment().format('D')
  
  const jsPdfGenerator = () =>{
    let titulo = "RECIBO&nbsp; DE&nbsp; PAGO&nbsp; INDEMNIZATORIO"
    var doc = new jsPDF('p', 'pt', 'legal');
    let docu1 =  `<br><div id="titulo"><strong><i><u>${titulo}</u></i> </strong></div><div id="fecha"> ${lugarAcuerdo}&nbsp;, ${diaActual} de ${mesActual}  de ${anioActual}. <div><br><br><div id="texto">Sr.</strong>&nbsp; GERENTE &nbsp; &nbsp; DE &nbsp; FEDERACION &nbsp;&nbsp; PATRONAL&nbsp; &nbsp; S.&nbsp;A. <br> SU&nbsp; DESPACHO <br> Presente  : <br>${nombre}, DNI N° ${dni}, con domicilio en ${domicilioTercero}  de la Localidad de ${provinciaTercero}, por sí y en su carácter de tercero; manifiesta que con motivo del Stro.N° ${numeroSntro}, ocurrido el día ${fechaSiniestro}, en ${lugarSiniestro} de la localidad de ${localidadSiniestro}; en el que intervino el vehículo ${vehiculoAsegurado} Dominio: ${dominioAsegurado}, asegurado en su compañía con la póliza N°: ${poliza}; QUE&nbsp; HÁ&nbsp; RECIBIDO&nbsp; POR &nbsp; PARTE &nbsp; DEL &nbsp; DR.&nbsp; LUCIANO&nbsp; ESPINOLA,&nbsp; MP&nbsp; 2298,&nbsp; Y&nbsp; A&nbsp; CUENTA&nbsp; Y&nbsp; ORDEN&nbsp; DE&nbsp; FEDERACION &nbsp; PATRONAL &nbsp; S.A., &nbsp; LA &nbsp; SUMA &nbsp; DE &nbsp; PESOS &nbsp; ${sumaLetras} -($ ${sumaNumeros}) &nbsp;  COMO  &nbsp;TOTAL, &nbsp;DEFINITIVA &nbsp; Y UNICA INDEMNIZACION. Hago/hacemos expresa manifestación que la percepción el monto indemnizatorio desobligará de toda responsabilidad, relacionada con el presente siniestro y sus consecuencias, tanto a esa aseguradora como a vuestro asegurado y/o conductor de la unidad cubierta bajo póliza de automotores antes mencionada. Además hago/hacemos expresa manifestación que la percepción de la suma pretendida en el presente provoca la extinción de la acción penal por reparación integral del perjuicio en los términos del artículo 59, inciso 6° del Código Penal en relación al hecho que motiva el presente, no siendo necesaria su refrenda mediante los mecanismos de solución alternativa del conflicto previstos en el código de procedimiento penal jurisdiccional.Asimismo, para el caso que la autoridad judicial decida igualmente dar trámite a alguno de los mecanismos alternativos pertinentes y/o a beneficios incluyéndose la Suspensión del Juicio a Prueba, dejo/dejamos debidamente expresado que al haber percibido la suma resarcitoria pretendida, se mantiene y reitera mi/nuestra voluntad que proceda la extinción de la acción penal por la reparación integral del perjuicio, así como también de por cumplido el requisito de ofrecimiento de reparación del daño previsto por el Art.76 bis del Código Penal Argentino.Que el presente acuerdo se ha conformado con el total consentimiento del exponente.Es  todo.- - - - - - - - - - - - -  - - - - - - - - - -<br> Saludo a Ud. muy atentamente.<br>Firma: <br>Nombre y pellido: 
    <br>Domicilio:<br> Doc.de Ident. Nº: </div>`
    
  
    const documentoAcuerdoIndividual = document.createElement("div");
    documentoAcuerdoIndividual.insertAdjacentHTML("afterbegin", docu1);
    // documentoAcuerdoIndividual.id = "texto"
  
    console.log(documentoAcuerdoIndividual)
    const documentoMarco = document.createElement("body");
    
    
    doc.html(documentoAcuerdoIndividual, {
      callback: function (pdf) {
        doc.setFont('courier');        
        pdf.output("dataurlnewwindow");        
      }
    });
  }
  const [nombre, setNombre] = useState("SIN NOMBRE");    
  const [dni, setDni] = useState("SIN DNI");
  const [domicilioTercero, setDomicilioTercero] = useState("SIN DOMICILIO")
  const [provinciaTercero, setProvinciaTercero] = useState("Resistencia (Chaco)")
  const [numeroSntro, setStroNumero] = useState("SIN NUMERO SINIESTRO")
  const [fechaSiniestro, setFechaSiniestro] = useState("SIN FECHA SINIESTRO")
  const [lugarSiniestro, setLugarSiniestro] = useState("SIN LUGAR SINIESTRO")
  const [localidadSiniestro, setLocalidadSiniestro] = useState("Resistencia (Chaco)")
  const [vehiculoAsegurado, setVehiculoAsegurado] = useState("SIN VEHICULO ASEGURADO")
  const [dominioAsegurado, setDominioAsegurado] = useState("SIN DOMINIO")
  const [poliza, setPoliza] = useState("SIN POLIZA")
  const [sumaLetras, setSumaLetras] = useState("SIN MONTO")
  const [sumaNumeros, setSumaNumeros] = useState("SIN MONTO")
  const [lugarAcuerdo, setLugarAcuerdo] = useState("Resistencia")

  const onChangeLugarAcuerdo = (l)=>{
    setLugarAcuerdo(l.target.value)
  }
  const onChangeSumaLetras =(s)=>{
    setSumaLetras(s.target.value)
  }
  const onChangeSumaNum = (s)=>{
    setSumaNumeros(s.target.value)
  }
  const onChangePoliza = (p) =>{
    setPoliza(p.target.value)
  }
  const onChangeDominioVehiculoAsegurado = (d)=>{
    setDominioAsegurado(d.target.value)
  }
  const onChangeVehiculoAsegurado = (v) =>{
    setVehiculoAsegurado(v.target.value)
  }
  const onChangeLocalidadSiniestro =(l)=>{
    setLocalidadSiniestro(l.target.value)
  }
  const onChangeLugarSiniestro = (l)=>{
    setLugarSiniestro(l.target.value)
  }
  const onChangeFechaSiniestro = (f)=>{
    setFechaSiniestro(f.target.value)
  }
  const onChangeNumeroSntro =(s) =>{
    setStroNumero(s.target.value)
  }
  const onChangeNombre = (nomb) =>{
    setNombre(nomb.target.value)
  }
  const onChangeDni = (d) =>{
    setDni(d.target.value)
  }  
  const onChangeDomicilioTercero = (d) =>{
    setDomicilioTercero(d.target.value)
  }  
  const onChangeProvinciaTercero = (d) =>{
    setProvinciaTercero(d.target.value)
  }
  return (
    <div class="container">



      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Lugar del Acuerdo</label>
        <div class="col-sm-10">
          <input id="lugarAcuerdo" type="text" class="form-control" placeholder="Resistencia" onChange={onChangeLugarAcuerdo} />
        </div>
      </div>


      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Nombre y Apellido del tercero</label>
        <div class="col-sm-10">
          <input id="nombre" type="text" class="form-control" placeholder="nombre y apellido" onChange={onChangeNombre} />
        </div>
      </div>

      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Dni del tercero</label>
        <div class="col-sm-10">
          <input id="DNI" type="text" class="form-control" placeholder="dni" onChange={onChangeDni} />
        </div>
      </div>


      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Domicilio del tercero</label>
        <div class="col-sm-10">
          <input id="domicilioTercero" type="text" class="form-control" placeholder="tercero domicilio" onChange={onChangeDomicilioTercero} />

        </div>
      </div>

      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Localidad del Tercero</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="Resistencia (Chaco)" onChange={onChangeProvinciaTercero} />

        </div>
      </div>

      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">N° siniestro</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="99-4-0000" onChange={onChangeNumeroSntro} />

        </div>
      </div>

      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Fecha del Siniestro</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="00/00/0000" onChange={onChangeFechaSiniestro} />

        </div>
      </div>

      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Lugar del siniestro</label>
        <div class="col-sm-10">

          <input type="text" class="form-control" placeholder="nombre de calles" onChange={onChangeLugarSiniestro} />
        </div>
      </div>

      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Localidad y Provincia del Siniestro</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="Resistencia (Chaco)" onChange={onChangeLocalidadSiniestro} />

        </div>
      </div>

      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Vehiculo asegurado</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="marca y modelo" onChange={onChangeVehiculoAsegurado} />

        </div>
      </div>

      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Dominio Vehiculo asegurado</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="numero de dominio" onChange={onChangeDominioVehiculoAsegurado} />

        </div>
      </div>

      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">N° de Poliza del Asegurado</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="poliza asegurado" onChange={onChangePoliza} />

        </div>
      </div>

      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Ofrecimiento en letras</label>
        <div class="col-sm-10">

          <input type="text" class="form-control" placeholder="DIEZ MIL" onChange={onChangeSumaLetras} />
        </div>
      </div>

      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Ofrecimiento en Numeros</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" placeholder="10.000" onChange={onChangeSumaNum} />
        </div>
      </div>
        
    <br /><br />
      <div class="col-sm-12 btn btn-md btn-outline-dark" onClick={jsPdfGenerator}>Recibo de pago Individual</div>
    
        
             
  </div>
                   
     
   )};
    
   
export default App;
