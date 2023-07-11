import React from 'react'
import { Link } from 'react-router-dom'
import DhagaCard from './DhagaCard.jsx'


const Home = () => {
  const storedThreads = JSON.parse(localStorage.getItem('threads'))


  return (
    <>
        <div className="show_posts">
          {storedThreads === null ? (
            <div className="no_post_message">
              <div className="message_no_post">
                No Post Yet.
              </div>

              <div className="create_a_dhaga">
                <Link to='/dcreate' className="dcreate_home">
                  Create a post...
                </Link>
              </div>
            </div>
          ):(
            <>
                <div className="thread_card">
                    {storedThreads?.map((post,i)=>(
                        <DhagaCard key={post?.id}  post={post}/>
                    ))}
                </div>
            </>
          )}
        </div>
    </>
  )
}

export default Home