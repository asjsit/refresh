import Image from 'next/image';
import styles from './Hero.module.scss';
import { Container } from '@/components/ui/Container';
import { ArrowLeftIcon } from '@/assets/icons/ArrowLeft';
import { StarIcon } from '@/assets/icons/Star';
import { BusIcon } from '@/assets/icons/Bus';
import Link from 'next/link';
import { InstagramIcon } from '@/assets/icons/Instagram';
import { TelegramIcon } from '@/assets/icons/Telegram';
import { YoutubeIcon } from '@/assets/icons/Youtube';
import { PhoneIcon } from '@/assets/icons/neon/Phone';

export function Hero() {
  return (
    <div className={styles['hero']}>
      <Image
        src={require('@/assets/images/banners/refresh-white.png')}
        alt=''
        className={styles['hero__bg']}
      />

      <Container className={styles['hero__container']}>
        <div className='flex flex-col items-center max-md:flex-col-reverse max-md:gap-y-4'>
          <div className='flex w-full items-center max-md:flex-col max-md:items-center max-md:gap-y-[1rem]'>
            <p className='whitespace-nowrap font-SpriteGraffiti text-[clamp(6.875rem,2.0179rem_+_7.5893vw,11.125rem)] leading-[clamp(6.875rem,2.0179rem_+_7.5893vw,11.125rem)] max-md:text-center max-md:text-[clamp(3.25rem,0.6607rem_+_12.9464vw,6.875rem)] max-md:leading-[clamp(3.25rem,0.6607rem_+_12.9464vw,6.875rem)]'>
              Revive <span className='font-SpriteGraffitiShadow'>Your</span>
              <br /> <span className='hidden max-md:block'>Wardrobe</span>
            </p>

            <p className='whitespace-nowrap font-onest text-[clamp(1.375rem,0.8036rem_+_0.8929vw,1.875rem)] font-bold uppercase text-[#151515] max-md:whitespace-normal max-md:text-center max-md:text-[clamp(0.875rem,0.5179rem_+_1.7857vw,1.375rem)]'>
              Discover the pinnacle of <br className='max-md:hidden' />
              <span className='text-[#ED2A07]'>
                clothing restoration
              </span> and <br className='max-md:hidden' />
              exceptional <span className='text-[#ED2A07]'>fabric care</span>
            </p>
          </div>

          <div className='flex max-md:flex-col-reverse max-md:items-center'>
            <Image
              className='h-[clamp(19.125rem,10.125rem_+_14.0625vw,27rem)] w-[clamp(25.375rem,13.5179rem_+_18.5268vw,35.75rem)] object-contain max-md:h-[clamp(12.375rem,9.3068rem_+_15.3409vw,19.125rem)] max-md:w-[clamp(17.125rem,7.6964rem_+_14.7321vw,25.375rem)]'
              src={require('@/assets/images/hero/sneakers.png')}
              alt=''
            />

            <div className=''>
              <p className='-mt-8 whitespace-nowrap font-SpriteGraffiti text-[clamp(6.875rem,2.0179rem_+_7.5893vw,11.125rem)] max-md:hidden'>
                Wardrobe
              </p>

              <div className='flex '>
                <ArrowLeftIcon className='mt-10 h-[clamp(6.25rem,3.3929rem_+_4.4643vw,8.75rem)] w-[clamp(7.75rem,4.1786rem_+_5.5804vw,10.875rem)] max-md:hidden' />

                <p className='-translate-x-4 translate-y-6 text-[clamp(0.875rem,0.5893rem_+_0.4464vw,1.125rem)] font-bold uppercase italic text-[#666] max-md:translate-x-0 max-md:translate-y-0 max-md:text-center max-md:text-[clamp(0.75rem,0.3036rem_+_2.2321vw,1.375rem)]'>
                  a <span className='text-[#ED2A07]'>fresh</span> and{' '}
                  <span className='text-[#ED2A07]'>new look</span> for <br />
                  things that have seen a lot ;)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between rounded-[clamp(0.5rem,-0.3571rem_+_1.3393vw,1.25rem)] border border-[#eee] bg-[radial-gradient(6564.37%_28.51%_at_71.49%_50%,#EEE_0%,rgba(238,238,238,0.00)_100%)] backdrop-blur-[4px] max-md:mt-[1rem] max-md:rounded-none max-md:border-none max-md:bg-none'>
          <div className='flex items-center gap-x-[0.625rem] max-md:w-full max-md:flex-col max-md:justify-center max-md:gap-y-[0.5rem]'>
            <button className='my-[0.625rem] ml-[0.625rem] flex items-center gap-x-[1.25rem] whitespace-nowrap rounded-[0.75rem] border border-[#F85133] bg-[#ED2A07] p-[clamp(0.875rem,0.4464rem_+_0.6696vw,1.25rem)_clamp(1.875rem,1.1607rem_+_1.1161vw,2.5rem)_clamp(0.875rem,0.4464rem_+_0.6696vw,1.25rem)_clamp(1.375rem,0.8036rem_+_0.8929vw,1.875rem)] max-md:m-0'>
              <StarIcon className='h-[clamp(1.4375rem,0.7946rem_+_1.0045vw,2rem)] w-[clamp(1.4375rem,0.7946rem_+_1.0045vw,2rem)]' />

              <span className='font-onest text-[clamp(1rem,0.5714rem_+_0.6696vw,1.375rem)] font-semibold text-white'>
                Order cleaning now
              </span>
            </button>

            <button className='my-[0.625rem] flex items-center gap-x-[1.25rem] whitespace-nowrap rounded-[0.75rem] border bg-[#fff] p-[clamp(0.875rem,0.4464rem_+_0.6696vw,1.25rem)_clamp(1.875rem,1.1607rem_+_1.1161vw,2.5rem)_clamp(0.875rem,0.4464rem_+_0.6696vw,1.25rem)_clamp(1.375rem,0.8036rem_+_0.8929vw,1.875rem)] shadow-[0_0_10px_0_rgba(34,34,34,0.10)] max-md:m-0'>
              <BusIcon className='h-[clamp(1.4375rem,0.7946rem_+_1.0045vw,2rem)] w-[clamp(1.4375rem,0.7946rem_+_1.0045vw,2rem)]' />

              <span className='font-onest text-[clamp(1rem,0.5714rem_+_0.6696vw,1.375rem)] font-semibold text-[#151515]'>
                Courier services
              </span>
            </button>

            <ul className='flex items-center gap-x-[clamp(1.5rem,0.3571rem_+_1.7857vw,2.5rem)] p-[clamp(0.875rem,0.4464rem_+_0.6696vw,1.25rem)]'>
              <li>
                <Link href='#' className=''>
                  <InstagramIcon className='wg-[clamp(1.5rem,_0.9286rem_+_0.8929vw,2rem)] h-[clamp(1.5rem,_0.9286rem_+_0.8929vw,2rem)]' />
                </Link>
              </li>
              <li>
                <Link href='#' className=''>
                  <TelegramIcon className='wg-[clamp(1.5rem,_0.9286rem_+_0.8929vw,2rem)] h-[clamp(1.5rem,_0.9286rem_+_0.8929vw,2rem)]' />
                </Link>
              </li>
              <li>
                <Link href='#' className=''>
                  <YoutubeIcon className='wg-[clamp(1.5rem,_0.9286rem_+_0.8929vw,2rem)] h-[clamp(1.5rem,_0.9286rem_+_0.8929vw,2rem)]' />
                </Link>
              </li>
            </ul>
          </div>

          <Link href='tel:+90-737-731-9' className='flex max-md:hidden'>
            <div className='z-10 rotate-3 rounded-[clamp(0.875rem,0.4464rem_+_0.6696vw,1.25rem)] border border-[#252525] bg-[#151515] '>
              <PhoneIcon className='h-[clamp(4rem,2.1429rem_+_2.9018vw,5.625rem)] w-[clamp(4rem,2.1429rem_+_2.9018vw,5.625rem)]' />
            </div>

            <div className='my-[0.625rem] flex -translate-x-6 items-center rounded-[clamp(0.5rem,0.2143rem_+_0.4464vw,0.75rem)] border border-[#252525] bg-[#151515] pl-[clamp(2.375rem,1.375rem_+_1.5625vw,3.25rem)] pr-[clamp(0.625rem,-0.0893rem_+_1.1161vw,1.25rem)]'>
              <div className='flex items-center'>
                <span className='mb-1 text-[clamp(1.375rem,0.8036rem_+_0.8929vw,1.875rem)] font-bold text-white'>
                  +
                </span>

                <span className='mb-1 whitespace-nowrap font-onest text-[clamp(1.375rem,0.8036rem_+_0.8929vw,1.875rem)] font-bold text-white'>
                  90-737-731-9
                </span>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
}
