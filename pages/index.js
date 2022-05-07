import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "First meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/1920px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
        address: "South City, East Side, Way North",
        description: "This is a meetup",
    },
    {
        id: "m2",
        title: "Second meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/1920px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
        address: "West City, North Side, Way South",
        description: "This is a second meetup",
    },
];

const HomePage = (props) => {
    return <MeetupList meetups={props.meetups}></MeetupList>;
};

export function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
    };
}

export default HomePage;
