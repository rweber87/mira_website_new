import React from 'react';

export default function Behance({ color = 'white' }) {
  return (
    <svg
      width='45'
      height='28'
      viewBox='0 0 45 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M41.0667 3.73333H28V0H41.0667V3.73333ZM44.24 22.4C43.4933 24.8267 40.5067 28 34.72 28C28.9333 28 24.2667 24.8267 24.2667 17.36C24.2667 10.08 28.56 6.34667 34.5333 6.34667C40.32 6.34667 43.8667 9.70667 44.6133 14.56C44.8 15.4933 44.8 16.8 44.8 18.6667H29.8667C30.0533 24.64 36.4 24.8267 38.4533 22.4H44.24ZM29.8667 14.9333H39.2C39.0133 12.1333 37.1467 10.8267 34.5333 10.8267C31.92 10.8267 30.4267 12.1333 29.8667 14.9333ZM12.1333 28H0V0H13.0667C23.3333 0.186667 23.52 10.08 18.1067 12.88C24.4533 15.3067 24.64 28 12.1333 28ZM5.6 11.2H12.32C16.9867 11.2 17.7333 5.6 11.76 5.6H5.6V11.2ZM11.9467 16.8H5.6V22.4H11.76C17.5467 22.4 17.1733 16.8 11.9467 16.8Z'
        fill={color}
      />
    </svg>
  );
}