import React from "react";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const SingleMeetupPage = (props) => {
    return (
        <MeetupDetail
            title={props.meetupData.title}
            image={props.meetupData.image}
            description={props.meetupData.description}
            address={props.meetupData.address}
        />
    );
};

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    const client = await MongoClient.connect(
        "mongodb+srv://sudu:keYRing123@mean.r3iag.mongodb.net/meetupsdata?retryWrites=true&w=majority"
    );
    if (client) {
        console.log(`Connected to db`);
    }
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
    console.log(meetup);
    client.close();
    return {
        props: {
            meetupData: {
                id: meetup._id.toString(),
                title: meetup.title,
                address: meetup.address,
                description: meetup.description,
                image: meetup.image,
            },
        },
    };
}

export async function getStaticPaths(context) {
    const client = await MongoClient.connect(
        "mongodb+srv://sudu:keYRing123@mean.r3iag.mongodb.net/meetupsdata?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    const params = meetups.map((meetup) => ({
        params: { meetupId: meetup._id.toString() },
    }));
    client.close();
    return {
        paths: params,
        fallback: false,
    };
}

export default SingleMeetupPage;
