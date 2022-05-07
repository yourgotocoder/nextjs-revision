import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const SingleMeetupPage = () => {
    return (
        <MeetupDetail
            title="A title"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/1920px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
            description="A description"
            address="A address"
        />
    );
};

export default SingleMeetupPage;
