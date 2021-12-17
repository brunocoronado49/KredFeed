import { useForm } from "react-hook-form";
import "../style/createProfile.css";
import Form from "./Form";

export default function CreateProfile(props) {
  return (
    <div className="container">
      <div className="row mt-4">
        <center>
            <div className="col-sm-10">
              <div className="card">
                <div className="card-body">
                  <Form />
                </div>
              </div>
            </div>
        </center>
      </div>
    </div>
  );
}
