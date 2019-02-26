"use strict"

const request = require('request');
const url = require('url');
const systempath = require('path');
const mime = require('mime-types');
const fs = require('fs');

const returnForm = (req, res, next) =>{

  let loginForm = {
    title: "Login"
    , items: [
      {          name: "Form login", type: "title"}
      , { key: "username", name: "username", hint: "Vui lòng nhập địa chỉ email", type: "text", input_type: "userName", icon: "person", validators: [{ required: true, min: 5, max: 50 }]}
      , { key: "password", name: "password", hint: "Mật khẩu là mật khẩu email của bạn", type: "password", input_type: "password", icon: "key", validators: [{ required: true, min: 6, max: 20}]}
      ,{ 
          type: "button"
        , options: [
          { name: "LOGIN", next: "CONTINUE" , url: "http://localhost:8080/auth/login" }
        ]
      }]
};
  
  console.log('client gui len bien so',req.paramS);

  if (req.paramS.form==="login")
  {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(loginForm));
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({form:'khong xac dinh'}));
  }
}



module.exports = {
    returnForm: returnForm
};