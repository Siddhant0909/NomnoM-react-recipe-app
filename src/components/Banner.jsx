import React from 'react'

const Banner = () => {
  return (
    <div className='w-full max-h-[300px] h-full  overflow-hidden rounded-3xl '>
      <img className='w-full object-cover object-center rounded-b-3xl' src="https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?q=80&w=878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      {/* <div className='absolute top-0 bottom-0 left-0 right-0 m-auto w-fit h-fit p-4'>
        <h1 className='text-5xl font-bold'>Savoring every bite.</h1>
      </div> */}
    </div>
  )
}

export default Banner