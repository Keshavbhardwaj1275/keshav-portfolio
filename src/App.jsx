import React, { useEffect, useState } from "react";

export default function App() {
  const roles = [
    "Full Stack Developer",
    "AI Enthusiast",
    "Problem Solver",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">

      {/* Top animated bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-cyan-400 animate-pulse z-50"></div>

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 items-center py-20">

          <div className="animate-pulse">
            <p className="text-cyan-400 font-semibold mb-4">
              AVAILABLE FOR INTERNSHIPS
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Keshav Bhardwaj<br />
            </h1>

            <p className="mt-5 text-xl text-slate-300 h-8">
              {roles[index]}
            </p>

            <p className="mt-5 text-slate-400 max-w-xl">
              B.Tech CSE student building scalable web apps, backend systems,
              and AI-powered products.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="px-5 py-3 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
              >
                Download Resume
              </a>

              <a
                href="https://github.com/Keshavbhardwaj1275"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-2xl border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/in/keshav-bhardwaj-a2bb04215"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-2xl border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition duration-300">
            <div className="grid grid-cols-2 gap-5">
              <Stat num="120+" label="DSA Problems" />
              <Stat num="4+" label="Projects" />
              <Stat num="1" label="Internship" />
              <Stat num="2027" label="Graduation" />
            </div>
          </div>

        </section>

        {/* Skills */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>

          <div className="grid md:grid-cols-4 gap-5">
            <Card title="Frontend" text="React, Next.js, Tailwind, JavaScript" />
            <Card title="Backend" text="Node.js, Express.js, Flask" />
            <Card title="Database" text="MySQL, PostgreSQL, MongoDB" />
            <Card title="Tools" text="Git, GitHub, Postman, Vercel" />
          </div>
        </section>

        {/* Projects */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Raasta */}
            <ProjectCard
              title="Raasta Fix"
              text="AI-powered civic issue reporting platform with complaint tracking, dashboards and geolocation."
              live="https://raasta-fix.vercel.app/"
              github="https://github.com/Keshavbhardwaj1275/RAASTA-FIX"
            />

            {/* YATRI */}
            <ProjectCard
              title="YATRI.in"
              text="Smart travel and pilgrimage planning platform with secure login system."
              live="https://yatri-in.onrender.com/"
              github="https://github.com/Keshavbhardwaj1275/YATRI.in"
            />

          </div>
        </section>

        {/* Experience */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>

          <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition">
            <p className="text-cyan-400 font-semibold">
              Sept 2025 – Oct 2025
            </p>

            <h3 className="text-xl font-bold mt-2">
              AI Intern • CodSoft
            </h3>

            <p className="text-slate-400 mt-2">
              Worked on AI-based tasks, automation workflows and mini-projects.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-24 pb-16">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>

          <p className="text-slate-300">
            keshavbhardwaj1275@gmail.com
          </p>
        </section>

      </div>
    </div>
  );
}

/* Components */

function Card({ title, text }) {
  return (
    <div className="p-5 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:-translate-y-2 hover:border-cyan-400 transition duration-300">
      <h3 className="font-semibold text-cyan-400">{title}</h3>
      <p className="text-slate-300 mt-2">{text}</p>
    </div>
  );
}

function Stat({ num, label }) {
  return (
    <div className="p-5 rounded-2xl bg-black/30 hover:scale-105 transition">
      <h3 className="text-3xl font-bold text-cyan-400">{num}</h3>
      <p className="text-slate-400 mt-2">{label}</p>
    </div>
  );
}

function ProjectCard({ title, text, live, github }) {
  return (
    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="text-slate-400 mt-3">{text}</p>

      <div className="mt-5 flex gap-3 flex-wrap">
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
        >
          Live Demo
        </a>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-xl border border-slate-700 hover:border-cyan-400 transition"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}