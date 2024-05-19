import React from 'react'

const Welcome = () => {
  return (
    <section class="bg-white dark:bg-gray-900 mt-20 lg:mt-32">
      <div class="flex flex-col items-center justify-center py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Manage your task perfectly</h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">With the efficiency we offer, increase your tasks without having to worry about time. We offer the best quality in storing and managing your to-do list!</p>
          <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a href="/to-do" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-600 rounded-lg border border-blue-300 bg-gray-100 hover:bg-blue-500 hover:text-white duration-150 ">
                  Go to TO-DO page
              </a>  
          </div>

      </div>
  </section>
  )
}

export default Welcome