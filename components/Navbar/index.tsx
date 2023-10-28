// styles
import './styles.scss';
//
import Image from 'next/image';
import GithubIcon from '@/assets/social-media-link/github.svg';
import LinkedInIcon from '@/assets/social-media-link/linkedin.svg';
import LogoIcon from '@/assets/logo.svg';
import Menu from '../Menu';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='flex items-center gap-2'>
                <Link href='/'>
                    <Image src={LogoIcon} alt='logo icon'/>
                </Link>
                Portfolio
            </div>
            <ul className='page-nav'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/projects'>Projects</Link>
                </li>
                <li>
                    <Link href='/skill'>Technologies</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
            <ul className='socialmedia-nav'>
                <li>
                    <a href='https://github.com/khulalit' target='_blank'>
                        <Image src={GithubIcon} alt='image' height={32} />
                    </a>
                </li>
                <li>
                    <a href='https://linkedin.com/in/lalit-khudhania'>
                        <Image src={LinkedInIcon} alt='image' />
                    </a>
                </li>
            </ul>
            <Menu/>
        </nav>
    )
}
