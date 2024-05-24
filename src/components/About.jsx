import React from 'react'
import us from './us'
import ContactCard from './ContactCard'
function About() {
  return (
    <div className='p-6 pb-[100px]'>
      <h2 className='text-4xl my-[10px] font-semibold'>Don't Know About Us?</h2>
      <div>
        <h4 className='text-2xl mt-[10px]'>Our Mission</h4>
        <p>At CyptoPlayground, our mission is to bridge the gap between academic learning and the real-world financial markets. We aim to provide accurate, transparent, and comprehensive cryptocurrency market data to empower students, educators, and enthusiasts with the knowledge and tools needed to navigate the digital finance landscape.</p>
      </div>
      <div>
        <h4 className='text-2xl mt-[40px]'>Who We Are</h4>
        <p>We are a team of dedicated students from Chitkara University, passionate about the future of finance and technology. Our project focuses on integrating theoretical knowledge with practical applications in the field of cryptocurrency and blockchain technology.</p>
        <div className='flex flex-row md:flex-row w-full justify-around mt-16'>
          {us.map((e)=>(
            <ContactCard {...e} key={e.id}/>
          ))}
        </div>
      </div>

    </div>
  )
}

export default About