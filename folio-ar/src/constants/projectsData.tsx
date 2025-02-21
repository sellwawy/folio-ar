/* eslint-disable react/jsx-key */
import React from 'react'
import project_1 from '@/../public/images/project-1.jpg'
import project_2 from '@/../public/images/project-2.jpg'
import project_3 from '@/../public/images/project-3.jpg'
import { FaBehance, FaGlobe, FaGithub } from 'react-icons/fa6'

export const PROJECTS_DATA = [
   {
      imageSrc: project_1,
      title: 'تطبيق تواصل اجتماعي',
      description:
         'لوريم إيبسوم (Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.',
      previewIcons: [<FaGlobe className="" />, <FaBehance />],
   },
   {
      imageSrc: project_2,
      title: 'موقع تجاري',
      description:
         'لوريم إيبسوم (Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.',
      previewIcons: [<FaGlobe />, <FaGithub />],
   },
   {
      imageSrc: project_3,
      title: 'موقع شخصي',
      description: 'لوريم إيبسوم (Lorem Ipsum) هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل ',
      previewIcons: [<FaGlobe />, <FaGithub />],
   },
]
