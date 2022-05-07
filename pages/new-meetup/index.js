import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    const addNewMeetup = (meetupData) => {
        console.log(meetupData);
    };

    return <NewMeetupForm onAddMeetup={addNewMeetup} />;
};

export default NewMeetupPage;
