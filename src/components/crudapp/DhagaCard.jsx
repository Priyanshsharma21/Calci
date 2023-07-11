import React from 'react'
import SectionWrapper from '../../hof/hof'
import { BsThreeDots } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'


const DhagaCard = ({post}) => {


  const handleDelete = (id)=>{

    console.log(id)
    const storedThreads = JSON.parse(localStorage.getItem('threads'))
    const updatedThreads = storedThreads.filter((item) => item.id !== id);
    localStorage.setItem('threads', JSON.stringify(updatedThreads))

    window.location.reload();
  }

  return (
    <div className="dhaga_post">
      <div className="edit_dots_box">
        <Link to={`/edit/${post?.id}`}>
          <BsThreeDots className="edit_dots"/>
        </Link>
      </div>
      <div className="thread">
        {post?.dhaga}
      </div>

      {post?.photo && (<>
        <div className="image_of_thread">
          <img src={post?.photo} alt="" className="dhaga_photo" />
        </div>
      </>)}

      <div className="edit_dots_box">
        <div className="delete_post" onClick={()=>handleDelete(post?.id)}>
          <AiOutlineDelete className="edit_dots" />
        </div>
      </div>
    </div>
  )
}

export default DhagaCard
