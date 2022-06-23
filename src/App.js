import s from './App.module.scss';
import Header from './components/header/Header';
import Content from './components/content/Content';
function App() {
  return (
    <div className={s.app}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
