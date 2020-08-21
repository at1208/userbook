import React, { useEffect, Fragment } from 'react';
import Router from 'next/router';
import { isAuth } from '../actions/admin';

const Admin = ({ children }) => {
    useEffect(() => {
        if (!isAuth()) {
            Router.push(`/`);
        } else {
            Router.push(`/dashboard`);
        }
    }, []);
    return <Fragment>{children}</Fragment>;
};

export default Admin;
