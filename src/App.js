import { useDispatch } from 'react-redux';
import './App.css';
import { GET_POSTS_SAGA } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <button onClick={() => dispatch({ type: GET_POSTS_SAGA })}>Click</button>
    </div>
  );
}

export default App;
