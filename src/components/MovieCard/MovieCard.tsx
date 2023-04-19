import { Box, Typography } from "@mui/material";
import items from "../CardsGrid/MovieCardsGrid";

type itemsType = {
  items: string
}

export default function MovieCard(items: itemsType) {
  return (
    <>
      <Box>
        <Box sx={{
          color: "white",
          marginTop: "2rem"
        }}>
          <img src={"items"}
            alt="content"
            style={{ borderRadius: '7px', height: "20vh" }} />
        </Box>
      </Box>
    </>
  );
}