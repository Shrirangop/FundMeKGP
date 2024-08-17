
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { FaRupeeSign } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

export default function Fundraisercard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            To support Sridhar Family
          </Typography>
          <Typography variant="body2" color="text.secondary" className='flex justify-between items-center'>
            by Rajinder 
            <div className='flex justify-left items-center text-md text-gray-700'>
                <FaRegClock /> <span className='font-bold ml-1 mr-1'>27</span> days left
                </div>
          </Typography>
          
            <Typography variant="body2" color="text.secondary">
                <div className='flex justify-left items-center mt-2 mb-2'><Typography className = "flex justify-center items-center mr-2 font-bold text-black text-lg"><FaRupeeSign /> 87000</Typography> raised out of <FaRupeeSign className = "ml-2"/>1500000</div>
                <LinearProgress variant="determinate" value={50} />
            </Typography>
            <div className = "flex justify-center items-center w-full">
                <button className="bg-blue-700 text-white px-4 py-2 rounded-xl hover:bg-blue-900 mt-4 mb-2">Donate Now</button>
            </div>

            <div>
                
            </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
