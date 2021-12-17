import { useForm } from 'react-hook-form';
import CompanyData from './CompanyData';
import Address from './Address';
import UserData from './UserData';

export default function Form(props) {
    return (
        <form action="">
            <CompanyData/>
            <hr />
            <Address/>
            <hr />
            <UserData/>
            <hr />
            <button className="btn btn-primary">Guardar</button>
        </form>
    )
}