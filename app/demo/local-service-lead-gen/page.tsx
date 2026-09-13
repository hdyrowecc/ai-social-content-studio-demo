"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Clock3, Menu, Phone, ShieldCheck, Star, X } from "lucide-react";
import { useMemo, useState } from "react";

const services = [
  {name:"Wood Fencing",desc:"Warm, private, and easy to customize for sloped lots or unique property lines.",price:"From $38 / ft"},
  {name:"Vinyl Fencing",desc:"Low-maintenance privacy with clean lines and long-term color stability.",price:"From $42 / ft"},
  {name:"Chain Link",desc:"Practical security for yards, pets, rentals, and commercial properties.",price:"From $24 / ft"},
  {name:"Ornamental",desc:"Open sightlines with a refined, durable aluminum or steel profile.",price:"From $54 / ft"},
];

export default function LocalLeadGenDemo(){
  const [menu,setMenu]=useState(false);
  const [step,setStep]=useState<1|2|3>(1);
  const [service,setService]=useState("Wood Fencing");
  const [zip,setZip]=useState("");
  const [timeline,setTimeline]=useState("Within 30 days");
  const [name,setName]=useState("");
  const [contact,setContact]=useState("");
  const [toast,setToast]=useState("");
  const [activeService,setActiveService]=useState(0);

  const progress=useMemo(()=>step===1?33:step===2?66:100,[step]);
  function notify(s:string){setToast(s);setTimeout(()=>setToast(""),2400)}
  function next(){
    if(step===1 && !zip.trim()) return notify("Add your ZIP code to continue.");
    setStep(s=>Math.min(3,s+1) as 1|2|3);
  }
  function submit(){
    if(!name.trim()||!contact.trim()) return notify("Add your name and phone or email.");
    setStep(3); notify("Quote request submitted in Demo Mode.");
  }

  return <main className="demo-light min-h-screen bg-[#f6f3ec] text-[#15231d] pb-16 md:pb-0">
    <div className="bg-[#173f32] px-4 py-2 text-center text-[11px] font-medium tracking-wide text-white/80">Spec project · conversion-focused local service website · simulated quote form</div>

    <header className="sticky top-0 z-40 border-b border-[#173f32]/10 bg-[#f6f3ec]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="rounded-full border border-[#173f32]/12 p-2 text-[#173f32]/55 transition hover:bg-white"><ArrowLeft size={16}/></Link>
          <div><p className="text-sm font-black tracking-[.08em]">CEDARLINE</p><p className="text-[8px] uppercase tracking-[.22em] text-[#173f32]/45">Fence & outdoor</p></div>
        </div>
        <nav className="hidden items-center gap-6 text-xs font-semibold md:flex">
          <a href="#services">Services</a><a href="#why">Why Cedarline</a><a href="#quote">Get a quote</a>
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <button onClick={()=>notify("Calling is simulated in Demo Mode.")} className="flex items-center gap-2 rounded-full border border-[#173f32]/12 px-4 py-2.5 text-xs font-semibold"><Phone size={14}/> (509) 555-0148</button>
          <a href="#quote" className="rounded-full bg-[#173f32] px-4 py-2.5 text-xs font-semibold text-white">Free quote</a>
        </div>
        <button className="md:hidden" onClick={()=>setMenu(v=>!v)}>{menu?<X size={20}/>:<Menu size={20}/>}</button>
      </div>
      {menu&&<div className="border-t border-[#173f32]/10 px-5 py-4 md:hidden"><a onClick={()=>setMenu(false)} className="block py-2 text-sm" href="#services">Services</a><a onClick={()=>setMenu(false)} className="block py-2 text-sm" href="#why">Why Cedarline</a><a onClick={()=>setMenu(false)} className="block py-2 text-sm" href="#quote">Get a quote</a></div>}
    </header>

    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-16">
      <div className="flex flex-col justify-center">
        <div className="mb-5 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[.16em] text-[#173f32]/58"><span className="rounded-full bg-[#e4e8dd] px-3 py-1.5">Licensed & insured</span><span className="rounded-full bg-[#e4e8dd] px-3 py-1.5">Spokane area</span></div>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[.94] tracking-[-.055em] sm:text-6xl lg:text-7xl">A better fence starts with a clearer plan.</h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-[#173f32]/62">Wood, vinyl, chain link, and ornamental fencing with straightforward options, responsive communication, and a quote process designed for busy homeowners.</p>
        <div className="mt-7 flex flex-wrap gap-3"><a href="#quote" className="flex items-center gap-2 rounded-full bg-[#173f32] px-5 py-3.5 text-sm font-semibold text-white">Start free quote <ArrowRight size={16}/></a><button onClick={()=>notify("Call action simulated.")} className="flex items-center gap-2 rounded-full border border-[#173f32]/15 bg-white/45 px-5 py-3.5 text-sm font-semibold"><Phone size={15}/> Call now</button></div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#173f32]/52"><span className="flex items-center gap-2"><Star size={14} fill="currentColor"/> 4.9 homeowner rating</span><span className="flex items-center gap-2"><ShieldCheck size={15}/> Workmanship warranty</span><span className="flex items-center gap-2"><Clock3 size={15}/> Fast estimate turnaround</span></div>
      </div>

      <div className="relative min-h-[520px] overflow-hidden rounded-[32px] bg-[linear-gradient(155deg,#435f4f,#b0a282_62%,#d8c8ad)] shadow-2xl">
        <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(90deg,transparent_0_42%,rgba(64,43,25,.46)_42%_45%,transparent_45%_58%,rgba(64,43,25,.46)_58%_61%,transparent_61%)]"/>
        <div className="absolute inset-x-5 bottom-5 rounded-[22px] border border-white/40 bg-white/90 p-5 backdrop-blur-xl">
          <div className="flex items-start justify-between gap-4"><div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#173f32]/45">Fast estimate</p><p className="mt-1 text-lg font-semibold">Tell us the project. We’ll tell you the next step.</p></div><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#173f32] text-white"><ChevronRight size={16}/></span></div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-[10px]"><span className="rounded-xl bg-[#173f32]/6 p-3">1. Choose fence type</span><span className="rounded-xl bg-[#173f32]/6 p-3">2. Add property details</span></div>
        </div>
      </div>
    </section>

    <section id="services" className="border-y border-[#173f32]/10 bg-[#eeeadf]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="mb-9 grid gap-5 lg:grid-cols-[.72fr_1.28fr] lg:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#173f32]/40">Fence options</p><h2 className="mt-2 text-4xl font-semibold tracking-[-.05em]">One structure. Four clear service pages.</h2></div><p className="max-w-2xl text-sm leading-6 text-[#173f32]/54">The same page framework can support separate Google Ads landing pages while keeping typography, CTAs, image ratios, trust signals, and quote flow consistent.</p></div>
        <div className="grid gap-3 lg:grid-cols-[.42fr_.58fr]">
          <div className="space-y-2">{services.map((s,i)=><button key={s.name} onClick={()=>setActiveService(i)} className={`w-full rounded-2xl border p-4 text-left transition ${i===activeService?"border-[#173f32] bg-[#173f32] text-white":"border-[#173f32]/10 bg-white/45 hover:bg-white"}`}><div className="flex items-center justify-between"><span className="font-semibold">{s.name}</span><span className={`text-[10px] ${i===activeService?"text-white/55":"text-[#173f32]/38"}`}>{s.price}</span></div></button>)}</div>
          <div className="grid min-h-80 overflow-hidden rounded-[26px] border border-[#173f32]/10 bg-white lg:grid-cols-[.95fr_1.05fr]">
            <div className="bg-[linear-gradient(145deg,#6e806f,#b2a48b)]"/>
            <div className="p-6 lg:p-8"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#173f32]/35">Selected service</p><h3 className="mt-3 text-3xl font-semibold tracking-[-.04em]">{services[activeService].name}</h3><p className="mt-4 text-sm leading-7 text-[#173f32]/54">{services[activeService].desc}</p><div className="mt-7 space-y-3 text-xs text-[#173f32]/62">{["Clear material options","Mobile-first quote CTA","Reusable content blocks"].map(x=><p key={x} className="flex items-center gap-2"><CheckCircle2 size={15}/>{x}</p>)}</div><a href="#quote" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">Get a quote for this service <ArrowRight size={15}/></a></div>
          </div>
        </div>
      </div>
    </section>

    <section id="why" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
      <div className="grid gap-5 md:grid-cols-3">
        <Value no="01" title="Built for paid traffic" text="A clear headline, location context, service proof, repeated CTA, and short form reduce the distance between ad click and enquiry."/>
        <Value no="02" title="Built for mobile" text="Call and quote actions stay obvious on small screens, while content collapses into a simple scan path instead of a desktop layout squeezed down."/>
        <Value no="03" title="Built to stay consistent" text="Service pages share reusable sections, spacing, typography, image ratios, and conversion blocks so future edits do not create visual drift."/>
      </div>
    </section>

    <section id="quote" className="border-t border-[#173f32]/10 bg-[#173f32] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[.7fr_1.3fr] lg:px-8 lg:py-20">
        <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/38">Quote flow</p><h2 className="mt-3 text-4xl font-semibold tracking-[-.05em]">Short enough to finish. Useful enough to qualify the lead.</h2><p className="mt-5 max-w-md text-sm leading-7 text-white/48">This form is intentionally simulated. It demonstrates the interaction pattern for WordPress, Elementor, Gravity Forms, Fluent Forms, or a custom implementation.</p></div>
        <div className="rounded-[28px] bg-[#f8f6ef] p-5 text-[#173f32] sm:p-7">
          <div className="mb-6"><div className="flex items-center justify-between text-xs"><span className="font-semibold">Project quote</span><span className="text-[#173f32]/42">Step {step} of 3</span></div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#173f32]/8"><div className="h-full rounded-full bg-[#173f32] transition-all duration-300" style={{width:`${progress}%`}}/></div></div>

          {step===1&&<div>
            <p className="text-2xl font-semibold tracking-[-.03em]">What are you planning?</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">{services.map(s=><button key={s.name} onClick={()=>setService(s.name)} className={`rounded-2xl border p-4 text-left text-sm font-semibold transition ${service===s.name?"border-[#173f32] bg-[#173f32] text-white":"border-[#173f32]/12 bg-white"}`}>{s.name}</button>)}</div>
            <label className="mt-5 block text-xs font-semibold">ZIP code</label><input value={zip} onChange={e=>setZip(e.target.value)} placeholder="99206" className="mt-2 w-full rounded-2xl border border-[#173f32]/12 bg-white px-4 py-3.5 outline-none"/>
            <button onClick={next} className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#173f32] px-4 py-3.5 text-sm font-semibold text-white">Continue <ArrowRight size={15}/></button>
          </div>}

          {step===2&&<div>
            <p className="text-2xl font-semibold tracking-[-.03em]">When would you like to start?</p>
            <div className="mt-5 grid gap-3">{["As soon as possible","Within 30 days","1–3 months","Just researching"].map(x=><button key={x} onClick={()=>setTimeline(x)} className={`rounded-2xl border p-4 text-left text-sm font-semibold ${timeline===x?"border-[#173f32] bg-[#173f32] text-white":"border-[#173f32]/12 bg-white"}`}>{x}</button>)}</div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2"><input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" className="rounded-2xl border border-[#173f32]/12 bg-white px-4 py-3.5 outline-none"/><input value={contact} onChange={e=>setContact(e.target.value)} placeholder="Phone or email" className="rounded-2xl border border-[#173f32]/12 bg-white px-4 py-3.5 outline-none"/></div>
            <button onClick={submit} className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#173f32] px-4 py-3.5 text-sm font-semibold text-white">Request estimate <ArrowRight size={15}/></button>
          </div>}

          {step===3&&<div className="py-8 text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#dfe8df]"><CheckCircle2 size={26}/></span><h3 className="mt-5 text-2xl font-semibold">Request received.</h3><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#173f32]/52">Demo Mode: no data was sent. A real build would route the lead to email/CRM, preserve UTM parameters, and fire a confirmed conversion event after success.</p><button onClick={()=>{setStep(1);setName("");setContact("");setZip("")}} className="mt-6 rounded-full border border-[#173f32]/15 px-4 py-2.5 text-sm font-semibold">Try again</button></div>}
        </div>
      </div>
    </section>

    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-[#173f32]/15 bg-[#f8f6ef] p-2 md:hidden"><button onClick={()=>notify("Call action simulated.")} className="flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold"><Phone size={16}/> Call</button><a href="#quote" className="flex items-center justify-center gap-2 rounded-xl bg-[#173f32] py-3 text-sm font-semibold text-white">Free quote <ArrowRight size={15}/></a></div>
    {toast&&<div className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[#111f19] px-4 py-2.5 text-sm text-white shadow-xl md:bottom-5">{toast}</div>}
  </main>
}

function Value({no,title,text}:{no:string;title:string;text:string}){return <div className="rounded-[24px] border border-[#173f32]/10 bg-white/45 p-6"><p className="text-xs text-[#173f32]/32">{no}</p><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#173f32]/52">{text}</p></div>}
