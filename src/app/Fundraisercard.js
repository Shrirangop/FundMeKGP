
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { FaRupeeSign } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
// import bcrypt from 'bcrypt';
// import bcrypt from 'bcrypt';

export default function Fundraisercard({fundraiser}) {

  let date2 = new Date(fundraiser.enddate);
  let date1 = Date.now();

  let Difference_In_Time =
    date2.getTime() - date1;

  let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

  const progress = Math.round((fundraiser.amountraised/fundraiser.goal)*100);

  const imgurl = fundraiser.image;

  
  const fundraiserroute = `/fundraiser/${fundraiser._id}`
  
  // imgurl = imgurl.split("\trial_next")

  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* <Image
          component="img"
          height={140}
          width = {150}
          // src={imgurl}
          alt="fund"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            To support {fundraiser.beneficiary}
          </Typography>
          <Typography variant="body2" color="text.secondary" className='flex justify-between items-center'>
            by {fundraiser.requisitee}
            <div className='flex justify-left items-center text-md text-gray-700'>
                <FaRegClock /> <span className='font-bold ml-1 mr-1'>{Difference_In_Days}</span> days left
                </div>
          </Typography>
          
            <Typography variant="body2" color="text.secondary">
                <div className='flex justify-left items-center mt-2 mb-2'><Typography className = "flex justify-center items-center mr-2 font-bold text-black text-lg"><FaRupeeSign /> {fundraiser.amountraised}</Typography> raised out of <FaRupeeSign className = "ml-2"/>{fundraiser.goal}</div>
                <LinearProgress variant="determinate" value={progress} />
            </Typography>
            <div className = "flex justify-center items-center w-full">
                <Link className="bg-blue-700 text-white px-4 py-2 rounded-xl hover:bg-blue-900 mt-4 mb-2" href = {fundraiserroute} >Donate Now</Link>
            </div>

            <div>
                
            </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
