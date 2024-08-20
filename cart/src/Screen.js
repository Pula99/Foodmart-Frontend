import React from 'react'
import Banner from './components/Banner'
import { CssBaseline } from '@mui/material'
import Cart from './components/Cart';
import Confirm from './components/Confirm';

function Screen() {
  return (
    <div>
        <CssBaseline/>
        <Banner/>
        <Cart/>
        <Confirm/>
    </div>
  );
}

export default Screen