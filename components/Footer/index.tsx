import './styles.scss';
import Image from 'next/image';
import GithubIcon from '@/assets/social-media-link/github.svg';
import LinkedInIcon from '@/assets/social-media-link/linkedin.svg';

export default function Footer() {
  return (
    <footer>
        <div>
            <div className='text-white'>
                Email Me :
            </div>
            <div className='contact'>
                <a href="mailto:lalitkhudhania1@gmail.com">lalitkhudhania1@gmail.com</a>
            </div>
        </div>
        <ul className='socialmedia-nav'>
                <li>
                    <a href='/projects'>
                        <Image src={GithubIcon} alt='image' height={32} />
                    </a>
                </li>
                <li>
                    <a href='/projects'>
                        <Image src={LinkedInIcon} alt='image' />
                    </a>
                </li>
                <li>
                    <a href='/projects'>
                        <Image src={GithubIcon} alt='image' />
                    </a>
                </li>
            </ul>
    </footer>
  )
}
