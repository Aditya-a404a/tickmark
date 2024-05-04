"use client";
import React from 'react';
import Image from 'next/image';
import logo from '/public/logo.png';
import { useUser,withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import TodoList from './components/todolist';

export default withPageAuthRequired(function page() {

    const { user,isLoading } = useUser();
    const [value , setValue] = React.useState("");
    const [tasks, setTasks] = React.useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setValue(value);
        console.log(value)
        

        setTasks([...tasks,{
            id:tasks.length,
            task:value , 
            iscompleted:false,
        }]);
        console.log(tasks)
    }



    return (

  <div class="min-h-full">
  <nav class="bg-gray-100">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <Image class="h-8 w-8" src={logo} alt="tick mark">
            </Image>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <a href="/dashboard" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>   
              <a href="/" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
            </div>

          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            

           
            <div class="ml-10 flex  space-x-4 items-center ">
                <a href="/api/auth/logout" class="bg-gray-900 text-white rounded-md px-3 py-2 m-3text-sm font-medium" aria-current="page">Log out</a>
              <a href="/api/auth/me">
                
                  
                <img class="h-8 w-8 rounded-full" src={user.picture} alt="">
                </img>
                
              </a>

              
              
            </div>
          </div>
        </div>
        
      </div>
    </div>

    
    
  </nav>

  <header class=" bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
    </div>
    <div>
    <a href="/ai" class="bg-indigo-900 text-white rounded-md m-4 px-3 py-2 text-sm font-medium" aria-current="page">Nothing in mind TO-DO ask AI </a>

    </div>

    
    
  </header>
  <main>
    <TodoList/>
    
  </main>
</div>
    )
})

