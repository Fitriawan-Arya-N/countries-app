import React from "react";

export default function About() {

  return (
    <section id="about" class="pt-36">
      <div class="items-center">
        <div class="flex justify-end">
          <div class="maxw-full mx-auto px-4">
            <h1 class="font-bold text-blue-700 mb-1 text-2xl md:text-4xl text-center">About Us 🌎</h1>
            <h2 class="font-bold text-2xl mt-2 lg:text-xl text-center mt-5">What is Countries App?</h2>
            <p class="font-medium mb-10 leading-relaxed text-slate-400 text-center text-xl">
            Countries App is an application that contains 
            information about countries around the world. 
            Find your country information. 
            <span class="text-slate-900 font-bold"> Now!!</span></p>     
          </div>
        </div>
        </div>
        <div class="w-full self-end px-4">
            <div class="relative mt-10 lg:mt-9 lg:right-0">
              <img src="https://img.freepik.com/free-icon/employee_318-937962.jpg?size=338&ext=jpg&ga=GA1.2.1728848719.1667470981&semt=sph" alt=".."
              class="maxw-full mx-auto"/>
              <span class="absolute -bottom-0">

              </span>

            </div>
        </div>
    </section>
  );

}
