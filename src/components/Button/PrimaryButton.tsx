import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const PrimaryButton = styled(Button)(() => ({
    marginTop: "4rem",
    color: "gray",
    borderColor: "gray",
    borderRadius: 0,
    maxWidth: "100%",
    backgroundColor: "transparent",
    textTransform: "none",
    fontSize: "2vh",
    width: "15vw",
  
    '&:hover': {
      backgroundColor: "transparent",
      color: "white",
      borderColor: "white", 
    },
  }));

export default PrimaryButton