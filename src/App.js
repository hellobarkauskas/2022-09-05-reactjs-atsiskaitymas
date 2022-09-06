
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginComponent';
import RegisterForm from './components/RegisterComponent';
import './App.css';
import FetchSkills from './components/Home';
import PostSkills from './components/Add';

function App() {

  return (
    <Routes>
      <Route path='/' element={<LoginForm />} />
      <Route path='/register' element={<RegisterForm />} />
      <Route path='/home' element={<FetchSkills />} />
      <Route path='/add' element={<PostSkills />} />
    </Routes>
  );
}

export default App;
