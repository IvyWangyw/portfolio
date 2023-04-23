import { signOutUser, dbRef, storage } from '../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { addDoc } from 'firebase/firestore'
import { useRef } from 'react'

const Account = () => {

    const form = useRef([])

    const submitPortfolio = (event) => { // mainly to get the image URL
        event.preventDefault()
        console.log('Submitting')
        const formEl = document.getElementById("file-upload")
        const projectName = document.getElementById("project-name")
        const projectDescription = document.getElementById("project-description")
        const projectLink = document.getElementById("project-link")
        console.log(projectName)

        projectName.value = ''
        projectDescription.value = ''
        projectLink.value = ''


       
        const image = formEl.files[0] // get the file, altho there is only 1 file, but it's in an array
        console.log(image)
        
        // upload the image
    
        const storageRef = ref(storage, `portfolio/${image.name}`) //pass in 2 paras: where we store, storage name

        // wait for return URL
        uploadBytes(storageRef, image) // 2 paras: takes storage reference, and the file. returns a snapshot of the downloaded URL
            .then((snapshot)=>{
                console.log(snapshot.ref)
                getDownloadURL(snapshot.ref)
                    .then((downloadURL)=>{
                            console.log(downloadURL)
                            savePortfolioToDatabase(downloadURL)
                    }) // use the built in function to get the download URL
                    .catch((error)=>{
                        console.log(error)
                    })
            })
            .catch((error)=>{
                console.log(error)
            })
          
         


    }

    const savePortfolioToDatabase = (imageURL) => {
        const portfolioItem = {
            imageURL: imageURL,
            itemName: form.current[0].value,
            itemDescription: form.current[1].value,
            itemLink: form.current[2].value
        }

        addDoc(dbRef, portfolioItem)
            .then((documentRef)=>{
                console.log('Document has been created',documentRef)
            })
            .catch((error)=>{
                console.log(error)
            })
    }


    return(
        <div className='flex flex-col justify-center grow gap-y-8 px-6 lg:px-8 mt-16'>
            <div className="mx-auto max-w-2xl text-center gap-y-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">Upload your project</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Show off what you have made!
              </p>
            </div>
            <form className='mx-auto flex flex-col justify-center w-1/2 gap-y-4' ref={form} onSubmit={submitPortfolio}>
              
                <input type='text' id='project-name' placeholder='Project Name' className='mb-4 text-black w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6'/>
                <input type='text' id='project-description' placeholder='Description' className='mb-4 text-black w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6'/>
                <input type='text' id='project-link' placeholder='Link URL' className='mb-4 text-black w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6'/>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-rose-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-rose-300 focus-within:ring-offset-2 hover:text-rose-300"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
                <div className=" flex items-center justify-center gap-x-6 mt-8">
                <button type="button" onClick={signOutUser} className="text-sm font-semibold leading-6 text-gray-900">
                  Log out
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-rose-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-300">
                  Save
                </button>
                </div>
          
            </form>

            

          
       
        </div>
    )
}

export default Account