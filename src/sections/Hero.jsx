import Button from '../Components/Button';
import { arrowRight } from '../assets/icons';
import { statistics, shoes } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../Components/ShoeCard';

import { useState } from 'react';

const Hero = () => {

  const{bigShoeImg, setBigShoeImg} = useState(bigShoe1)

  return (
    <section id="home"
      className="w-full flex xl:flex-row flex-col justify-center 
        min-h-screen gap-10 max-container ">
      <div className="relative xl:w-2/5 flex flex-col justify-center 
        items-start w-full max:clpadding-x pt-28">
        <p className='font-montserrat text-coral-red'>Our summer Collections</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px]
        max-sm:leading-[82] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>SOLEscape</span>Shoes
        </h1>
        <p className='font-montserrat text-slate-gray leading-7 mt-6 mb-14 sm:max-w-sm'>
          Discover the latest trends, rare finds, and iconic classics
          that will elevate your shoe game to a whole new level.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((item) => (
            <div key={item.label}>
              <p className='text-4xl font-palanquin font-bold'>{item.value}</p>
              <p className='leadin-7 font-montserrat text-slate-gray'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen 
      max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe collection'
          width={610}
          height={500}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left[10% max-sm:p-6]'>
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard 
              imgURL={shoe}
              changeBigShoeImg={(shoe) => setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}
              />
            </div>

          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

