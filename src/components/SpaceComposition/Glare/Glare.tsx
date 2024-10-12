import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Glare.module.scss';

export default function Glare() {
  const glareRef = useRef(null);

  useEffect(() => {
    const glareElement = glareRef.current;

    gsap.fromTo(glareElement, { opacity: 0 }, { opacity: 1, duration: 1 });

    gsap.to(glareElement, {
      repeat: -1,
      yoyo: true,
      duration: 10,
      delay: 1.1,
      keyframes: {
        opacity: [1, 0.85, 1],
      },
    });
  }, []);

  return <div className={styles.glare} ref={glareRef}></div>;
}
