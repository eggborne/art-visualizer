import './App.css';
import PreviewCanvas from './PreviewCanvas';

const App: React.FC = () => (
  <>
    <header className='flex-center'>
      <h1>Bleleagh</h1>
    </header>
    <main>
      <PreviewCanvas dimensions={{ width: 24, height: 24 }} />
    </main>
  </>
);

export default App;

