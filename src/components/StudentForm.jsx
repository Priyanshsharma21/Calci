import React, { useState } from 'react'


const form = {
    name : "",
    email : "",
    phone : "",
    skill : ""
}


const StudentForm = () => {
    const [formData, setFormData] = useState(form)
    const [result, setResult] = useState(null)
    const [showTable, setShowTable] = useState(false)


    const handleSubmit = (e)=>{
        setShowTable(true)
        e.preventDefault()
        setResult((prevResult) => (prevResult ? [...prevResult, formData] : [formData]));
        setFormData(form);
    }

    const handleChange = (e)=>{
        const {name, value} = e.target
        console.log(name, value)
        setFormData({...formData, [name] : value})
    }


  return (
    <div className="student_form">
    <div className="student_details">
        <p>Student Table</p>
    </div>
        <form onSubmit={handleSubmit} className="form_student form_main">
            <input required onChange={handleChange} className="form_student" name="name" value={formData.name}  type="text" placeholder='Enter Your Name'/>
            <input required onChange={handleChange} className="form_student" name="email" value={formData.email} type="email" placeholder='Enter Your Email'/>
            <input required onChange={handleChange} className="form_student" name="phone" value={formData.phone} type="tel" placeholder='Enter Your Phone Number'/>
            <input required onChange={handleChange} className="form_student" name="skill" value={formData.skill} type="text" placeholder='Enter Your Skill'/>
            <button type="submit">
                Submit
            </button>
        </form>


        <div className="show_the_table">
        {showTable && (
                <div className="table">
                <table>
                
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Skill</th>
                    </tr>
                </thead>

                <tbody>
                    {result.map((data, index) => (
                    <tr key={index}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>{data.skill}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
                </div>
            )}
        </div>
    </div>
  )
}

export default StudentForm