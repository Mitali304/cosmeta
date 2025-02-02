import React, { useContext } from 'react'

const Orders = () => {
  const { products, currency}= useContext(ShopContext)
  return (
    <div className='border-t pt16'>
      <div className='text-2xl'>
        <title text1={MY} text2={ORDERS}/>
      </div>
      
    </div>
  )
}

export default Orders
