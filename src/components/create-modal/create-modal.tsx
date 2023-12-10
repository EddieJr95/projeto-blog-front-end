import { useEffect, useState } from 'react';
import { usePostData } from '../../hooks/usePostData';
import { usePostDataMutate } from '../../hooks/usePostDataMutate';
import { PostData } from '../../interface/PostData';
import './modal.css';

interface InputProps {
  label: string;
  value: string;
  updateValue(value: string): void;
}

interface ModalProps {
  closeModal(): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input value={value} onChange={e => updateValue(e.target.value)}></input>
    </>
  );
};

const Textarea = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <textarea
        value={value}
        onChange={e => updateValue(e.target.value)}
      ></textarea>
    </>
  );
};

export function CreateModal({ closeModal }: ModalProps) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [text, setText] = useState('');
  const { mutate, isSuccess, isPending } = usePostDataMutate();

  const submit = () => {
    const postData: PostData = {
      title,
      date,
      image,
      text
    };
    mutate(postData);
  };

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [isSuccess]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Faça um novo Post!</h2>
        <form className="input-container">
          <Input label="title" value={title} updateValue={setTitle} />
          <Input label="date" value={date} updateValue={setDate} />
          <Input label="image" value={image} updateValue={setImage} />
          <Input label="text" value={text} updateValue={setText} />
        </form>
        <button onClick={submit} className="btn-secondary">
         {isPending? 'postando...': 'postar'}
        </button>
      </div>
    </div>
  );
}
