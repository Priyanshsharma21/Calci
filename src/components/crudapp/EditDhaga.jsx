import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SectionWrapper from '../../hof/hof';
import { useDhagaContext } from '../../context/dhagaContext';

const EditDhaga = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const { state, dispatch } = useDhagaContext();

  const [form, setForm] = useState({
    dhaga: '',
    photo: '',
  });

  useEffect(() => {

    const foundDhaga = state.dhagas.find((dhaga) => dhaga.id === id);
    if (foundDhaga) {
      setForm({ ...foundDhaga });
    }
  }, [id, state.dhagas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_DHAGA', payload: { ...form, id } });
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
