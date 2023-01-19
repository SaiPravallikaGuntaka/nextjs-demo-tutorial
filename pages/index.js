import MeetupList from "../components/meetups/MeetupList";

const HomePage=()=>{

  const dummy_data = [{
    id: 'm1',
    image:'https://wallpaperaccess.com/full/4495586.jpg',
    title:'First Meet',
    address:'Hyderabad',
    description:'first meet up is good'
  },
  {
    id: 'm2',
    image:'https://i.pinimg.com/originals/cf/28/98/cf2898747a6d6a65170b724b5ee9755f.jpg',
    title:'Second Meet',
    address:'Vizag',
    description:'Second meet up is good'
  }]
  return(
    <MeetupList meetups={dummy_data}/>
  )
}

export default HomePage;
