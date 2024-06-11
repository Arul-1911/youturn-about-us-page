const {
  FOUNDER_AND_ADVISOR,
  CO_FOUNDER,
  CHIEF_EDITOR,
  SENIOR_SUB_EDITOR,
  ASSISTANT_EDITOR,
  VIDEO_EDITOR,
  SENIOR_SUB_EDITOR_2,
  SUB_EDITOR,
  DOCTOR_1,
  DOCTOR_2,
  DOCTOR_3,
  HINDU_TAMIL_MEME,
  FACEBOOK,
  TWITTER,
  INSTAGRAM,
  YOUTUBE,
  LINKEDIN,
  TELEGRAM,
} = require("@src/helpers/image_constants");

export const peopleData = [
  {
    picture: FOUNDER_AND_ADVISOR,
    name: "Mr.Vignesh Kalidasan",
    destination: "Founder and Advisor",
  },
  {
    picture: CO_FOUNDER,
    name: "Mr.Karthikeyan M",
    destination: "Co-Founder",
  },
  {
    picture: CHIEF_EDITOR,
    name: "Ms.Gomathi Ramasamy",
    destination: "Chief Editor",
  },
  {
    picture: SENIOR_SUB_EDITOR,
    name: "Mr.Sanmugaraja",
    destination: "Senior Sub Editor",
  },
  {
    picture: ASSISTANT_EDITOR,
    name: "Mr.Gnanaprakash",
    destination: "Assistant Editor",
  },
  {
    picture: VIDEO_EDITOR,
    name: "Mr.Linga Raja",
    destination: "Video Editor",
  },
  {
    picture: SENIOR_SUB_EDITOR_2,
    name: "Mr.Ramasamy Jayaprakash",
    destination: "Senior Sub Editor",
  },
  {
    picture: SUB_EDITOR,
    name: "Ms.Krishnaveni",
    destination: "Sub Editor",
  },
];

export const medical_members_data = [
  {
    picture: DOCTOR_1,
    name: "Dr.C Praveen Kumar",
    destination: "MBBS MD MRCP(UK) DNB GASTRO",
  },
  {
    picture: DOCTOR_2,
    name: "Dr. G Suchitra Lakshmi",
    destination: "BS MS MPH",
  },
  {
    picture: DOCTOR_3,
    name: "Dr. Karthikeyan",
    destination: "MBBS MS MCh(Oncology) MRCS(Edin)",
  },
];

export const hindu_meme_data = [
  {
    picture: HINDU_TAMIL_MEME,
  },
  {
    picture: HINDU_TAMIL_MEME,
  },
  {
    picture: HINDU_TAMIL_MEME,
  },
  {
    picture: HINDU_TAMIL_MEME,
  },
  {
    picture: HINDU_TAMIL_MEME,
  },
  {
    picture: HINDU_TAMIL_MEME,
  },
];

export const stay_connect_icon = [
  {
    description: "Facebook",
    image_url: FACEBOOK,
  },
  {
    description: "X(Twitter)",
    image_url: TWITTER,
  },
  {
    description: "Instagram",
    image_url: INSTAGRAM,
  },
  {
    description: "Youtube",
    image_url: YOUTUBE,
  },
  {
    description: "Linkedin",
    image_url: LINKEDIN,
  },
  {
    description: "Telegram",
    image_url: TELEGRAM,
  },
];

export const expand_team_members_data = [
  {
    id: 1,
    name: "Mr. Vignesh Kalidasan",
    position: "Founder and Advisor",
    image_url: FOUNDER_AND_ADVISOR,
    links: [
      { type: "instagram", url: "https://www.instagram.com", logo: INSTAGRAM },
      { type: "twitter", url: "https://www.twitter.com", logo: TWITTER },
      { type: "linked_in", url: "https://www.linked.com", logo: LINKEDIN },
    ],
    description: `Mr. Vignesh Kalidasan is the Founder of You Turn. He has a graduate
 degree in Computer Science Engineering, currently pursuing a career as
a data engineer who has tremendous experience in the field. His
passion towards creating awareness to the public about “Fake News”
and its widespread impact on society gave birth to You Turn. He
founded You Turn in the year of 2017 and his support to You Turn with
his ideas to push it more into the people.`,
  },
  {
    id: 2,
    name: "Mr. Karthikeyan M",
    position: "Co-Founder",
    image_url: CO_FOUNDER,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rerum a quae fugit asperiores mollitia, similique excepturi totam labore inventore dolorem quis fuga blanditiis in temporibus itaque facere quia nihil.",
  },
  {
    id: 3,
    name: "Ms. Gomathy Ramaswamy",
    position: "Chief Editor",
    image_url: CHIEF_EDITOR,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rerum a quae fugit asperiores mollitia, similique excepturi totam labore inventore dolorem quis fuga blanditiis in temporibus itaque facere quia nihil.",
  },
  {
    id: 4,
    name: "Mr. Shanmugaraj",
    position: "FSenior Sub Editor",
    image_url: SENIOR_SUB_EDITOR,
    links: [
      { type: "instagram", url: "https://www.instagram.com", logo: INSTAGRAM },
      { type: "twitter", url: "https://www.twitter.com", logo: TWITTER },
      { type: "linked_in", url: "https://www.linked.com", logo: LINKEDIN },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rerum a quae fugit asperiores mollitia, similique excepturi totam labore inventore dolorem quis fuga blanditiis in temporibus itaque facere quia nihil.",
  },
  {
    id: 5,
    name: "Mr. Ganaprakash",
    position: "Assistant Editor",
    image_url: ASSISTANT_EDITOR,
    links: [
      { type: "instagram", url: "https://www.instagram.com", logo: INSTAGRAM },
      { type: "twitter", url: "https://www.twitter.com", logo: TWITTER },
      { type: "linked_in", url: "https://www.linked.com", logo: LINKEDIN },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rerum a quae fugit asperiores mollitia, similique excepturi totam labore inventore dolorem quis fuga blanditiis in temporibus itaque facere quia nihil.",
  },
  {
    id: 6,
    name: "Mr. Linga Raja",
    position: "Video Editor",
    image_url: VIDEO_EDITOR,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rerum a quae fugit asperiores mollitia, similique excepturi totam labore inventore dolorem quis fuga blanditiis in temporibus itaque facere quia nihil.",
  },
  {
    id: 7,
    name: "Mr. Ramaswamy Jayaprakash",
    position: "Senior Sub Editor",
    image_url: SENIOR_SUB_EDITOR_2,
    links: [
      { type: "instagram", url: "https://www.instagram.com", logo: INSTAGRAM },
      { type: "twitter", url: "https://www.twitter.com", logo: TWITTER },
      { type: "linked_in", url: "https://www.linked.com", logo: LINKEDIN },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rerum a quae fugit asperiores mollitia, similique excepturi totam labore inventore dolorem quis fuga blanditiis in temporibus itaque facere quia nihil.",
  },
  {
    id: 8,
    name: "Ms. Krishanaveni",
    position: "Sub editor",
    image_url: SUB_EDITOR,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rerum a quae fugit asperiores mollitia, similique excepturi totam labore inventore dolorem quis fuga blanditiis in temporibus itaque facere quia nihil.",
  },
];

export const medical_team_members_data = [
  {
    id: 1,
    name: "Dr.C Praveen Kumar",
    position: "MBBS MD MRCP(UK) DNB GASTRO",
    image_url: DOCTOR_1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rerum a quae fugit asperiores mollitia, similique excepturi totam labore inventore dolorem quis fuga blanditiis in temporibus itaque facere quia nihil.",
  },
  {
    id: 2,
    name: "Dr. G Suchitra Lakshmi",
    position: "BS MS MPH",
    image_url: DOCTOR_2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rerum a quae fugit asperiores mollitia, similique excepturi totam labore inventore dolorem quis fuga blanditiis in temporibus itaque facere quia nihil.",
  },
  {
    id: 3,
    name: "Dr. Karthikeyan",
    position: "MBBS MS MCh(Oncology) MRCS(Edin)",
    image_url: DOCTOR_3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rerum a quae fugit asperiores mollitia, similique excepturi totam labore inventore dolorem quis fuga blanditiis in temporibus itaque facere quia nihil.",
  },
];
