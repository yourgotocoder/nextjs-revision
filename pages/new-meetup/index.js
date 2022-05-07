import { useRouter } from "next/router";
import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    const router = useRouter();
    const addNewMeetup = async (meetupData) => {
        const response = await fetch("/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        router.push("/");
        console.log(data);
    };

    return <NewMeetupForm onAddMeetup={addNewMeetup} />;
};

export default NewMeetupPage;
