import React, { useEffect, Fragment } from 'react';
import Router from 'next/router';
import { isAuth } from '../actions/admin';
import Header from './header';

const Layout = ({ children }) => {
    return <Fragment>
           <Header />
           {children}
          </Fragment>;
};

export default Layout;
