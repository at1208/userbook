import React, { useState, Fragment, useEffect } from 'react';
import Admin from '../components/admin';
import { isAuth } from '../actions/admin';
import { getAllUsers } from '../actions/user';
import Layout from '../components/layout';
import Table from 'react-bootstrap/Table';


const Dashboard = () => {
  const [users, setUsers] = useState()

const allUsers = () => {
  getAllUsers()
     .then(res => {
        setUsers(res.result);
    })
    .catch(err => console.log(err))
}

    useEffect(() => {
      allUsers()
    }, [])

    const showUsers = () => {
      return  users && users.map( (item,i) => {
          return <tr key={i}>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.phone}</td>
                      <td>{item.fullAddress}</td>
                      <td>{item.ssn}</td>
                    </tr>
        })
    }

  return <Fragment>
             <Layout>
              <div className='container text-center mt-5'>
                   <Table>
                 <thead>
                   <tr>
                     <th>First name</th>
                     <th>Last name</th>
                     <th>Phone</th>
                     <th>Full address</th>
                     <th>SSN</th>
                   </tr>
                 </thead>
                 <tbody>
                    {showUsers()}
                 </tbody>
             </Table>
             </div>
          </Layout>
         </Fragment>
}

export default Dashboard;
