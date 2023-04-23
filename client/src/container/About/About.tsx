import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../Wrapper';
import { urlFor, client } from '../../client';
import './About.scss';
import { IAboutSanityAPI } from '../../Entities/About';

const About: React.FC<{}> = (): JSX.Element => {
  const [abouts, setAbouts] = useState<IAboutSanityAPI[]>([]);

  const fetchAbouts: () => Promise<void> = useCallback(async (): Promise<void> => {
    try {
      const query: string = '*[_type == "abouts"]';
      const data: IAboutSanityAPI[] = await client.fetch(query);
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
        I Know That <span>Good Development</span> <br /> means <span>Good Business</span>
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