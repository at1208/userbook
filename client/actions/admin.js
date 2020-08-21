import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
import Router from 'next/router';


export const signin = user => {

    return fetch(`${process.env.NEXT_PUBLIC_API}/signin`, {
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



//SIGN OUT
export const signout = next => {
    removeCookie('token');
    removeLocalStorage('user');
    next();

    return fetch(`${process.env.NEXT_PUBLIC_API}/signout`, {
        method: 'GET'
    })
        .then(response => {
            console.log('signout success');
        })
        .catch(err => console.log(err));
};


//SET COOKIE
export const setCookie = (key, value) => {
    if (process.browser) {
        cookie.set(key, value, {
            expires: 1
        });
    }
};


//REMOVE COOKIE
export const removeCookie = key => {
    if (process.browser) {
        cookie.remove(key, {
            expires: 1
        });
    }
};


//GET COOKIE
export const getCookie = key => {
    if (process.browser) {
        return cookie.get(key);
    }
};


//SET IN LOCALSTORAGE
export const setLocalStorage = (key, value) => {
    if (process.browser) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};


//REMOVE FROM LOCALSTORAGE
export const removeLocalStorage = key => {
    if (process.browser) {
        localStorage.removeItem(key);
    }
};


//AUTHENTICATE USER BY PASS DATA TO COOKIE AND LOCALSTORAGE
export const authenticate = (data, next) => {
    setCookie('token', data.token);
    setLocalStorage('user', data.user);
    next();
};


//CHECK USER IS AUTHENTICATE OR NOT
export const isAuth = () => {
    if (process.browser) {
        const cookieChecked = getCookie('token');
        if (cookieChecked) {
            if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'));
            } else {
                return false;
            }
        }
    }
};
