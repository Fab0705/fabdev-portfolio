"use client";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { MdOutlineFileDownload } from "react-icons/md";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import useAutoScroller from "@/hooks/useAutoScroller";

export default function Home() {
  useAutoScroller();
  return (
    <div className="font-sans max-w-[1300px] mx-auto">
      <main className="flex flex-col gap-[32px] items-center sm:items-start w-full">
        <ModeToggle />
        <section>
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
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>TS</li>
                <li>UI/UX</li>
                <li>Web</li>
                <li>Developer</li>
                <li>Stack</li>
              </ul>
          </div>
          <div className="scroller" data-direction="right" data-speed="slow">
            <ul className="tag-list scroller__inner">
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>TS</li>
                <li>UI/UX</li>
                <li>Web</li>
                <li>Developer</li>
                <li>Stack</li>
              </ul>
          </div>
          <div className="scroller" data-direction="left" data-speed="fast">
            <ul className="tag-list scroller__inner">
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>TS</li>
                <li>UI/UX</li>
                <li>Web</li>
                <li>Developer</li>
                <li>Stack</li>
              </ul>
          </div>
          
        </div>
          
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
