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
    url: "#features",
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
    id: 1,
    title: "Events",
    url: "#events",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Subscription",
    url: "#subscription",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Contact Us",
    url: "#contactUs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const events = [
  {
    id: "1",
    title: "Tech Talks",
    content:
      "Join industry experts as they share their insights and knowledge on the latest trends and technologies.",
  },
  {
    id: "2",
    title: "Hackathons",
    content:
      "Participate in intense coding competitions and collaborate with fellow developers to build innovative solutions.",
  },
  {
    id: "3",
    title: "Networking Mixers",
    content:
      "Connect with like-minded professionals, entrepreneurs, and investors in a casual and social setting.",
  },
  {
    id: "4",
    title: "Workshops",
    content:
      "Learn new skills and gain practical knowledge through hands-on workshops conducted by industry experts.",
  },
];

const testimonials = [
  {
    id: "1",
    testifier: "John Smith",
    pic: "testifiers3",
    testimony:
      "I have been a member of this tech hub for over a year now and it has been an amazing experience. The workspace is modern and well-equipped, and the community is supportive and collaborative. I have made valuable connections and learned so much from the events and workshops organized here. Highly recommended!",
  },
  {
    id: "2",
    testifier: "Michael Davis",
    pic: "testifiers2",
    testimony:
      "Being a part of this tech hub has been a game-changer for me. The atmosphere is vibrant and inspiring, and the facilities are top-notch. The networking opportunities are endless, and I have been able to collaborate with talented individuals on various projects. It's a place where innovation thrives and ideas come to life.",
  },
  {
    id: "3",
    testifier: "Emily Johnson",
    pic: "testifiers1",
    testimony:
      " can't say enough good things about this tech hub. The workspace is designed to foster creativity and productivity, with comfortable seating, natural lighting, and state-of-the-art technology. The staff is friendly and always ready to assist. The events and workshops organized here are informative and engaging. It's the perfect place for anyone in the tech industry.",
  },
];

export { features, pictures, membership, links, events, testimonials };
