import { offer } from "../assets/images";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";

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
          Discover a shopping odyssey where exceptional savings meet top-tier choices, providing you with unmatched value that distinguishes us.
          
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>As you navigate our virtual aisles or stroll through our physical store, you'll embark on a 
        shopping journey like no other. Our commitment to delivering unbeatable deals on premium products ensures that every purchase you make 
        represents an investment in quality and affordability.</p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
