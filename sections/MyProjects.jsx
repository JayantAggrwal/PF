"use client";

import BriefProjOne from "../components/BriefProjOne";
import BriefProjTwo from "../components/BriefProjTwo";
import LineAnim from "../components/LineAnim";

const MyProjects = () => {
  const bookingFeatures = [
    "Tools & technologies used: React JS, React Context API + useReducer, React Router v6, Vanilla CSS, MUI Icons, Razorpay payment gateway, mockBee backend, React Toastify.",
    "Full-stack web app having authorization/registration, individual product page, cart, wishlist, address management, order management, checkout, authentication, wrapped in a responsive frontend.",
  ];
  const visualizationFeatures = [
    "Tools & technologies used: TensorFlow · Artificial Intelligence (AI) · Machine Learning · Python (Programming Language).",
    "Fashion LineUp Using GAN: Employing Generative Adversarial Networks to transform fashion trends, reshaping styles and empowering designers through AI-driven, futuristic lineups.",
  ];
  const stoneFeatures = [
    "Tools & technologies used: Javascript, Serverless Functions, ReactJS, CSS",
    "TOP optimizes transportation through cost-effective vehicle pooling for reduced pollution and energy conservation.",

    "It's website connects passengers for shared rides, highlighting the environmental advantages of electric taxis.",
    
    "Using technology, TOP's platform fosters shared rides to combat congestion, reduce fuel consumption, and offer sustainable transportation solutions.",
  ];
  const solrideeFeatures = [
    "Tools & technologies used: HTML, CSS, Javascript, PHP, SQL, Bootstrap",
    "Full Stack Web App with user and admin side, creating an online environment to addproduct from admin Panel and  buy products as Customer, fully functional CMS system.",
  ];
  const moviesFeatures = [
    "Tools & technologies used: React.js · Application Programming Interfaces (API) · JavaScript · Express.js",
    "Used MERN stack to create a Authentication app." ,
    "Implemented OAuth (Google, Facebook) and email/password authentication methods.",
    "Used Redux-toolkit for global state management of front end."
  ];

  return (
    <>
      <LineAnim />
      <BriefProjTwo
        projTitle="Playverse"
        featuresPoints={bookingFeatures}
        imgClip="/game1.png"
        ID="proj-1"
        Links={[
          {
            img: "/github.png",
            url: "https://github.com/JayantAggrwal/Playverse",
            title: "Github Link",
          },
        ]}
      />
      <LineAnim />
      <BriefProjOne
        projTitle="Genrative Adversarial Network"
        featuresPoints={visualizationFeatures}
        imgClip="/flugan1.png"
        ID="proj-2"
        Links={[
          {
            img: "/github.png",
            url: "https://github.com/JayantAggrwal/Fashion-Lineup-Using-GAN",
            title: "Github Link",
          },
          // {
          //   img: "/live.svg",
          //   url: "https://main--resplendent-lebkuchen-a23f08.netlify.app/",
          //   title: "Live Demo",
          // },
        ]}
      />
      <LineAnim />
      <BriefProjTwo
        projTitle="Transport Optimization Program (TOP)"
        featuresPoints={stoneFeatures}
        imgClip="/top-truck-routing-software.png"
        ID="proj-3"
        Links={[
          {
            img: "/github.png",
            url: "https://github.com/JayantAggrwal/TOP",
            title: "Github Link",
          },
          // {
          //   img: "/live.svg",
          //   url: "https://hars008.github.io/stone-paper-scissors/",
          //   title: "Live Demo",
          // },
        ]}
      />
      <LineAnim />
      <BriefProjOne
        projTitle="PHP SQL based Web App"
        featuresPoints={solrideeFeatures}
        imgClip="/php.png"
        ID="proj-4"
        Links={[
          {
            img: "/github.png",
            url: "https://github.com/JayantAggrwal/Electronic-Store",
            title: "Github Link",
          },
        ]}
      />
      <LineAnim />
      <BriefProjTwo
        projTitle="MERN AUTH (Web App)"
        featuresPoints={moviesFeatures}
        imgClip="/mern.png"
        ID="proj-5"
        Links={[
          {
            img: "/github.png",
            url: "https://github.com/JayantAggrwal/Mern-Auth",
            title: "Github Link",
          },
        ]}
      />
      <LineAnim />
    </>
  );
};

export default MyProjects;
