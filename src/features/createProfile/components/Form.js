import { useState } from "react";
import { useForm } from "react-hook-form";
import { Formik } from "formik";

// Archuvos que componen el formulario completo
import CompanyData from "./CompanyData";
import Address from "./Address";
import UserData from "./UserData";
import UserAddress from "./UserAddress";
import BancAccount from "./BancAccount";
import errorsFile from "../../../resources/errorsFile";

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
    });
  };

  return (
    <Formik
      initialValues={ data }

      validate={ errorsFile }

      onSubmit={(values, { resetForm }) => {
        alert(JSON.stringify(values, null, 2));
        console.log(values);
        resetForm();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleSubmit,
        handleChange,
      }) => (
        <form onSubmit={handleSubmit}>
          <CompanyData
            updateValueEvent={updateValueEvent}
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
            updateValueEvent={updateValueEvent}
            calleCompany="calleCompany"
            noExteriorCompany="noExteriorCompany"
            noInteriorCompany="noInteriorCompany"
            codigoPostalCompany="codigoPostalCompany"
            coloniaCompany="coloniaCompany"
            ciudadCompany="ciudadCompany"
            estadoCompany="estadoCompany"
            paisCompany="paisCompany"
          />
          <hr />
          <UserData
            updateValueEvent={updateValueEvent}
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
          />
          <hr />
          <UserAddress
            updateValueEvent={updateValueEvent}
            calle="calle"
            noExterior="noExterior"
            noInterior="noInterior"
            codigoPostal="codigoPostal"
            colonia="colonia"
            ciudad="ciudad"
            estado="estado"
            pais="pais"
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
            "Guardar"
          </button>
        </form>
      )}
    </Formik>
  );
}
