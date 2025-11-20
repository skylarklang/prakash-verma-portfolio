import React from 'react'
import { Link } from 'react-router-dom'


const AllProjects = () => {

    const projects = [
        {
          id: 1,
          title: "e-commerce",
          description: "Ecommerce created with React JS and Tailwind CSS",
          technologies: "Javascript, React, Redux, Tailwind CSS",
          src: "/images/projectsImages/ecommerce.png",
          demo: "https://e-commerce-modern.netlify.app/",
          code: "https://github.com/TheVermaVD/Ecommerce-Website",
        },
        {
          id: 2,
          title: "To Do App",
          description:
            "To Do App Where we add our daily activities to do daily",
          technologies: "Javascript, HTML5, Tailwind CSS",
          src: "/images/projectsImages/TODO.png",
          demo: "https://todo-app-lists-daily.netlify.app/",
          code: "https://github.com/TheVermaVD/Realtime-Projects/tree/main/10.TO%20DO%20List",
        },
        {
          id: 3,
          title: "desktop-dashboard",
          description:
            "Temperature converter from Celcios to Faren",
          technologies: "Javascript, HTML5, Tailwind CSS",
          src: "/images/projectsImages/desktop.png",
          demo: "https://desktop-dashboard1.netlify.app/",
          code: "https://github.com/TheVermaVD/Realtime-Projects/tree/main/16.%20DashBoard",
        },
        {
          id: 4,
          title: "Temperature Converter",
          description:
            "Temperature converter from Celcios to Faren",
          technologies: "Javascript, HTML5, Tailwind CSS",
          src: "/images/projectsImages/Temp Converter.png",
          demo: "https://temperature-converter-degree.netlify.app/",
          code: "https://github.com/TheVermaVD/Realtime-Projects/tree/main/1.Temperature%20Converter",
        },
      
        {
          id: 5,
          title: "StopWatch",
          description:
            "StopWatch To Use At various places",
          technologies: "Javascript, HTML5, CSS3",
          src: "/images/projectsImages/StopWatch.png",
          demo: "https://stopwatch-realtime.netlify.app/",
          code: "https://github.com/TheVermaVD/Realtime-Projects/tree/main/7.Stopwatch",
        },
        {
          id: 6,
          title: "Calculator",
          description:
          "Find Rick and Morty's characters by dimension on this funny app.",
          technologies: "Javascript, React, Tailwind CSS",
          src: "/images/projectsImages/calculator.png",
          demo: "https://modern-calculator-fast.netlify.app/",
          code: "https://github.com/TheVermaVD/Realtime-Projects/tree/main/8.Calculator",
        },
        {
          id: 7,
          title: "Word and Character Counter",
          description:
            "An application to know the weather in your current location in degrees Celsius or degrees Fahrenheit. You can also search for the weather in other cities around the world.",
          technologies: "Javascript, React, Tailwind CSS",
          src: "/images/projectsImages/Word Character Counter.png",
          demo: "https://words-character-counter.netlify.app/",
          code: "https://github.com/TheVermaVD/Realtime-Projects/tree/main/2.Word%20And%20Character%20Counter",
        },
        {
          id: 8,
          title: "Form Validation",
          description:
            "An application to know the weather in your current location in degrees Celsius or degrees Fahrenheit. You can also search for the weather in other cities around the world.",
          technologies: "Javascript, React, Tailwind CSS",
          src: "/images/projectsImages/Form-validation.png",
          demo: "https://form-validation-inputs.netlify.app/",
          code: "https://github.com/TheVermaVD/Realtime-Projects/tree/main/5.Form%20Validation",
        },
        {
          id: 9,
          title: "Background Switcher",
          description:
            "An application to know the weather in your current location in degrees Celsius or degrees Fahrenheit. You can also search for the weather in other cities around the world.",
          technologies: "Javascript, React, Tailwind CSS",
          src: "/images/projectsImages/Background-switcher.png",
          demo: "https://background-switcher-mode.netlify.app/",
          code: "https://github.com/TheVermaVD/Realtime-Projects/tree/main/3.Background%20Changer",
        },
        {
          id: 10,
          title: "Sticky Navbar",
          description:
            "An application to know the weather in your current location in degrees Celsius or degrees Fahrenheit. You can also search for the weather in other cities around the world.",
          technologies: "Javascript, React, Tailwind CSS",
          src: "/images/projectsImages/Sticky-Navbar.png",
          demo: "https://sticky-navbar-modern.netlify.app/",
          code: "https://github.com/TheVermaVD/Realtime-Projects/tree/main/4.Sticky%20Menu%20Bar",
        },
        {
          id: 11,
          title: "Landind Page of any Website",
          description:
            "An application to know the weather in your current location in degrees Celsius or degrees Fahrenheit. You can also search for the weather in other cities around the world.",
          technologies: "Javascript, React, Tailwind CSS",
          src: "/images/projectsImages/LandingPage.png",
          demo: "https://landing-paggeee.netlify.app/",
          code: "https://github.com/TheVermaVD/Realtime-Projects/tree/main/17.LandingPage",
        },



      ];

    const handleClickDemo = (demoUrl) => {
        const newWindow = window.open(demoUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }

    const handleClickCode = (codeUrl) => {
        const newWindow = window.open(codeUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }
    

    return (
        <section name="Projects" className='relative w-full text-white md:min-h-screen mt-24 mb-10'>
        
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl'>Projects</h2>
                    <p className='py-6'>Check out my best web applications here.</p>
                </div>

                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {
                        projects.map(({ id, src, demo, code }) => (
                                <div key={id} className='shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto'>
                                    <img loading='lazy' src={src} alt="project card" className='rounded-md duration-200 hover:scale-105' />
                                    <div className='flex items-center justify-center'>
                                        <button onClick={() => handleClickDemo(demo)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Demo</button>
                                        <button onClick={() => handleClickCode(code)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Code</button>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex justify-center'>
                <Link to='/' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
                    <span className=''><i className='bx bx-home-heart mr-2'></i></span>
                    Go back
                </Link>
            </div>
        </section>
    )
}

export default AllProjects
