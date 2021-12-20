import errors from './errors';

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
  if(!values.razonSocial) errors.razonSocial = "Razon social obligatorio"

  // Cuenta de banco
  if (!values.banco) errors.banco = "Bango obligatorio";
  if (!values.claveBanco) errors.claveBanco = "Clave de bando obligatoria";

  return errors;
};

export default validation