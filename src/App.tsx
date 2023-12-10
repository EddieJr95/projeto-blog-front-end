import { useState } from 'react';
import './App.css';
import { Navbar } from './components/navbar/navbar';
import { Card } from './components/card/card';
import { PostData } from './interface/PostData';
import { usePostData } from './hooks/usePostData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = usePostData();
  const [isModalOpen, SetIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    SetIsModalOpen(prev => !prev);
  };

  return (
    <div className="container">
      <Navbar></Navbar>
      <div className="card-grid">
        {data?.map(postData => (
          <Card
            title={postData.title}
            date={postData.date}
            image={postData.image}
            text={postData.text}
          />
        ))}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal}>New Post</button>
    </div>
  );
}

export default App;
