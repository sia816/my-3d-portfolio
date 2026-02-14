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
              下载简历
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
              我关注海外营销与增长运营，擅长用<strong>内容</strong>与
              <strong>数据</strong>把“传播”做成可衡量、可复用、可增长的结果。
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
                联系我
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
              >
                看项目
              </button>
            </div>

            <p className="mt-3 text-xs text-zinc-500">
              提示：把你的简历 PDF 放到 <code className="px-1">public/resume.pdf</code>{" "}
              就能让“下载简历”按钮生效。
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
                这里放你的正式版自我介绍（建议 80–140 字）。写法：一句定位 +
                两句能力/方法 + 一句你想去的方向。
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <Metric label="偏好风格" value="学术/官方 & 有结果" />
                <Metric label="方法论" value="内容 → 转化 → 数据复盘" />
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="text-sm font-semibold">Quick Facts</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li>📍 Location: …</li>
                <li>🎓 Program: …</li>
                <li>🧩 Focus: Growth / Content</li>
                <li>💬 Languages: CN/EN</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="grid gap-4 md:grid-cols-2">
            <Card
              title="VAST Tripo — Overseas Influencer Marketing Intern"
              subtitle="Outreach • Briefing • Review • Affiliate research"
              bullets={[
                "完成海外 KOL 拓展与沟通，推动内容发布与复盘。",
                "参与 Q3 outreach，跟踪回复率/推进率等过程指标。",
                "协同数据与社区团队，支持内容分发与转化链路。",
              ]}
            />
            <Card
              title="（把你的第二段经历放这里）"
              subtitle="岗位关键词 • 方向"
              bullets={[
                "写 1-2 句你做了什么（最好带数字）。",
                "写你的方法/流程（比如：选题-制作-发布-复盘）。",
                "写一个结果（增长、转化、曝光、效率）。",
              ]}
            />
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-4 md:grid-cols-3">
            <ProjectCard
              title="项目 A"
              tag="Growth"
              desc="一句话说清：你做了什么，带来什么结果。"
            />
            <ProjectCard
              title="项目 B"
              tag="Communication"
              desc="一句话说清：策略/内容/传播打法。"
            />
            <ProjectCard
              title="项目 C"
              tag="Research"
              desc="一句话说清：研究问题、方法、发现。"
            />
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm text-zinc-500">Email</div>
                <div className="text-base font-semibold">
                  your.email@example.com
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:opacity-90 dark:bg-zinc-100 dark:text-zinc-900"
                  href="mailto:your.email@example.com"
                >
                  发邮件
                </a>
                <a
                  className="rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
                  href="#"
                >
                  LinkedIn
                </a>
                <a
                  className="rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
                  href="#"
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

