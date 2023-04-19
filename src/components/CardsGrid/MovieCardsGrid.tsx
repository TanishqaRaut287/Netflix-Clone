import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Box from '@mui/material/Box'

const responsive = {
    0: { items: 1 },
    1: { items: 2 },
    2: { items: 3 },
    3: { items: 4 },

};

const items = [
    <img className="movie-card" src="https://occ-0-2484-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVqlT9xl2tsdACTIAPQ_XcKlQNSEXcO4Lvyx6sH-dtU6cAC4_4_ZY251YZL5Qopltb7mTxzLqzuTI5GAwkTIB5jQKw3xZ0eVrM8.jpg?r=2ef" role="presentation" />,
    <img className="movie-card" src="https://occ-0-2484-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVqlT9xl2tsdACTIAPQ_XcKlQNSEXcO4Lvyx6sH-dtU6cAC4_4_ZY251YZL5Qopltb7mTxzLqzuTI5GAwkTIB5jQKw3xZ0eVrM8.jpg?r=2ef" role="presentation" />,
    <img className="movie-card" src="https://occ-0-2484-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVqlT9xl2tsdACTIAPQ_XcKlQNSEXcO4Lvyx6sH-dtU6cAC4_4_ZY251YZL5Qopltb7mTxzLqzuTI5GAwkTIB5jQKw3xZ0eVrM8.jpg?r=2ef" role="presentation" />,
    <img className="movie-card" src="https://occ-0-2484-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVqlT9xl2tsdACTIAPQ_XcKlQNSEXcO4Lvyx6sH-dtU6cAC4_4_ZY251YZL5Qopltb7mTxzLqzuTI5GAwkTIB5jQKw3xZ0eVrM8.jpg?r=2ef" role="presentation" />,
];


const MovieCardsGrid = () => {
    return (
        <div>
            <Box sx={{
                marginTop: "2rem",
                marginLeft: "25px",
                marginBottom: "100px"
            }}>

                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    activeIndex={0}
                    animationType="slide"
                    autoPlay={true}
                    autoPlayControls={false}
                    autoPlayInterval={1000}
                    autoPlayStrategy={"all"}
                    controlsStrategy={'responsive'}
                    disableButtonsControls={true}
                    disableDotsControls={true}

                />
            </Box>
        </div>


    );
}

export default MovieCardsGrid;