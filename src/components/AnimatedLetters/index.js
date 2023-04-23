import './index.css'

const AnimatedLetters = ({strArray}) => {
    return (
        <span>
            {// allow us to put in normal javascript it in
                strArray.map( (char, idx) => {
                    return (
                        <span className="text-animate" key={idx} style={{animationDelay: `calc(${idx / 10 +1}s)`}}>
                            {char}
                        </span>
                    )
                })
            }
        </span>
    )
}

export default AnimatedLetters