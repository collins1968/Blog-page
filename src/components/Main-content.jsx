import './Main-content.css'


const MainContent = ({title, content}) => {
    const BlogPosts = [
        { title: "HTML", content: "HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn. Links are a crucial part of HTML, enabling users to navigate between web pages. The <a> tag is used to create hyperlinks, with the destination URL specified using the href attribute." },
        { title: "CSS", content: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS works by using selectors to target specific HTML elements and applying styles to them. Selectors can be based on element types (e.g., headings, paragraphs), class names, IDs, or even specific attributes. Once the elements are selected, CSS properties are used to define the desired styles, such as colors, font sizes, backgrounds, and more." },
        { title: "Javascript", content: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.This tutorial will teach you JavaScript from basic to advanced. " },
        { title: "SQL", content: "Structured Query Language, is a domain-specific language used in programming and designed for managing data held in a relational database management system. Every table is broken up into smaller entities called fields. The fields in the Customers table consist of CustomerID, CustomerName, ContactName, Address, City, PostalCode and Country. A field is a column in a table that is designed to maintain specific information about every record in the table.A record, also called a row, is each individual entry that exists in a table. For example, there are 91 records in the above Customers table. A record is a horizontal entity in a table." },
    ];
    return (
        <main className='main-content'>
        <div className="content">
            {/* <ul>
            {BlogPosts.map((post) => (
                <li className='blogpost'>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </li>)
            )}  
            </ul>   */}
    
            {BlogPosts.map((post) => (
                <div className='blogpost'>
                <h3 className='title'>{post.title}</h3>
                    <p className='Postcontent'>{post.content}</p>
                </div>
                    
                ))}
      </div>
      <div className='sidebar'>
        <h2>Recently added</h2>
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