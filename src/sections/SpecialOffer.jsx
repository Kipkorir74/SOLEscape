import { offer } from "../assets/images";
import Button from "../Components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse
    gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          {/* <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span> */}
          <br />
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Experience the epitome of comfort and elegance with our exquisitely crafted footwear.
          Our shoes are meticulously fashioned from the highest quality materials, guaranteeing
          enduring durability. Discover unparalleled comfort and exceptional support that sets
          our footwear apart.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>Our unwavering commitment to precision and superior quality guarantees your utmost
          satisfaction.</p>
        <div className='mt-11'><Button label="View Details" /></div>


      </div>
    </section>
  )
}

export default SpecialOffer
