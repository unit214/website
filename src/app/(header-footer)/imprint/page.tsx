import NextLink from '@/components/NextLink'

import { contactEmail } from '@/constant/contact'

export default function ImprintPage() {
  return (
    <div className='flex w-full justify-center'>
      <div className='flex max-w-[500px] flex-col items-center gap-10 px-10 font-light'>
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
          <h2>Kontakt</h2>
          <p className='text-center'>
            Telefon: +49 (0)89 31908366
            <br />
            E-Mail: {contactEmail}
          </p>
        </div>

        <div className='flex flex-col items-center gap-5'>
          <h2>Umsatzsteuer-ID</h2>
          <p className='text-center'>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            DE350480347
          </p>
        </div>

        <div className='flex flex-col items-center gap-5'>
          <h2 lang='de' className='hyphens-auto'>
            EU-Streitschlichtung
          </h2>
          <p className='text-center'>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{' '}
            <NextLink href='https://ec.europa.eu/consumers/odr/' isExternalLink>
              https://ec.europa.eu/consumers/odr/
            </NextLink>
            .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </div>
        <div className='flex flex-col items-center gap-5'>
          <h2 lang='de' className='hyphens-auto text-center'>
            Verbraucherstreitbeilegung /{' '}
            <br className='hidden lg:inline-flex' /> Universalschlichtungsstelle
          </h2>
          <p className='text-center'>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
          <p className='text-center'>
            Quelle:{' '}
            <NextLink href='https://www.e-recht24.de' isExternalLink>
              e-recht24.de
            </NextLink>
          </p>
        </div>
      </div>
    </div>
  )
}
