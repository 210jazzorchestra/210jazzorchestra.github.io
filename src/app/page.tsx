import Image from 'next/image';

import sax from '@/assets/sax.png';
import photo2 from '@/assets/photo-2.png';
import photo1 from '@/assets/photo-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faYoutube,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Script from 'next/script';
import { josefin } from './fonts';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/contact-form';
import InstagramFeed from '@/components/instagram-feed';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header className='flex lg:flex-row flex-col lg:items-end items-center justify-center gap-4 lg:justify-between lg:pb-2 pb-6 flex-wrap'>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-row lg:justify-start justify-center gap-2 lg:mb-[-10px] mb-[-20px]'>
            <Image
              src={sax}
              alt='sax'
              height={80}
              className='antialiased mr-[-30px] mt-[-25px] mb-2'
            />
            <h1
              className={cn(
                'text-[36px] lg:text-7xl font-bold uppercase text-[#71a3c1] mt-[-8px] lg:mt-[-5px] antialiased',
                josefin.className
              )}
            >
              210
            </h1>

            <h1
              className={cn(
                'text-3xl lg:text-6xl font-bold uppercase text-[#3f0385] antialiased',
                josefin.className
              )}
            >
              Jazz
            </h1>
            <h1
              className={cn(
                'text-3xl lg:text-6xl font-bold uppercase antialiased',
                josefin.className
              )}
            >
              Orchestra
            </h1>
          </div>
        </div>
        <div className='lg:flex gap-6 mb-1 hidden'>
          <Link
            href='https://www.instagram.com/210jazzorchestra'
            target='_blank'
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className='lg:w-8 lg:h-8 w-5 h-5'
            />
          </Link>
          <Link
            href='https://www.youtube.com/channel/210jazzorchestra'
            target='_blank'
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className='lg:w-8 lg:h-8 w-5 h-5'
            />
          </Link>
          <Link href='https://www.tiktok.com/@210jazzorchestra' target='_blank'>
            <FontAwesomeIcon
              icon={faTiktok}
              className='lg:w-8 lg:h-8 w-5 h-5'
            />
          </Link>
          <Link href='mailto:210jazzorchestra@gmail.com' target='_blank'>
            <FontAwesomeIcon
              icon={faEnvelope}
              className='lg:w-8 lg:h-8 w-5 h-5'
            />
          </Link>
        </div>
      </header>
      <main className='flex flex-col lg:gap-8 gap-4 max-h-full w-full'>
        <Image
          src={photo1}
          alt='210 Jazz Orchestra'
          className='object-cover w-full'
        />

        <div className=' flex-col '>
          <div className='flex flex-row lg:gap-10 gap-4'>
            <Image
              src={photo2}
              alt='210 Jazz Orchestra'
              width={250}
              height={250}
              className='lg:basis-1/3 aspect-square lg:block hidden antialiased border-4 border-stone-800 rounded-lg'
            />
            <div className='flex flex-col lg:gap-4 sm:gap-3 lg:basis-2/3'>
              <h2
                className={cn(
                  'lg:text-4xl text-2xl font-bold uppercase text-[#71a3c1]',
                  josefin.className
                )}
              >
                About us
              </h2>
              <p className='lg:text-base text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quisquam, quos. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quisquam, quos. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quos.
              </p>
            </div>
          </div>

          <hr className='w-full border-stone-800 my-4' />

          <div className='flex flex-col lg:items-center items-start lg:gap-4 gap-2'>
            <h2
              className={cn(
                'lg:text-4xl text-2xl font-bold uppercase text-[#71a3c1] lg:pb-2',
                josefin.className
              )}
            >
              Press
            </h2>
            <div className='flex lg:gap-10 lg:flex-row flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <p className='text-stone-300 italic lg:text-base text-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam, quos.
                </p>
                <p className='text-stone-300 italic lg:text-base text-sm'>
                  - San Antonio Express-News
                </p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-stone-300 italic lg:text-base text-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam, quos.
                </p>
                <p className='text-stone-300 italic lg:text-base text-sm'>
                  - San Antonio Express-News
                </p>
              </div>
            </div>
          </div>

          <hr className='w-full border-stone-800 lg:block hidden lg:my-4' />

          <div className='flex lg:flex-row flex-col lg:gap-10 gap-4 lg:mt-0 mt-4'>
            <div className='flex flex-col lg:gap-5 gap-4 lg:basis-7/12 basis-full'>
              <div className='flex flex-col gap-1 bg-stone-900 rounded-lg p-4'>
                <h2
                  className={cn(
                    'lg:text-5xl text-2xl font-bold uppercase text-[#71a3c1]',
                    josefin.className
                  )}
                >
                  The Band
                </h2>
                <hr className='w-full border-stone-800 lg:pb-3 pb-0' />
                <h6 className='text-stone-400 font-bold lg:text-base text-sm'>
                  Saxophones
                </h6>
                <p className='text-xs'>John Doe, Jane Doe</p>
                <h6 className='text-stone-400 font-bold lg:text-base text-sm'>
                  Trumpets
                </h6>
                <p className='text-xs'>John Doe, Jane Doe</p>
                <h6 className='text-stone-400 font-bold lg:text-base text-sm'>
                  Trombones
                </h6>
                <p className='text-xs'>John Doe, Jane Doe</p>
                <h6 className='text-stone-400 font-bold lg:text-base text-sm'>
                  Rhythm
                </h6>
                <p className='text-xs'>John Doe, Jane Doe</p>
              </div>

              <h2 className='font-bold lg:text-4xl text-2xl text-[#71a3c1] uppercase lg:my-0 my-4'>
                Shows
              </h2>
              <Script src='https://widget.bandsintown.com/main.min.js' />
              <div className='mx-[-10px] lg:mt-4 mt-[-20px]'>
                <a
                  className='bit-widget-initializer'
                  data-artist-name='Billie Eilish'
                  data-display-local-dates='false'
                  data-auto-style='true'
                  data-text-color='#FFFFFF'
                  data-link-color='#57534e'
                  data-display-past-dates='true'
                  data-background-color='rgba(0,0,0,0)'
                  data-display-limit='4'
                  data-display-start-time='false'
                  data-link-text-color='#FFFFFF'
                  data-display-lineup='false'
                  data-display-play-my-city='false'
                  data-display-track-button='false'
                  data-separator-color='rgba(255, 255, 255, 0.5)'
                  data-font='Roboto'
                  data-font-size='14px'
                  data-display-logo='false'
                />
              </div>
            </div>

            <hr className='w-full border-stone-800 lg:hidden' />

            <h2 className='font-bold text-2xl text-[#71a3c1] uppercase lg:hidden'>
              Videos
            </h2>

            <div className='flex flex-col gap-6 lg:basis-5/12'>
              <iframe
                width='auto'
                className='aspect-video'
                src='https://www.youtube-nocookie.com/embed/n4hqtmTvYGs?si=GiLF8z28En667M3M'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              />
              <iframe
                width='auto'
                className='aspect-video'
                src='https://www.youtube-nocookie.com/embed/J_Ms53xorZ8?si=gtx_xM3ChFSI4FAH'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              />
              <iframe
                width='auto'
                className='aspect-video'
                src='https://www.youtube-nocookie.com/embed/RGfSIpxy6Es?si=o6JyLva5jYl5Mg6K'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              />
              <iframe
                width='auto'
                className='aspect-video'
                src='https://www.youtube-nocookie.com/embed/Ks-kRUl6YBs?si=4RjfggyuoYzdSlRL'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <hr className='w-full border-stone-800 my-4 lg:my-0' />
        <div className='flex gap-4'>
          <div className='flex flex-col gap-4 basis-1/2'>
            <h2 className='font-bold lg:text-4xl text-2xl text-[#71a3c1] uppercase lg:my-0 my-4'>
              Contact Us
            </h2>
            <ContactForm />
          </div>
          <div className='basis-1/2'>
            <InstagramFeed
              account='210_jazz_orchestra'
              accountTitle='210 Jazz Orchestra'
            />
          </div>
        </div>

        <hr className='w-full border-stone-800 my-4 lg:my-0' />

        <div className='flex justify-between gap-4'>
          <h4 className='font-bold lg:text-3xl text-2xl text-[#71a3c1] uppercase lg:my-0 my-4'>
            Press Kit
          </h4>
          <div className='flex gap-10'>
            <Link
              href='/stage-plots.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button size='lg'>Stage Plots</Button>
            </Link>
            <Link
              href='/210-Jazz-Photos.zip'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button size='lg'>Press Photos</Button>
            </Link>
          </div>
        </div>
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-around mt-5 border-t border-stone-800 pt-5'>
        <Link
          href='https://www.instagram.com/210_jazz_orchestra'
          target='_blank'
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className='lg:w-8 lg:h-8 w-10 h-10'
          />
        </Link>
        <Link
          href='https://www.youtube.com/channel/210jazzorchestra'
          target='_blank'
        >
          <FontAwesomeIcon
            icon={faYoutube}
            className='lg:w-8 lg:h-8 w-10 h-10'
          />
        </Link>
        <Link href='https://www.tiktok.com/@210jazzorchestra' target='_blank'>
          <FontAwesomeIcon
            icon={faTiktok}
            className='lg:w-8 lg:h-8 w-10 h-10'
          />
        </Link>
        <Link href='mailto:210jazzorchestra@gmail.com' target='_blank'>
          <FontAwesomeIcon
            icon={faEnvelope}
            className='lg:w-8 lg:h-8 w-10 h-10'
          />
        </Link>
      </footer>
    </div>
  );
}
