import React from 'react'
import Banner from './components/Banner'
import Account from './components/Account'
import { CssBaseline, Grid } from '@mui/material'

function Screen() {
    return (
        <div>
            <CssBaseline />
            <Banner />
            <Account />
        </div>
    )
}

export default Screen