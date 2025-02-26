import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import FrontendIcons from "../components/FrontendIcons.jsx";
import BackendIcons from "../components/BackendIcons.jsx";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
            className="md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
              hidden: {opacity: 0, x: -50},
              visible: {opacity: 1, x: 0},
            }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3"/>
          {/*<img*/}
          {/*    alt="skills"*/}
          {/*    className="z-10"*/}
          {/*    src="../assets/html-5-128.png"*/}
          {/*/>*/}
          <p className="mt-10 mb-7">
            I specialize in crafting high-performance, scalable web applications with a strong focus on modern frontend development. My expertise spans across the full stack, allowing me to build seamless, efficient, and user-friendly digital experiences. Here’s what I bring to the table
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
              <div
                  className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Frontend Development
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>

          <p className="mt-5">
            I build interactive, responsive, and visually appealing web applications using:
          </p>
          <FrontendIcons/>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Backend Development
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            While my primary focus is frontend, I have solid backend experience to build and integrate APIs:
          </p>
          <BackendIcons/>
        </motion.div>
        {/* IMAGINATIVE */}
        {/*<motion.div*/}
        {/*  className="md:w-1/3 mt-10"*/}
        {/*  initial="hidden"*/}
        {/*  whileInView="visible"*/}
        {/*  viewport={{ once: true, amount: 0.5 }}*/}
        {/*  transition={{ delay: 0.4, duration: 0.5 }}*/}
        {/*  variants={{*/}
        {/*    hidden: { opacity: 0, y: 50 },*/}
        {/*    visible: { opacity: 1, y: 0 },*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <div className="relative h-32">*/}
        {/*    <div className="z-10">*/}
        {/*      <p className="font-playfair font-semibold text-5xl">03</p>*/}
        {/*      <p className="font-playfair font-semibold text-3xl mt-3">*/}
        {/*        Performance Optimization & SEO*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*    <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />*/}
        {/*  </div>*/}
        {/*  <p className="mt-5">*/}
        {/*    ensure every application I build is fast, efficient, and search-engine friendly:*/}
        {/*    ✅ Code Splitting & Lazy Loading – Boosting page speed by optimizing resource loading.*/}
        {/*    ✅ Asset Optimization (Webpack, Babel, ESLint) – Improving application performance through bundling and minification.*/}
        {/*    ✅ SEO Best Practices – Implementing structured data, meta tags, and accessibility improvements for better rankings.*/}
        {/*  </p>*/}
        {/*</motion.div>*/}
      </div>
    </section>
  );
};

export default MySkills;
