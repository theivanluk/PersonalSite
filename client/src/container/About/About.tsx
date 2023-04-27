import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../Wrapper';
import './About.scss';
import { IAboutSanityAPI } from '../../Entities/About';
import { serverEndpoint } from '../../constants/strings';
import axios from 'axios';
import { urlFor } from '../../client';

const About: React.FC<{}> = (): JSX.Element => {
  const [abouts, setAbouts] = useState<IAboutSanityAPI[]>([]);

  const fetchAbouts: () => Promise<void> = useCallback(async (): Promise<void> => {
    try {
      console.log(serverEndpoint("about"));
      const { data } = await axios.get(serverEndpoint("about"));
      setAbouts(data);
    } catch(err: unknown) {
      console.log('FETCH ERROR: ', err);
    }
  }, []);

  useEffect((): void => {
    fetchAbouts();
  }, [fetchAbouts])


  return (
    <>
      <h2 className='head-text'>
        A Small <span>Snippet</span> <br /> About <span>Me</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className='app__profile-item'
              key={about.title + index}>
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');