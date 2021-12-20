import errorsAddress from './errorsAddress';

const validation = (values) => {
  let errors = {};

  // Datos de la compañia
  if(!values.razonSocial) errors.razonSocial = "Razon social obligatorio"
  if(!values.nombreComerial) errors.nombreComerial = "Nombre comercial requerido"
  if(!values.nacionalidadComapny) errors.nacionalidadComapny = "Nacionalidad requerida"
  if(!values.rfcCompany) errors.rfcCompany = "RFC requerido"
  if(!values.regimenFiscal) errors.regimenFiscal = "Regimen fiscal obligatorio"
  if(!values.industria) errors.industria = "Industria requerida"
  if(!values.fechaConstitucion) errors.fechaConstitucion = "Fecha requerida"
  
  // Direccion de compañia
  if(!values.calleCompany) errors.calleCompany = errorsAddress.errorCalle
  if(!values.noExteriorCompany) errors.noExteriorCompany = errorsAddress.errorNoExterior 
  if(!values.noInteriorCompany) errors.noInteriorCompany = errorsAddress.errorNoInterior
  if(!values.codigoPostalCompany) errors.codigoPostalCompany = errorsAddress.errorCodigoPostal
  if(!values.coloniaCompany) errors.coloniaCompany = errorsAddress.errorColonia
  if(!values.ciudadCompany) errors.ciudadCompany = errorsAddress.errorCiudad
  if(!values.estadoCompany) errors.estadoCompany = errorsAddress.errorEstado
  if(!values.paisCompany) errors.paisCompany = errorsAddress.errorPais

  // Datos del usuario
  if(!values.comprobanteDomicilio) errors.comprobanteDomicilio = "Domicilio requerido"
  if(!values.telefono) errors.telefono = "Telefono requerido"
  if(!values.correo) errors.correo = "Correo requerido"
  // Validar correo
  if(!values.nombre) errors.nombre = "Nombre requerido"
  if(!values.genero) errors.genero = "Género requerido"
  if(!values.paisNacimiento) errors.paisNacimiento = "País requerido"
  if(!values.fechaNacimiento) errors.fechaNacimiento = "Fecha requerida"
  if(!values.entidadFederativa) errors.entidadFederativa = "Entidad requerida"
  if(!values.nacionalidad) errors.nacionalidad = "Nacionalidad requerida"
  if(!values.curp) errors.curp = "CURP requerida"
  if(!values.rfc) errors.rfc = "RFC requerido"
  if(!values.estadoCivil) errors.estadoCivil = "Estado civil requerido"
  if(!values.correoLegal) errors.correoLegal = "Correo legal requerido"
  // Validar correo
  if(!values.telefonoLegal) errors.telefonoLegal = "Teléfono requerido"
  if(!values.documentoIdentificacion) errors.documentoIdentificacion = "Documento requerido"

  // Direccion de usuario
  if(!values.calle) errors.calle = errorsAddress.errorCalle
  if(!values.noExterior) errors.noExterior = errorsAddress.errorNoExterior 
  if(!values.noInterior) errors.noInterior = errorsAddress.errorNoInterior
  if(!values.codigoPostal) errors.codigoPostal = errorsAddress.errorCodigoPostal
  if(!values.colonia) errors.colonia = errorsAddress.errorColonia
  if(!values.ciudad) errors.ciudad = errorsAddress.errorCiudad
  if(!values.estado) errors.estado = errorsAddress.errorEstado
  if(!values.pais) errors.pais = errorsAddress.errorPais

  // Cuenta de banco
  if (!values.banco) errors.banco = "Bango obligatorio";
  if (!values.claveBanco) errors.claveBanco = "Clave de bando obligatoria";

  return errors;
};

export default validation
