
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDownToLine, CheckCircle } from 'lucide-react';
import ProductReel from '@/components/ProductReel';

const perks = [
  {
    title: 'Quality Projects',
    Icon: ArrowDownToLine,
    description: 'Every project on our platform is verified by our team to ensure our highest quality standards.',
  },
  {
    title: 'Secure Payments',
    Icon: CheckCircle,
    description: 'We use industry-leading payment providers to ensure your financial data is secure.',
  },
  {
    title: '24/7 Support',
    Icon: CheckCircle,
    description: 'Our team is available around the clock to help you with any questions or issues you may have.',
  },
]
const HomePage = () => {
  return (
    <>
    <MaxWidthWrapper> {/* Hero Section */}
    <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
      <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>Your one-stop marketplace for{' '} 
        <span className='text-blue-600'>awesome projects</span>.</h1>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>Welcome to DevHubs. Every project on our platform is verified by our team to ensure our highest quality standards.</p>
        <div className='flex flex-col sm:flex-row gap-4 mt-6'>
          <Link href='/products' className={buttonVariants()}>Browse Trending Projects</Link>
          <Button variant='ghost'>Our quality promise &rarr;</Button>
        </div>      
    </div>

    {/* TODO: List of Projects */}
    <ProductReel
          query={{ sort: 'desc', limit: 4 }}
          href='/products?sort=recent'
          title='Brand new'
        />

    </MaxWidthWrapper>

    <section className='border-t border-gray-200 bg-gray-50'>
    <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.title}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.title}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
    </section>
    </>
  );
};

export default HomePage;
