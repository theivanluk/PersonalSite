import React, { ChangeEvent, ChangeEventHandler, MouseEvent, MouseEventHandler, useState } from 'react';

import images from '../../constants/images';
import { AppWrap, MotionWrap } from '../../Wrapper';
import { client } from '../../client';
import './Footer.scss';
import { IFormData } from '../../Entities/Footer';

const initialForm: IFormData = {
  name: '',
  email: '',
  message: ''
}

const Footer: React.FC<{}> = (): JSX.Element => {
  const [formData, setFormData] = useState<IFormData>(initialForm);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const {name, email, message} = formData;

  const handleChangeInput: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit: MouseEventHandler = async (event: MouseEvent): Promise<void> => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name,
      email,
      message
    }
    const data = await client.create(contact);
    console.log(data);
    setLoading(false);
    setIsFormSubmitted(true);
  }


  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me!</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:luk.ivan.mech@gmail.com" className='p-text'>luk.ivan.mech@gmail.com</a>
        </div>

        <div className='app__footer-card'>
          <img src={images.resumeIcon} alt="mobile" />
          <a href="https://github.com/theivanluk/PersonalSite/raw/main/Ivan%20Luk%20Resume.pdf" target='_blank' rel='noreferrer' className='p-text'>My Resume</a>
        </div>
      </div>

      {!isFormSubmitted
        ?
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type="text" placeholder='Your Name' value={name} name="name" onChange={handleChangeInput} />
          </div>

          <div className='app__flex'>
            <input className='p-text' type="email" placeholder='Your email' value={email} name="email" onChange={handleChangeInput} />
          </div>

          <div>
            <textarea className='p-text' placeholder='Your Message' value={message} name="message" onChange={handleChangeInput} />
          </div>

          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? "Sending" : "Send Message"}</button>
        </div>
        :
        <div>
          <h3 className='head-text'>Thanks for getting in touch!</h3>
        </div>
      }

    </>
  )
}

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "app__primarybg");