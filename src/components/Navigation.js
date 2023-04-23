import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faUser } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDev } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    return (
        // <div className="nav-bar w-14 h-[100vh] bg-black fixed top-0 left-0 p-3 flex flex-col justify-center">
        //     <Link className="logo mb-auto" to="/" >
        //         <h2>Logo</h2>
        //         <FontAwesomeIcon icon={faDev} className="text-white text-4xl w-full text-yellow-400"/>
        //     </Link>

        //     <nav className="mb-auto">
        //         <NavLink exact="true" activeclassname="active" to="/" >
        //         <FontAwesomeIcon icon={faIgloo} className="text-white hover:text-yellow-400 my-4 text-2xl w-full"/>
        //         <span className="text-white">Home</span>
        //         </NavLink>

        //         <NavLink exact="true" activeclassname="active" to="/about" >
        //         <FontAwesomeIcon icon={faAddressCard} className="text-white hover:text-yellow-400 my-4 text-2xl w-full"/>
        //         <span className="text-white ">About</span>
        //         </NavLink>

        //         <NavLink exact="true" activeclassname="active" to="/portfolio" >
        //         <FontAwesomeIcon icon={faBookBookmark} className="text-white hover:text-yellow-400 my-4 text-2xl w-full"/>
        //         <span className="text-white">Portfolio</span>
        //         </NavLink>

        //         <NavLink exact="true" activeclassname="active" to="/contact" >
        //         <FontAwesomeIcon icon={faEnvelope} className="text-white hover:text-yellow-400 my-4 text-2xl w-full"/>
        //         <span className="text-white">Contact</span>
        //         </NavLink>

        //         <NavLink exact="true" activeclassname="active" to="/dashboard" >
        //         <FontAwesomeIcon icon={faUser} className="text-white hover:text-yellow-400 my-4 text-2xl w-full"/>
        //         <span className="text-white">Dashboard</span>
        //         </NavLink>
        //     </nav>

        //     <ul>
        //         <li>
        //             <a href="https://linkedin.com" target="blank">
        //                 <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-yellow-400 my-4 w-4 mx-auto text-2xl w-full"/>
        //             </a>
        //         </li>
        //         <li>
        //             <a href="https://twitter.com" target="blank">
        //              <FontAwesomeIcon icon={faTwitter} className="text-white hover:text-yellow-400 my-4 w-4 mx-auto text-2xl w-full"/>
        //              </a>
        //         </li>
        //         <li>
        //             <a href="https://instagram.com" target="blank">
        //                 <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-yellow-400 my-4 w-4 mx-auto text-2xl w-full"/>
        //             </a>
        //         </li>
        //     </ul>
        // </div>

        <nav>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between ">
                    <NavLink exact="true" activeclassname="active" to="/portfolio" className="absolute left-0 flex flex-shrink-0 items-center text-2xl font-medium gap-x-3">  
                        Ivy Wang
                        <FontAwesomeIcon icon={faSeedling} className='hover:text-green-400'/>
                    </NavLink>
                    <div className="absolute right-0 flex flex-1 items-center justify-center text-md sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <NavLink exact="true" to="/portfolio" className="text-black hover:bg-rose-300 hover:text-white rounded-md px-3 py-2 font-medium">
                                    Home
                                </NavLink>
                                <NavLink exact="true" to="/portfolio/about" className="text-black hover:bg-rose-300 hover:text-white rounded-md px-3 py-2 font-medium">
                                    About
                                </NavLink>
                                <NavLink exact="true" to="/portfolio/portfolio" className="text-black hover:bg-rose-300 hover:text-white rounded-md px-3 py-2 font-medium">
                                    Portfolio
                                </NavLink>
                                <NavLink exact="true" to="/portfolio/contact"className="text-black hover:bg-rose-300 hover:text-white rounded-md px-3 py-2 font-medium" >
                                    Contact 
                                </NavLink>
                                <NavLink exact="true" to="/portfolio/dashboard" className="text-black hover:bg-rose-300 hover:text-white rounded-md px-3 py-2 font-medium">
                                    Dashboard
                                </NavLink>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation