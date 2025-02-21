import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact, FaUserGraduate } from 'react-icons/fa6'

export const experiencesData = [
   {
      title: 'معسكر تخرج',
      location: 'مصر، القاهرة',
      description:
         ' لوريم إيبسوم (Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.',
      icon: <FaUserGraduate />,
      date: '2019',
   },
   {
      title: 'Front-End Developer',
      location: 'السعودية',
      description:
         'لوريم إيبسوم (Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.',
      icon: <CgWorkAlt />,
      date: '2019 - 2021',
   },
   {
      title: 'Full-Stack Developer',
      location: 'الإمارات',
      description:
         'لوريم إيبسوم (Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.',
      icon: <FaReact />,
      date: '2021 - present',
   },
]
