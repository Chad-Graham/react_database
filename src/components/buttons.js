import { useState, React } from 'react';
import styled from 'styled-components';

import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav, 
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const BTN = styled.button`
  background-color: #282c34;
  color: white;
  font-size: 10px;
  padding: 5px 10px;
  outline-style: none;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  border-radius: 5px;
  margin: 30px 5px 10px;
  cursor: pointer;
`;

export const Buttons = () => {

    return (
        <>
        <div>
        <BTN>RANDOM</BTN>
        <BTN>BY YEAR</BTN>
        <BTN>BY STATE</BTN>
        <BTN>BY COUNTRY</BTN>
        <BTN>BY SHAPE</BTN></div>

        </>
    );
};