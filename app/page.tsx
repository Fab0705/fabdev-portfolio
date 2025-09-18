"use client";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { MdOutlineFileDownload } from "react-icons/md";

import JavaScript from "@/public/TechIcons/Unofficial_JavaScript_logo_2.svg";
import TypeScript from "@/public/TechIcons/Typescript_logo_2020.svg";
import NextJs from "@/public/TechIcons/nextjs-icon-svgrepo-com.svg";
import ReactLogo from "@/public/TechIcons/React-icon.svg";

import NetCore from "@/public/TechIcons/NET_Core_Logo.svg";
import NestJS from "@/public/TechIcons/NestJS.svg";
import NodeJS from "@/public/TechIcons/Node.js_logo.svg";
import SQL from "@/public/TechIcons/Sql_data_base_with_logo.svg";

import HTML from "@/public/TechIcons/HTML5_Badge.svg";
import CSS from "@/public/TechIcons/CSS3_logo.svg";
import TailwindCSS from "@/public/TechIcons/Tailwind_CSS_Logo.svg";
import Bootstrap from "@/public/TechIcons/bootstrap-4.svg";

import FiverrLogo from "@/public/TechIcons/fiverr-icon.svg";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import { MdWeb, MdBusinessCenter, MdOutlineLocalGroceryStore, MdEmail  } from "react-icons/md";
import { BsDatabase } from "react-icons/bs";
import { RiCloudLine, RiCodeSSlashLine } from "react-icons/ri";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub, FaPhoneAlt, FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiX } from "react-icons/si"
import { TbAutomation } from "react-icons/tb";
import { HiOutlineCode } from "react-icons/hi";
import useAutoScroller from "@/hooks/useAutoScroller";
import IconTech from "@/components/IconTech";
import FabPhoto from "@/public/FabArt_newprofile.jpg";
import CarouselDApi from "@/components/CarouselDApi";
import { ContactForm } from "@/components/ContactForm";
import ContactCard from "@/components/ContactCard";




export default function Home() {
  useAutoScroller();

  const firstRowTech = [
    { icon: NextJs , name: "Next.js" },
    { icon: ReactLogo , name: "React" },
    { icon: JavaScript , name: "JavaScript" },
    { icon: TypeScript , name: "TypeScript" },
  ]

  const secondRowTech = [
    { icon: HTML , name: "HTML" },
    { icon: CSS , name: "CSS" },
    { icon: TailwindCSS , name: "Tailwind CSS" },
    { icon: Bootstrap , name: "Bootstrap" },
  ]

  const thirdRowTech = [
    { icon: NetCore , name: "ASP.NET Core" },
    { icon: NestJS , name: "NestJS" },
    { icon: NodeJS , name: "Node.js" },
    { icon: SQL , name: "Database" },
  ]

  const projects = [
    { name: "Inventory Management System", description: "System developed to optimize spare parts management across multiple warehouses, reducing stock discrepancies and improving tracking of supplies", time: "2 months", tech: "ASP.NET Core Web API, React, SQL Server, Rechart" },
    { name: "E-Commerce Platform", description: "A scalable e-commerce platform with integrated payment gateways, product management, and user authentication.", time: "3 months", tech: "Next.js, Node.js, MongoDB, Stripe API" },
    { name: "CRM System", description: "Custom CRM solution to manage customer relationships, track sales, and automate marketing campaigns.", time: "4 months", tech: "React, NestJS, PostgreSQL, SendGrid API" },
    { name: "Project Management Tool", description: "A web-based project management tool with task tracking, team collaboration, and reporting features.", time: "3 months", tech: "Angular, ASP.NET Core, MySQL" }
  ];

  return (
    <div className="font-sans max-w-[1320px] mx-auto">
      <main className="flex flex-col gap-[32px] items-center sm:items-start w-full">
        <ModeToggle />
        <section id="home">
          <div className="flex flex-col gap-10">
            <h1 className="text-3xl">Hi! I'm <span className="text-red-400">Fabian Cristobal</span></h1>
            <div className="mt-4">
              <div className="relative">
                <p className="text-lg text-muted-foreground pl-3">
                  A passionate full-stack developer, building powerful and dynamic web applications that streamline operations and drive growth.
                </p>
                <span className="absolute top-0.5 block bg-amber-400 w-[4px] h-full rounded-sm"></span>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-10">
         <div className="scroller" data-direction="left" data-speed="fast">
            <ul className="tag-list scroller__inner">
              {firstRowTech.map((tech, index) => (
                <li key={tech.name}> 
                  <IconTech icon={tech.icon} name={tech.name} />
                </li>
              ))}
            </ul>
          </div>
          <div className="scroller" data-direction="right" data-speed="slow">
            <ul className="tag-list scroller__inner">
                {secondRowTech.map((tech, index) => (
                  <li key={tech.name}> 
                    <IconTech icon={tech.icon} name={tech.name} />
                  </li>
                ))}
              </ul>
          </div>
          <div className="scroller" data-direction="left" data-speed="slow">
            <ul className="tag-list scroller__inner">
                {thirdRowTech.map((tech, index) => (
                  <li key={tech.name}> 
                    <IconTech icon={tech.icon} name={tech.name} />
                  </li>
                ))}
              </ul>
          </div>
          
        </div>
        <section id="services" className="w-full flex flex-col mt-10">
          <h3 className='text-3xl text-white text-center'>
            Designing solutions <span className="text-[#8f8f92]">customized <br /> to meet your requeriments</span>
          </h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-6">
            <Card className="w-full info-card">
              <CardContent>
                <MdWeb className='icon-info-card' />
                <h2 className="text-xl mb-2">Web App Development</h2>
                <p className="text-muted-foreground">Crafting visually appealing and user-friendly interfaces using <span className='text-indigo-400'>HTML</span>, <span className='text-indigo-400'>CSS</span>, <span className='text-indigo-400'>JavaScript</span>, <span className='text-indigo-400'>TypeScript</span> and modern frameworks like React.</p>
              </CardContent>
            </Card>
            <Card className="w-full info-card">
              <CardContent>
                <BsDatabase className='icon-info-card' />
                <h2 className="text-xl mb-2">Database Management</h2>
                <p className="text-muted-foreground">Designing and managing databases wih SQL technologies such as <span className='text-indigo-400'>Microsoft SQL Server</span>, <span className='text-indigo-400'>MySQL</span>, <span className='text-indigo-400'>PostgreSQL</span> and <span className='text-indigo-400'>Oracle</span>.</p>
              </CardContent>
            </Card>
            <Card className="w-full info-card">
              <CardContent>
                <RiCloudLine className='icon-info-card' />
                <h2 className="text-xl mb-2">API Development</h2>
                <p className="text-muted-foreground">Creating and integrating <span className='text-indigo-400'>RESTful APIs</span> to enable smooth comunication between front-end and back-end systems.</p>
              </CardContent>
            </Card>
            <Card className="w-full info-card">
              <CardContent>
                <MdBusinessCenter className='icon-info-card' />
                <h2 className="text-xl mb-2">Business Software Solutions</h2>
                <p className="text-muted-foreground">Development of <span className='text-indigo-400'>CRM, ERP, and custom systems</span> to automate processes, improve productivity, and save costs in companies.</p>
              </CardContent>
            </Card>
            <Card className="w-full info-card">
              <CardContent>
                <MdOutlineLocalGroceryStore className='icon-info-card' />
                <h2 className="text-xl mb-2">E-Commerce Solutions</h2>
                <p className="text-muted-foreground">Developing scalable and secure payment solutions for <span className='text-indigo-400'>e-commerce platforms</span> tailored to your business needs.</p>
              </CardContent>
            </Card>
            <Card className="w-full info-card">
              <CardContent>
                <TbAutomation className='icon-info-card' />
                <h2 className="text-xl mb-2">System Integration & Automation</h2>
                <p className="text-muted-foreground">Connecting different platforms and services (external <span className='text-indigo-400'>APIs</span>, <span className='text-indigo-400'>payment gateways</span>, <span className='text-indigo-400'>logistics</span>, <span className='text-indigo-400'> marketing automation</span>) to centralize business operations.</p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section id="projects" className="w-full flex flex-col mt-10">
          <h1 className="text-3xl text-white text-center mb-6">My Projects</h1>
          <CarouselDApi>
            <CarouselItem>
              <Card className="overflow-hidden shadow-lg rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-10 items-streetch">
                    
                    <Carousel opts={{ loop: true }} className="w-full md:w-1/2 max-w-sm mx-auto">
                      <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <CarouselItem key={index}>
                            <div className="p-1">
                              <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                  <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                              </Card>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>

                    
                    <div className="flex flex-col justify-between md:w-1/2">
                      <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-bold tracking-tight">
                          Inventory Management System (Multi-Warehouse)
                        </h1>
                        <p className="text-muted-foreground text-sm">
                          System developed to optimize spare parts management across multiple warehouses, reducing stock discrepancies and improving tracking of supplies
                        </p>

                        <ul className="space-y-2 text-sm">
                          <li className="border-b pb-2 flex justify-between">
                            <span>Completion Time</span>
                            <span className="font-medium">2 months</span>
                          </li>
                          <li className="border-b pb-2 flex justify-between">
                            <span>Technologies</span>
                            <span className="font-medium">
                              ASP.NET Core Web API, React, SQL Server, Rechart
                            </span>
                          </li>
                          <li className="border-b pb-2">
                            <span className="font-medium block mb-2">Key Features:</span>
                            <ul className="list-disc list-inside pl-2 text-muted-foreground">
                              <li>Multi-warehouse inventory tracking</li>
                              <li>Real-time stock and sales reports</li>
                              <li>Role-based authentication & permissions</li>
                              <li>Dashboard with interactive charts</li>
                            </ul>
                          </li>
                        </ul>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <a
                          href="#"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
                        >
                          <GoArrowUpRight />
                          <span>View Demo</span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium hover:bg-accent transition"
                        >
                          <FaGithub />
                          <span>Source Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselDApi>
        </section>
        <section id="contact" className="w-full flex flex-col mt-10">
          <h1 className="text-3xl text-white mb-6">Let's Connect!</h1>
          {/* <div className="flex gap-10 w-full">
            <ContactForm />
            <h1>dada</h1>
          </div> */}
          <div className="flex flex-col md:flex-row gap-10 w-full">
            {/* FORMULARIO */}
            <div className="flex-1">
              <ContactForm />
            </div>

            {/* INFO DE CONTACTO */}
            <div className="flex-1 flex flex-col justify-center gap-5">
              <a href="tel:+51997578610" className="flex items-center gap-4 px-3">
                <ContactCard icon={FaPhoneAlt} />
                <div className="flex flex-col">
                  <span className="text-[#8f8f92] text-sm font-medium">Phone Number</span>
                  <h6 className="text-white font-semibold text-base mt-1">+51-997-578-610</h6>
                </div>
              </a>

              <a href="mailto:f.cristobal.n0702@gmail.com" className="flex items-center gap-4 px-3">
                <ContactCard icon={MdEmail} />
                <div className="flex flex-col">
                  <span className="text-[#8f8f92] text-sm font-medium">Email</span>
                  <h6 className="text-white font-semibold text-base mt-1">f.cristobal.n0702@gmail.com</h6>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/fabiancristobal/"
                target="_blank"
                className="flex items-center gap-4 px-3"
              >
                <ContactCard icon={FaLinkedin} />
                <div className="flex flex-col">
                  <span className="text-[#8f8f92] text-sm font-medium">LinkedIn</span>
                  <h6 className="text-white font-semibold text-base mt-1">Fabian Cristobal</h6>
                </div>
              </a>

              <a
                href="https://www.fiverr.com/s/EgNQKKD"
                target="_blank"
                className="flex items-center gap-4 px-3"
              >
                <ContactCard image={FiverrLogo} />
                <div className="flex flex-col">
                  <span className="text-[#8f8f92] text-sm font-medium">Fiverr - Principal Service</span>
                  <h6 className="text-white font-semibold text-base mt-1">Fabian C</h6>
                </div>
              </a>
            </div>
          </div>
          
        </section>
      </main>
      {/* <footer className="row-start-3 mt-10 w-full flex flex-col md:flex-row gap-6 md:gap-[24px] flex-wrap items-center justify-between border-t border-border py-6 px-4">
        
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Fabian Cristobal. All rights reserved.
        </span>

        
        <nav className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-primary transition">Home</a>
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>

        
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/fabiancristobal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            GitHub
          </a>
          <a
            href="mailto:f.cristobal.n0702@gmail.com"
            className="hover:text-primary transition"
          >
            Email
          </a>
        </div>
      </footer> */}
      <footer className="w-full border-t border-border mt-12 py-8 flex flex-col items-center gap-6">
        {/* Logo / Nombre */}
        <div className="flex items-center gap-2">
          <span className="text-primary text-4xl"><HiOutlineCode /></span>
          <h1 className="text-lg font-semibold">
            Fabian<span className="text-muted-foreground">.dev</span>
          </h1>
        </div>

        {/* Redes sociales */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <SiX />
          </a>
          <a
            href="https://linkedin.com/in/fabiancristobal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* Links de navegación */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a href="#home" className="hover:text-primary transition">
            About me
          </a>
          <a href="#services" className="hover:text-primary transition">
            Services
          </a>
          <a href="#projects" className="hover:text-primary transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary transition">
            Contact
          </a>
        </nav>
      </footer>
    </div>
  );
}
