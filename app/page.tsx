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


import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Card,
  CardContent,
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
import { FaGithub, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
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
    { name: "Inventory Management System (Multi-Warehouse)", description: "System developed to optimize spare parts management across multiple warehouses, reducing stock discrepancies and improving tracking of supplies", time: "2 months", tech: "ASP.NET Core Web API, React, SQL Server, Rechart", features: [
                    "Multi-warehouse inventory tracking",
                    "Real-time stock and sales reports",
                    "Role-based authentication & permissions",
                    "Dashboard with interactive charts"
                ], images: [
                  FabPhoto, FabPhoto, FabPhoto, FabPhoto
                ], githubLink: "https://github.com/Fab0705/ManagementInventorySystemV1.git"},
    { name: "E-Commerce Platform", description: "A scalable e-commerce platform with integrated payment gateways, product management, and user authentication.", time: "3 months", tech: "Next.js, Node.js, MongoDB, Stripe API", features: [
                    "Product catalog with search and filtering",
                    "Shopping cart and wishlist functionality",
                    "Secure payment processing with Stripe",
                    "Order history and tracking"
                ], images: [
                  FabPhoto, FabPhoto, FabPhoto, FabPhoto
                ], githubLink: "https://github.com/Fab0705/ManagementInventorySystemV1.git" },
    { name: "CRM System", description: "Custom CRM solution to manage customer relationships, track sales, and automate marketing campaigns.", time: "4 months", tech: "React, NestJS, PostgreSQL, SendGrid API", features: [
                    "Product catalog with search and filtering",
                    "Shopping cart and wishlist functionality",
                    "Secure payment processing with Stripe",
                    "Order history and tracking"
                ], images: [
                  FabPhoto, FabPhoto, FabPhoto, FabPhoto
                ], githubLink: "https://github.com/Fab0705/ManagementInventorySystemV1.git" },
    { name: "Project Management Tool", description: "A web-based project management tool with task tracking, team collaboration, and reporting features.", time: "3 months", tech: "Angular, ASP.NET Core, MySQL", features: [
                    "Product catalog with search and filtering",
                    "Shopping cart and wishlist functionality",
                    "Secure payment processing with Stripe",
                    "Order history and tracking"
                ], images: [
                  FabPhoto, FabPhoto, FabPhoto, FabPhoto
                ], githubLink: "https://github.com/Fab0705/ManagementInventorySystemV1.git" }
  ];

  return (
    <div className="font-sans max-w-[1320px] mx-auto">
      <main className="flex flex-col gap-[32px] items-center sm:items-start w-full">
        
        <section id="home" className="w-full py-20 dark:bg-gradient-to-b transition-colors duration-300">
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6">
            
            <div className="flex flex-col gap-6 max-w-xl">
              <h1 className="
                text-4xl md:text-5xl font-extrabold tracking-tight 
                text-neutral-900 dark:text-white
              ">
                Hi! I'm <span className="text-violet-700 dark:text-violet-400">Fabian Cristobal</span>
              </h1>

              <div className="relative pl-4">
                <span className="
                  absolute top-0 left-0 block w-[4px] h-full rounded-sm animate-pulse 
                  bg-gradient-to-b from-violet-500 to-purple-600
                "></span>
                <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  A passionate full-stack developer, building powerful and dynamic web applications 
                  that streamline operations and drive growth.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-4">
                <a href="#projects">
                  <Button 
                    size="lg" 
                    className="
                      bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white 
                      rounded-full shadow-lg transition-all duration-300
                    "
                  >
                    View My Projects
                  </Button>
                </a>
              </div>
            </div>

            {/* Imagen */}
            <div className="flex justify-center w-full md:w-auto">
              <Image 
                src={FabPhoto} 
                alt="Fabian Cristobal" 
                className="
                  rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-2xl 
                  ring-4 ring-violet-300 dark:ring-violet-600
                "
              />
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
        <section id="services" className="w-full flex flex-col mt-20 px-6">
          <h3 className="text-4xl md:text-5xl font-extrabold text-center text-neutral-900 dark:text-neutral-300">
            Designing solutions{" "}
            <span className="text-violet-700 dark:text-violet-400">
              customized <br /> to meet your requirements
            </span>
          </h3>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card className="w-full 
                bg-white border border-violet-200 rounded-3xl 
                text-center shadow-lg hover:shadow-violet-300/30 hover:-translate-y-2 
                dark:bg-[#24163D] dark:border-violet-700 dark:hover:shadow-violet-700/30 
                transition-all duration-300">
              <CardContent className="flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-violet-500/20 mb-5">
                  <MdWeb className="text-violet-600 dark:text-violet-300 text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">
                  Web App Development
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Crafting visually appealing and user-friendly interfaces using{" "}
                  <span className="text-violet-600 dark:text-violet-300">HTML</span>,{" "}
                  <span className="text-violet-600 dark:text-violet-300">CSS</span>,{" "}
                  <span className="text-violet-600 dark:text-violet-300">JavaScript</span> and modern frameworks like React.
                </p>
              </CardContent>
            </Card>

            <Card className="w-full 
                bg-white border border-violet-200 rounded-3xl 
                text-center shadow-lg hover:shadow-violet-300/30 hover:-translate-y-2 
                dark:bg-[#24163D] dark:border-violet-700 dark:hover:shadow-violet-700/30 
                transition-all duration-300">
              <CardContent className="flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-violet-500/20 mb-5">
                  <BsDatabase className="text-violet-600 dark:text-violet-300 text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">Database Management</h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Designing and managing databases with SQL technologies such as{" "}
                  <span className="text-violet-600 dark:text-violet-300">Microsoft SQL Server</span>,{" "}
                  <span className="text-violet-600 dark:text-violet-300">MySQL</span>,{" "}
                  <span className="text-violet-600 dark:text-violet-300">PostgreSQL</span> and{" "}
                  <span className="text-violet-600 dark:text-violet-300">Oracle</span>.
                </p>
              </CardContent>
            </Card>

            <Card className="w-full 
                bg-white border border-violet-200 rounded-3xl 
                text-center shadow-lg hover:shadow-violet-300/30 hover:-translate-y-2 
                dark:bg-[#24163D] dark:border-violet-700 dark:hover:shadow-violet-700/30 
                transition-all duration-300">
              <CardContent className="flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-violet-500/20 mb-5">
                  <RiCloudLine className="text-violet-600 dark:text-violet-300 text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">API Development</h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Creating and integrating{" "}
                  <span className="text-violet-600 dark:text-violet-300">RESTful APIs</span> to enable smooth communication between front-end and back-end systems.
                </p>
              </CardContent>
            </Card>

            <Card className="w-full 
                bg-white border border-violet-200 rounded-3xl 
                text-center shadow-lg hover:shadow-violet-300/30 hover:-translate-y-2 
                dark:bg-[#24163D] dark:border-violet-700 dark:hover:shadow-violet-700/30 
                transition-all duration-300">
              <CardContent className="flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-violet-500/20 mb-5">
                  <MdBusinessCenter className="text-violet-600 dark:text-violet-300 text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">Business Software Solutions</h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Development of{" "}
                  <span className="text-violet-600 dark:text-violet-300">CRM, ERP, and custom systems</span> to automate processes, improve productivity, and save costs in companies.
                </p>
              </CardContent>
            </Card>

            <Card className="w-full 
                bg-white border border-violet-200 rounded-3xl 
                text-center shadow-lg hover:shadow-violet-300/30 hover:-translate-y-2 
                dark:bg-[#24163D] dark:border-violet-700 dark:hover:shadow-violet-700/30 
                transition-all duration-300">
              <CardContent className="flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-violet-500/20 mb-5">
                  <MdOutlineLocalGroceryStore className="text-violet-600 dark:text-violet-300 text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">E-Commerce Solutions</h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Developing scalable and secure payment solutions for{" "}
                  <span className="text-violet-600 dark:text-violet-300">e-commerce platforms</span> tailored to your business needs.
                </p>
              </CardContent>
            </Card>

            <Card className="w-full 
                bg-white border border-violet-200 rounded-3xl 
                text-center shadow-lg hover:shadow-violet-300/30 hover:-translate-y-2 
                dark:bg-[#24163D] dark:border-violet-700 dark:hover:shadow-violet-700/30 
                transition-all duration-300">
              <CardContent className="flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-violet-500/20 mb-5">
                  <TbAutomation className="text-violet-600 dark:text-violet-300 text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">System Integration & Automation</h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Connecting different platforms and services (external{" "}
                  <span className="text-violet-600 dark:text-violet-300">APIs</span>,{" "}
                  <span className="text-violet-600 dark:text-violet-300">payment gateways</span>,{" "}
                  <span className="text-violet-600 dark:text-violet-300">logistics</span>,{" "}
                  <span className="text-violet-600 dark:text-violet-300">marketing automation</span>) to centralize business operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section id="projects" className="w-full flex flex-col mt-20 px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-neutral-900 dark:text-white bg-clip-text mb-12">
            My Projects
          </h1>

          <CarouselDApi>
            {projects.map((proj, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden rounded-2xl bg-gradient-to-b bg-white border border-violet-200 dark:bg-[#24163D] dark:border-violet-700 transition-all duration-300">
                  <CardContent className="p-10">
                    <div className="flex flex-col md:flex-row gap-10 items-stretch">

                      {/* Carrusel de imágenes */}
                      <Carousel opts={{ loop: true }} className="w-full md:w-1/2 max-w-md mx-auto">
                        <CarouselContent>
                          {proj.images.map((image, imageIndex) => (
                            <CarouselItem key={imageIndex}>
                              <div className="p-2">
                                <Card className="bg-neutral-900 rounded-xl border border-gray-700/30 shadow-md hover:shadow-gray-400/10 transition">
                                  <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <Image src={image} alt={"Image"} className="rounded-md object-cover" />
                                  </CardContent>
                                </Card>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="bg-gray-700/30 hover:bg-gray-700/50 text-white rounded-full" />
                        <CarouselNext className="bg-gray-700/30 hover:bg-gray-700/50 text-white rounded-full" />
                      </Carousel>

                      {/* Info del proyecto */}
                      <div className="flex flex-col justify-between md:w-1/2">
                        <div className="flex flex-col gap-4">
                          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                            {proj.name}
                          </h1>
                          <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                            {proj.description}
                          </p>

                          <ul className="space-y-3 text-sm">
                            <li className="border-b border-gray-700/30 pb-2 flex justify-between">
                              <span className="text-neutral-700 dark:text-neutral-300">Completion Time</span>
                              <span className="text-violet-600 dark:text-violet-300">{proj.time}</span>
                            </li>
                            <li className="border-b border-gray-700/30 pb-2 flex justify-between">
                              <span className="text-neutral-700 dark:text-neutral-300">Technologies</span>
                              <span className="text-violet-600 dark:text-violet-300">
                                {proj.tech}
                              </span>
                            </li>
                            <li className="border-b border-gray-700/30 pb-2">
                              <span className="font-medium block mb-2 text-violet-600 dark:text-violet-300">Key Features:</span>
                              <ul className="list-disc list-inside pl-2 text-neutral-700 dark:text-neutral-300">
                                {proj.features.map((feature, featureIndex) => (
                                  <li key={featureIndex}>{feature}</li>
                                ))}
                              </ul>
                            </li>
                          </ul>
                        </div>

                        {/* Botones */}
                        <div className="flex flex-wrap gap-4 pt-6">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white shadow-md transition-all duration-300"
                              >
                                <GoArrowUpRight />
                                <span>View Demo</span>
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-3xl bg-neutral-900 text-gray-200">
                              <DialogHeader>
                                <DialogTitle className="text-violet-300">{proj.name} - Demo</DialogTitle>
                              </DialogHeader>
                              <span>VIDEO</span>
                            </DialogContent>
                          </Dialog>

                          <a
                            href={proj.githubLink}
                            target="_blank"
                            className="flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700/20 transition-all duration-300"
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
            ))}
          </CarouselDApi>
        </section>
        <section id="contact" className="w-full flex flex-col mt-20 px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-neutral-900 dark:text-white tracking-tight">
            Let’s <span className="text-violet-700 dark:text-violet-400">Connect!</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-12 w-full">
            {/* Form */}
            <div className="flex-1 p-8 transition-all duration-300">
              <ContactForm />
            </div>

            {/* Contact Cards */}
            <div className="flex-1 flex flex-col justify-center gap-6">
              {/* Phone */}
              <a
                href="tel:+51997578610"
                className="group flex items-center gap-5 p-5 rounded-2xl bg-violet-950/30 border border-violet-800/30 hover:bg-violet-950/20 hover:shadow-violet-500/20 transition-all duration-300"
              >
                <ContactCard icon={FaPhoneAlt} />
                <div className="flex flex-col">
                  <span className="text-violet-700 dark:text-violet-300 text-sm font-medium dark:group-hover:text-violet-200 group-hover:text-violet-600">
                    Phone Number
                  </span>
                  <h6 className="text-white font-semibold text-base mt-1">
                    +51-997-578-610
                  </h6>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:f.cristobal.n0702@gmail.com"
                className="group flex items-center gap-5 p-5 rounded-2xl bg-violet-950/30 border border-violet-800/30 hover:bg-violet-950/20 hover:shadow-violet-500/20 transition-all duration-300"
              >
                <ContactCard icon={MdEmail} />
                <div className="flex flex-col">
                  <span className="text-violet-700 dark:text-violet-300 text-sm font-medium dark:group-hover:text-violet-200 group-hover:text-violet-600">
                    Email
                  </span>
                  <h6 className="text-white font-semibold text-base mt-1">
                    f.cristobal.n0702@gmail.com
                  </h6>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/fabiancristobal/"
                target="_blank"
                className="group flex items-center gap-5 p-5 rounded-2xl bg-violet-950/30 border border-violet-800/30 hover:bg-violet-950/20 hover:shadow-violet-500/20 transition-all duration-300"
              >
                <ContactCard icon={FaLinkedin} />
                <div className="flex flex-col">
                  <span className="text-violet-700 dark:text-violet-300 text-sm font-medium dark:group-hover:text-violet-200 group-hover:text-violet-600">
                    LinkedIn
                  </span>
                  <h6 className="text-white font-semibold text-base mt-1">
                    Fabian Cristobal
                  </h6>
                </div>
              </a>

              {/* Fiverr */}
              <a
                href="https://www.fiverr.com/fab_art16?public_mode=true"
                target="_blank"
                className="group flex items-center gap-5 p-5 rounded-2xl bg-violet-950/30 border border-violet-800/30 hover:bg-violet-950/20 hover:shadow-violet-500/20 transition-all duration-300"
              >
                <ContactCard image={FiverrLogo} />
                <div className="flex flex-col">
                  <span className="text-violet-700 dark:text-violet-300 text-sm font-medium dark:group-hover:text-violet-200 group-hover:text-violet-600">
                    Fiverr
                  </span>
                  <h6 className="text-white font-semibold text-base mt-1">
                    Fabian C
                  </h6>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
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
          {/* <a
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
          </a> */}
          <a
            href="https://linkedin.com/in/fabiancristobal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <Image src={FiverrLogo} alt="Fiverr" className="size-6 text-gray-600 fill-current"/>
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
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-purple-600 rounded-full shadow-lg hover:scale-110 transition p-3">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
