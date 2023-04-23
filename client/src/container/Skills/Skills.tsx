import React, { useState, useEffect, useCallback, Fragment } from "react";
import { motion } from "framer-motion";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import { AppWrap, MotionWrap } from "../../Wrapper";
import { urlFor, client } from "../../client";
import './Skills.scss';
import { IExperiencesSanityAPI, ISkillsSanityAPI } from "../../Entities/Skills";
import { sanityQuery } from "../../constants/query";




const Skills: React.FC = (): JSX.Element => {
  const [skills, setSkills] = useState<ISkillsSanityAPI[]>([]);
  const [experience, setExperience] = useState<IExperiencesSanityAPI[]>([]);

  const fetchSkills: () => Promise<void> = useCallback(async (): Promise<void> => {
    try {
      const experiencesQuery = sanityQuery("experiences");
      const skillsQuery = sanityQuery("skills");

      const data = await client.fetch(experiencesQuery);
      const skillsData = await client.fetch(skillsQuery);

      setExperience(data);
      setSkills(skillsData);
    } catch (err: unknown) {
      console.log("Error fetchking skills and experiences: ", err);
    }
  }, []);

  useEffect((): void => {
    fetchSkills();
  }, [fetchSkills])

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}>
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experience.map((experience) => (
            <motion.div
                className="app__skills-exp-item"
                key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, index) =>
                  <Fragment key={`${work} ${index}`}>
                    {/* eslint-disable-next-line */}
                    <a data-tooltip-id={work.name}>
                      <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className="app__skills-exp-work"
                          data-tip={work.desc}
                          data-for={work.name}
                          key={work.name}>
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </motion.div>
                    </a>
                    <Tooltip
                        id={work.name} classNameArrow="skills-tooltip-arrow"
                        className="skills-tooltip">
                      <div>
                        {work.desc}
                      </div>
                    </Tooltip>
                  </Fragment>
                )}
              </motion.div>
            </motion.div>

          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Skills, "app__skills"), 'skills', "app__whitebg");