"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSpotify } from "react-icons/fa";
import { Code } from "lucide-react";
import { BookOpen } from "lucide-react";



import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Play,
  ChessKing,
  Heart,
  ExternalLink,
  Star,
} from "lucide-react";
import Cursor from "./components/Cursor";

/* ============================================
   Data: socials, projects, skills, tech stack
   ============================================ */

const SOCIALS = [
  { id: "gh", label: "GitHub", href: "https://github.com/heyitzmeaditya", Icon: Github },
  { id: "ln", label: "LinkedIn", href: "https://linkedin.com/in/heyitzmeaditya", Icon: Linkedin },
  { id: "lc", label: "LeetCode", href: "https://leetcode.com/u/aditya_100_", Icon: Code },
    { id: "gfg", label: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/profile/adityasaw407?from=explore", Icon: BookOpen },
  { id: "ig", label: "Instagram", href: "https://instagram.com/heyitzmeaditya", Icon: null },
  { id: "sp", label: "Spotify", href: "https://open.spotify.com/user/31pfcpmixec2kdktsthig5lwsm5y", Icon: null },
  { id: "dc", label: "Discord", href: "https://discord.com/users/heyitzmeaditya", Icon: null },
  { id: "mail", label: "Email", href: "mailto:adityasaw407@gmail.com", Icon: Mail },
];

const PROJECTS = [
  {
    id: "secure-notes",
    title: "Secure Notes App",
    subtitle: "MERN · JWT · Redis",
    description: "Encrypted notes system for private storage and sharing.",
    bullets: ["JWT authentication", "Redis caching", "End-to-end encryption"],
    repo: "https://github.com/heyitzmeaditya/NotesApp",
  },
  {
    id: "ecom-api",
    title: "E-Commerce Backend API",
    subtitle: "Node · Stripe · MongoDB",
    description: "Order lifecycle, payments and webhook-driven processing.",
    bullets: ["Stripe payments", "Webhooks & reconciliation", "Order validation"],
    repo: "https://github.com/heyitzmeaditya/heyitzmeaditya",
  },
  {
    id: "marketing-dashboard",
    title: "Marketing Dashboard",
    subtitle: "Tableau · Excel",
    description: "KPI dashboards & ETL pipelines for marketing insights.",
    bullets: ["ETL design", "KPI visualizations", "Automated reports"],
    repo: "https://github.com/heyitzmeaditya/Monday-Coffee-Expansion-SQL-Project",
  },
];
// ====================================================================
//       FLIP + TYPEWRITER + NEON GLOW FUN FACT (FINAL VERSION)
// ====================================================================

// ======================= FINAL WORKING FLIP + TYPEWRITER ========================= //

const FUN_FACTS = [
  "I can debug faster than I can explain recursion to my relatives.",
  "I name my commits like they’re diary entries.",
  "I write console.log() more than I write texts.",
  "I once fixed a bug by staring at it aggressively.",
  "My code works… until someone watches me run it.",
  "I add TODO comments I know I will never complete.",
  "I drink more coffee than my system requires RAM.",
  "I can explain Big O, but I can’t explain what I do to my family.",
  "80% of my coding time is Googling my own questions.",
  "Sometimes I test in production… accidentally.",
];

function NeonFlipFunFact() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [isFlipping, setIsFlipping] = useState(false);

  // TYPEWRITER
  const type = (text) => {
    let i = 0;
    setTyped("");

    const writer = () => {
      if (i <= text.length) {
        setTyped(text.slice(0, i));
        i++;
        setTimeout(writer, 40);
      }
    };

    writer();
  };

  // FLIP EVERY 3 SECONDS
  useEffect(() => {
    const id = setInterval(() => {
      setIsFlipping(true);

      setTimeout(() => {
        const next = (index + 1) % FUN_FACTS.length;
        setIndex(next);
        type(FUN_FACTS[next]);
        setIsFlipping(false);
      }, 450);
    }, 3000);

    type(FUN_FACTS[index]);

    return () => clearInterval(id);
  }, [index]);

  return (
    <div className="funfact-perspective">
      <div className={`funfact-card-flip ${isFlipping ? "do-flip" : ""}`}>
        <div className="funfact-side-front">
          <span className="funfact-text">{typed}</span>
        </div>
        <div className="funfact-side-back">
          <span className="funfact-text">{FUN_FACTS[(index + 1) % FUN_FACTS.length]}</span>
        </div>
      </div>
    </div>
  );
}


const SKILLS = [
  { name: "React / Next.js", level: 90 },
  { name: "Node.js / Express", level: 88 },
  { name: "Databases (MongoDB, Postgres)", level: 80 },
  { name: "Redis / Caching", level: 70 },
];

const TECH_STACK = [
  { name: "React", short: "React" },
  { name: "Next.js", short: "Next" },
  { name: "Node.js", short: "Node" },
  { name: "Express", short: "Express" },
  { name: "MongoDB", short: "Mongo" },
  { name: "Postgres", short: "Postgres" },
  { name: "Redis", short: "Redis" },
  { name: "Docker", short: "Docker" },
  { name: "AWS", short: "AWS" },
  { name: "Tailwind", short: "Tailwind" },
  { name: "Git", short: "Git" },
];

const POSITIVE_MESSAGES = [
  "You're growing every day — keep going, your future self will be proud.",
  "Small consistent wins lead to huge changes — you’re on the right path.",
  "Your work makes a positive difference; believe in the tiny progress you make.",
  "You are capable of more than you know. Today is another step forward.",
  "A kind day, a kind heart — you are doing better than you think.",
];

/* ==========================
   Typewriter hook
   ========================== */
function useTypewriter(words, speed = 70, pause = 1200) {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    if (!deleting) {
      const t = setTimeout(() => {
        setDisplay(current.slice(0, display.length + 1));
        if (display.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      }, speed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setDisplay(current.slice(0, display.length - 1));
        if (display.length - 1 === 0) {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }, Math.max(35, speed / 2));
      return () => clearTimeout(t);
    }
  }, [display, deleting, index, words]);

  return display;
}

/* ==========================
   Small UI components
   ========================== */

function IconLink({ href, title, Icon, children }) {
  return (
    <a
      href={href}
      title={title}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-full p-2 ring-1 ring-slate-700 glass-hover magnetic"
      aria-label={title}
    >
      {Icon ? <Icon className="h-5 w-5 text-slate-100" /> : children}
    </a>
  );
}

/* ==========================
   ProjectCard
   ========================== */
function ProjectCard({ p }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="perspective-1000"
    >
      <div
        className={`relative flip-card ${flipped ? "is-flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
        style={{ height: "320px" }}
      >
        {/* ===================== FRONT ===================== */}
        <div className="flip-card-front card-3d neon-border glass-hover rounded-2xl p-5 absolute inset-0 backface-hidden">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-50">{p.title}</h3>
              <div className="text-sm text-slate-400 mt-1">{p.subtitle}</div>
            </div>

            {p.repo && (
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="text-sky-300 inline-flex items-center gap-1 text-sm hover:underline"
              >
                Repo <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>

          <p className="mt-4 text-sm text-slate-300 h-[48px] overflow-hidden">
            {p.description}
          </p>

          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {p.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-400 mt-1" />
                {b}
              </li>
            ))}
          </ul>

          {/* Tech icon bar */}
          <div className="mt-5 pt-3 border-t border-white/10 flex flex-wrap gap-2">
            {[
              "react", "nextjs", "nodejs", "express", "mongodb", "mysql",
              "postgres", "redis", "git", "docker", "cloudflare", "vscode",
              "cpp", "java", "python"
            ].map((icon) => (
              <img
                key={icon}
                src={`https://skillicons.dev/icons?i=${icon}`}
                className="w-7 h-7 rounded-md"
                alt={icon}
              />
            ))}
          </div>
        </div>

        {/* ===================== BACK ===================== */}
        <div className="flip-card-back card-3d neon-border glass-hover rounded-2xl p-6 absolute inset-0 backface-hidden">
          <h4 className="text-lg font-semibold">{`Deep dive — ${p.title}`}</h4>
          <p className="mt-2 text-sm text-slate-300">
            Implementation details, architecture decisions, and what I learned.
          </p>

          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
              Observability: structured logs & traces
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
              CI/CD with tests and lint gating
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-rose-400" />
              Security-first input validation
            </li>
          </ul>

          <p className="mt-6 text-sm text-slate-400 italic">Click to flip back.</p>
        </div>
      </div>
    </motion.div>
  );
}


/* ==========================
   WumpusBlock (structured)
   ========================== */
function WumpusBlock({ src = "/gifs/wumpus-hero.gif", size = 220 }) {
  const style = { width: `${size}px`, height: `${size}px` };
  return (
    <div className="w-full flex justify-center mt-6">
      <motion.img
        src={src}
        alt="wumpus"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: [1, 1.03, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="object-contain rounded-2xl"
        style={style}
      />
    </div>
  );
}

/* ==========================
   VideoLoop component
   ========================== */
function VideoLoop() {
  return (
    <div className="relative w-full h-[360px] flex items-center justify-center overflow-visible group">
      <div className="absolute inset-0 mx-auto my-auto w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,200,255,0.28),rgba(0,0,0,0))] blur-[80px] opacity-70 group-hover:opacity-100 transition-all duration-700" />
      <img
        src="/gifs/tech.gif"
        alt="tech loop"
        className="relative z-10 w-[360px] h-[360px] object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />
    </div>
  );
}

/* ==========================
   PortfolioSnapshot component
   ========================== */
function PortfolioSnapshot() {
  return (
    <div className="rounded-2xl neon-border p-4 glass-hover">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-400">Portfolio Snapshot</div>
          <div className="mt-1 font-semibold">Aditya Saw — Backend · Full-Stack · Data Science</div>
        </div>
<div className="w-12 h-12 rounded-xl overflow-hidden">
  <img 
    src="/gifs/profile-sample.jpg"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg p-3 ring-glow bg-[#071018]/60">
          <div className="text-xs text-slate-400">LeetCode</div>
          <div className="text-xl font-semibold">300+</div>
        </div>
        <div className="rounded-lg p-3 ring-glow bg-[#071018]/60">
          <div className="text-xs text-slate-400">Projects</div>
          <div className="text-xl font-semibold">10+</div>
        </div>
        <div className="rounded-lg p-3 ring-glow bg-[#071018]/60">
          <div className="text-xs text-slate-400">Freelance</div>
          <div className="text-xl font-semibold">1</div>
        </div>
        <div className="rounded-lg p-3 ring-glow bg-[#071018]/60">
          <div className="text-xs text-slate-400">Chess</div>
          <div className="text-xl font-semibold">1950+</div>
        </div>
      </div>
    </div>
  );
}

/* ==========================
   TechStackBlock (skillicons + badges)
   ========================== */
function TechStackBlock() {
  return (
    <section id="tech-stack" className="mt-20 md:mt-28 mb-12">
      <h2 className="text-3xl font-bold text-neon mb-4">Tech Stacks</h2>
      <p className="text-slate-400 mb-6">Tools & technologies I use every day.</p>

      <div className="rounded-3xl neon-border glass-hover p-6 flex justify-center">
        <img
          src="https://skillicons.dev/icons?i=react,next,nodejs,express,tailwind,mongodb,mysql,postgres,redis,git,github,docker,cloudflare,vscode,cpp,java,python&theme=light"
          alt="skills wall"
          className="w-full max-w-4xl object-contain"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-2xl neon-border glass-hover p-6 flex justify-center">
          <img
            src="https://img.shields.io/badge/React_/_Next.js-90%25-0ea5e9?style=for-the-badge&logo=react&logoColor=white"
            alt="React Badge"
          />
        </div>

        <div className="rounded-2xl neon-border glass-hover p-6 flex justify-center">
          <img
            src="https://img.shields.io/badge/Tailwind_/_CSS-85%25-a855f7?style=for-the-badge&logo=tailwindcss&logoColor=white"
            alt="Tailwind Badge"
          />
        </div>

        <div className="rounded-2xl neon-border glass-hover p-6 flex justify-center">
          <img
            src="https://img.shields.io/badge/Node.js_/_Express-88%25-f43f5e?style=for-the-badge&logo=node.js&logoColor=white"
            alt="Node Badge"
          />
        </div>

        <div className="rounded-2xl neon-border glass-hover p-6 flex justify-center">
          <img
            src="https://img.shields.io/badge/Auth_/_JWT-85%25-14b8a6?style=for-the-badge&logo=jsonwebtokens&logoColor=white"
            alt="JWT Badge"
          />
        </div>

        <div className="rounded-2xl neon-border glass-hover p-6 flex justify-center">
          <img
            src="https://img.shields.io/badge/Databases_(MongoDB,_SQL)-80%25-fbbf24?style=for-the-badge&logo=mongodb&logoColor=white"
            alt="DB Badge"
          />
        </div>

        <div className="rounded-2xl neon-border glass-hover p-6 flex justify-center">
          <img
            src="https://img.shields.io/badge/Redis_/_Caching-70%25-10b981?style=for-the-badge&logo=redis&logoColor=white"
            alt="Redis Badge"
          />
        </div>

        <div className="rounded-2xl neon-border glass-hover p-6 flex justify-center">
          <img
            src="https://img.shields.io/badge/System_Design-65%25-ef4444?style=for-the-badge&logo=azurearchitecture&logoColor=white"
            alt="System Design Badge"
          />
        </div>

        <div className="rounded-2xl neon-border glass-hover p-6 flex justify-center">
          <img
            src="https://img.shields.io/badge/DSA_/_Algorithms-78%25-6366f1?style=for-the-badge&logo=leetcode&logoColor=white"
            alt="DSA Badge"
          />
        </div>
      </div>
    </section>
  );
}

/* ==========================
   MysteryBox (Gift) - shows Wumpus above card inside layout
   ========================== */
function MysteryBox() {
  const [open, setOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [text, setText] = useState("");

  const recruiterMessage = [
    "Hi! Thanks for checking my portfolio 👋",
    "I'm Aditya — a Backend & Full-Stack Engineer.",
    "I focus on clean architecture, scalable APIs,",
    "and delivering user-first digital experiences.",
  ];

  // TYPEWRITER
  const typeWriter = (lines, index = 0) => {
    if (index >= lines.length) return;
    let i = 0;

    const typing = () => {
      if (i <= lines[index].length) {
        setText((prev) => {
          const updated = [...prev.split("\n")];
          updated[index] = lines[index].slice(0, i);
          return updated.join("\n");
        });
        i++;
        setTimeout(typing, 35);
      } else {
        typeWriter(lines, index + 1);
      }
    };

    // prepare next line
    setText((prev) => prev + "\n");
    typing();
  };

  const openBox = () => {
    setOpen(true);
    setText("");
    setTimeout(() => setShowConfetti(true), 150);
    setTimeout(() => typeWriter(recruiterMessage), 400);
  };

  const closeBox = () => {
    setOpen(false);
    setShowConfetti(false);
    setText("");
  };

  return (
    <>
      <button
  onClick={openBox}
  className="
    btn-pulse 
    rounded-2xl
    w-32 h-32   /* square size */
    bg-gradient-to-br from-rose-400 to-fuchsia-600
    text-white font-semibold shadow-lg
    hover:scale-[1.06] transition-all
    flex items-center justify-center text-lg
  "
>
 Mystery Box 📦🎁❔
</button>


      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-end justify-center pb-10">
          
          {/* Confetti */}
          {showConfetti && (
            <div className="fixed inset-0 pointer-events-none animate-confetti"></div>
          )}

          <motion.div
            initial={{ y: 220, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 220, opacity: 0 }}
            transition={{ type: "spring", stiffness: 160, damping: 16 }}
            className="relative w-[90%] max-w-xl rounded-3xl neon-border glass-hover p-8 shadow-2xl"
          >

            {/* Animated Wumpus */}
 <div className="flex justify-center items-center w-full">
  <img
    src="/gifs/wumpus3.gif"
    className="w-[200px] h-[200px] object-cover rounded-xl"
  />
</div>



            {/* Header */}
            <h2 className="text-xl font-bold text-sky-300 text-center mb-1">
              Thanks for Reviewing My Portfolio!
            </h2>

            {/* Typewriter Text */}
            <pre className="whitespace-pre-wrap text-slate-200 mt-3 text-center leading-tight font-medium min-h-[120px] neon-text-glow">
              {text}
            </pre>

            {/* Why I'm a great fit */}
            <div className="mt-4 rounded-xl bg-black/30 p-4 border border-white/10">
              <h3 className="text-lg font-semibold text-sky-300 text-center">
                Why I’m a Strong Fit
              </h3>
              <ul className="mt-3 space-y-2 text-slate-300 text-sm">
                <li>✔ Strong backend foundation: Node.js, Express, DBs</li>
                <li>✔ Experience with scalable API design</li>
                <li>✔ Good understanding of system design basics</li>
                <li>✔ Clear communication & user-first approach</li>
                <li>✔ Hands-on with real projects & problem solving</li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/resume.pdf" target="_blank"
                className="px-4 py-2 w-full sm:w-auto text-center rounded-xl bg-gradient-to-br from-cyan-400 to-sky-500 text-black font-bold shadow hover:scale-[1.03] transition"
              >
                View Resume
              </a>

              <a href="https://github.com/heyitzmeaditya" target="_blank"
                className="px-4 py-2 w-full sm:w-auto text-center rounded-xl bg-black/40 text-white border border-white/10 hover:bg-black/60 transition"
              >
                GitHub
              </a>

              <a href="https://linkedin.com/in/heyitzmeaditya" target="_blank"
                className="px-4 py-2 w-full sm:w-auto text-center rounded-xl bg-black/40 text-white border border-white/10 hover:bg-black/60 transition"
              >
                LinkedIn
              </a>
            </div>

            {/* Close Button */}
            <button
              onClick={closeBox}
              className="mt-5 block mx-auto text-sm text-slate-400 hover:text-slate-200"
            >
              Close
            </button>

          </motion.div>
        </div>
      )}
    </>
  );
}

/* ==========================
   ContactForm
   ========================== */
function ContactForm() {
  return (
    <motion.section id="contact" className="mt-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold text-neon">Leave a Message</h2>
        <p className="text-slate-400 mt-2">Prefer a direct message? Fill this form and connect me via email.</p>

        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            const el = e.currentTarget;
            const name = el.elements.namedItem("name")?.value || "";
            const email = el.elements.namedItem("email")?.value || "";
            const message = el.elements.namedItem("message")?.value || "";
            setTimeout(() => {
              const subject = encodeURIComponent(`Portfolio message from ${name}`);
              const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
              window.location.href = `mailto:adityasaw407@gmail.com?subject=${subject}&body=${body}`;
            }, 600);
          }}
          className="mt-4 rounded-2xl neon-border glass-hover p-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input name="name" required placeholder="Your name" className="rounded-md p-3 border border-slate-700 bg-transparent focus:ring-2 focus:ring-sky-400" />
            <input name="email" type="email" required placeholder="Your email" className="rounded-md p-3 border border-slate-700 bg-transparent focus:ring-2 focus:ring-sky-400" />
          </div>

          <textarea name="message" rows={6} required placeholder="Your message..." className="mt-3 rounded-md p-3 border border-slate-700 bg-transparent focus:ring-2 focus:ring-sky-400 w-full" />

          <div className="mt-3 flex items-center justify-between">
            <div className="text-sm text-slate-400">Or write to: <a href="mailto:adityasaw407@gmail.com" className="text-sky-300">adityasaw407@gmail.com</a></div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 px-4 py-2 text-slate-900 font-semibold">
              Send Message <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
}

/* ==========================
   Page (main)
   ========================== */
export default function Page() {
  const heroWords = useMemo(() => ["Designing Fast APIs", "Crafting Modern Web Apps", "Engineering Reliable Systems"], []);
  const typed = useTypewriter(heroWords, 75, 1400);
  const projectsRef = useRef(null);

  function scrollToProjects() {
    projectsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function downloadResume() {
    window.open("/resume.pdf", "_blank");
  }

  return (
    <div className="min-h-screen animated-site bg-[#05060a] text-slate-50 antialiased selection:bg-sky-400/30 selection:text-white overflow-x-hidden">
      <Cursor />

      <main className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
        <nav className="flex items-center justify-between mb-8 nav-blur rounded-2xl p-3 neon-border glass-hover">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-emerald-300 font-bold text-slate-900 card-3d neon-border overflow-hidden">
              <img src="gifs/profile-sample.jpg" alt="profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-sm font-semibold">Aditya Saw</div>
              <div className="text-xs text-slate-400">Backend · Full-Stack · System Design</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#about" className="link-underline px-3 py-1.5 magnetic rounded-md">About</a>
            <a href="#projects" className="link-underline px-3 py-1.5 magnetic rounded-md">Projects</a>
            <a href="#skills" className="link-underline px-3 py-1.5 magnetic rounded-md">Skills</a>
            <button onClick={downloadResume} className="rounded-full px-4 py-1.5 bg-gradient-to-br from-sky-500 to-cyan-400 text-slate-900 font-semibold">Resume</button>

            <div className="hidden sm:flex items-center gap-2">
              {SOCIALS.map((s) => (
                <IconLink key={s.id} href={s.href} title={s.label} Icon={s.Icon}>
                  {s.id === "ig" && <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#fff" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zm6.4-2.7a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z" /></svg>}
                  {s.id === "sp" && <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#fff" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.6 14.5a.9.9 0 0 1-1.2.3c-2.8-1.7-6.3-2.1-10.4-1.2a.9.9 0 1 1-.4-1.8c4.6-1.1 8.6-.6 11.9 1.4a.9.9 0 0 1 .1 1.3zM17 11.2a1 1 0 0 1-1.4.3c-3.4-2-8-.7-9.1-.4a1 1 0 1 1-.6-1.9c1.7-.5 6.4-1.9 10.3.7a1 1 0 0 1 .7 1.3z" /></svg>}
                  {s.id === "dc" && <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#fff" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" /></svg>}
                </IconLink>
              ))}
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="rounded-3xl neon-border glass-hover p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs bg-emerald-600/10 text-emerald-200 ring-glow">
                <Sparkles className="h-4 w-4" /> Open to: Backend · Full-Stack · SDE
              </div>

              <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold leading-tight">
                Building scalable backends & <span className="gradient-text-animated">{typed}</span>
              </h1>

              <p className="mt-4 text-lg text-slate-300 max-w-3xl">
                I design reliable APIs, efficient data models and polished frontends — focused on performance, security, and clear engineering tradeoffs.
              </p>

              <div className="mt-6 flex gap-4 flex-wrap">
                <button onClick={scrollToProjects} className="btn-pulse magnetic inline-flex items-center gap-2 rounded-full px-5 py-3 bg-gradient-to-br from-sky-500 to-cyan-400 text-slate-900 font-semibold">
                  View Projects <ArrowRight className="h-5 w-5" />
                </button>

                <button onClick={downloadResume} className="magnetic inline-flex items-center gap-2 rounded-full px-4 py-2 border border-slate-700 text-slate-100 hover:brightness-105">
                  <Download className="h-4 w-4" /> Download Resume
                </button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl neon-border p-4 glass-hover">
                <h4 className="font-semibold">Quick Links</h4>
                <div className="mt-3 flex flex-col gap-2">
                  <a href="#projects" className="text-sky-300">Featured projects</a>
                  <a href="#skills" className="text-sky-300">My skills</a>
                  <a href="#contact" className="text-sky-300">Contact</a>
                </div>
              </div>

              <div className="rounded-2xl neon-border p-4 glass-hover">
                <h4 className="font-semibold">Play & Vibes</h4>
                <div className="mt-3 space-y-3">
                  <a href="https://www.chess.com/member/heyitzmeaditya" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md px-3 py-2 border border-slate-700">
                    <ChessKing className="h-4 w-4" /> Challenge me on Chess
                  </a>

                  <a href="https://open.spotify.com/user/31pfcpmixec2kdktsthig5lwsm5y" target="_blank" rel="noreferrer" className="mt-1 rounded-lg p-3 neon-border glass-hover flex items-center gap-4">
<div className="w-12 h-12 bg-gradient-to-br from-emerald-300 to-sky-400 rounded-md flex items-center justify-center text-slate-900">
  <FaSpotify className="text-3xl" />
</div>                    <div>
                      <div className="font-semibold">Blinding Lights</div>
                      <div className="text-sm text-slate-400">The Weeknd — Vibe with me 🎧</div>
                    </div>
                    <div className="ml-auto inline-flex items-center gap-2 text-sm text-slate-300">Play <Play className="h-4 w-4" /></div>
                  </a>
                </div>
              </div>
            </div>

  <div className="mt-6">
  <div className="rounded-2xl neon-border p-4 glass-hover">
    <div className="flex items-center gap-3">
      <Star className="h-5 w-5 text-amber-400" />
      <div>
        <div className="font-semibold">Fun Fact</div>
        <NeonFlipFunFact />
      </div>
    </div>
  </div>
</div>



          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            <div className="w-full max-w-md">
              <VideoLoop />
              <div className="mt-4 space-y-4">
                <PortfolioSnapshot />
              </div>

              <div className="mt-6 flex justify-center gap-10">

  {/* Mystery Box lowered */}
  <div className="flex items-end justify-center h-[300px]">
    <MysteryBox />
  </div>

  {/* Bigger Wumpus */}
 <div className="relative flex items-center justify-center w-full h-[340px] overflow-visible group">

  {/* SAME GLOW EFFECT */}
  <div className="absolute inset-0 mx-auto my-auto w-[420px] h-[420px] 
      rounded-full bg-[radial-gradient(circle,rgba(0,200,255,0.28),rgba(0,0,0,0))] 
      blur-[80px] opacity-70 
      group-hover:opacity-100 transition-all duration-700" />

  {/* Wumpus GIF */}
  <img
    src="/gifs/wumpus-hero.gif"
    alt="wumpus"
    className="relative z-10 w-[300px] h-[300px] rounded-xl object-contain 
               transition-transform duration-700 ease-out group-hover:scale-[1.06]"
  />
</div>


</div>


            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section ref={projectsRef} id="projects" className="mt-12 md:mt-16 mb-20">
<div className="relative inline-block">
  <h2 className="text-3xl font-bold text-neon">
    Featured Projects
  </h2>

  <div className="absolute inset-0 -z-10 blur-xl opacity-30 bg-sky-500/20"></div>
</div>
          <p className="text-slate-400 mt-2">Selected technical work showcasing backend & full-stack skills.</p>

          <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </section>

        {/* TECH STACK */}
        <TechStackBlock />

        {/* SKILLS */}
        <section id="skills" className="mt-12 md:mt-16">
          <h2 className="text-2xl font-semibold text-neon">Skills</h2>
          <p className="text-slate-400 mt-2">Technologies and areas I use daily</p>

          <div className="mt-4 rounded-2xl neon-border glass-hover p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                {SKILLS.map((s) => (
                  <div key={s.name} className="mb-4">
                    <div className="flex justify-between text-sm">
                      <div className="text-slate-300">{s.name}</div>
                      <div className="font-semibold">{s.level}%</div>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mt-2">
                      <div className="h-2" style={{ width: `${s.level}%`, background: "linear-gradient(90deg,#06b6d4,#7c3aed)" }} />
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <div className="rounded-2xl neon-border p-4 glass-hover">
                  <h4 className="font-semibold">Achievements</h4>
                  <div className="mt-3 flex gap-3 flex-wrap">
                    <span className="rounded-full px-3 py-1 bg-slate-900/60 ring-1 ring-slate-700">Solved 300+ DSA problems</span>
                    <span className="rounded-full px-3 py-1 bg-slate-900/60 ring-1 ring-slate-700">1950+ Blitz Rating</span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="rounded-2xl neon-border p-4 glass-hover">
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-amber-400" />
                      <div>
                        <div className="font-semibold">Fun fact</div>
                        <div className="text-sm text-slate-300 mt-1">I can solve a Rubik's cube faster than I can explain recursion to relatives.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CONNECT / GITHUB / SPOTLIGHT */}
        <section className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl neon-border p-4 glass-hover">
              <h4 className="font-semibold">Connect</h4> 
              <p className="text-slate-400 mt-2">Follow or message me on these platforms.</p>
              <div className="mt-3 flex gap-2 flex-wrap items-center">
                <IconLink href="https://github.com/heyitzmeaditya" title="GitHub" Icon={Github} />
                <IconLink href="https://instagram.com/heyitzmeaditya" title="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#fff" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zm6.4-2.7a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z" /></svg>
                </IconLink>
                <IconLink href="https://open.spotify.com/user/31pfcpmixec2kdktsthig5lwsm5y" title="Spotify">
                  <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#fff" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.6 14.5a.9.9 0 0 1-1.2.3c-2.8-1.7-6.3-2.1-10.4-1.2a.9.9 0 1 1-.4-1.8c4.6-1.1 8.6-.6 11.9 1.4a.9.9 0 0 1 .1 1.3zM17 11.2a1 1 0 0 1-1.4.3c-3.4-2-8-.7-9.1-.4a1 1 0 1 1-.6-1.9c1.7-.5 6.4-1.9 10.3.7a1 1 0 0 1 .7 1.3z" /></svg>
                </IconLink>

<IconLink href="https://discord.com/users/heyitzmeaditya" title="Discord">
  <svg width="16" height="16" viewBox="0 0 24 24">
    <path fill="#fff" d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.608 1.249a18.27 18.27 0 0 0-5.466 0c-.164-.4-.405-.874-.618-1.249a.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.07.07 0 0 0-.032.027C2.02 9.281 1.329 14.063 1.695 18.785a.083.083 0 0 0 .031.058 19.9 19.9 0 0 0 5.993 3.028.078.078 0 0 0 .084-.027c.462-.634.873-1.303 1.226-2.003a.076.076 0 0 0-.041-.104 13.123 13.123 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.095.252-.193.372-.293a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.1.246.198.372.293a.077.077 0 0 1-.006.127 12.8 12.8 0 0 1-1.873.893.076.076 0 0 0-.041.103 14.75 14.75 0 0 0 1.226 2.004.076.076 0 0 0 .084.027 19.922 19.922 0 0 0 5.993-3.028.077.077 0 0 0 .031-.058c.5-5.302-.838-10.058-2.951-14.389a.06.06 0 0 0-.031-.03zM8.02 15.643c-1.182 0-2.154-1.086-2.154-2.419 0-1.333.955-2.418 2.154-2.418 1.21 0 2.172 1.095 2.154 2.418 0 1.333-.955 2.419-2.154 2.419zm7.975 0c-1.182 0-2.154-1.086-2.154-2.419 0-1.333.955-2.418 2.154-2.418 1.21 0 2.172 1.095 2.154 2.418 0 1.333-.944 2.419-2.154 2.419z"/>
  </svg>
</IconLink>
<IconLink href="https://linkedin.com/in/heyitzmeaditya" title="LinkedIn">
  <svg width="16" height="16" viewBox="0 0 24 24">
    <path fill="#fff" d="M4.98 3.5A2.5 2.5 0 1 1 4.98 8.5a2.5 2.5 0 0 1 0-5zm.02 5.5H2V22h3V9zm7.982 0h-2.98V22h3v-6.5c0-3.59 4.5-3.88 4.5 0V22h3v-7.9c0-6.13-7-5.9-7-2.9V9z"/>
  </svg>
</IconLink>
              </div>
            </div>

            <div className="rounded-2xl neon-border p-4 glass-hover">
              <h4 className="font-semibold">GitHub Stats</h4>
              <p className="text-slate-400 mt-2">Live GitHub stats from my developer activity.</p>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-lg p-3 bg-[#071018]/60">Contributions<br /><strong>1,234</strong></div>
                <div className="rounded-lg p-3 bg-[#071018]/60">Stars<br /><strong>56</strong></div>
              </div>
            </div>

            <div className="rounded-2xl neon-border p-4 glass-hover">
              <h4 className="font-semibold">Spotlight</h4>
              <p className="text-slate-400 mt-2">Quick links & highlights.</p>
              <div className="mt-3 flex flex-col gap-2">
                <a href="#projects" className="text-sky-300">Featured projects</a>
                <a href="#tech-stack" className="text-sky-300">Tech stacks</a>
                <a href="#contact" className="text-sky-300">Contact</a>
              </div>
            </div>
          </div>

          
        </section>


<section id="contact" className="mt-12">
  <div className="
      mx-auto max-w-6xl 
      grid grid-cols-1 md:grid-cols-[1fr_1.3fr] 
      gap-6 items-start
  ">
    
    {/* LEFT — Wumpus (smaller + centered) */}
    <div className="flex justify-end pr-4">
      <WumpusBlock src="/gifs/wumpus-special.gif" size={360} />
    </div>

    {/* RIGHT — Contact Form */}
    <div className="flex justify-start">
      <ContactForm />
    </div>

  </div>
</section>


        

        <footer className="mt-12 text-center text-sm text-slate-400">
  © 2025 Aditya Saw — Designed with passion. Built with precision.
</footer>
      </main>
    </div>
  );
}
