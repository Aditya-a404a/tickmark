import React from  'react'
import logo from '/public/logo.png';
import Image from 'next/image';
import myphoto from '/public/myphoto.png';
export default function about() {
     // this is the about section basic tailwind css is used 
    return (
    
        <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
  <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
  <div class="mx-auto max-w-2xl lg:max-w-4xl">
    <a href='/'>
    <Image class="mx-auto" src={logo}  alt="" width={50} height={50}>
    </Image>
    </a>
    
    <figure class="mt-10">
      <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
        <p>In the midst of juggling rigorous semester exams, I embarked on a mission to secure an internship that would complement my academic journey. Within the confines of a single day, amidst the hustle and bustle of exams, This assignment wasn't just about meeting deadlines; it was about seizing opportunities amidst challenges, showcasing resilience, and proving my ability to thrive under pressure. Through this experience, I've not only demonstrated my dedication to personal and professional growth but also my capacity to excel in demanding situations.</p>
      </blockquote>
      <figcaption class="mt-10">
        <Image class="mx-auto h-10 w-10 rounded-full" src={myphoto} alt="" >
        </Image>
        <div class="mt-4 flex items-center justify-center space-x-3 text-base">
          <div class="font-semibold text-gray-900">Aditya</div>
          <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <div class="text-gray-600"> Software Developer Intern </div>
          
        </div>
        <a  href="/" class=" font-semibold text-gray-900 ">Home </a>
      </figcaption>
    </figure>
  </div>
</section>
        
    )
}
