// const express = require('express');
// const router = require()
// const app = express();
// app.use(express.json());
// app.listen(3000, () => console.log('server running on port 3000'));

app.get('/favicon.ico', (req, res) => res.status(200))
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

import React from 'react'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { FaLocationArrow } from "react-icons/fa"

import { DropDownContainer, DropDownIcon, DropDownItem, DropDownItemDesc, DropDownItemTitle, DropDownTextContainer } from './NavDropDown'

const NavDropDown = (props) => (
  <div>
    NavDropDown
  </div>
);

export default NavDropDown
