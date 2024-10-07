import './Navbar.css'


const Navbar = () =>{
    return(
        <div className='nav'>
            <div className='nav-logo'>ReactProject</div>
            <ul className='nav-menu' >
                <a href='/'>Home</a>
                <a href='/Explore'>Explore</a>
                <a href='/About'>About</a>
                <a className='nav-contact' href='/Contact'>Contact</a>
            </ul>
        </div>
    )
}

export default Navbar