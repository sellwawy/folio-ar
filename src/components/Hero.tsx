import Link from 'next/link'
import Image from 'next/image'
import personal_1 from '@/../public/images/personal-1.jpg'
import { buttonVariants } from './ui/Button'

function Hero() {
   return (
      // 3.75rem (Header height)
      <section className="wrapper bg-quinary flex min-h-[calc(100dvh-3.75rem)] flex-col items-center justify-center py-spacing-11">
         {/* Image */}
         <div className="flex flex-col items-center justify-center text-center">
            <Image
               src={personal_1}
               alt="John doe"
               placeholder="blur"
               priority
               quality={100}
               className="border-quinary max-w-[12rem] rounded-full border-4 object-cover shadow-lg"
            />
         </div>
         <div>
            <div className="my-spacing-8">
               {/* Title */}
               <h1 className="text-primary mb-spacing-2 text-center text-5xl font-bold">
                  Front-End Web Developer
               </h1>
               {/* Description */}
               <div className="font-norma text-primary max-w-[53ch] text-center text-xl">
                  <p className="font-bold">
                     مرحبا أنا محمد أنا متخصص في React and Next.js
                     <br />
                     أقوم ببناء واجهات المستخدم
                  </p>
               </div>
            </div>
            {/* Call to action */}
            <div className="flex flex-wrap justify-center gap-x-spacing-5 gap-y-spacing-4">
               <Link href="/#contact" className={buttonVariants()}>
                  تواصل معي
               </Link>
               <Link href="/#about" className={buttonVariants({ variant: 'secondary' })}>
                  من أنا
               </Link>
            </div>
         </div>
      </section>
   )
}

export default Hero
