import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Code2, LayoutDashboard, ShoppingBag, Target } from "lucide-react";

const houseA="https://images.unsplash.com/photo-1778166166419-792a411e197c?auto=format&fit=crop&fm=jpg&q=82&w=2200";
const bagA="https://images.unsplash.com/photo-1674390521326-a7a8efc090f4?auto=format&fit=crop&fm=jpg&q=82&w=2200";

export default function Home(){
  return <main className="min-h-screen bg-[#f3f0e9] text-[#111214]">
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f3f0e9]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-[-.03em]">ROECC</p>
          <p className="mt-0.5 text-[9px] uppercase tracking-[.24em] text-black/35">Web product developer</p>
        </div>
        <nav className="hidden items-center gap-7 text-xs font-medium md:flex">
          <a href="#work" className="text-black/52 transition hover:text-black">Selected work</a>
          <a href="#capabilities" className="text-black/52 transition hover:text-black">Capabilities</a>
          <a href="#contact" className="text-black/52 transition hover:text-black">Contact</a>
        </nav>
        <a href="#work" className="flex items-center gap-2 rounded-full border border-black/12 bg-white/60 px-4 py-2 text-xs font-semibold transition hover:bg-white">
          View work <ArrowDownRight size={14}/>
        </a>
      </div>
    </header>

    <section className="mx-auto grid min-h-[82vh] max-w-[1500px] items-end gap-12 px-5 pb-14 pt-16 lg:grid-cols-[1.2fr_.8fr] lg:px-8 lg:pb-20 lg:pt-24">
      <div className="reveal">
        <p className="mb-6 text-[10px] font-semibold uppercase tracking-[.23em] text-black/35">Selected freelance portfolio · 2026</p>
        <h1 className="max-w-5xl text-[clamp(4rem,9vw,8.8rem)] font-medium leading-[.84] tracking-[-.08em]">
          Useful websites.<br/>Built with taste.
        </h1>
      </div>
      <div className="reveal-d1 lg:pb-2">
        <p className="max-w-lg text-[16px] leading-8 text-black/55">
          I design and build conversion-focused websites, ecommerce experiences, and product interfaces for businesses that need clarity, polish, and working frontend code.
        </p>
        <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-black/10 pt-5 text-xs">
          <Meta label="Focus" value="Commercial web"/>
          <Meta label="Build" value="Responsive"/>
          <Meta label="Approach" value="Clarity first"/>
          <Meta label="Output" value="Interactive"/>
        </div>
      </div>
    </section>

    <div className="overflow-hidden border-y border-black/10 bg-[#e9e5dc] py-3">
      <div className="marquee flex w-[200%] gap-8 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[.22em] text-black/35">
        {Array.from({length:2}).map((_,i)=><div key={i} className="flex w-1/2 justify-around">
          <span>Lead generation websites</span><span>Ecommerce product pages</span><span>SaaS dashboards</span><span>Responsive rebuilds</span><span>Frontend systems</span>
        </div>)}
      </div>
    </div>

    <section id="work">
      <article className="relative min-h-[88vh] overflow-hidden bg-black text-white">
        <img src={houseA} alt="Modern residence with a contemporary fence" className="absolute inset-0 h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10"/>
        <div className="relative mx-auto flex min-h-[88vh] max-w-[1500px] flex-col justify-between px-5 py-7 lg:px-8 lg:py-10">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[.2em] text-white/58">
            <span>01 · Local service / lead generation</span><span className="hidden sm:block">Featured project</span>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <h2 className="text-[clamp(3.4rem,7vw,7rem)] font-medium leading-[.88] tracking-[-.065em]">Cedarline<br/>Outdoor Co.</h2>
            </div>
            <div className="max-w-xl">
              <p className="text-base leading-7 text-white/70">A high-conversion local service website concept built around paid traffic, mobile calls, consistent service pages, and a friction-light quote flow.</p>
              <div className="mt-6 flex flex-wrap gap-2 text-[10px] text-white/58">
                {["Landing pages","Quote flow","Mobile CTA","Service system"].map(x=><span key={x} className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 backdrop-blur">{x}</span>)}
              </div>
              <Link href="/demo/local-service-lead-gen" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">
                Explore project <ArrowUpRight size={15}/>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <article className="grid min-h-[86vh] bg-[#e8e3d8] lg:grid-cols-[.92fr_1.08fr]">
        <div className="flex flex-col justify-between p-5 sm:p-8 lg:p-12">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[.2em] text-black/35">
            <span>02 · Ecommerce / DTC</span><span>Product page</span>
          </div>
          <div className="py-14 lg:py-8">
            <p className="display-serif text-[clamp(3.8rem,7vw,7rem)] leading-[.88] tracking-[-.055em]">Aero<br/>One</p>
            <p className="mt-7 max-w-lg text-base leading-7 text-black/52">A premium product experience that makes the buying path feel considered: product story, variants, comparison, FAQ, sticky purchase action, and cart.</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="flex gap-4 text-[10px] uppercase tracking-[.15em] text-black/36"><span>PDP</span><span>Cart</span><span>CRO</span><span>Mobile</span></div>
            <Link href="/demo/dtc-product-page" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white">Explore project <ArrowUpRight size={15}/></Link>
          </div>
        </div>
        <div className="relative min-h-[620px] overflow-hidden lg:min-h-full">
          <img src={bagA} alt="Black travel backpack photographed in studio" className="absolute inset-0 h-full w-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent"/>
          <div className="absolute bottom-5 left-5 rounded-full bg-white/88 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.15em] backdrop-blur">Premium DTC concept</div>
        </div>
      </article>

      <article className="min-h-[88vh] bg-[#0b0d10] text-white">
        <div className="mx-auto grid min-h-[88vh] max-w-[1500px] gap-10 px-5 py-14 lg:grid-cols-[.7fr_1.3fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <div className="mb-7 flex items-center gap-2 text-[10px] uppercase tracking-[.2em] text-white/34"><LayoutDashboard size={13}/> 03 · B2B SaaS</div>
            <h2 className="text-[clamp(3.4rem,6vw,6rem)] font-medium leading-[.9] tracking-[-.06em]">Relay<br/>Operations</h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/50">A mature operations dashboard focused on information hierarchy rather than dashboard decoration: risk, throughput, workflows, search, and detail.</p>
            <Link href="/demo/saas-operations-dashboard" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#d8ff4f] px-5 py-3 text-sm font-semibold text-black">Explore project <ArrowUpRight size={15}/></Link>
          </div>
          <DashboardPreview/>
        </div>
      </article>
    </section>

    <section id="capabilities" className="mx-auto max-w-[1500px] px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[.62fr_1.38fr]">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-black/32">Capabilities</p>
          <h2 className="mt-3 max-w-md text-4xl font-medium tracking-[-.05em]">Work that solves a visible business problem.</h2>
        </div>
        <div className="divide-y divide-black/10 border-y border-black/10">
          <Capability no="01" icon={<Target size={18}/>} title="Conversion websites" text="Service sites, campaign landing pages, quote forms, responsive rebuilds, and clearer user journeys."/>
          <Capability no="02" icon={<ShoppingBag size={18}/>} title="Ecommerce experiences" text="Product pages, collection flows, variants, cart UX, responsive storefront work, and conversion-focused page structure."/>
          <Capability no="03" icon={<Code2 size={18}/>} title="Product frontend" text="Next.js / React dashboards, admin panels, portals, Figma-to-code work, and modernization of existing interfaces."/>
        </div>
      </div>
    </section>

    <footer id="contact" className="border-t border-black/10 bg-[#111214] text-white">
      <div className="mx-auto max-w-[1500px] px-5 py-14 lg:px-8 lg:py-20">
        <p className="text-[10px] uppercase tracking-[.2em] text-white/30">Available for selected freelance work</p>
        <p className="mt-4 max-w-5xl text-[clamp(2.6rem,6vw,6rem)] font-medium leading-[.93] tracking-[-.06em]">Need a web experience that feels clearer, sharper, and more complete?</p>
        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5 text-[10px] uppercase tracking-[.16em] text-white/28"><span>Roecc · 2026</span><span>Independent spec portfolio</span></div>
      </div>
    </footer>
  </main>
}

function Meta({label,value}:{label:string;value:string}){return <div><p className="text-[9px] uppercase tracking-[.18em] text-black/30">{label}</p><p className="mt-1 font-medium text-black/68">{value}</p></div>}

function Capability({no,icon,title,text}:{no:string;icon:React.ReactNode;title:string;text:string}){
  return <div className="grid gap-5 py-7 sm:grid-cols-[52px_1fr_auto] sm:items-start"><span className="text-xs text-black/28">{no}</span><div><h3 className="text-xl font-medium tracking-[-.025em]">{title}</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-black/48">{text}</p></div><span className="hidden rounded-full border border-black/10 p-3 text-black/48 sm:block">{icon}</span></div>
}

function DashboardPreview(){
  return <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#11161c] soft-shadow">
    <div className="flex items-center justify-between border-b border-white/8 px-5 py-4"><div><p className="text-xs font-semibold">Relay / Overview</p><p className="mt-1 text-[9px] text-white/28">Operations workspace</p></div><span className="rounded-lg bg-[#d8ff4f] px-2.5 py-1.5 text-[9px] font-semibold text-black">New workflow</span></div>
    <div className="p-4 sm:p-5">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{[["$84.2k","Revenue"],["28","Workflows"],["96.4%","Success"],["$12.8k","At risk"]].map(([a,b])=><div key={b} className="rounded-2xl border border-white/8 bg-white/[.03] p-3"><p className="text-lg font-semibold">{a}</p><p className="mt-1 text-[8px] uppercase tracking-[.12em] text-white/25">{b}</p></div>)}</div>
      <div className="mt-3 grid gap-3 lg:grid-cols-[1.3fr_.7fr]">
        <div className="rounded-2xl border border-white/8 bg-white/[.025] p-4">
          <div className="flex h-52 items-end gap-2">{[32,44,38,58,52,72,64,82,70,92].map((h,i)=><div key={i} className="flex-1 rounded-t bg-[#d8ff4f]/70" style={{height:h+"%"}}/>)}</div>
        </div>
        <div className="space-y-2">{["Refund review","Partner sync","Renewal queue"].map((x,i)=><div key={x} className="rounded-2xl border border-white/8 bg-white/[.025] p-4"><p className="text-xs font-medium">{x}</p><p className="mt-2 text-[9px] text-white/25">{i===0?"Needs attention":"In progress"}</p></div>)}</div>
      </div>
    </div>
  </div>
}
