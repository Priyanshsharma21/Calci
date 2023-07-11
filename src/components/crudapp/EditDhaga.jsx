import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import SectionWrapper from '../../hof/hof';

const EditDhaga = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    dhaga: '',
    photo: '',
  });

  useEffect(() => {
    const storedThreads = JSON.parse(localStorage.getItem('threads')) || [];
    const foundPost = storedThreads.find((item) => item.id === id);

    setForm({
      dhaga: foundPost ? foundPost.dhaga : '',
      photo: foundPost ? foundPost.photo : '',
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newThread = { ...form, id: id };
    const storedThreads = JSON.parse(localStorage.getItem('threads')) || [];
    const updatedThreads = storedThreads.map((thread) => {
      if (thread.id === id) {
        return newThread;
      }
      return thread;
    });
    localStorage.setItem('threads', JSON.stringify(updatedThreads));
  
    navigate('/');
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="create_thread">
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={handleChange}
          name="dhaga"
          value={form.dhaga}
          type="text"
          required
          autoFocus
          placeholder="Start a dhaga..."
          className="dhagaInput"
        />

        <input
          onChange={handleChange}
          name="photo"
          value={form.photo}
          type="url"
          placeholder="Enter image web url (optional)"
          className="dhagaInput"
        />

        <div className="btn_ai">
          <a
            className="ai_image_btn"
            href="https://lexica.art/"
            rel="noopener noreferrer"
            target="_blank"
            title="AI images"
          >
            Click here for image URL's
          </a>
        </div>

        <button type="submit" className="submit_dhaga">
          Post
        </button>
      </form>
    </div>
  );
};

export default SectionWrapper(EditDhaga, '');
