"use client";

import Script from "next/script";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Chip({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-sm text-zinc-700 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200">
      {text}
    </span>
  );
}

function Card({
  title,
  subtitle,
  bullets,
}: {
  title: string;
  subtitle?: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold">{title}</h3>
          {subtitle && (
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-zinc-400" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      {/* model-viewer only on client */}
      <Script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      />

      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/70 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-zinc-900 text-white grid place-items-center font-semibold dark:bg-zinc-100 dark:text-zinc-900">
              T
            </div>
            <div>
              <div className="text-sm font-semibold leading-tight">谭思懿</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                Interactive Intro • Portfolio
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="rounded-full px-3 py-1 text-sm text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90 dark:bg-zinc-100 dark:text-zinc-900"
            >
              
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">
        {/* Hero */}
        <section className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              Glad to introduce!{" "}
              <span className="text-zinc-500 dark:text-zinc-300">
                I am Sia.</span>
            </h1>

            <p className="mt-4 max-w-prose text-base text-zinc-600 dark:text-zinc-300">
            I focus on overseas marketing and growth operations, with the ability to leverage content and data to transform communication into measurable, scalable, and repeatable growth.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Chip text="International Communication" />
              <Chip text="Growth Ops" />
              <Chip text="Content Strategy" />
              <Chip text="CN/EN" />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("contact")}
                className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:opacity-90 dark:bg-zinc-100 dark:text-zinc-900"
              >
                Contact Me
              </button>
              <button
                onClick={() => scrollTo("experience")}
                 className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:opacity-90 dark:bg-zinc-100 dark:text-zinc-900"
              >
                Internships
              </button>
            </div>

            <p className="mt-3 text-xs text-zinc-500">
              
            </p>
          </div>

          {/* 3D Card */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold">3D Portrait</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  Drag to rotate • Scroll to zoom
                </div>
              </div>
              <span className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
                GLB
              </span>
            </div>

            {/* @ts-ignore */}
            <model-viewer
              src="/models/portrait.glb"
              camera-controls
              auto-rotate
              rotation-per-second="18deg"
              environment-image="neutral"
              style={{
                width: "100%",
                height: 460,
                borderRadius: 18,
                background: "#f4f4f5",
              }}
            />
          </div>
        </section>

        {/* Sections */}
        <Section id="about" title="About">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <Metric label="Academic" value="Undergraduate:Sichuan Universtiy
                Graduate:Zhejiang University/ MIIS" />
                <Metric label="Skills" value="R Programming; Google Ads Certificate; MS Office " />
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="text-sm font-semibold">Quick Facts</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li>📍 Location: Hangzhou</li>

                <li>💬 Languages: Cet6(623); Tofel(104); Catti3 </li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="grid gap-4 md:grid-cols-2">
            <Card
              title="VAST Tripo — Overseas Marketing Intern"
      subtitle="2025.07-11"
              bullets={[
                "Participated in TripoAI 3.0 Q3 overseas KOL campaign, covering YouTube and Instagram, managing outreach, brief writing, agency coordination (X, TikTok), contract review, payment, content approval, and performance tracking (CPA/CPE/CPM/ROI…).",
                "Designed the affiliate marketing framework, optimizing commission structure and landing page content; generated 300+ new monthly user registrations.",
                "Managed Tripo’s official Xiaohongshu account, planning, writing, and publishing content that increased weekly followers by 200+.", 
                "Collaborated with cross-functional teams (data, paid growth, Discord community, offline events) to optimize ROI, improve user engagement,and optimize campaign performance."
              ]}
            />
            <Card
              title="Hangzhou Broadcasting Group HZTV- International Influencer Operations Intern"
              subtitle="2025.04-07"
              bullets={[
                "Supported 5 overseas short-video influencer collaborations, contributing to 10+ video campaigns in the cultural tourism vertical, published on TikTok and Channels.",
                "Operated Instagram and X accounts, independently producing 15+ posts and coordinating with video teams to ensure timely and audienceoriented delivery.",
                "Conducted content performance analysis, identifying high-engagement cases and documenting replicable KOL collaboration SOPs.",
              ]}
              
            />
            <Card
      title="People’s Daily - Content Operations Intern"
      subtitle="2024.04-07"
      bullets={[
        "Conducted content planning and localization, producing English-language stories aligned with global opinion trends.",
        "Coordinated with overseas scholars and media experts for article authorization and video interviews, ensuring efficient cross-border content delivery.",
        "Produced and translated 10+ published articles and short videos on official site, covering international relations, technology, and society.",
      ]}
    />
     <Card
      title="LightCourse EdTech - Product Operations Intern"
      subtitle="2023.03-07"
      bullets={[
        "Researched North American universities (QS list) for credit transfer partnerships, building an internal course database.",
        "Assisted in email and phone negotiations with U.S. universities and institutions, supporting academic program cooperation.",
        "Conducted competitive products’ analysis and user behavior research with data team to optimize project content strategy.",
      ]}
    />
            
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-4 md:grid-cols-3">
            <ProjectCard
              title="Digital Transformation & Communication Capacity Building in Rwanda"
              tag="Project Lead"
              desc="Conducted two-week field research on Rwanda’s digital transformation in fintech, agriculture, healthcare, and education.
              
              Delivered a presentation to 50+ international participants, proposing cross-cultural communication strategies and economic policy."
            />
            <ProjectCard
              title="Nil Manel Foundation, Sri Lanka"
              tag="Operations Lead"
              desc="Coordinated with local NGOs to execute promotion and content projects, publishing bilingual content to enhance global visibility and web
traffic."
            />
            <ProjectCard
              title="Volunteer Service & Support Nepal"
              tag="International Teaching Volunteer"
              desc="Designed and delivered English teaching curriculum, adapted to local needs; Produced 5+ live-recorded English courses, awarded Outstanding
Cross-Cultural Practice by Fudan University."
            />
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm text-zinc-500">Email/Mobile</div>
                <div className="text-base font-semibold">
                  SiaTTT000@163.com/ 18975298776
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:opacity-90 dark:bg-zinc-100 dark:text-zinc-900"
                  href="SiaTTT000@163.com"
                >
                  发邮件
                </a>
                <a
                  className="rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
                  href="https://www.linkedin.com/in/siya-tan-393436335/"
                >
                  LinkedIn
                </a>
                <a
                  className="rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
                  href="https://github.com/sia816/my-3d-portfolio"
                >
                  GitHub / Portfolio
                </a>
              </div>
            </div>
          </div>
        </Section>

        <footer className="py-10 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Tan Siyi
        </footer>
      </main>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 pt-14">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="mt-1 h-px w-full bg-zinc-200 dark:bg-zinc-800" />
      </div>
      {children}
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="text-xs text-zinc-500">{label}</div>
      <div className="mt-1 font-semibold">{value}</div>
    </div>
  );
}

function ProjectCard({
  title,
  tag,
  desc,
}: {
  title: string;
  tag: string;
  desc: string;
}) {
  return (
    <div className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold">{title}</h3>
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
          {tag}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
        {desc}
      </p>
      <div className="mt-4 text-sm font-medium text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
        查看细节 →
      </div>
    </div>
  );
}

