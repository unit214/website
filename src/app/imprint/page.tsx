'use client';

import Link from 'next/link';

import Footer from '@/components/Footer';

export default function ImprintPage() {
  return (
    <div className='flex min-h-[100vh] w-full flex-col items-center justify-between gap-10 pt-10'>
      <div className='font-primary flex max-w-[500px] flex-col items-center gap-10 font-light'>
        <div className='flex flex-col items-center'>
          <h1>Impressum</h1>
          <span className='text-xl'>Angaben gemäß § 5 TMG</span>
        </div>

        <div className='flex flex-col items-center gap-5'>
          <p className='text-center'>
            Unit 214 GmbH
            <br />
            Straßbergerstr. 18
            <br />
            80809 München
          </p>

          <p className='text-center'>
            Handelsregister: HRB 272469
            <br />
            Registergericht: Amtsgericht München
          </p>

          <p className='text-center'>
            <span className='font-semibold'>Vertreten durch:</span>
            <br />
            Keno Dreßel
            <br />
            Tom Graupner
            <br />
            Philipp Piwowarsky
          </p>
        </div>

        <div className='flex flex-col items-center gap-5'>
          <h1>Kontakt</h1>
          <p className='text-center'>
            Telefon: +49 (0)89 31908366
            <br />
            E-Mail: {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className='mb-1 inline-flex max-h-[20px]'
              src='/png/contact-unit214.png'
              alt='contact unit 214 email'
            />
          </p>
        </div>

        <div className='flex flex-col items-center gap-5'>
          <h1>Umsatzsteuer-ID</h1>
          <p className='text-center'>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            DE350480347
          </p>
        </div>

        <div className='flex flex-col items-center gap-5'>
          <h1>EU-Streitschlichtung</h1>
          <p className='text-center'>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{' '}
            <Link
              href='https://ec.europa.eu/consumers/odr/'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://ec.europa.eu/consumers/odr/
            </Link>
            .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </div>
        <div className='flex flex-col items-center gap-5'>
          <h1 className='text-center'>
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h1>
          <p className='text-center'>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
          <p className='text-center'>
            Quelle: <a href='https://www.e-recht24.de'>e-recht24.de</a>
          </p>
        </div>
      </div>
      <Footer text='Home' link='/' />
    </div>
  );
}