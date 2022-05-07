import React from "react";
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

export function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    return {
        props: {
            meetupData: {
                id: meetupId,
                title: "A title",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/1920px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
                description: "A description",
                address: "A address",
            },
        },
    };
}

export function getStaticPaths(context) {
    return {
        paths: [
            {
                params: {
                    meetupId: "m1",
                },
            },
            {
                params: {
                    meetupId: "m2",
                },
            },
        ],
        fallback: false,
    };
}

export default SingleMeetupPage;
