import React, { useState } from 'react'
import SectionWrapper from '../../hof/hof'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { useDhagaContext } from '../../context/dhagaContext';


const formData = {
    dhaga : "",
    photo : ""
}


const CreateDhaga = () => {
    const [form, setForm] = useState(formData)
    const { dispatch } = useDhagaContext();
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        const newThread = { ...form, id : uuidv4() }
        dispatch({ type: 'CREATE_DHAGA', payload: newThread });
        navigate('/')
    }
    

    const handleChange = (e)=>{
        const {name, value} = e.target
        setForm({...form, [name] : value})
    }


  return (
    <div className="create_thread">
        <form onSubmit={handleSubmit}>
            <textarea onChange={handleChange} name="dhaga" value={form.dhaga} type="text" required autoFocus placeholder="Start a dhaga..." className="dhagaInput" />

            <input onChange={handleChange} name="photo" value={form.photo} type="url" placeholder="Enter image web url (optional)" className="dhagaInput" />

            <div className="btn_ai">
                <a className="ai_image_btn" href="https://lexica.art/" rel="noopener noreferrer" target="_blank" title="AI images">
                    Click here for image URL's
                </a>
            </div>

            
            <button type="submit" className="submit_dhaga">
                Post
            </button>

        </form>
    </div>
  )
}

export default SectionWrapper(CreateDhaga, "")