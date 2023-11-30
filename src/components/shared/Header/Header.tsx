'use client';

import { Container } from '@/components/ui/Container';
import cn from 'classnames';
import styles from './Header.module.scss';
import Link from 'next/link';
import { LogoIcon } from '@/assets/icons/Logo';
import { GlobeIcon } from '@/assets/icons/Globe';
import { MenuIcon } from '@/assets/icons/Menu';
import { useState } from 'react';
import { CloseIcon } from '@/assets/icons/Close';
import { PhoneIcon } from '@/assets/icons/neon/Phone';

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <header className={cn(styles['header'], isOpen && styles['menu-opened'])}>
        <Container className={styles['header__container']}>
          <div className='max-md:hidden'></div>

          <div className={styles['header__center']}>
            <nav className={styles['header__nav']}>
              <ul className={styles['header__nav-list']}>
                <li>
                  <Link href='#home' className={styles['header__nav-link']}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href='#about' className={styles['header__nav-link']}>
                    About
                  </Link>
                </li>
              </ul>
            </nav>

            <div className={styles['header__logo']}>
              <Link href='/' className={styles['header__logo-link']}>
                <LogoIcon className={styles['header__logo-icon']} />
              </Link>
            </div>

            <nav className={styles['header__nav']}>
              <ul className={styles['header__nav-list']}>
                <li>
                  <Link href='#service' className={styles['header__nav-link']}>
                    Service
                  </Link>
                </li>
                <li>
                  <Link href='#contact' className={styles['header__nav-link']}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <button type='button' className={styles['language-switch']}>
            <GlobeIcon className={styles['language-switch__icon']} />
            <span className={styles['language-switch__value']}>En</span>
          </button>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className={styles['header__menu-button']}
          >
            {!isOpen && <MenuIcon />}
            {isOpen && <CloseIcon />}
          </button>
        </Container>
      </header>

      {isOpen && (
        <div className={styles['header-menu']}>
          <nav className={styles['header-menu__nav']}>
            <ul className={styles['header-menu__list']}>
              <li>
                <Link href='/' className={styles['header-menu__nav-link']}>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/about' className={styles['header-menu__nav-link']}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/service'
                  className={styles['header-menu__nav-link']}
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className={styles['header-menu__nav-link']}
                >
                  Contact
                </Link>
              </li>
              <li>
                <button className={styles['header-menu__nav-button']}>
                  <GlobeIcon />
                  <span>En</span>
                </button>
              </li>
            </ul>
          </nav>

          <div className={styles['header-menu__footer']}>
            <PhoneIcon className={styles['header-menu__icon']} />

            <Link
              href='tel:+90-737-731-9'
              className={styles['header-menu__phone']}
            >
              <span>+90-737-731-9</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='25'
                height='24'
                viewBox='0 0 25 24'
                fill='none'
              >
                <path
                  d='M8.95234 5.23385L15.7194 12L8.95234 18.7661L8.95233 18.7661C8.85595 18.8625 8.77951 18.9769 8.72735 19.1028C8.67519 19.2287 8.64835 19.3637 8.64835 19.5C8.64835 19.6363 8.67519 19.7712 8.72735 19.8971C8.77951 20.0231 8.85595 20.1375 8.95233 20.2338C9.0487 20.3302 9.16312 20.4067 9.28903 20.4588C9.41495 20.511 9.54991 20.5378 9.68621 20.5378C9.8225 20.5378 9.95746 20.511 10.0834 20.4588C10.2093 20.4067 10.3237 20.3302 10.4201 20.2338L17.92 12.734C17.92 12.7339 17.9201 12.7339 17.9201 12.7338C18.0165 12.6375 18.093 12.5231 18.1452 12.3972C18.1974 12.2713 18.2242 12.1363 18.2242 12C18.2242 11.8636 18.1974 11.7286 18.1452 11.6027C18.093 11.4768 18.0165 11.3624 17.9201 11.2661C17.9201 11.266 17.92 11.266 17.92 11.266L10.4201 3.76608C10.2255 3.57144 9.96147 3.4621 9.68621 3.4621C9.41095 3.4621 9.14697 3.57144 8.95233 3.76608C8.75769 3.96072 8.64835 4.2247 8.64835 4.49996C8.64835 4.77522 8.75769 5.0392 8.95233 5.23384L8.95234 5.23385Z'
                  fill='white'
                  stroke='white'
                  strokeWidth='0.57489'
                />
                <path
                  d='M17.7168 12.5306L10.2168 20.0306C10.1472 20.1003 10.0644 20.1555 9.97338 20.1933C9.88234 20.231 9.78475 20.2504 9.68621 20.2504C9.58766 20.2504 9.49008 20.231 9.39904 20.1933C9.30799 20.1555 9.22527 20.1003 9.15558 20.0306C9.0859 19.9609 9.03062 19.8782 8.99291 19.7871C8.9552 19.6961 8.93579 19.5985 8.93579 19.5C8.93579 19.4014 8.9552 19.3038 8.99291 19.2128C9.03062 19.1217 9.0859 19.039 9.15558 18.9693L16.1259 12L9.15558 5.03058C9.01485 4.88985 8.93579 4.69898 8.93579 4.49996C8.93579 4.30094 9.01485 4.11006 9.15558 3.96933C9.29631 3.8286 9.48719 3.74954 9.68621 3.74954C9.88523 3.74954 10.0761 3.8286 10.2168 3.96933L17.7168 11.4693C17.7866 11.539 17.8419 11.6217 17.8796 11.7128C17.9174 11.8038 17.9368 11.9014 17.9368 12C17.9368 12.0985 17.9174 12.1961 17.8796 12.2872C17.8419 12.3782 17.7866 12.4609 17.7168 12.5306Z'
                  fill='white'
                />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
