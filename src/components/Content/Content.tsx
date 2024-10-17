import styles from './Content.module.scss';

export default function Content() {
  return (
    <div className={styles.container}>
      <div className={styles['border-decoration-top']}></div>
      <div className={styles['border-decoration-bottom']}></div>

      <div className={styles.text}>
        <div className={styles.wrapper}>
          <div id="S" className={styles.letter}>
            S
          </div>
          <div className={styles.shadow}>S</div>
        </div>
        <div className={styles.wrapper}>
          <div id="P" className={styles.letter}>
            P
          </div>
          <div className={styles.shadow}>P</div>
        </div>
        <div className={styles.wrapper}>
          <div id="A" className={styles.letter}>
            A
          </div>
          <div className={styles.shadow}>A</div>
        </div>
        <div className={styles.wrapper}>
          <div id="C" className={styles.letter}>
            C
          </div>
          <div className={styles.shadow}>C</div>
        </div>
        <div className={styles.wrapper}>
          <div id="E" className={styles.letter}>
            E
          </div>
          <div className={styles.shadow}>E</div>
        </div>
      </div>
    </div>
  );
}
