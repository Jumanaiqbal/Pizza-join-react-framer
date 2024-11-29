import React from 'react';
import { motion } from 'framer-motion';
const containerVariants={
  hidden:{
    opacity:0,
    x:'100vw'

  },
  visibility:{
    opacity:1,
    x: 0,
    transition:{
      type:'spring',mass:0.4,damping:8,when:'beforeChildren',staggerChildren:2
    }

  }
}
const childVariants={
  hidden:{
    opacity:0
  },
  visibility:{
    opacity:1
  }
  
}


const Order = ({ pizza }) => {
  return (
    <motion.div className="container order"
    variants={containerVariants}
    initial="hidden"
    animate="visibility"
    >
      <h2>Thank you for your order :)</h2>
     
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>{pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}</motion.div>
      
    </motion.div>
  )
}

export default Order;