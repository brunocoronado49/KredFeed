import { useState } from "react";
import { Formik } from "formik";

// Archuvos que componen el formulario completo
import CompanyData from "./CompanyData";
import Address from "./Address";
import UserData from "./UserData";
import UserAddress from "./UserAddress";
import BancAccount from "./BancAccount";
import errorsFile from "../../../resources/errorsFile";

// Los datos van a contener los campos del formulario
export default function Form(props) {
  const [data, setData] = useState({
    razonSocial: "",
    nombreComerial: "",
    nacionalidadComapny: "",
    rfcCompany: "",
    regimenFiscal: "",
    industria: "",
    fechaConstitucion: "",
    calleCompany: "",
    noExteriorCompany: "",
    noInteriorCompany: "",
    codigoPostalCompany: "",
    coloniaCompany: "",
    ciudadCompany: "",
    estadoCompany: "",
    paisCompany: "",
    comprobanteDomicilio: "",
    telefono: "",
    correo: "",
    nombre: "",
    genero: "",
    paisNacimiento: "",
    fechaNacimiento: "",
    entidadFederativa: "",
    nacionalidad: "",
    curp: "",
    rfc: "",
    estadoCivil: "",
    correoLegal: "",
    telefonoLegal: "",
    documentoIdentificacion: "",
    calle: "",
    noExterior: "",
    noInterior: "",
    codigoPostal: "",
    colonia: "",
    ciudad: "",
    estado: "",
    pais: "",
    claveBanco: "",
    banco: "",
  });

  const updateValueEvent = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
      // Asigna los nuevos valores a los datos despues de hacer una copia
    });
  };

  return (
    // Usamos formik para validar los datos
    <Formik
      // como valores iniciales les pasamos los datos vacíos
      initialValues={ data }

      // aqui se manejan los errores de cada campo que estan en el archivo de errores 
      validate={ errorsFile }

      // Al hacer submit se envían los datos y se guardan en la data
      onSubmit={(values, { resetForm }) => {
        alert(JSON.stringify(values, null, 2));
        console.log(values);
        resetForm();
      }}
    >
      {({
        values,
        errors,
        handleBlur,
        handleSubmit,
        handleChange,
      }) => (
        // En cada componente (inputs del formulario) se mandan los parámetros desde formik 
        // para hacer las validaciones de cada uno y guardar la data que se mande
        <form onSubmit={handleSubmit}>
          <h1>{data.ciudad}</h1>
          <CompanyData
            updateValueEvent={handleChange}
            razonSocial="razonSocial"
            nombreComerial="nombreComerial"
            nacionalidadComapny="nacionalidadComapny"
            rfcCompany="rfcCompany"
            regimenFiscal="regimenFiscal"
            industria="industria"
            fechaConstitucion="fechaConstitucion"
            valuesRazonSocial={values.razonSocial}
            errorsRazonSocial={errors.razonSocial}
            valuesNombreComercial={values.nombreComerial}
            errorsNombreComercial={errors.nombreComerial}
            valuesNacionalidadCompany={values.nacionalidadComapny}
            errorsNacionalidadComapny={errors.nacionalidadComapny}
            valuesRfcCompany={values.rfcCompany}
            errorsRfcCompany={errors.rfcCompany}
            valuesRegimenFiscal={values.regimenFiscal}
            errorsRegimenFiscal={errors.regimenFiscal}
            valuesIndustria={values.industria}
            errorsIndustria={errors.industria}
            valuesFechaConstitucion={values.fechaConstitucion}
            errorsFechaConstitucion={errors.fechaConstitucion}
            handleBlur={handleBlur}
          />
          <hr />
          <Address
            updateValueEvent={handleChange}
            calleCompany="calleCompany"
            noExteriorCompany="noExteriorCompany"
            noInteriorCompany="noInteriorCompany"
            codigoPostalCompany="codigoPostalCompany"
            coloniaCompany="coloniaCompany"
            ciudadCompany="ciudadCompany"
            estadoCompany="estadoCompany"
            paisCompany="paisCompany"
            valuesCalleCompany={values.calleCompany}
            errorsCalleCompany={errors.calleCompany}
            valuesnoExteriorCompany={values.noExteriorCompany}
            errorsnoExteriorCompany={errors.noExteriorCompany}
            valuesnoInteriorCompany={values.noInteriorCompany}
            errorsnoInteriorCompany={errors.noInteriorCompany}
            valuescodigoPostalCompany={values.codigoPostalCompany}
            errorscodigoPostalCompany={errors.codigoPostalCompany}
            valuescoloniaCompany={values.coloniaCompany}
            errorscoloniaCompany={errors.coloniaCompany}
            valuesciudadCompany={values.ciudadCompany}
            errorsciudadCompany={errors.ciudadCompany}
            valuesestadoCompany={values.estadoCompany}
            errorsestadoCompany={errors.estadoCompany}
            valuespaisCompany={values.paisCompany}
            errorspaisCompany={errors.paisCompany}
            handleBlur={handleBlur}
          />
          <hr />
          <UserData
            updateValueEvent={handleChange}
            comprobanteDomicilio="comprobanteDomicilio"
            telefono="telefono"
            correo="correo"
            nombre="nombre"
            genero="genero"
            paisNacimiento="paisNacimiento"
            fechaNacimiento="fechaNacimiento"
            entidadFederativa="entidadFederativa"
            nacionalidad="nacionalidad"
            curp="curp"
            rfc="rfc"
            estadoCivil="estadoCivil"
            correoLegal="correoLegal"
            telefonoLegal="telefonoLegal"
            documentoIdentificacion="documentoIdentificacion"
            valuescomprobanteDomicilio={values.comprobanteDomicilio}
            errorscomprobanteDomicilio={errors.comprobanteDomicilio}
            valuestelefono={values.telefono}
            errorstelefono={errors.telefono}
            valuescorreo={values.correo}
            errorscorreo={errors.correo}
            valuesnombre={values.nombre}
            errorsnombre={errors.nombre}
            valuesgenero={values.genero}
            errorsgenero={errors.genero}
            valuespaisNacimiento={values.paisNacimiento}
            errorspaisNacimiento={errors.paisNacimiento}
            valuesfechaNacimiento={values.fechaNacimiento}
            errorsfechaNacimiento={errors.fechaNacimiento}
            valuesentidadFederativa={values.entidadFederativa}
            errorsentidadFederativa={errors.entidadFederativa}
            valuesnacionalidad={values.nacionalidad}
            errorsnacionalidad={errors.nacionalidad}
            valuescurp={values.curp}
            errorscurp={errors.curp}
            valuesrfc={values.rfc}
            errorsrfc={errors.rfc}
            valuesestadoCivil={values.estadoCivil}
            errorsestadoCivil={errors.estadoCivil}
            valuescorreoLegal={values.correoLegal}
            errorscorreoLegal={errors.correoLegal}
            valuestelefonoLegal={values.telefonoLegal}
            errorstelefonoLegal={errors.telefonoLegal}
            valuesdocumentoIdentificacion={values.documentoIdentificacion}
            errorsdocumentoIdentificacion={errors.documentoIdentificacion}
            handleBlur={handleBlur}
          />
          <hr />
          <UserAddress
            updateValueEvent={handleChange}
            calle="calle"
            noExterior="noExterior"
            noInterior="noInterior"
            codigoPostal="codigoPostal"
            colonia="colonia"
            ciudad="ciudad"
            estado="estado"
            pais="pais"
            valuescalle={values.calle}
            errorscalle={errors.calle}
            valuesnoExterior={values.noExterior}
            errorsnoExterior={errors.noExterior}
            valuesnoInterior={values.noInterior}
            errorsnoInterior={errors.noInterior}
            valuescodigoPostal={values.codigoPostal}
            errorscodigoPostal={errors.codigoPostal}
            valuescolonia={values.colonia}
            errorscolonia={errors.colonia}
            valuesciudad={values.ciudad}
            errorsciudad={errors.ciudad}
            valuesestado={values.estado}
            errorsestado={errors.estado}
            valuespais={values.pais}
            errorspais={errors.pais}
            handleBlur={handleBlur}
          />
          <hr />
          <BancAccount
            updateValueEvent={handleChange}
            claveBanco="claveBanco"
            banco="banco"
            errorsClaveBanco={errors.claveBanco}
            errorsBanco={errors.banco}
            handleBlur={handleBlur}
            valuesClaveBanco={values.claveBanco}
            valuesBanco={values.banco}
          />
          <hr />
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      )}
    </Formik>
  );
}
