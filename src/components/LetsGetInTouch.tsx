import Link from 'next/link';
import { FiMail } from 'react-icons/fi';

export default function LetsGetInTouch() {
  return (
    <div className='pb-28 pt-14 lg:pb-48 lg:pt-16'>
      <Link
        className='flex w-fit items-center justify-center gap-3 rounded-full bg-black px-6 py-3 text-white lg:px-8'
        href='mailto:contact@unit214.de'
      >
        <span className='font-primary text-2xl font-semibold lg:text-3xl'>
          Let's get in touch!
        </span>
        <FiMail size={32} />
      </Link>
    </div>
  );
}
