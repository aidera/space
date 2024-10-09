import Content from './components/Content/Content';
import SpaceComposition from './components/SpaceComposition/SpaceComposition';
import styles from './App.module.scss';

function App() {
  return (
    <main className={styles.main}>
      <Content />
      <div className={styles['space-container']}>
        <SpaceComposition />
      </div>
      {/* <div className={styles['canvas-overlay']}></div> */}
    </main>
  );
}

export default App;
