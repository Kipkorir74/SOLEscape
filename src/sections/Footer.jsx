import { copyrightSign } from '../assets/icons'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants/index'
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
        <div className='flex flex-1 justify-between lg:gap-10 
          gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className='text-white font-montserrat text-2xl leading-normal 
                font-medium mb-6'>
                {section.title}
              </h4>
              <ul className='mt-4'>
                {section.links.map((link) => (
                  <li className='mt-3 text-white-400 font-montserrat text-base 
                  leading-normal hover:text-slate-gray cursor-pointer' key={link.name}>
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
          <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
            <img
            src={copyrightSign}
            alt='copy-right'
            width={20}
            height={20}
            className='rounded-full m-0'
            />
            <p>Copyright. All rights Reserved</p>
          </div>
          <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer

