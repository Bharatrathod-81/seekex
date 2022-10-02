import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Form } from './components/form/form';
import { Header } from './components/header/header';
import { CardListing } from './pages/cardListing-page/cardListing';
import { getUsersList } from './slice';

function App() {
  
  const [editDetail, setEditDetails] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersList())
  },[])
  
  const {showForm } = useSelector(state => state.usersList);

  return (
    <div className="App">
      <Header/>
      <CardListing setEditDetails={setEditDetails}/>
      {showForm && <Form editDetail={editDetail} setEditDetails={setEditDetails}/>}
    </div>
  );
}

export default App;
