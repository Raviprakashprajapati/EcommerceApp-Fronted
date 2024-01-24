import React from 'react'
import contactImage from "../../assets/image/contactImage.jpg"


function Contactus() {
  return (
    <div  >
     <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
 
  <div className="mx-auto max-w-2xl lg:max-w-4xl">
    <img className="mx-auto h-[15rem]" src={contactImage} alt=""/>
    <figure className="">
      <blockquote className="text-center  font-semibold leading-8 text-gray-900  sm:leading-9">
        <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
      </blockquote>
      <figcaption className="mt-10">
        <img className="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
          <div className="font-semibold text-gray-900">Judith Black</div>
          <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <div className="text-gray-600">CEO of Workcation</div>
        </div>
      </figcaption>
    </figure>
  </div>
</section>

    </div>
  )
}

export default Contactus
