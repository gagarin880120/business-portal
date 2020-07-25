import * as React from 'react';
import { FooterContainerProps } from './FooterContainer';
import styles from './Footer.module.css';

export default function Footer({
  areNewsLoaded, news, country, cathegory, currentPage, totalPages, onIntersect,
}: FooterContainerProps) {
  const footer = React.useRef();

  React.useEffect(() => {
    if (currentPage === totalPages) {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
          onIntersect(country, cathegory, currentPage + 1, news);
          observer.disconnect();
        }
      });
    });
    observer.observe(footer.current);
  }, [areNewsLoaded]);

  return (
    <div className={styles.wrapper} ref={footer}>
      <p className={styles.text}>
        Copyright © 2020 Business Portal. Andrei Mandryk
      </p>
    </div>
  );
}
