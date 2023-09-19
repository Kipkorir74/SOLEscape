import {footerLogo} from '../assets/images'
import {socialMedia} from '../constants/index'
const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
            <a href="/" className="mb-5">
              <img
              src={footerLogo}
              alt="logo"
              width={150}
              height={50}
              />
            </a>
            <p className='mt-6 text-base leading-7 font-montserrat
             text-white-400 sm:max-w-sm'>Get your fire arsenal of kicks at your nearest store today and 
              stunt on them ASAP
            </p>
            <div className='flex items-center gap-5 mt-8'>
              {socialMedia.map((icon) => (
                <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    width={24}
                    height={24}
                  />

                </div>
              ))}
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer

