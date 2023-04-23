import React, { useState, useEffect, useCallback } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../Wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";
import { IWorkSanityAPI } from "../../Entities/Work";
import { sanityQuery } from "../../constants/query";

const Work: React.FC<{}> = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState<IWorkSanityAPI[]>([]);
  const [filterWork, setFilterWork] = useState<IWorkSanityAPI[]>([]);

  const fetchWorks: () => Promise<void> = useCallback(async () => {
    try {
      const query = sanityQuery("works");
      const data = await client.fetch(query);
      setWorks(data);
      setFilterWork(data);
    } catch (err: unknown) {
      console.log('FETCH ERROR: WORKS: ', err);
    }
  }, []);

  useEffect((): void => {
    fetchWorks();
  }, [fetchWorks])

  const handleWorkFilter = (work: string) => {
    setActiveFilter(work);
    setAnimateCard({ y: 100, opacity: 0 })

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (work === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((worktag) => worktag.tags.includes(work)));
      }
    }, 500);

  };


  return (
    <>
      <h2 className="head-text">
        My <span>Portfolio</span> <br /> Section
      </h2>

      {/* Filter Work Selection Bar */}
      <div className="app__work-filter">
        {['UI/UX', 'Backend', 'Mobile App', 'React JS', 'All'].map((work, index) => (
          <div
              key={index}
              onClick={() => handleWorkFilter(work)}
              className={`app__work-filter-item app__flex p-text ${activeFilter === work ? 'item-active' : ''}`}
              >
            {work}
          </div>
        ))}
      </div>

      <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio">
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex">
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ opacity: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex">
                    <AiFillEye />
                  </motion.div>
                </a>

                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ opacity: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex">
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__works"), "work", "app__primarybg");