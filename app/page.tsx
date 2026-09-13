"use client";

import Link from "next/link";
import {
  ArrowDownRight, ArrowUpRight, CheckCircle2, Code2, Gauge, LayoutDashboard,
  MousePointer2, ShoppingBag, Sparkles, Target
} from "lucide-react";

const work = [
  {
    no: "01",
    type: "Lead generation / Local service",
    title: "Cedarline Fencing",
    summary: "A conversion-focused service website concept designed around Google Ads traffic, mobile calls, fast quote capture, and reusable service-page structure.",
    challenge: "Local-service sites often lose leads through inconsistent service pages, weak mobile CTAs, slow forms, and unclear next steps.",
    approach: "Standardize the service-page system, make call/quote actions persistent on mobile, and keep the form short enough to finish without friction.",
    proof: ["Reusable service-page system", "2-step quote flow", "Mobile call / quote bar"],
    stack: ["Next.js", "Responsive UI", "Lead-gen UX"],
    href: "/demo/local-service-lead-gen",
    visual: "lead",
  },
  {
    no: "02",
    type: "Ecommerce / Product landing page",
    title: "Aero One",
    summary: "A premium DTC product page that replaces a generic store template with benefit-led storytelling, product comparison, variants, FAQs, and a focused cart flow.",
    challenge: "Standard product templates show information, but often fail to explain why the product is different or guide shoppers toward a confident purchase.",
    approach: "Build the page around buying questions: what it solves, how it works, proof, comparison, variant choice, objections, then purchase.",
    proof: ["Sticky purchase actions", "Variant + cart interactions", "Comparison / reviews / FAQ"],
    stack: ["Next.js", "Commerce UX", "Conversion UI"],
    href: "/demo/dtc-product-page",
    visual: "commerce",
  },
  {
    no: "03",
    type: "SaaS / Product frontend",
    title: "Relay Operations",
    summary: "A modern B2B operations dashboard for teams that need dense workflow data to stay readable, searchable, and actionable across desktop and mobile.",
    challenge: "Data-heavy dashboards quickly become cluttered when KPIs, charts, records, filters, and actions all compete for attention.",
    approach: "Create a clear information hierarchy, progressively reveal detail, and keep primary actions close to the data they affect.",
    proof: ["Interactive chart + KPIs", "Search / filter / sort", "Detail drawer + new record flow"],
    stack: ["React", "Next.js", "Recharts", "Data UX"],
    href: "/demo/saas-operations-dashboard",
    visual: "saas",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f1ea] text-[#101114]">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f4f1ea]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="group">
            <p className="text-sm font-semibold tracking-[-.02em]">ROECC<span className="text-black/28">®</span></p>
            <p className="mt-0.5 text-[9px] uppercase tracking-[.24em] text-black/38">Web product developer</p>
          </a>
          <nav className="hidden items-center gap-7 text-xs font-medium md:flex">
            <a href="#work" className="text-black/56 transition hover:text-black">Selected work</a>
            <a href="#services" className="text-black/56 transition hover:text-black">What I build</a>
            <a href="#process" className="text-black/56 transition hover:text-black">Approach</a>
          </nav>
          <a href="#work" className="group flex items-center gap-2 rounded-full border border-black/12 bg-white/60 px-4 py-2 text-xs font-semibold transition hover:bg-white">
            View work <ArrowDownRight size={14} className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5"/>
          </a>
        </div>
      </header>

      <section className="portfolio-grid border-b border-black/10">
        <div className="mx-auto max-w-[1380px] px-5 pb-16 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-[1.16fr_.84fr] lg:items-end">
            <div className="fade-up">
              <div className="mb-7 flex items-center gap-2 text-xs text-black/48">
                <span className="h-2 w-2 rounded-full bg-emerald-500"/>
                Available for focused freelance projects
              </div>
              <h1 className="max-w-5xl text-[clamp(3.5rem,8vw,7.8rem)] font-medium leading-[.88] tracking-[-.075em]">
                Websites people understand, trust, and act on.
              </h1>
            </div>
            <div className="fade-up-delay lg:pb-2">
              <p className="max-w-md text-[15px] leading-7 text-black/56">
                I build conversion-focused websites, ecommerce experiences, and product interfaces with clear UX, responsive behavior, and production-minded frontend code.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-3 text-xs">
                <MiniFact label="Focus" value="Web products"/>
                <MiniFact label="Build" value="Responsive"/>
                <MiniFact label="Priority" value="Clarity"/>
                <MiniFact label="Delivery" value="Interactive"/>
              </div>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-black/10 pt-5 text-[10px] uppercase tracking-[.2em] text-black/34 lg:mt-24">
            <span>Selected independent work · 2026</span>
            <span className="hidden sm:block">Scroll to explore ↓</span>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-[1380px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-12 flex flex-col gap-4 border-b border-black/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-black/35">Selected work</p>
            <h2 className="mt-2 text-3xl font-medium tracking-[-.045em] sm:text-4xl">Built around the jobs clients actually hire for.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-black/46">Each is a self-initiated spec project. No fake client, revenue, user, or testimonial claims.</p>
        </div>

        <div className="space-y-8">
          {work.map((project) => (
            <article key={project.no} className="card-lift overflow-hidden rounded-[30px] border border-black/10 bg-[#fbfaf7] soft-shadow">
              <div className="grid xl:grid-cols-[.94fr_1.06fr]">
                <div className="flex flex-col p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs tabular-nums text-black/30">{project.no} / 03</span>
                    <span className="rounded-full border border-black/10 px-3 py-1.5 text-[10px] uppercase tracking-[.16em] text-black/42">{project.type}</span>
                  </div>
                  <h3 className="mt-8 text-4xl font-medium tracking-[-.05em] sm:text-5xl">{project.title}</h3>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-black/52">{project.summary}</p>

                  <div className="mt-8 grid gap-5 border-t border-black/10 pt-7">
                    <CaseLine label="Challenge" text={project.challenge}/>
                    <CaseLine label="Approach" text={project.approach}/>
                  </div>

                  <div className="mt-7">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[.18em] text-black/30">Key flows</p>
                    <div className="flex flex-wrap gap-2">
                      {project.proof.map(item => <span key={item} className="rounded-full bg-black/[.045] px-3 py-1.5 text-[11px] text-black/55">{item}</span>)}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-black/38">
                    {project.stack.map(item => <span key={item}>{item}</span>)}
                  </div>

                  <Link href={project.href} className="group mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-[#111317] px-5 py-3 text-sm font-semibold text-white">
                    Explore live build <ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
                  </Link>
                </div>
                <div className="min-h-[420px] border-t border-black/10 bg-[#e9e5dc] p-5 sm:p-8 xl:border-l xl:border-t-0">
                  <ProjectVisual type={project.visual}/>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="border-y border-black/10 bg-[#111317] text-white">
        <div className="mx-auto max-w-[1380px] px-5 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-white/35">What I build</p>
              <h2 className="mt-3 max-w-sm text-4xl font-medium tracking-[-.05em]">Useful frontend work, not decoration for its own sake.</h2>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              <Service icon={<Target/>} no="01" title="Conversion websites" text="Landing pages and service sites with clearer hierarchy, mobile CTAs, forms, reusable sections, and performance-minded implementation."/>
              <Service icon={<ShoppingBag/>} no="02" title="Ecommerce experiences" text="Product and collection pages that make benefits, variants, trust, objections, and purchase actions easier to understand."/>
              <Service icon={<LayoutDashboard/>} no="03" title="SaaS & dashboard UI" text="Responsive React / Next.js interfaces for dashboards, admin panels, customer portals, tables, charts, and existing-product improvements."/>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-[1380px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-black/35">Approach</p>
            <h2 className="mt-3 text-4xl font-medium tracking-[-.05em]">Clear before clever.</h2>
          </div>
          <Process no="01" title="Find the friction" text="Start with the actual business problem: weak conversion, inconsistent pages, cluttered UI, poor mobile behavior, or slow user flow."/>
          <Process no="02" title="Build the useful version" text="Create the smallest complete experience that solves the problem well, then refine the visual and interaction details around it."/>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#ebe7df]">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-8 px-5 py-12 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-[10px] uppercase tracking-[.2em] text-black/35">Freelance portfolio</p><p className="mt-2 text-3xl font-medium tracking-[-.04em]">Need a cleaner, faster, more useful web experience?</p></div>
            <a href="#work" className="flex w-fit items-center gap-2 rounded-full border border-black/12 bg-white/70 px-4 py-2.5 text-sm font-medium">Review the work <ArrowUpRight size={15}/></a>
          </div>
          <div className="flex items-center justify-between border-t border-black/10 pt-5 text-[10px] uppercase tracking-[.16em] text-black/32"><span>Roecc · 2026</span><span>Independent spec portfolio</span></div>
        </div>
      </footer>
    </main>
  );
}

function MiniFact({label,value}:{label:string;value:string}) {
  return <div className="border-t border-black/10 pt-3"><p className="text-[9px] uppercase tracking-[.18em] text-black/30">{label}</p><p className="mt-1 font-medium text-black/68">{value}</p></div>;
}

function CaseLine({label,text}:{label:string;text:string}) {
  return <div className="grid gap-2 sm:grid-cols-[85px_1fr]"><p className="text-[10px] font-semibold uppercase tracking-[.16em] text-black/30">{label}</p><p className="text-xs leading-6 text-black/50">{text}</p></div>;
}

function Service({icon,no,title,text}:{icon:React.ReactNode;no:string;title:string;text:string}) {
  return <div className="grid gap-5 py-7 sm:grid-cols-[55px_1fr_auto] sm:items-start"><span className="text-xs text-white/25">{no}</span><div><h3 className="text-xl font-medium tracking-[-.025em]">{title}</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-white/44">{text}</p></div><span className="hidden rounded-full border border-white/10 p-3 text-white/50 sm:block">{icon}</span></div>;
}

function Process({no,title,text}:{no:string;title:string;text:string}) {
  return <div className="border-t border-black/10 pt-5"><p className="text-xs text-black/30">{no}</p><h3 className="mt-8 text-xl font-medium">{title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-black/48">{text}</p></div>;
}

function ProjectVisual({type}:{type:string}) {
  if(type==="lead") return (
    <div className="mx-auto h-full max-w-2xl overflow-hidden rounded-[24px] border border-black/10 bg-[#f8f5ed] shadow-xl">
      <div className="flex items-center justify-between border-b border-black/10 px-4 py-3"><div><p className="text-[10px] font-bold tracking-[.1em]">CEDARLINE</p><p className="text-[7px] uppercase tracking-[.15em] text-black/35">Fence & outdoor</p></div><span className="rounded-full bg-[#173f32] px-3 py-1.5 text-[8px] text-white">Free quote</span></div>
      <div className="grid min-h-[330px] md:grid-cols-[1.05fr_.95fr]">
        <div className="p-5 sm:p-7"><span className="rounded-full bg-[#e7eadf] px-2.5 py-1 text-[7px] uppercase tracking-[.1em]">Spokane & surrounding areas</span><p className="mt-5 max-w-sm text-3xl font-semibold leading-[.96] tracking-[-.05em]">A better fence starts with a clearer plan.</p><p className="mt-4 text-[10px] leading-5 text-black/46">Wood, vinyl, chain link, and ornamental installations with a straightforward quote process.</p><div className="mt-6 grid grid-cols-3 gap-2">{["Wood","Vinyl","Ornamental"].map(x=><div key={x} className="rounded-xl border border-black/8 bg-white p-2 text-center text-[8px]">{x}</div>)}</div></div>
        <div className="m-3 min-h-64 rounded-[18px] bg-[linear-gradient(155deg,#6a826d,#b9a788_65%,#e3d3bd)] relative overflow-hidden"><div className="absolute inset-x-3 bottom-3 rounded-xl bg-white/92 p-3 backdrop-blur"><p className="text-[8px] font-semibold">Get a fast project estimate</p><div className="mt-2 flex gap-1"><span className="h-7 flex-1 rounded-md bg-black/[.05]"/><span className="grid h-7 w-16 place-items-center rounded-md bg-[#173f32] text-[7px] text-white">Start</span></div></div></div>
      </div>
    </div>
  );

  if(type==="commerce") return (
    <div className="mx-auto h-full max-w-2xl overflow-hidden rounded-[24px] border border-black/10 bg-[#f7f5f0] shadow-xl">
      <div className="flex items-center justify-between border-b border-black/10 px-5 py-4"><span className="font-serif text-sm tracking-[.12em]">AERO / ONE</span><div className="flex gap-3 text-[8px] text-black/42"><span>Story</span><span>Specs</span><span>Bag 0</span></div></div>
      <div className="grid min-h-[330px] grid-cols-[1.08fr_.92fr]"><div className="relative bg-[radial-gradient(circle_at_52%_45%,#c9c7c0_0%,#8d8b84_45%,#55544f_100%)]"><div className="absolute left-[28%] top-[18%] h-[58%] w-[44%] rounded-[45%_45%_38%_38%] bg-[#23272c] shadow-2xl"/><div className="absolute left-[31%] top-[27%] h-[29%] w-[38%] rounded-[40%] border border-white/10"/></div><div className="p-5 sm:p-7"><p className="text-[7px] uppercase tracking-[.18em] text-black/35">Carry system / 01</p><p className="mt-3 font-serif text-3xl">Aero One</p><p className="mt-2 text-[9px] text-black/45">24L everyday travel pack</p><p className="mt-5 text-xl font-medium">$189</p><div className="mt-5 flex gap-2">{["#252a2e","#c6b89e","#73786e"].map(c=><span key={c} className="h-5 w-5 rounded-full border border-black/10" style={{background:c}}/>)}</div><div className="mt-6 rounded-full bg-black px-4 py-3 text-center text-[8px] font-semibold text-white">Add to bag</div></div></div>
    </div>
  );

  return (
    <div className="mx-auto h-full max-w-2xl overflow-hidden rounded-[24px] border border-white/8 bg-[#0a1118] text-white shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/8 px-5 py-4"><div><p className="text-[9px] font-semibold">Relay Operations</p><p className="mt-0.5 text-[7px] text-white/28">Workspace overview</p></div><span className="rounded-lg bg-cyan-300 px-2 py-1 text-[7px] font-semibold text-black">New workflow</span></div>
      <div className="p-4 sm:p-5"><div className="grid grid-cols-3 gap-2">{[["$84.2k","Revenue"],["1,248","Orders"],["96.4%","Success"]].map(([a,b])=><div key={b} className="rounded-xl border border-white/8 bg-white/[.035] p-3"><p className="text-sm font-semibold">{a}</p><p className="mt-1 text-[7px] uppercase tracking-[.1em] text-white/28">{b}</p></div>)}</div><div className="mt-3 grid gap-3 md:grid-cols-[1.35fr_.65fr]"><div className="flex h-40 items-end gap-1.5 rounded-xl border border-white/8 bg-white/[.025] p-3">{[28,42,36,58,50,72,64,78,70,88].map((h,i)=><div key={i} className="flex-1 rounded-t bg-cyan-300/55" style={{height:`${h}%`}}/>)}</div><div className="space-y-2">{["Review refund spike","Sync partner API","Approve campaign"].map((x,i)=><div key={x} className="rounded-xl border border-white/8 bg-white/[.025] p-3"><p className="text-[8px]">{x}</p><p className="mt-1 text-[7px] text-white/25">{i===0?"High priority":"In progress"}</p></div>)}</div></div></div>
    </div>
  );
}
