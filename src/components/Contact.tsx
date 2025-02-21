'use client'

import { cn } from '@/utils'
import SectionHeading from './ui/SectionHeading'
import { Button } from './ui/Button'

function Contact({}) {
   return (
      <section id="contact" className="py-spacing-12">
         <div className="wrapper">
            <div className="flex flex-col items-center justify-center">
               <SectionHeading className={cn()}>تواصل معي</SectionHeading>
               <p className="text-xl">
                  يمكنك التواصل معي مباشرة عبر{' '}
                  <a className="underline" href="mailto:example@gmail.com">
                     example@gmail.com
                  </a>{' '}
                  أو من خلال هذا النموذج.
               </p>
               <form
                  action={async (FormData) => {
                     alert([FormData.get('email'), FormData.get('message')])
                  }}
                  className="px- w-full max-w-[50rem] rounded-lg py-spacing-8">
                  <div className="md-up:flex mt-4">
                     {/* Email */}
                     <input
                        className="border-secondary w-full rounded-lg border-2 p-2 focus:outline-teal-500"
                        type="email"
                        name="email"
                        placeholder="البريد الإلكتروني"
                        required
                        autoComplete="email"
                        maxLength={50}
                     />
                  </div>
                  {/* Message */}
                  <textarea
                     rows={4}
                     placeholder="الرسالة"
                     required
                     maxLength={500}
                     name="message"
                     className="border-secondary mb-spacing-3 mt-spacing-7 w-full rounded-lg border-2 p-2 focus:outline-teal-500"
                  />
                  {/* Submit */}
                  <Button type="submit" className={'text-quinary'}>
                     إرسال
                  </Button>
               </form>
            </div>
         </div>
      </section>
   )
}

export default Contact
