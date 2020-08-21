import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
import Router from 'next/router';


export const createUser = user => {
    return fetch(`${process.env.NEXT_PUBLIC_API}/create-user`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getAllUsers = user => {
    return fetch(`${process.env.NEXT_PUBLIC_API}/all-user`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
