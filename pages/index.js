import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const HomePage = (props) => {
    return <MeetupList meetups={props.meetups}></MeetupList>;
};

export async function getStaticProps() {
    const client = await MongoClient.connect(
        "mongodb+srv://sudu:keYRing123@mean.r3iag.mongodb.net/meetupsdata?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find().toArray();
    client.close();

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                description: meetup.description,
                image: meetup.image,
                address: meetup.address,
                id: meetup._id.toString(),
            })),
        },
    };
}

// export async function getServerSideProps(context) {
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         },
//     };
// }

export default HomePage;
