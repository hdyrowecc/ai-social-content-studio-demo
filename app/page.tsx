"use client";

import Link from "next/link";
import { ArrowUpRight, BarChart3, Bot, Code2, ShoppingBag, Sparkles } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "AI Social Content Studio",
    subtitle: "Interactive AI micro-SaaS",
    description: "A polished content workflow for ecommerce and marketing teams: brief input, simulated generation, results, history, pricing, and login states.",
    challenge: "Turn one campaign idea into channel-ready content without repetitive rewriting or a heavy workspace.",
    approach: "A focused brief → generate → review → export flow with realistic loading, history, pricing, and login states.",
    features: ["Channel-aware drafts", "History & export states", "Responsive SaaS UI"],
    href: "/demo/ai-social-content-studio",
    tags: ["Next.js", "TypeScript", "Tailwind", "SaaS UX"],
    icon: Bot,
    accent: "from-violet-500/35 via-fuchsia-400/10 to-cyan-400/20",
  },
  {
    number: "02",
    title: "Atelier Commerce",
    subtitle: "Premium ecommerce storefront",
    description: "Editorial luxury storefront with light/dark themes, product variants, responsive navigation, cart drawer, quantity controls, and simulated checkout.",
    challenge: "Create a premium independent-store experience that feels editorial without making the buying flow harder.",
    approach: "Pair restrained visual direction with direct product discovery, variant selection, cart management, and clear checkout feedback.",
    features: ["Light / dark mode", "Variants & cart drawer", "Responsive commerce flow"],
    href: "/demo/premium-ecommerce",
    tags: ["Next.js", "Responsive UI", "Commerce", "Motion"],
    icon: ShoppingBag,
    accent: "from-amber-300/20 via-white/5 to-orange-500/20",
  },
  {
    number: "03",
    title: "Command Center",
    subtitle: "Analytics admin dashboard",
    description: "A business operations dashboard with KPI cards, live filters, charting, sortable records, pagination, create-record modal, and export states.",
    challenge: "Make dense operational data easy to scan, filter, compare, and act on without losing context.",
    approach: "Use a strong KPI hierarchy, compact visual analytics, searchable records, sorting, pagination, and action-focused modal flows.",
    features: ["KPI & chart system", "Filter / sort / pagination", "Create & export states"],
    href: "/demo/admin-dashboard",
    tags: ["Dashboard", "Recharts", "Tables", "Data UX"],
    icon: BarChart3,
    accent: "from-cyan-400/20 via-blue-500/10 to-emerald-400/20",
  },
];

export default function PortfolioHome() {
  return (
    <main className="min-h-screen bg-[#07090f] text-white">
      <header className="border-b border-white/8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-tight">Roecc / Product Frontend</p>
            <p className="mt-1 text-[11px] uppercase tracking-[.22em] text-white/35">Interactive spec portfolio</p>
          </div>
          <div className="hidden items-center gap-2 text-xs text-white/45 sm:flex">
            <Sparkles size={14} className="text-cyan-300" />
            3 live product demos · no signup required
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 pb-14 pt-16 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-xs text-white/55">
            <Code2 size={14} /> Frontend product engineering portfolio
          </div>
          <h1 className="text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-7xl">
            Three product experiences built to feel like real commercial software.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/48 md:text-lg">
            Each project is an independent spec build focused on business-ready UI, complete user flows, responsive behavior, and realistic interaction states. Every case includes the challenge, approach, stack, key features, and a live demo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="grid gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article key={project.title} className="group overflow-hidden rounded-[30px] border border-white/9 bg-[#0d1018]">
                <div className="grid lg:grid-cols-[.82fr_1.18fr]">
                  <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                    <div>
                      <div className="mb-8 flex items-center justify-between">
                        <span className="text-xs font-medium tracking-[.2em] text-white/30">{project.number}</span>
                        <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/8 bg-white/[.04] text-cyan-200">
                          <Icon size={19} />
                        </span>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[.2em] text-white/35">{project.subtitle}</p>
                      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{project.title}</h2>
                      <p className="mt-5 max-w-xl text-sm leading-7 text-white/48">{project.description}</p>
                      <div className="mt-6 grid gap-4">
                        <CaseNote label="Challenge" text={project.challenge} />
                        <CaseNote label="Approach" text={project.approach} />
                        <div>
                          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.18em] text-white/28">Tech stack</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span key={tag} className="rounded-full border border-white/8 px-3 py-1.5 text-[11px] text-white/42">{tag}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.18em] text-white/28">Key features</p>
                          <div className="flex flex-wrap gap-2">
                            {project.features.map((feature) => (
                              <span key={feature} className="rounded-full bg-white/[.045] px-3 py-1.5 text-[11px] text-white/52">{feature}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <Link href={project.href} className="mt-8 inline-flex w-fit items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
                      Open live demo <ArrowUpRight size={16} />
                    </Link>
                  </div>

                  <div className={`relative min-h-[340px] overflow-hidden bg-gradient-to-br ${project.accent} p-5 sm:p-7`}>
                    <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:36px_36px]" />
                    <Preview type={project.number} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function Preview({ type }: { type: string }) {
  if (type === "01") {
    return (
      <div className="relative mx-auto mt-6 max-w-xl rounded-[24px] border border-white/10 bg-[#0a0d15]/90 p-5 shadow-2xl">
        <div className="mb-5 flex items-center justify-between"><span className="text-xs text-white/40">Campaign workspace</span><span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] text-emerald-200">Demo Mode</span></div>
        <div className="grid gap-3 sm:grid-cols-3"><MiniMetric value="3" label="Drafts"/><MiniMetric value="14m" label="Saved"/><MiniMetric value="92%" label="Brand fit"/></div>
        <div className="mt-4 rounded-2xl border border-white/8 bg-white/[.035] p-4"><div className="h-2.5 w-20 rounded bg-white/10"/><div className="mt-4 h-2.5 w-full rounded bg-white/8"/><div className="mt-2 h-2.5 w-4/5 rounded bg-white/8"/></div>
      </div>
    );
  }

  if (type === "02") {
    return (
      <div className="relative mx-auto mt-5 max-w-xl overflow-hidden rounded-[24px] border border-white/10 bg-[#f2eee6] text-black shadow-2xl">
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 text-[11px] uppercase tracking-[.18em]"><span>Atelier / 09</span><span>Bag 01</span></div>
        <div className="grid grid-cols-[1.1fr_.9fr]"><div className="min-h-56 bg-[linear-gradient(145deg,#c7baa9,#7f756e)]"/><div className="p-5"><p className="text-[10px] uppercase tracking-[.18em] text-black/45">Edition 04</p><p className="mt-2 font-serif text-2xl">Form Jacket</p><p className="mt-2 text-sm text-black/50">$248</p><div className="mt-8 h-9 rounded-full bg-black"/></div></div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto mt-5 max-w-xl rounded-[24px] border border-white/10 bg-[#0b1018]/95 p-5 shadow-2xl">
      <div className="grid grid-cols-3 gap-3"><MiniMetric value="$84.2k" label="Revenue"/><MiniMetric value="1,248" label="Orders"/><MiniMetric value="4.8%" label="CVR"/></div>
      <div className="mt-5 flex h-36 items-end gap-2 rounded-2xl border border-white/8 bg-white/[.025] p-4">
        {[34,58,46,82,68,94,74,88,62,97].map((h,i)=><div key={i} className="flex-1 rounded-t bg-white/18" style={{height:`${h}%`}} />)}
      </div>
    </div>
  );
}

function CaseNote({label,text}:{label:string;text:string}) {
  return <div><p className="mb-1 text-[10px] font-semibold uppercase tracking-[.18em] text-white/28">{label}</p><p className="text-xs leading-6 text-white/48">{text}</p></div>;
}

function MiniMetric({value,label}:{value:string;label:string}) {
  return <div className="rounded-xl border border-white/8 bg-white/[.035] p-3"><p className="font-semibold">{value}</p><p className="mt-1 text-[9px] uppercase tracking-[.12em] text-white/35">{label}</p></div>;
}
