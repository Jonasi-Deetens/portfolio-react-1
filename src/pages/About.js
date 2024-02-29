import React from 'react'
import { Banner } from '../components/Banner';

const About = () => {
  return (
    <div>
        <section className='bg-gray-50 drop-shadow-sm border-b-2 border-gray-100'>
            < Banner title = "About" />
        </section>
        <section className='p-10 w-10/12 bg-white m-auto h-max'>
          <h2 className='text-2xl'>Welcome to YouX-Components</h2>
          <br />
          <p className='italic'>
            'At YouX-Components, we're not just another tech company; we're the architects of digital transformation. Our journey began with a simple yet powerful vision: to redefine the way the web is built, one component at a time. Since our inception, we've been at the forefront of innovation, pioneering solutions that blend cutting-edge technology with intuitive design.
          </p>
          <br />
          <p>
            Our mission is clear: to empower developers and designers alike with the tools they need to create exceptional online experiences. We understand that in today's fast-paced digital landscape, success hinges on more than just functionality – it's about crafting immersive, memorable interactions that resonate with users on a deeper level.
          </p>
          <br />
          <p>
            What sets us apart is our unwavering commitment to excellence. From conception to execution, every component we create is meticulously crafted to meet the highest standards of quality and performance. Our team of seasoned experts leverages the latest advancements in technology to deliver solutions that not only meet but exceed expectations.
          </p>
          <br />
          <p>
            But our journey doesn't stop there. We believe in the power of collaboration and community, which is why we're dedicated to fostering an ecosystem where creativity thrives. Whether you're a seasoned developer or a budding designer, we invite you to join us on this exhilarating adventure as we push the boundaries of what's possible.
          </p>
          <br />
          <p>
            At YouX-Components, we're not just building components – we're building the future of the web. Together, let's shape a digital landscape that's as inspiring as it is accessible, one component, one collaboration at a time.
          </p>
          <h2 className='mt-10 text-2xl'>Location</h2>
          <div className='w-full mt-5'>
            <iframe className='m-auto my-20 w-2/3 h-96' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19944.53542808718!2d3.236448431738278!3d51.32828879254872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1snl!2sbe!4v1709214082628!5m2!1snl!2sbe" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>
    </div>
  )
}

export default About;