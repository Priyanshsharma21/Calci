import React from 'react'
import { Link } from 'react-router-dom'
import DhagaCard from './DhagaCard.jsx'
import { useDhagaContext } from '../../context/dhagaContext.jsx'


const Home = () => {
  const { state } = useDhagaContext()

  
  return (
    <>
        <div className="show_posts">
          {state.dhagas.length === 0 ? (
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
                    {state?.dhagas?.map((post,i)=>(
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