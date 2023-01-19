import { Fragment } from "react"
import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetup = ()=>{

    const meetupAddHandler = (data) =>{
        console.log(data);
    }
    return (
        <Fragment>
            <NewMeetupForm onAddMeetup={meetupAddHandler}/>
        </Fragment>
    )
}

export default NewMeetup;