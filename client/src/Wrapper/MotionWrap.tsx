import React, { ComponentType } from 'react';
import { motion } from 'framer-motion';

const MotionWrap: Function = (Component: ComponentType, classNames: string): () => JSX.Element => function HOC(): JSX.Element {
  return (
    <motion.div
        whileInView={{ y: [100, 50, 1], opacity: [0, 0, 1]}}
        transition={{ duration: 0.5 }}
        className={`${classNames} app__flex`}>
      <Component />
    </motion.div>
  );
}

export default MotionWrap;