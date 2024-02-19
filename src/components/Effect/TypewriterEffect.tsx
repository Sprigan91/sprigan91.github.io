import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  delay?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({  text, speed = 100, delay = 4000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isDeleting && currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if (!isDeleting && currentIndex === text.length) {
        setIsDeleting(true);
        setTimeout(() => setIsDeleting(false), delay); // Delay before deleting
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText((prevText) => prevText.slice(0, -1));
        setCurrentIndex((prevIndex) => prevIndex - 1);
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, text, speed, delay, isDeleting]);

  return (
    <span className={classNames('inline-block', 'overflow-hidden')}>
      {displayText}

    </span>
  );
};

export default TypewriterEffect;
