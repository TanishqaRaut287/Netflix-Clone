import styled from "@emotion/styled"
import { Box, Button, Typography } from "@mui/material"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import { sliderItems } from "../data";
import React, { useState } from 'react';


export interface sliderItemsType {
    bg: string,
    img: string,
    title: string,
    desc: string,
    id: number
}

const sliderItems: sliderItemsType[] = [
    {
        id: 1,
        title: "Friends",
        desc: "Description",
        img: "https://occ-0-2484-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVqlT9xl2tsdACTIAPQ_XcKlQNSEXcO4Lvyx6sH-dtU6cAC4_4_ZY251YZL5Qopltb7mTxzLqzuTI5GAwkTIB5jQKw3xZ0eVrM8.jpg?r=2ef",
        bg: '#FFFFFF'
    },
    {
        id: 2,
        title: "The Intern",
        desc: "Description",
        img: "https://occ-0-2430-1722.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdsW9zTBRTVM173Tz6bdfCkD0VBDtZJFAzQ3SV-yMfcYXxm7wI9vzxVT5mTnPprWPVvsvCH_Vw-1Jh7IfHqvWIhL91Jrc1ebDJo.jpg?r=c4d",
        bg: '#FFFFFF'
    },
    {
        id: 3,
        title: "Breaking Bad",
        desc: "Description",
        img: "https://occ-0-2430-1722.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRNQlEj7pGJClMzGKKAinRyjHpLOrMAF2gnV2EZztjYl0OGhtLGazj-50_Gsk9TASiRbMviTpOYfnAybwDu5QnF7bCbucTMl77k.jpg?r=07c",
        bg: '#FFFFFF'
    },
    {
        id: 4,
        title: "Stranger Things",
        desc: "Description",
        img: "https://occ-0-1007-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYQeeVJKhSVdG_yua_blwZusJr6ORrbda-we43ciUXRJ6dYelNF-nzxQY2ESu-SNZaWTCLuUkY6eSVl8r2GQWoFz2KXaUUUD7393TD7qSb1dJ7r1JdC-8i_Xt_1aSbXttF-V.jpg?r=59f",
        bg: '#FFFFFF'
    },
    {
        id: 5,
        title: "Little Things",
        desc: "Description",
        img: "https://occ-0-2430-1722.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABa4GbD2U_HV97OmmcdM7_55wU_LQ2j04skuN-ODbARFypdrIxNiZknCl5jp2rLIgcuVfAV43GYR_f6WWLFyq9bqWn_fsqUdg0qs9R6KOwaANXkn-kXCwe3j_3dnDx0IC4mLn.jpg?r=8a3",
        bg: '#FFFFFF'
    },
    {
        id: 6,
        title: "Zindagi Na Milegi Dobara",
        desc: "Description",
        img: "https://occ-0-1007-1009.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRTu01dguT_Ego87DD2fvpILpYqYWjOyX86brOj6FU5VPcjZOCU2RqpbCSDAz6EpbwTi2nTQ5PzDrMD5kczMUCJe15rz3_0zQUw.jpg?r=fe6",
        bg: '#FFFFFF'
    },

]

interface ArrowProps {
    direction: 'left' | 'right';
}

interface SlideProps {
    bg: string
}

interface UserWrapperProps {
    slideindex: number
}

const UserContainer = styled(Box)({
    width: '100%',
    height: '30vh',    // viewport height // full height of the browser window
    marginLeft: "2rem",
    position: 'relative',   // if child uses postion absolute
    overflow: 'hidden', // for slider
})

const Arrow = styled(Box)<ArrowProps>(({ direction }) => ({
    width: '50px',
    height: '50px',
    backgroundColor: 'transparent',
    borderRadius: '50%',
    // to center its item horizontally and vertically
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    // left and right arrow should be opposite edge
    position: "absolute",
    top: '30px',
    bottom: '0',
    left: direction === 'left' ? '20px' : undefined,
    right: direction === 'right' ? '20px' : undefined,
    margin: 'auto',
    cursor: 'pointer',
    opacity: '50', 
    zIndex: '2'
}))

const UserWrapper = styled(Box)<UserWrapperProps>(({ slideindex }) => ({
    display: 'flex',
    height: '100% ',   // 100% of its parent height 
    transition: 'all 1.5s ease',
    transform: `TranslateX(${slideindex * -100}vw)`
}))

const Slide = styled(Box)<SlideProps>(({ bg }) => ({
    width: '100vw',
    height: '40vh',
    marginTop: "0px",
    marginBottom: "0px",
    display: 'flex',
    alignItems: 'center',
    backgroundColor: `#${bg}`
}))

const ImgContainer = styled(Box)({
    height: '30vh',
    marginRight: '0.8rem',
    marginTop: '50px',
    marginBottom: "2px",
    flex: '1'
})

const UserImage = styled('img')({
    height: '60%'
})

// const InfoContainer = styled(Box)({
//     flex: '1',
//     padding: '50px'
// })

// const Title = styled(Typography)({
//     fontWeight: '600'
// })

// const Description = styled(Typography)({
//     margin: '50px 0px',    // top-bottm  left-right
//     fontSize: '20px',
//     fontWeight: '500',
//     letterSpacing: '3px'

// })

// const UserButton = styled(Button)({
//     padding: '10px',
//     fontSize: '20px',
//     color: 'black',
//     borderColor: 'black'
// })


const Slider = () => {

    const [slideindex, setSlideIndex] = useState(0);

    const handleClick = (direction: string) => {
        if (direction === 'left') {
            console.log("le")
            setSlideIndex(slideindex > 0 ? slideindex - 1 : 1)    // 0 1 2 // if not first then -1 else last 2
        }
        else {
            setSlideIndex(slideindex < 2 ? slideindex + 1 : 0)
        }
    }

    return (
        <UserContainer>

            <Arrow direction="left" onClick={() => handleClick('left')}>
                <KeyboardArrowLeftIcon />
            </Arrow>

            <UserWrapper slideindex={slideindex}>
                {
                    sliderItems.map((item) => (
                        <Slide key={item.id} bg={item.bg}>
                            <ImgContainer>
                                <UserImage src={item.img} />
                            </ImgContainer>
                        </Slide>
                    ))
                }
            </UserWrapper>

            <Arrow direction="right" onClick={() => handleClick('right')}>
                <KeyboardArrowRightIcon />
            </Arrow>

        </UserContainer>
    )
}

export default Slider