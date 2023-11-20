import { FiMail } from 'react-icons/fi';

import NextLink from '@/components/NextLink';

import { contactEmail } from '@/constant/contact';

export default function LetsGetInTouch() {
  return (
    <div className='pb-8 pt-14 lg:pb-28 lg:pt-16'>
      <NextLink
        className='flex w-fit items-center justify-center gap-3 rounded-full bg-black px-6 py-3 text-white no-underline lg:px-8'
        href={`mailto:${contactEmail}`}
      >
        <span className='font-primary text-2xl font-semibold lg:text-3xl'>
          Let's get in touch!
        </span>
        <FiMail size={32} />
      </NextLink>
    </div>
  );
}
