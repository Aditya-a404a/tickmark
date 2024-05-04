"use client";

import React from 'react';
import Image from 'next/image';
import logo from '/public/logo.png';
import { useUser } from '@auth0/nextjs-auth0/client';
export default function Navbar() {
    // this is the navbar component
    // using auth0  user hook to get the user details
    // if user is logged in then show log out button
    // if user is not logged in then show log in button
    // you need to login in order to access the dashboard

    const { user,isLoading } = useUser();
  return (
    <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only"></span>
          <Image src={logo} alt="logo" width={50} height={50} />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a href="/" class="text-sm font-semibold leading-6 text-gray-900">Home</a>
        <a href="/dashboard" class="text-sm font-semibold leading-6 text-gray-900">Dashboard</a>
        <a href="/about" class="text-sm font-semibold leading-6 text-gray-900">About</a>
        <a href="/contact" class="text-sm font-semibold leading-6 text-gray-900">Contact</a>  
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        {user ? (
          <a href="/api/auth/logout" class="text-sm font-semibold leading-6 text-gray-900">Log out <span aria-hidden="true">&rarr;</span></a>
        ) : (
          <a href="/api/auth/login" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
        )}
      </div>
    </nav>
    
    
  </header>
  
      
  );
}