import { Box, Button, Typography } from '@mui/material'
import ProfileCard from '../../../components/ProfileCard/ProfileCard'
import "../../../components/ProfileCard/Profile.css"
import styled from '@emotion/styled'
import PrimaryButton from '../../../components/Button/PrimaryButton'


const UserContainer = styled(Box)({
    // marginLeft : '20%',
    // marginRight : '20%',
    // height : 'min-content',
    // marginTop: "50%",
    // width:'100%',
    // height:"100%",
    // position: "absolute",
    // left: "25%",
    // top: "30%",
    // backgroundColor: "black"
    justifyContent: "center",
    textAlign: "center"

})

export interface nameListProps {
    name: string,
    className: string
}


const profilesObj: nameListProps[] = [
    {
        name: "Tanishqa",
        className: 'blueBg'
    },
    {
        name: "Pooran",
        className: 'yellowBg'
    },
    {
        name: "Bhagyashri",
        className: 'redBg'
    },
    {
        name: "Girish",
        className: 'greyBg'
    },
    {
        name: "Others",
        className: 'purpleBg'
    }

]


const Profiles = () => {
    return (
        <>
            <Box className="bg" sx={{ height: '100vh', color: "white" }}>
                <Box sx={{ position: 'absolute', left: '25%', right: '25%', top: '25%', bottom: '25%' }}>

                    <UserContainer >

                        <Typography sx={{
                            color: '#fff',
                            fontSize: '3.5vw',
                            fontWeight: "unset",
                            width: '100%'
                        }}>Who's watching?</Typography>

                        <Box sx={{
                            display: "flex",
                            flexWrap: 'wrap',
                            justifyContent: "center",
                        }}>


                            {profilesObj.map((obj, index) => {
                                return <div key={index}>
                                    <ProfileCard className={obj.className} name={obj.name} />

                                </div>
                            })}

                        </Box>
                        <PrimaryButton variant='outlined'>Manage Profile</PrimaryButton>
                    </UserContainer>

                </Box>
            </Box>
        </>
    )
}

export default Profiles