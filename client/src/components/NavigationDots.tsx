import React from 'react';

const NavigationDots: React.FC<{active: string}> = ({ active }): JSX.Element => {
  return (
    <div className='app__navigation'>
       {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((link, index) =>
          <a
              href={`#${link}`}
              key={link + index}
              className='app__navigation-dot'
              style={active === link ? {backgroundColor: '#313ABC'} : {}}
          > </a>
        )}
    </div>
  )
};

export default NavigationDots;