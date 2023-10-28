'use client'
import { useMemo } from 'react';
import Spline from '@splinetool/react-spline';
import './styles.scss';

export default function HeroSection() {
  const content = useMemo(()=><section className='spline'>
  <Spline scene="https://prod.spline.design/yZeD3mh38hSeNcH6/scene.splinecode" />
</section>, [])
  return content;
}
