import React from 'react';
import girl from '../assets/girl.png'
import boy from '../assets/boy.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-black'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={boy} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Depanshu Sahu</h2>
              {/* <p className='text-center text-4xl font-bold'>$149</p> */}
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>This app has revolutionized the way i manage my finances!The Calendar feature is a game changer and has helped me stay on top of my spending like never before </p>
                  
              </div>
              {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
          </div>
          {/* <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'> */}

          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem]  bg-white bg-transparent' src={girl} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Shrilakshmi S K</h2>
             
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>The borrowing page is a lifesaver for small business owner like me, it's so easy to track outstanding  debts and keep my cashflow in check </p>
                  
              </div>
             </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={boy} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'> Maurya Aryan Swaminathn</h2>
              
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>I love the data analytics dashboard being able to see my spending habits in easy to understand graphs and charts has really helped me make better financial decisions</p>
                 
                
              </div>
              </div>
      </div>
    </div>
  );
};

export default Cards;
