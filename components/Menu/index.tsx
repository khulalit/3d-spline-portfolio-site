'use client';
import './styles.scss';
import MenuIcon from '@/assets/menu.svg';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function Menu() {
    const [open, setOpen] = useState(false);
    return (
        <div className='menu'>
            <button onClick={() => { setOpen((open: boolean) => !open) }}>
                <Image src={MenuIcon} alt="menu" height={30} />
            </button>
            {open &&
                <ul className=''>
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
            }
        </div>
    )
}
