"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { MoreProjCard, TypingText } from "../components";

const ExtraProjects= () => {
  const projects = [
    {
      imgUrl: "/todo-task-list.png",
      title: "ProMega - A Chrome extension ",
      subtitle: [
        "-Technologies used: HTML, CSS, Javascript, MySQL",
        "-description:", 
        "-  ✔️ Your One stop resource Manager 📹 📰 👩🏻‍💻",
        "-  💗 Keep all your favorite things at one place",
        "-  📝 Has a simple 🔋 progress bar which will track your progress.",
        "-  ⏳ Time Manager 🕒 to limit your breaks." ,
        "-  It will automatically close the tabs you choose after the desired duration.",
      ],
      Links: [
        {
          url: "https://github.com/JayantAggrwal/PROMEGA-extension-project",
          val: "Github",
          img: "/github.png",
        },
      ],
    },
    {
      imgUrl: "pglife.png",
      title: "PGLIFE-PG Management System",
      subtitle: [
        "-Technologies used: React.Js, Node.Js, Express.Js",
        "-✔️  Admin Panel: Streamline management tasks, monitor activities, and control settings with the user-friendly administrative interface.",

        "-✔️ Customer Dashboard: Empower users with a personalized and intuitive space to manage accounts, preferences, and interactions within the platform.",
        
        "-✔️  Efficiently navigate the backend with the Admin Panel, while customers enjoy a tailored experience through their dedicated dashboard."
      ],
      Links: [
        {
          url: "https://github.com/JayantAggrwal/PGLIFE",
          val: "Github",
          img: "/github.png",
        },
        // { url: "https://keen-muffin-b24056.netlify.app/", val: "Live Demo", img: "/live.svg" },
      ],
    },
  ];
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Some More Projects" textStyles="text-center" />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {projects.map((item, index) => (
            <MoreProjCard key={`insight-${index}`} {...item} index={index + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExtraProjects;
