import Button from '../Components/Button';
import { arrowRight } from '../assets/icons';
import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section id='about-us'
      className="flex justify-between items-center 
      max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We Provide You
          {/* <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span> */}
          <br />
          <span className='text-coral-red'>Super </span>
          <span className='text-coral-red'>Quality </span>
          Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Experience the epitome of comfort and elegance with our exquisitely crafted footwear.
          Our shoes are meticulously fashioned from the highest quality materials, guaranteeing
          enduring durability. Discover unparalleled comfort and exceptional support that sets
          our footwear apart.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>Our unwavering commitment to precision and superior quality guarantees your utmost
          satisfaction.</p>
        <div className='mt-11'><Button label="View Details" iconURL={arrowRight} /></div>


      </div>
    <div className='flex-1 flex justify-center items-center '>
      <img
      src={shoe8}
      alt='shoe8'width={570} height={522}
      className='object-contain'
      />
    </div>

    </section>
  )
}

export default SuperQuality
