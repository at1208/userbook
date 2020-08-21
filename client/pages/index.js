import React, { Fragment, useEffect, useState } from 'react';
import { Stack } from "@chakra-ui/core";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { createUser } from '../actions/user';
import { signin, authenticate, isAuth} from '../actions/admin';
import { ToastContainer, toast } from 'react-toastify';
import Router from 'next/router';
import Layout from '../components/layout'


const App = () => {
  const [userDetail, setUserDetail] = useState({ firstName:'',lastName: '', fullAddress:'', phone: '', ssn: ''});
  const handleSubmitUser = (e) => {
        e.preventDefault();
        createUser(userDetail).then((response) => {
          if(response.error){
             return toast.error(response.error)
          }
           toast.success(response.message);
           return setUserDetail({...userDetail, firstName:'',lastName: '', fullAddress:'', phone: '', ssn: ''})
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
                      <form onSubmit={handleSubmitUser}>
                      <TextField id="1"
                         label="Enter first name"
                         className="home_text_input"
                         variant="outlined"
                         value={userDetail.firstName}
                         fullWidth
                         onChange={(e) => setUserDetail({ ...userDetail, firstName: e.target.value})}/>

                        <TextField id="1"
                           label="Enter last name"
                           className="home_text_input"
                           variant="outlined"
                           value={userDetail.lastName}
                           fullWidth
                           onChange={(e) => setUserDetail({ ...userDetail, lastName: e.target.value})}/>
                        <TextField id="3"
                            label="Enter Phone number"
                            className="home_text_input"
                            variant="outlined"
                            fullWidth
                            value={userDetail.phone}
                            onChange={(e) => setUserDetail({ ...userDetail, phone: e.target.value})}/>

                        <TextField id="3"
                            label="Enter full address"
                            className="home_text_input"
                            variant="outlined"
                            fullWidth
                            value={userDetail.fullAddress}
                            onChange={(e) => setUserDetail({ ...userDetail, fullAddress: e.target.value})}/>

                        <TextField id="4"
                            label="Enter SSN"
                            className="home_text_input"
                            variant="outlined"
                            fullWidth
                            value={userDetail.ssn}
                            onChange={(e) => setUserDetail({ ...userDetail, ssn: e.target.value})}/>
                        <button className="btn btn-block bg-info" onClick={handleSubmitUser}>Submit</button>
                     </form>
                   </div>
                   </div>
               </div>
           </div>}
           </Layout>
         </Fragment>
}

export default App;
