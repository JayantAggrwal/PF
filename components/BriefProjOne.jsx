import { motion } from "framer-motion";
import styles from "../styles";
import { NewFeatures, StartSteps, TitleText, TypingText } from ".";
import { staggerContainer, fadeIn } from "../utils/motion";

const BriefProjOne = ({ projTitle, featuresPoints, imgClip, ID, Links }) => (
  <section id={ID} className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      exit={{ opacity: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col-reverse gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src={imgClip}
          alt="project homepage"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Brief Introduction" />
        <TitleText title={projTitle} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {featuresPoints.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
        <div className="mt-8  flex content-center justify-between w-full">
          {Links.map((link) => (
            <NewFeatures
              key={link.title}
              imgUrl={link.img}
              title={link.title}
              url={link.url}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default BriefProjOne;
