import React from "react";

const features = [
  {
    id: 1,
    title: "State-of-the-art Facilities",
    content: "Experience our modern and fully-equipped workspaces",
  },
  {
    id: 2,
    title: "Collaborative Environment",
    content: "Connect and collaborate with like-minded professionals",
  },
  {
    id: 3,
    title: "High-Speed Internet",
    content: "Stay connected with our lightning-fast internet connection",
  },
  {
    id: 4,
    title: "Networking Opportunities",
    content: "Expand your network and build valuable connections",
  },
  {
    id: 5,
    title: "On-site Support",
    content: "Get assistance from our friendly and knowledgeable staff",
  },
];

const pictures = [
  {
    id: 1,
    picture: "pic1",
  },
  {
    id: 2,
    picture: "pic2",
  },
  {
    id: 3,
    picture: "pic3",
  },
  {
    id: 4,
    picture: "pic4",
  },
  {
    id: 5,
    picture: "pic5",
  },
  {
    id: 6,
    picture: "pic6",
  },
  {
    id: 7,
    picture: "pic7",
  },
  {
    id: 8,
    picture: "pic8",
  },
  {
    id: 9,
    picture: "pic9",
  },
  {
    id: 10,
    picture: "pic10",
  },
  {
    id: 11,
    picture: "pic11",
  },
];

const membership = [
  {
    id: 1,
    member: "membership1",
    title: "Weekly",
    content:
      "Get started with your hub membership and experience the benefits of access each week with convenient weekly payments.",
  },
  {
    id: 2,
    member: "membership2",
    title: "Monthly",
    content:
      "Choose our monthly plan for a budget-friendly way to access the hub's features and benefits every month.",
  },
  {
    id: 3,
    member: "membership3",
    title: "Semi-Annual",
    content:
      "Maximize your savings with our semi-annual payment plan, offering access to the hub for a full six months at a reduced rate.",
  },
  {
    id: 4,
    member: "membership4",
    title: "Annual",
    content:
      "Gain uninterrupted access to the hub's features and benefits for a full year with our annual membership plan.",
  },
];

const links = [
  {
    id: 1,
    title: "About Us",
    url: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Membership Subscription",
    url: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Contact Us",
    url: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
      </svg>
    ),
  },
];

const events = [
  {
    id:"1",
    title:"Tech Talks",
    content: "Join industry experts as they share their insights and knowledge on the latest trends and technologies."
  },
  {
    id:"2",
    title:"Hackathons",
    content: "Participate in intense coding competitions and collaborate with fellow developers to build innovative solutions."
  },
  {
    id:"3",
    title:"Networking Mixers",
    content: "Connect with like-minded professionals, entrepreneurs, and investors in a casual and social setting."
  },
  {
    id:"4",
    title:"Workshops",
    content: "Learn new skills and gain practical knowledge through hands-on workshops conducted by industry experts."
  },
]

const testimonials = [
  {
    id:"1",
    testifier: "John Smith",
    pic: "testifiers3",
    testimony: "I have been a member of this tech hub for over a year now and it has been an amazing experience. The workspace is modern and well-equipped, and the community is supportive and collaborative. I have made valuable connections and learned so much from the events and workshops organized here. Highly recommended!",
  },
  {
    id:"2",
    testifier: "Michael Davis",
    pic: "testifiers2",
    testimony: "Being a part of this tech hub has been a game-changer for me. The atmosphere is vibrant and inspiring, and the facilities are top-notch. The networking opportunities are endless, and I have been able to collaborate with talented individuals on various projects. It's a place where innovation thrives and ideas come to life.",
  },
  {
    id:"3",
    testifier: "Emily Johnson",
    pic: "testifiers1",
    testimony: " can't say enough good things about this tech hub. The workspace is designed to foster creativity and productivity, with comfortable seating, natural lighting, and state-of-the-art technology. The staff is friendly and always ready to assist. The events and workshops organized here are informative and engaging. It's the perfect place for anyone in the tech industry."
  },
]

export { features, pictures, membership, links, events, testimonials };
