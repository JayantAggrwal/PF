"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const About = () => (
  <section id="about" className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[20px] text-[16px] text-center text-secondary-white"
      >
        Hello, I am{" "}
        <span className="font-extrabold text-white">Jayant Aggarwal,</span> a dedicated Cloud and Data Engineer with a passion for solving complex challenges and driving innovation.
        Currently, I work at Quantiphi, where I specialize in cloud migrations, infrastructure automation, and cloud foundation setups.
        My expertise includes AWS-to-GCP transitions, on-premises-to-GCP migrations, and designing scalable, secure infrastructure on Google Cloud Platform (GCP).
        <br />
        <br />
        My proficiency in tools like Terraform, Kubernetes, and Helm, combined with hands-on experience in CI/CD pipelines using Jenkins, 
        Cloud Build, GitLab CI, and GitHub Actions, enables me to streamline deployments and enhance operational efficiency.
        I also bring skills in centralized logging, monitoring with Grafana, and establishing HA VPN tunnels for robust network connectivity.
        <br />
        <br />
        With a solid academic foundation in Computer Science (B.Tech from Chandigarh University) and expertise in programming languages and frameworks 
        such as C++, Python, Java, React, and Node.js, I bridge the gap between software development and cloud engineering.
        Driven by continuous learning and a commitment to excellence, I thrive in dynamic environments and am eager to contribute to cutting-edge projects.
        To explore my journey and work, scroll down.
        To <span className="font-extrabold text-white">explore</span> my projects, scroll down.
      </motion.p>

      <AnchorLink href="#projects">
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[38px] h-[38px] object-contain mt-[28px] cursor-pointer hover:scale-120 border rounded-full p-2 animate-bounce transition duration-200"
        />
      </AnchorLink>
    </motion.div>
  </section>
);

export default About;
