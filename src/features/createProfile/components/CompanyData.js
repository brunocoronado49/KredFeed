import { useForm } from "react-hook-form";

export default function CompanyData(props) {
  return (
    <div>
      <h4>Company data</h4>
      <div className="form-group p-2">
        <input
          type="text"
          className="form-control"
          placeholder="Razón social"
        />
      </div>
      <div className="row g-3 p-2">
        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre comercial"
          />
        </div>
        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Nacionalidad"
          />
        </div>
        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Fecha de constitución"
          />
        </div>
      </div>
      <div className="row g-3 p-2">
        <div className="form-group col-auto">
          <input type="text" className="form-control" placeholder="RFC" />
        </div>
        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Régimen fiscal"
          />
        </div>
        <div className="form-group col-auto">
          <input type="text" className="form-control" placeholder="Industria" />
        </div>
      </div>
    </div>
  );
}
