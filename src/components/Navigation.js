import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    return (
        <nav>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between ">
                    <Link exact="true" activeclassname="active" to="/" className="absolute left-0 flex flex-shrink-0 items-center text-2xl font-medium gap-x-3">  
                        Ivy Wang
                        <FontAwesomeIcon icon={faSeedling} className='hover:text-green-400'/>
                    </Link>
                    <div className="absolute right-0 flex flex-1 items-center justify-center text-md sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link exact="true" to="/" className="text-black hover:bg-rose-300 hover:text-white rounded-md px-3 py-2 font-medium">
                                    Home
                                </Link>
                                <Link exact="true" to="/about" className="text-black hover:bg-rose-300 hover:text-white rounded-md px-3 py-2 font-medium">
                                    About
                                </Link>
                                <Link exact="true" to="/portfolio" className="text-black hover:bg-rose-300 hover:text-white rounded-md px-3 py-2 font-medium">
                                    Portfolio
                                </Link>
                                <Link exact="true" to="/contact"className="text-black hover:bg-rose-300 hover:text-white rounded-md px-3 py-2 font-medium" >
                                    Contact 
                                </Link>
                                <Link exact="true" to="/dashboard" className="text-black hover:bg-rose-300 hover:text-white rounded-md px-3 py-2 font-medium">
                                    Dashboard
                                </Link>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation