import { useState } from 'react';
import { useForm, useEffect } from 'react-hook-form';
import CompanyData from './CompanyData';
import Address from './Address';
import UserData from './UserData';
import UserAddress from './UserAddress';
import BancAccount from './BancAccount';

export default function Form(props) {
    return (
        <form>
            <CompanyData />
            <hr />
            <Address />
            <hr />
            <UserData />
            <hr />
            <UserAddress />
            <hr />
            <BancAccount />
            <hr />
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    )
}