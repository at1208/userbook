import React, { useEffect, Fragment } from 'react';
import Router, { useRouter } from 'next/router';

import { isAuth, signout } from '../actions/admin';
import { Button, ButtonGroup } from "@chakra-ui/core";
import Link from 'next/link'

const Header = ({  href  }) => {
  const router = useRouter()
  console.log(router.pathname)
  const isActive = path => {
      if (path === router.pathname) {
          return { color: 'white', fontWeight:"bold", backgroundColor: "teal" };
      } else {
          return { color: 'black',fontWeight:"bold" };
      }
  };
    return  <div className="header_container">
              <div className="row justify-content-center pt-2">
       {!isAuth() &&   <>
                    <Link href="/">
                    <a className="m-1" >
                    <button className="btn" style={isActive('/')}>Form</button>
                    </a>
                    </Link>

                    <Link href="/signin" >
                    <a className="m-1 ml-2">
                    <button className="btn" style={isActive('/signin')}>Sign in</button>
                    </a>
                    </Link>
                   </>
             }
            {isAuth() && <ButtonGroup spacing={4}>
                <Link href="/dashboard" >
                 <a>
                   <button  className="btn" style={isActive('/dashboard')}>Dashboard</button>
                 </a>
               </Link>
                <button  className="btn btn-danger m-1" onClick={() => signout(() => Router.replace(`/`))}>Sign out</button>
              </ButtonGroup>}
              </div>
            </div>
};

export default Header;
