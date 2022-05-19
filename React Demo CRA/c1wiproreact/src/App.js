import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
function App(props){
  return(



<div>
{/*<TextField id="outlined-basic" label="Username" variant="outlined" />
<TextField id="outlined-basic" label="Email" variant="outlined" />
<Button variant="contained">submit</Button>
<Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>

        <Typography variant="h5" component="div">
         some value
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>*/}
    {
      props.studentdata.map((item)=>(
        <div>
          <h1>{item.fname}</h1>
         {item.arrears?<h1>backlogs</h1>:<h1> no backlogs</h1>}
          </div>
      ))
    }



</div>


  )
}
export default App