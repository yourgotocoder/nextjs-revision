import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "First meetup",
        image: "",
        address: "South City, East Side, Way North",
        description: "This is a meetup",
    },
    {
        id: "m2",
        title: "Second meetup",
        image: "",
        address: "West City, North Side, Way South",
        description: "This is a second meetup",
    },
];

const HomePage = () => {
    return <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>;
};

export default HomePage;
