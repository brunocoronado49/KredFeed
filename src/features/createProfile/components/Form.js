import { useState } from "react";
import { useForm } from "react-hook-form";
import { Formik } from "formik";

// Archuvos que componen el formulario completo
import CompanyData from "./CompanyData";
import Address from "./Address";
import UserData from "./UserData";
import UserAddress from "./UserAddress";
import BancAccount from "./BancAccount";

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

  const onSubmit = () => {
    alert(JSON.stringify(data));
  };

  return (
    <Formik
      initialValues={ data }
      validate={(values) => {
        const errors = {};
        
        if (!values.banco) errors.banco = "Banco obligatorio";
        if (!values.claveBanco) errors.claveBanco = "Clave de banco obligatoria";

        return errors;
      }}
      onSubmit={({ setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(data, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    > {({
        values,
        errors,
        touched,
        handleBlur,
    }) => (
        <form onSubmit={onSubmit}>
        {/* <CompanyData
        updateValueEvent={updateValueEvent}
        razonSocial="razonSocial"
        nombreComerial="nombreComerial"
        nacionalidadComapny="nacionalidadComapny"
        rfcCompany="rfcCompany"
        regimenFiscal="regimenFiscal"
        industria="industria"
        fechaConstitucion="fechaConstitucion"
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
      <hr /> */}
        <BancAccount
          updateValueEvent={updateValueEvent}
          claveBanco="claveBanco"
          banco="banco"
          valueClaveBanco={values.claveBanco}
          errorsClaveBanco={errors.claveBanco}
          valueBanco={values.banco}
          errorsBanco={errors.banco}
          touchedClaveBanco={touched.claveBanco}
          touchedBanco={touched.banco}
          handleBlur={handleBlur}
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
