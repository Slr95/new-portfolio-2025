import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="flex justify-center"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] text-center">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px] text-center">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [active, setActive] = useState("");

  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <h2 className={`${styles.sectionHeadText}`}>Mis proyectos.</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
        >
          Los siguientes proyectos son ejemplos de mi trabajo, donde aplico mis
          conocimientos y habilidades en el desarrollo de soluciones reales.
          Cada proyecto incluye una breve descripción, junto con enlaces a los
          repositorios de código y demostraciones en vivo. Estos proyectos
          destacan mi capacidad para resolver problemas complejos, trabajar con
          diversas tecnologías y gestionar eficazmente el ciclo de vida de un
          proyecto.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className="w-full flex justify-center mt-10">
        <button
          className={`${
            active === "Mas Proyectos" ? "text-white" : "text-secondary"
          } hover:text-white text-[18px] bg-tertiary font-medium py-3 px-6 rounded-lg transition-all`}
          onClick={() => {
            setActive("Mas Proyectos");
            window.open("https://github.com/Slr95?tab=repositories", "_blank");
          }}
        >
          Más Proyectos
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
