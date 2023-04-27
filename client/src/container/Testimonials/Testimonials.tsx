import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../Wrapper';

import './Testimonials.scss';
import { IBrandsSanityAPI, ITestimonialsSanityAPI } from '../../Entities/Testimonials';

const Testimonials: React.FC<{}> = (): JSX.Element => {
  const [brands, setBrands] = useState<IBrandsSanityAPI[]>([]);
  const [testimonials, setTestimonials] = useState<ITestimonialsSanityAPI[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleClick: Function = (index: number): void => {
    setCurrentIndex(index);
  }

  const fetchTestimonials: () => Promise<void> = useCallback(async (): Promise<void> => {
    try {
      // const testimonialsQuery: string = sanityQuery("testimonials");
      // const brandsQuery: string = sanityQuery("brands");

      // const testimonialsData: ITestimonialsSanityAPI[] = await client.fetch(testimonialsQuery);
      // const brandsData: IBrandsSanityAPI[] = await client.fetch(brandsQuery);

      // setTestimonials(testimonialsData);
      // setBrands(brandsData);
    } catch (err: unknown) {
      console.log("Error fetching testimonials and brands: ", err);
    }
  }, []);

  useEffect((): void => { fetchTestimonials() }, [fetchTestimonials])

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      {!!(testimonials.length) && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={currentTestimonial.imageurl} alt="testimonials" />
            <div className='app__testimonial-content'>
              <p className='p-text'>{currentTestimonial.feedback}</p>
              <div>
                <h4 className='bold-text'>{currentTestimonial.name}</h4>
                <h5 className='p-text'>{currentTestimonial.company}</h5>
              </div>
            </div>
          </div>

          <div className='app__testimonial-btns app__flex'>
            <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className='app__testimonials-brands app__flex'>
        {brands.map((brand): JSX.Element => (
          <motion.div
              whileInView={{ opacity: [0, 1]}}
              transition={{ duration: 0.5, type: 'tween' }}
              key={brand._id}>
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Testimonials, "app__testimonial"), "testimonials", "app__primarybg");