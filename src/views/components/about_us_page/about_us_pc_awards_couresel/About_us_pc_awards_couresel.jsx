// import React from "react";
// import { hindu_meme_data } from "../about_us_meet_the_team/about_us_team_data/people_data.js";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// function About_us_pc_awards_couresel() {
//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 5,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 4,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 3,
//     },
//   };
//   return (
//     <div
//       style={{
//         background: "linear-gradient(115deg, #140F2D 44.57%, #F49D36 348.16%)",
//         paddingBottom: "25px",
//       }}
//     >
//       <div className="about_us_pc_corousel">
//         <Carousel swipeable={true} draggable={false} responsive={responsive}>
//           {hindu_meme_data.map((item, index) => (
//             <img
//               src={item.picture}
//               key={index}
//               alt=""
//               className="award_list_image"
//             />
//           ))}
//         </Carousel>
//       </div>

//       <div
//         className="about_us_awards_recognition_footer_section"
//         style={{
//           background:
//             "linear-gradient(115deg, #140F2D 44.57%, #F49D36 348.16%)",
//         }}
//       >
//         <div className="about_us_awards_recognition_footer_section_title">
//           <p>Join us today</p>
//         </div>
//         <div className="about_us_awards_recognition_footer_section_sub_title">
//           <p>Support free and independent journalism</p>
//         </div>
//         <div className="about_us_awards_recognition_footer_section_member_btn">
//           <button>Become a Member</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About_us_pc_awards_couresel;
