import React from 'react'
import { Box, Button, Container } from '@mui/material';
import ConfirmCart from "../services/ConfirmCart"

function Confirm() {

    const handleConfirmButton = () => {
        ConfirmCart();
    }
    return (
        <Container maxWidth="lg">
            <Box
                   sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginBottom: 4,
                }}
            >
                <Button
                    variant='outlined'
                    sx={{
                        display: 'flex',
                        marginBottom: 4,
                        borderRadius: 10,
                        color: "white",
                        bgcolor: "#50C878",
                        '&:hover': {
                            bgcolor: "#1B8A6B",
                        }
                    }}
                    onClick={handleConfirmButton}
                >
                    Confirm
                </Button>
            </Box>
        </Container>
    )
}

export default Confirm
