import Image from 'next/image'
import Link from 'next/link'
import personal_2 from '@/../public/images/personal-2.jpg'
import SectionHeading from '@/components/ui/SectionHeading'
import { buttonVariants } from '@/components/ui/Button'
import SocialMedia from '@/components/shared/SocialMedia'

function About() {
   return (
      <section id="about" className="py-spacing-12">
         <div className="wrapper">
            <SectionHeading className="text-center">من أنا</SectionHeading>
            <div className="flex">
               {/* Image */}
               <div className="hidden basis-[35%] overflow-hidden md:inline">
                  <Image
                     src={personal_2}
                     alt="John doe"
                     placeholder="blur"
                     className="h-full min-w-full rounded-s-xl object-cover"
                  />
               </div>
               <div className="flex flex-col justify-between gap-spacing-10 px-spacing-10 pb-spacing-9 md:flex-1 md:pt-spacing-9">
                  {/* About */}
                  <p>
                     <span className="text-xl font-semibold">مرحبا أنا محمد</span> لوريم إيبسوم (Lorem Ipsum)
                     هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور
                     النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة
                     مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع
                     شكلي لهذه الأحرف.
                  </p>
                  <ul className="flex  flex-wrap gap-x-spacing-11">
                     <li>
                        <ul className="space-y-spacing-1">
                           <li>
                              <strong className="pe-1.5">الإسم الأول:</strong>
                              محمد
                           </li>
                           <li>
                              <strong>الإسم الأخير: </strong>
                              علي
                           </li>
                           <li>
                              <strong>السن: </strong>
                              25 سنة
                           </li>
                        </ul>
                     </li>
                     <li>
                        <ul className="space-y-spacing-1">
                           <li>
                              <strong>الجنسية: </strong>
                              مصري
                           </li>
                           <li>
                              <strong>أقيم في: </strong>
                              القاهرة
                           </li>
                           <li>
                              <strong>اللغات: </strong>
                              English, Arabic
                           </li>
                        </ul>
                     </li>
                  </ul>
                  {/* Download CV */}
                  <Link
                     href="/"
                     className={buttonVariants({
                        className: 'mx-auto self-end',
                     })}>
                     تحميل CV
                  </Link>
                  {/* Social links */}
                  <SocialMedia />
               </div>
            </div>
         </div>
      </section>
   )
}
export default About
