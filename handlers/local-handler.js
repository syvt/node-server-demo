"use strict"

const request = require('request');
const url = require('url');
const systempath = require('path');
const mime = require('mime-types');
const fs = require('fs');

const postLogin = (req, res, next) =>{

  console.log(req.json_data);
  //truyen len {username:'',password:''}
  
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(req.json_data));
}



module.exports = {
    postLogin: postLogin
};