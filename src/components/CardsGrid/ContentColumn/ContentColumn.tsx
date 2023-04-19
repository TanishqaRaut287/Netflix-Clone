import Slider from '../../Slider/Slider'

import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

type contentTitleListType = {
    contentTitle: string,
    id: number
}

const contentTitleList: contentTitleListType[] = [
    {
        id: 1,
        contentTitle: "Freshly Selected for You"
    },
    {
        id: 2,
        contentTitle: "Hindi-Language Movies"
    },
    {
        id: 3,
        contentTitle: "Award-Winning Films"
    },
    {
        id: 4,
        contentTitle: "Family Movie Night"
    },
    {
        id: 5,
        contentTitle: "Crime TV Shows"
    },
]


const ContentColumn = () => {
    return (
        <Box>
            {contentTitleList.map((title, index) => {
                return <div key={title.id}>
                    <Box sx={{ marginLeft: "30px", marginTop: "40px", marginBottom: "-60px", position: "relative" }}>
                        <Typography sx={{fontFamily: "Helvetica, sans serif", fontSize: 12, fontWeight: "bold", letterSpacing: 0.2, color: "white"}}>
                            {title.contentTitle}
                        </Typography>
                    </Box>
                    <Slider />


                </div>
            })}
        </Box>
    )
}

export default ContentColumn