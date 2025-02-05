import React from 'react'

const Ourpolicy = () => {
  return (
    <div className=" py-2">
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-12 text-center py-20 text-xs sm:text-sm md:text-base text--gray-700'>
      <div>
        <img src='\images\transfer.png' className='w-12 m-auto mb-5' alt=''/>
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy </p>
      </div>
      <div>
        <img src='\images\q.png' className='w-12 m-auto mb-5' alt=''/>
        <p className='font-semibold'>7 Days Return Policy</p>
        <p className='text-gray-400'>We provide 7 Days free return policy </p>
      </div>
      <div>
        <img src='\images\s.png' className='w-12 m-auto mb-5' alt=''/>
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-400'>We provide 24/7 customer support</p>
      </div>
    </div>
    </div>
  )
}

export default Ourpolicy
