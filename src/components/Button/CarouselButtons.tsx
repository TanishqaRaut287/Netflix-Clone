import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

const playButtonSX = {
    // width: '18vw',
    // height: "6vh",
    marginLeft: "10px",
    position: "relative",
    marginRight: "10px",
    backgroundColor: "white",
    color: "black",
    fontWeight: "semi-bold"
}


const infoButtonSX = {
    backgroundColor: "#778899",
    backgroundStyle: "transparent",
    fontColor: "white",
    color: 'white',
    borderColor: "gray",
    '&:hover': {
        borderColor: "white",
        color: "white"
    }
}

const CarouselButtons = () => {
    return (
        <>
            <Box position={"absolute"} sx={{ marginLeft: "3rem", marginTop: { xs: "25vh", md: "55vh", lg: "80vh" } }}>
                <Grid container spacing={2}>
                    <Grid item>
                        <Button sx={playButtonSX} variant='contained' startIcon={<PlayArrowIcon />}>Play</Button>
                    </Grid>
                    <Grid item>
                        < Button sx={infoButtonSX} variant='outlined' startIcon={<InfoIcon />}> More Info</Button >
                    </Grid>
                </Grid>
            </Box>
        </>

    )
}

export default CarouselButtons