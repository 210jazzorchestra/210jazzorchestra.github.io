'use client';

import React, { useEffect } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { cn } from '@/lib/utils';

export default function Carousel({
  children,
  interval = 7000,
  className,
}: {
  children: React.ReactNode[] | React.ReactNode;
  interval?: number;
  className?: string;
}) {
  const [sliderRef, slider] = useKeenSlider({
    loop: Array.isArray(children) ? true : false,
    defaultAnimation: {
      duration: 700,
      easing: (t) => t * t,
    },
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      slider?.current?.next();
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [interval, slider]);

  return (
    <div ref={sliderRef} className={cn('keen-slider', className)}>
      {Array.isArray(children) ? (
        children.map((child: React.ReactNode, index: number) => (
          <div key={index} className='keen-slider__slide'>
            {child}
          </div>
        ))
      ) : (
        <div className='keen-slider__slide'>{children}</div>
      )}
    </div>
  );
}
