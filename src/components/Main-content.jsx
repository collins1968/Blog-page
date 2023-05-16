import './Main-content.css'

const MainContent = ({title, content}) => {
    const BlogPosts = [
        { title: "Blog Post 1", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." },
        { title: "Blog Post 2", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." },
        { title: "Blog Post 3", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." },
        { title: "Blog Post 4", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." },
    ];
    return (
        <main className='main-content'>
        <div className="content">
            <ul>
            {BlogPosts.map((post) => (
                <li className='blogpost'>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </li>)
            )}  
            </ul>  
      </div>
      <div className='sidebar'>
        <ul>
            {BlogPosts.map((post) => (
                <li>
                    <h3>{post.title}</h3>
                </li>)
            )}
        </ul>

      </div>
        </main>
    )

}

export default MainContent