"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TechStack() {
  return (
    <section id="tech" className="mt-32 md:mt-40">
      <h2 className="text-3xl font-bold text-neon">Tech Stacks</h2>
      <p className="text-slate-400 mt-2 mb-10">
        Tools & technologies I use every day.
      </p>

      {/* --- SKILLICONS GRID --- */}
      <div className="rounded-3xl neon-border glass-hover p-8 flex justify-center">
        <img
          src="https://skillicons.dev/icons?i=react,next,nodejs,express,tailwind,mongodb,mysql,postgres,redis,git,github,docker,cloudflare,vscode,cpp,java,python&theme=light"
          alt="skills wall"
          className="w-full max-w-4xl object-contain"
        />
      </div>

      {/* --- BADGE SKILLS SECTION --- */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="rounded-2xl neon-border glass-hover p-6 flex justify-center">
          <img
            src="https://img.shields.io/badge/React_/_Next.js-90%25-0ea5e9?style=for-the-badge&logo=react&logoColor=white"
            alt="React badge"
          />
        </div>

        <div className="rounded-2xl neon-border glass-hover p-6 flex justify-center">
          <img
            src="https://img.shields.io/badge/Tailwind_/_CSS-85%25-a855f7?style=for-the-badge&logo=tailwindcss&logoColor=white"
            alt="Tailwind badge"
          />
        </div>

        <div className="rounded-2xl neon-border glass-hover p-6 flex justify-center">
          <img
            src="https://img.shields.io/badge/Node.js_/_Express-88%25-f43f5e?style=for-the-badge&logo=node.js&logoColor=white"
            alt="Node badge"
          />
        </div>

        <div className="rounded-2xl neon-border glass-hover p-6 flex justify-center">
          <img
            src="https://img.shields.io/badge/Auth_/_JWT-85%25-14b8a6?style=for-the-badge&logo=jsonwebtokens&logoColor=white"
            alt="JWT badge"
          />
        </div>

        <div className="rounded-2xl neon-border glass-hover p-6 flex justify-center">
          <img
            src="https://img.shields.io/badge/Databases_(MongoDB,_SQL)-80%25-fbbf24?style=for-the-badge&logo=mongodb&logoColor=white"
            alt="DB badge"
          />
        </div>

        <div className="rounded-2xl neon-border glass-hover p-6 flex justify-center">
          <img
            src="https://img.shields.io/badge/Redis_/_Caching-70%25-10b981?style=for-the-badge&logo=redis&logoColor=white"
            alt="Redis badge"
          />
        </div>

        <div className="rounded-2xl neon-border glass-hover p-6 flex justify-center">
          <img
            src="https://img.shields.io/badge/System_Design-65%25-ef4444?style=for-the-badge&logo=azurearchitecture&logoColor=white"
            alt="System Design badge"
          />
        </div>

        <div className="rounded-2xl neon-border glass-hover p-6 flex justify-center">
          <img
            src="https://img.shields.io/badge/DSA_/_Algorithms-78%25-6366f1?style=for-the-badge&logo=leetcode&logoColor=white"
            alt="DSA badge"
          />
        </div>

      </div>
    </section>
  );
}
