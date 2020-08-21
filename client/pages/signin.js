import React, { Fragment, useEffect, useState } from 'react';
import { Stack } from "@chakra-ui/core";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { signin, authenticate, isAuth} from '../actions/admin';
import { ToastContainer, toast } from 'react-toastify';
import Router from 'next/router';
import Layout from '../components/layout'


const App = () => {
  const [adminDetail, setAdminDetail] = useState({ username:'', password: ''});

  const handleSubmitAdmin = (e) => {
        e.preventDefault();
        signin(adminDetail).then((response) => {
          if(response.error){
             return toast.error(response.error)
          }
            authenticate(response, () => {
            if (isAuth()) {
            Router.push(`/dashboard`);
            }
          })
        })
        .catch(err => {
           console.log(err)
        })
  }



  return <Fragment>
          <Layout>
          <ToastContainer />
           {!isAuth() && <div className="container-fluid">
               <div className="row justify-content-center">
                   <div className="home_container">
                   <div>
                      <form onSubmit={handleSubmitAdmin}>
                        <TextField id="1"
                           label="Enter Username"
                             className="home_text_input"
                           variant="outlined"
                           fullWidth
                           onChange={(e) => setAdminDetail({ ...adminDetail, username: e.target.value})}/>
                        <TextField id="2"
                           label="Enter password"
                           type="password"
                             className="home_text_input"
                           variant="outlined"
                           fullWidth
                           onChange={(e) => setAdminDetail({ ...adminDetail, password: e.target.value})}/>
                        <button className="btn btn-block bg-info" onClick={handleSubmitAdmin}>Submit</button>
                     </form>
                   </div>
                   </div>
               </div>
           </div>}
           </Layout>
         </Fragment>
}

export default App;
