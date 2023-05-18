import './Main-content.css'
import { Link } from 'react-router-dom';
import BlogPosts from '../Data/BlogPosts';
const MainContent = ({title, content}) => {
    
    return (
        <main className='main-content'>
        <div className="content">
    
            {BlogPosts.map((post) => (
                <div className='blogpost'>
                <h3 className='title'>{post.title}</h3>
                    <p className='Postcontent'>{post.content.substring(0, 400)}...</p>
                    <Link to={`/blog/${post.id}`}><button>Read More</button></Link>
                    
                </div>
                    
                ))}
      </div>
      <div className='sidebar'>
        <h2>Recently added...</h2>
        <ul>
            {BlogPosts.map((post) => (
                <li className='highlights'>
                    <Link to={`/blog/${post.id}`}><h3>{post.title}</h3></Link>
                    
                </li>)
            )}
        </ul>

      </div>
        </main>
    )

}

export default MainContent