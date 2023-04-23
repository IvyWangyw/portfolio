import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    return (
        <div className='grow flex flex-col items-center justify-center gap-y-6'>
            <img src='./portfolio/profile-pic.jpg' className='h-64 w-64 rounded-full duration-500 hover:scale-125' />
            <h2 className='text-3xl font-medium'>Hello, I'm Ivy 👋</h2>
            <p>I'm an adventurer. Currently learning to code.</p>
            <div className='flex flex-row gap-x-6'>
                <a href="https://linkedin.com" target="blank">
                    <FontAwesomeIcon icon={faLinkedin} className="hover:text-rose-300 my-4 w-4 mx-auto text-2xl w-full"/>
                </a>
                <a href="https://github.com" target="blank">
                    <FontAwesomeIcon icon={faGithub} className="hover:text-rose-300 my-4 w-4 mx-auto text-2xl w-full"/>
                </a>
            </div>
        </div>
    )
}

export default Home