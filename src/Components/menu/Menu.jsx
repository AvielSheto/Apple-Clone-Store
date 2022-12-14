import React from 'react';
import { Link } from 'react-router-dom';
// mui
import Container from '@mui/material/Container';
import './menu_style.scss';

export default function Menu() {
  return (
    <Container >
      <div className='d-flex flex-column'>

        <Link style={{ textDecoration: 'none' }} to={'products'}>
          <div className='products p-4 py-5 pt-5  mt-3' >
            <p className='display-4 fw-normal'>Products</p>
          </div>
        </Link>
        <Link style={{ textDecoration: 'none' }} to={'customers'} >
          <div className='customers p-4 py-5 pt-5 d-flex mt-4'>
            <p className='display-4 text-white fw-normal' style={{ textShadow: "2px 2px 4px #000000" }}>Customers</p>
          </div>
        </Link>
        <Link style={{ textDecoration: 'none' }} to={'purchased'}>
          <div className='purchases p-4 py-5 pt-5 my-4'>
            <p className='display-4 text-white fw-normal' style={{ textShadow: "2px 2px 4px #000000" }}>Purchases</p>
          </div>
        </Link>
      </div>
    </Container>
  )
}
