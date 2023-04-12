import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material'
import './Profile.css'
import { nameListProps } from '../../screens/Authenticated/Manage Profiles/Profiles'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../utils/constants/routes';
import Loader from '../Loader/Loader'


const paperSX = {
    "&:hover": {
        border: "1px solid #FFFFFF",
    },
    width: 110,
    height: 110,
    margin: '1rem',
    position: "relative",
}

const ProfileCard = (profilesObj: nameListProps) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(routes.home);
    }

    return (
        <>
            <Box onClick={handleClick}>
                <Paper elevation={2} sx={paperSX} className={profilesObj.className} />
                <Typography className='nameFont'>{profilesObj.name}</Typography>
            </Box>

        </>
    )
}

export default ProfileCard;

