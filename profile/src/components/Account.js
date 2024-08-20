import { Box, Breadcrumbs, Container, Grid, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Person2Icon from '@mui/icons-material/Person2';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';

function Account() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            setUserData(JSON.parse(storedUser));
        }
    }, []);

    if (!userData) {
        return <Typography>Loading...</Typography>;
    }

    const getUserAttribute = (name) => {
        const attribute = userData.UserAttributes.find(attr => attr.Name === name);
        return attribute ? attribute.Value : 'N/A';
    };

    return (
        <Container maxWidth='xl' sx={{ mt: 4, mb: 4 }}>
            <Breadcrumbs aria-label='breadcrumb' sx={{ marginBottom: 2 }}>
                <Link underline='hover' color="inherit" href="/">
                    Home
                </Link>
                <Typography color="text.primary">Profile</Typography>
            </Breadcrumbs>
            <Box
                sx={{
                    display: 'contents'
                }}
            >
                <Typography
                    variant='h4'
                    sx={{
                        my: 4
                    }}
                >User Information
                </Typography>
                <Container maxWidth='xl' sx={{ mt: 4, mb: 4 }}>

                    <ListItem>
                        <ListItemIcon>
                            <Person2Icon />
                        </ListItemIcon>
                        <ListItemText
                            primary={getUserAttribute('name')}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <AlternateEmailIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={getUserAttribute('email')}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={getUserAttribute('address')}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <PhoneIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={getUserAttribute('phone_number')}
                        />
                    </ListItem>
                </Container>
            </Box>
        </Container>
    );
}

export default Account;
