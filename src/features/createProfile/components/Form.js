import { useState } from 'react';
import { useForm, useEffect } from 'react-hook-form';
import CompanyData from './CompanyData';
import Address from './Address';
import UserData from './UserData';
import UserAddress from './UserAddress';
import BancAccount from './BancAccount';

export default function Form() {

    const [data, setData] = useState({
        razonSocial: '', nombreComerial: '', nacionalidadComapny: '',
        rfcCompany: '', regimenFiscal: '', industria: '',
        fechaConstitucion:'', calleCompany: '', noExteriorCompany: '',
        noInteriorCompany: '', codigoPostalCompany: '', coloniaCompany: '',
        ciudadCompany: '', estadoCompany: '', paisCompany: '',
        comprobanteDomicilio: '', telefono: '', correo: '',
        nombre: '', genero: '', paisNacimiento: '', fechaNacimiento: '',
        entidadFederativa: '', nacionalidad: '', curp: '', rfc: '',
        estadoCivil: '', correoLegal: '', telefonoLegal: '', 
        documentoIdentificacion: '', calle: '', noExterior: '', 
        noInterior: '', codigoPostal: '', colonia: '', ciudad: '', 
        estado: '', pais: '', claveBanco: '', banco: '',
    })

    const updateValueEvent  = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const enviarData = (event) => {
        event.preventDefault()
        console.log(data)
    }

    return (
        <form onSubmit={enviarData}>
            <CompanyData
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
            <hr />
            <BancAccount
                updateValueEvent={updateValueEvent}
                claveBanco="claveBanco"
                banco="banco"
            />
            <hr />
            <button 
                type="submit" 
                className="btn btn-primary"
            >Guardar</button>
        </form>
    )
}

