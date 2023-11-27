 import icon from '../assets/images/icon.svg'
 import logo from '../assets/images/logo.svg'

const Header = () => {
  return (
    <div>
     <header>
        <div className=" flex justify-center align-content-center gap-1  header_top bg-orange-400 text-white py-3">
       <div> Free Courses 🌟 Sale Ends Soon, Get It Now</div>
        <span><img src={icon}  alt="" /></span>
        </div>
        <div className="header_bottom flex  p- ">
        <div className="header_left">
        <nav className='flex gap-20'> 
        <a href="/"><img className='bg-orange-400' src={logo} alt="" /></a>
        <ul className='flex gap-20'>
            <a href="/"><li>Home</li></a>
            <a href="/"><li>Courses</li></a>
            <a href="/"><li>About us</li></a>
            <a href="/"><li>Pricing</li></a>
            <a href="/"><li>Contact</li></a>
        </ul>
        </nav>
        </div>
        <div className="header_left flex gap-8">
            <button>
            Sign Up
                </button>
                <button>
                Login
                </button>
        </div>
        </div>
     </header>
    </div>
  )
}

export default Header