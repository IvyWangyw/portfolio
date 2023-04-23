import { useEffect, useState } from 'react'
import { dbRef } from '../firebase'
import { getDocs } from 'firebase/firestore'
import 'animate.css'



const Portfolio = () => {

    const [portfolioData, setPortfolioData] = useState([])

    useEffect(() => {
        getPortfolioData()
    }, [])

    const getPortfolioData = async () => {
        const querySnapshot = await getDocs(dbRef)
        console.log(querySnapshot)
        setPortfolioData(querySnapshot.docs.map((doc) => doc.data()))
    }


        return (
            <>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
                    <h2 className="sr-only">Portfolio</h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                        {portfolioData.map((project, idx) => (
                            <a key={idx} href={project.itemLink} target="_blank" rel="noreferrer" className="group" >
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={project.imageURL}
                                        alt={project.itemName}
                                        className="animate__animated animate__fadeIn h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-1 text-lg font-medium text-gray-900">{project.itemName}</h3>
                                <p className="mt-4 text-sm text-gray-700 ">{project.itemDescription}</p>
                            </a>
                        ))}
                    </div>
                </div>
                {/* {// to return javascript
                    portfolio.map((port, idx) => {
                        return (

                            <div key={idx} className="card p-5 w-full md:w-1/3 px-5">
                                <div className="p-5">
                                    <img src={port.imageURL} alt={port.itemName} />
                                    <h3 className='text-white text-2xl font-bold my-2'> {port.itemName} </h3>
                                    <p> {port.itemDescription}</p>
                                    <button onClick={() => window.open(port.itemLink)} className="bg-gray-800 hover:bg-gray-900 px-4 mt-4"> View more</button>
                                </div>
                            </div>
                        )
                    })
                } */}
            </>
        )


   
    
}

export default Portfolio