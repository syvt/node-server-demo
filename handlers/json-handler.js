"use strict"

const request = require('request');
const url = require('url');
const systempath = require('path');
const mime = require('mime-types');
const fs = require('fs');

const db_service = require("../db/sqlite3/excel-sqlite-service");

const prefixMNP = (req,res,next) =>{
      db_service.handler.db().getRsts('select * from mnp')
    .then(data=>{
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    })
    .catch(err=>{
      res.writeHead(403, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(err));
    });

}

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
          { name: "LOGIN", next: "CALLBACK" , url: "http://localhost:8080/auth/login" }
        ]
      }]
};
  
  //console.log('client gui len bien so',req.paramS);


  let baoduongForm = {
    title: "Phiếu bảo dưỡng"
    , items: [
      {name: "PHIẾU CHẤM ĐIỂM", type: "title"}
      ,{name: "Siteid:DNCL0999 Quý: 4 Năm: 2017", type: "title"}
      ,{name: "I. PHÒNG MÁY", type: "title"}
      ,{key: "I_1", name: "1. Vị trí phòng máy...", type: "text", hint: "Nhập điểm", validators:  [{ required: true, min: 1, max: 2, pattern: "^[0-9]*$" }]}
      ,{key: "I_2", name: "2. Lỗ phi đơ...", type: "text", hint: "Nhập điểm", validators:  [{ required: true, min: 1, max: 2, pattern: "^[0-9]*$" }]}
      ,{key: "I_3", name: "3. Lỗ phi đơ...", type: "select", value: 5, options: [{ name: "1 điểm", value: 1 }, { name: "2 điểm", value: 2 }, { name: "3 điểm", value: 3 }, { name: "4 điểm", value: 4 }, { name: "5 điểm", value: 5 }] }
      ,{key: "I_4", name: "4. Chon điểm theo thanh trượt...",type: "range", icon:"contrast", value: 5, min: 0, max: 10 }
      ,{key: "I_5", name: "5. Cho điểm Đúng Sai...", icon: "plane", type: "toggle"}
      ,{ 
        type: "button"
      , options: [
        { name: "Chấm điểm", next: "CALLBACK" , url: "http://localhost:8080/auth/result-baoduong" }
      ]
    }
    ]
  }



  if (req.paramS.formm==="login")
  {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(loginForm));
  } else if (req.paramS.form==="baoduong")
  {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(baoduongForm));
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({form:'khong xac dinh'}));
  }
}




module.exports = {
    returnForm: returnForm,
    prefixMNP: prefixMNP
};