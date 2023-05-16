import './footer.css'

const Footer = ({date}) => {
    return (
        <div className='footer'>
        <p>coded by Collins Mwendwa </p>
        <p>{new Date().toDateString()}</p>
        </div>
    )
}

export default Footer