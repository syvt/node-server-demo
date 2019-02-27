"use strict"

const request = require('request');
const url = require('url');
const systempath = require('path');
const mime = require('mime-types');
const fs = require('fs');

const postLogin = (req, res, next) =>{

  console.log(req.json_data);
  //truyen len {username:'',password:''}
  //xac thuc trong ldap hoac csdl
  //neu dung thi tra ve ok
  //neu sai thi tra ve not ok
  
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({status:"OK",message:"Chuc mung ban da login thanh cong!"}));
  
}

const postResult = (req, res, next) =>{

  console.log(req.json_data);
  //truyen len {username:'',password:''}
  //xac thuc trong ldap hoac csdl
  //neu dung thi tra ve ok
  //neu sai thi tra ve not ok
  
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({status:"OK",message:"Chuc mung ban da gui ket qua thanh cong!"}));

}



module.exports = {
    postLogin: postLogin,
    postResult: postResult

};