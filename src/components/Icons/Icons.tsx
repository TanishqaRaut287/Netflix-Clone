import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Box from '@mui/material/Box';


export const Icons = [
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YouTubeIcon
]

const iconSx = {
    color: "white",
    marginTop: { xs: "0rem", md:'0rem' },
    marginLeft: { md: "1.5rem", xs: "1rem" },
    cursor: "pointer",
    
  };

const footerIcons = () => {
  return (
    <Box>
        {Icons.map((Icon, index)=>{
            return <Icon key={index} sx={iconSx}/>
        })}
    </Box>
  )
}

export default footerIcons