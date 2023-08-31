import Button from '../Components/Button';
import { arrowRight } from '../assets/icons';
import { statistics } from '../constants';

const Hero = () => {
  return (
    <section id="home"
      className="w-full flex xl:flex-row flex-col justify-center 
        min-h-screen gap-10 max-container ">
      <div className="relative xl:w-2/5 flex flex-col justify-center 
        items-start w-full max:clpadding-x pt-28">
        <p>Our summer Collections</p>
        <h1 className='mt-10 font-palanquin text-8xl'>
          <span>The New Arrival</span>
          <br />
          <span>SOLEscape Shoes</span>
        </h1>
        <p>
          Discover the latest trends, rare finds, and iconic classics
          that will elevate your shoe game to a whole new level.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />

        <div className='center justify-start items-start flex-wrap w-full mt-20'>
          {statistics.map((item) => (
            <div key={item.label} className='flex flex-col justify-center items-center 
            w-1/2 sm:w-1/4'>
              <p className=''>{item.label}</p>
              <p className=''>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

