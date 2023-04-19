import Icons from "../Icons/Icons";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PrimaryButton from "../Button/PrimaryButton";
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";

export interface footerListType {
    id: number,
    title: string,
    link?: string
}

const footerList: footerListType[] = [
    {
        id: 1,
        title: "Audio Description",
        link: "#"
    },
    {
        id: 2,
        title: "Gift Cards",
        link: "#"
    },
    {
        id: 3,
        title: "Investor Relations",
        link: "#"
    },
    {
        id: 4,
        title: "Terms of Use",
        link: "#"
    },
    {
        id: 5,
        title: "Legal Notices",
        link: "#"
    },
    {
        id: 6,
        title: "Corporate Information",
        link: "#"
    },
    {
        id: 7,
        title: "Help Center",
        link: "#"
    },
    {
        id: 8,
        title: "Media Center",
        link: "#"
    },
    {
        id: 9,
        title: "Jobs",
        link: "#"
    },
    {
        id: 10,
        title: "Privacy",
        link: "#"
    },
    {
        id: 11,
        title: "Cookie Preferences",
        link: "#"
    },
    {
        id: 12,
        title: "Contact Us",
        link: "#"
    },

]


const Footer = () => {
    return (
        <Box sx={{ color: "gray", marginLeft: "2rem", textAlign:"center", marginTop: "2rem", alignContent: "center" }}>
            <Grid container rowSpacing={0.5} columnSpacing={{ xs: 3, sm: 2, md: 1 }}>

                <Grid item xs={12} sx={{textAlign: "left", marginTop: "-15px"}}>
                    <Icons />
                </Grid>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: -20}} sx={{marginTop: "2px", textAlign: "left" }}>
                    {footerList.map((list, index) => {
                        return (
                            <Grid item xs={6} lg={3} key={list.id} >
                                <Link
                                    sx={{ color: "GrayText", fontSize: "1.8vh", fontFamily: "Helvetica, sans serif", fontWeight: "semi-bold", width: "100%" }}
                                    href=""
                                    underline="hover">
                                    {list.title}
                                </Link>
                            </Grid>
                        )
                    })}
                </Grid>

                <Grid item xs={12} sx={{textAlign: "left"}}>
                    <PrimaryButton sx={{  marginTop:"1rem",width: "130px", fontSize: 12, marginLeft: "-16px" }} variant='outlined'>Service Code</PrimaryButton>
                </Grid>

                <Grid item xs={12} sx={{ textAlign: "left", marginTop:"0.5rem", fontSize: 12, marginLeft: "-16px" , marginBottom: "10px"}} >
                    <Typography color="white" component="p" variant="caption" gutterBottom={false}> © 1997-2023 Netflix, Inc.</Typography>
                </Grid>

            </Grid>
        </Box >
    )
}

export default Footer


