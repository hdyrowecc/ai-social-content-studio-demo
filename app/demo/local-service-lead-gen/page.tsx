"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const hero="https://images.unsplash.com/photo-1778166166419-792a411e197c?auto=format&fit=crop&fm=jpg&q=82&w=2200";
const detail="https://images.unsplash.com/photo-1759355787121-eaef014a501d?auto=format&fit=crop&fm=jpg&q=82&w=2200";

const services=[
  {name:"Wood",copy:"Warm, private, and flexible for changing grades or custom layouts.",meta:"Privacy · Custom"},
  {name:"Vinyl",copy:"Clean lines and low maintenance for modern residential properties.",meta:"Low care · Durable"},
  {name:"Ornamental",copy:"Open sightlines with a refined metal profile and long service life.",meta:"Architectural · Secure"},
  {name:"Chain link",copy:"Straightforward perimeter security for pets, rentals, and utility areas.",meta:"Practical · Fast"},
];

export default function Cedarline(){
  const [menu,setMenu]=useState(false);
  const [quoteOpen,setQuoteOpen]=useState(false);
  const [step,setStep]=useState(1);
  const [service,setService]=useState("Wood");
  const [zip,setZip]=useState("");
  const [contact,setContact]=useState("");
  const [done,setDone]=useState(false);

  function reset(){setStep(1);setDone(false);setZip("");setContact("")}

  return <main className="min-h-screen bg-[#f3f0e8] text-[#17352b] pb-16 md:pb-0">
    <header className="absolute inset-x-0 top-0 z-40 text-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 lg:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-black/10 backdrop-blur"><ArrowLeft size={15}/></Link>
          <div><p className="text-sm font-black tracking-[.11em]">CEDARLINE</p><p className="text-[8px] uppercase tracking-[.24em] text-white/60">Outdoor Co.</p></div>
        </div>
        <nav className="hidden items-center gap-7 text-xs font-semibold md:flex"><a href="#services">Services</a><a href="#process">Process</a><a href="#quote">Quote</a></nav>
        <div className="hidden gap-2 md:flex">
          <button onClick={()=>setQuoteOpen(true)} className="rounded-full border border-white/25 bg-black/10 px-4 py-2.5 text-xs font-semibold backdrop-blur">Call (509) 555-0148</button>
          <button onClick={()=>setQuoteOpen(true)} className="rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-[#17352b]">Free estimate</button>
        </div>
        <button onClick={()=>setMenu(v=>!v)} className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-black/10 backdrop-blur md:hidden">{menu?<X size={16}/>:<Menu size={16}/>}</button>
      </div>
      {menu&&<div className="mx-5 rounded-2xl border border-white/15 bg-[#17352b]/94 p-4 backdrop-blur md:hidden"><a onClick={()=>setMenu(false)} className="block py-2 text-sm" href="#services">Services</a><a onClick={()=>setMenu(false)} className="block py-2 text-sm" href="#process">Process</a><button onClick={()=>{setMenu(false);setQuoteOpen(true)}} className="mt-2 w-full rounded-full bg-white py-3 text-sm font-semibold text-[#17352b]">Start quote</button></div>}
    </header>

    <section className="relative min-h-[92vh] overflow-hidden">
      <img src={hero} alt="Modern home with contemporary fencing" className="absolute inset-0 h-full w-full object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-t from-[#10271f]/90 via-[#10271f]/18 to-black/30"/>
      <div className="relative mx-auto flex min-h-[92vh] max-w-[1440px] items-end px-5 pb-10 pt-32 lg:px-8 lg:pb-14">
        <div className="grid w-full gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div className="reveal">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[.22em] text-white/62">Residential fencing · Spokane, WA</p>
            <h1 className="max-w-5xl text-[clamp(3.7rem,8vw,8rem)] font-medium leading-[.84] tracking-[-.075em] text-white">Built for the edge of home.</h1>
          </div>
          <div className="reveal-d1 max-w-xl">
            <p className="text-base leading-7 text-white/72">Thoughtful fencing for privacy, security, and curb appeal — with a quote process that starts simple and stays clear.</p>
            <div className="mt-7 flex flex-wrap gap-3"><button onClick={()=>setQuoteOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-[#17352b]">Get a free estimate <ArrowRight size={15}/></button><a href="#services" className="rounded-full border border-white/25 bg-black/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur">Explore services</a></div>
          </div>
        </div>
      </div>
    </section>

    <section className="border-b border-[#17352b]/12 bg-[#e9e6dc]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-x divide-[#17352b]/10 px-5 lg:grid-cols-4 lg:px-8">
        {["Licensed & insured","Residential focus","Clear estimate process","Mobile-first contact"].map((x,i)=><div key={x} className="px-4 py-5 text-center text-[10px] font-semibold uppercase tracking-[.16em] text-[#17352b]/52">{x}</div>)}
      </div>
    </section>

    <section id="services" className="mx-auto max-w-[1440px] px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
        <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#17352b]/38">Services</p><h2 className="mt-3 text-5xl font-medium leading-[.94] tracking-[-.055em]">One visual system.<br/>Four service paths.</h2></div>
        <p className="max-w-2xl text-sm leading-7 text-[#17352b]/55">Each service page follows the same conversion structure: specific promise, material fit, visual proof, location relevance, and one obvious next action. That keeps paid-traffic landing pages consistent instead of slowly drifting apart.</p>
      </div>

      <div className="mt-12 grid gap-3 md:grid-cols-2">
        {services.map((s,i)=><article key={s.name} className={`group min-h-72 overflow-hidden rounded-[26px] border border-[#17352b]/10 p-6 transition ${i===0?"bg-[#17352b] text-white":"bg-white/45 hover:bg-white"}`}>
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-start justify-between"><span className={`text-xs ${i===0?"text-white/35":"text-[#17352b]/28"}`}>0{i+1}</span><span className={`text-[9px] uppercase tracking-[.16em] ${i===0?"text-white/42":"text-[#17352b]/35"}`}>{s.meta}</span></div>
            <div><h3 className="text-3xl font-medium tracking-[-.04em]">{s.name}</h3><p className={`mt-3 max-w-md text-sm leading-6 ${i===0?"text-white/55":"text-[#17352b]/50"}`}>{s.copy}</p><button onClick={()=>{setService(s.name);setQuoteOpen(true)}} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">Quote this service <ArrowRight size={14}/></button></div>
          </div>
        </article>)}
      </div>
    </section>

    <section className="grid min-h-[78vh] lg:grid-cols-[1.08fr_.92fr]">
      <div className="relative min-h-[560px] overflow-hidden">
        <img src={detail} alt="Modern residential exterior with wood fencing" className="absolute inset-0 h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"/>
      </div>
      <div id="process" className="flex flex-col justify-center bg-[#17352b] p-6 text-white sm:p-10 lg:p-14">
        <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/34">How it works</p>
        <h2 className="mt-3 max-w-xl text-5xl font-medium leading-[.95] tracking-[-.055em]">From ad click to qualified lead without a maze.</h2>
        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          <Step no="01" title="Choose the project" text="The first screen asks only what is necessary to route the lead correctly."/>
          <Step no="02" title="Add location & timing" text="ZIP and timeline give enough context without turning the form into a questionnaire."/>
          <Step no="03" title="Confirm contact" text="Success is immediate, measurable, and ready to connect to CRM or conversion tracking."/>
        </div>
      </div>
    </section>

    <section id="quote" className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 lg:grid-cols-[.72fr_1.28fr] lg:px-8 lg:py-28">
      <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#17352b]/38">Quote flow</p><h2 className="mt-3 text-5xl font-medium leading-[.95] tracking-[-.055em]">Short enough to finish.</h2><p className="mt-5 max-w-md text-sm leading-7 text-[#17352b]/50">This prototype keeps the request intentionally small. In a production build, the same flow could connect to WordPress forms, HubSpot, email, CRM, and Google Ads conversion events.</p></div>
      <QuoteCard service={service} setService={setService} zip={zip} setZip={setZip} contact={contact} setContact={setContact} step={step} setStep={setStep} done={done} setDone={setDone} reset={reset}/>
    </section>

    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-[#17352b]/12 bg-[#f3f0e8]/96 p-2 backdrop-blur md:hidden"><button onClick={()=>setQuoteOpen(true)} className="flex items-center justify-center gap-2 py-3 text-sm font-semibold"><Phone size={15}/> Call</button><button onClick={()=>setQuoteOpen(true)} className="rounded-full bg-[#17352b] py-3 text-sm font-semibold text-white">Free estimate</button></div>

    {quoteOpen&&<div className="fixed inset-0 z-50 grid place-items-center bg-black/55 p-4 backdrop-blur-sm" onClick={()=>setQuoteOpen(false)}><div onClick={e=>e.stopPropagation()} className="w-full max-w-xl rounded-[28px] bg-[#f7f4ec] p-5 text-[#17352b] shadow-2xl sm:p-7"><div className="mb-5 flex items-center justify-between"><div><p className="text-xs font-semibold">Fast estimate</p><p className="mt-1 text-[10px] text-[#17352b]/38">Demo Mode · nothing is submitted</p></div><button onClick={()=>setQuoteOpen(false)} className="rounded-full border border-[#17352b]/10 p-2"><X size={15}/></button></div><QuoteCard service={service} setService={setService} zip={zip} setZip={setZip} contact={contact} setContact={setContact} step={step} setStep={setStep} done={done} setDone={setDone} reset={reset}/></div></div>}
  </main>
}

function Step({no,title,text}:{no:string;title:string;text:string}){return <div className="grid gap-3 py-5 sm:grid-cols-[55px_1fr]"><span className="text-xs text-white/25">{no}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/44">{text}</p></div></div>}

function QuoteCard({service,setService,zip,setZip,contact,setContact,step,setStep,done,setDone,reset}:{service:string;setService:(v:string)=>void;zip:string;setZip:(v:string)=>void;contact:string;setContact:(v:string)=>void;step:number;setStep:(v:number)=>void;done:boolean;setDone:(v:boolean)=>void;reset:()=>void}){
  if(done) return <div className="rounded-[26px] border border-[#17352b]/10 bg-white p-7 text-center"><span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#e5eee7]"><Check size={22}/></span><h3 className="mt-4 text-2xl font-semibold">Request captured.</h3><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#17352b]/48">Demo Mode: no information was sent. A real implementation would route the lead and confirm tracking only after success.</p><button onClick={reset} className="mt-6 rounded-full border border-[#17352b]/12 px-4 py-2.5 text-sm font-semibold">Start over</button></div>;

  return <div className="rounded-[26px] border border-[#17352b]/10 bg-white p-5 sm:p-7">
    <div className="mb-6 flex items-center justify-between"><div><p className="text-[10px] uppercase tracking-[.18em] text-[#17352b]/35">Project estimate</p><p className="mt-1 text-lg font-semibold">{step===1?"What are you planning?":"Where should we follow up?"}</p></div><span className="text-xs text-[#17352b]/35">0{step}/02</span></div>
    {step===1?<><div className="grid grid-cols-2 gap-2">{services.map(s=><button key={s.name} onClick={()=>setService(s.name)} className={`rounded-2xl border p-3.5 text-left text-sm font-semibold ${service===s.name?"border-[#17352b] bg-[#17352b] text-white":"border-[#17352b]/10"}`}>{s.name}</button>)}</div><input value={zip} onChange={e=>setZip(e.target.value)} placeholder="ZIP code" className="mt-3 w-full rounded-2xl border border-[#17352b]/10 px-4 py-3.5 outline-none"/><button onClick={()=>zip.trim()&&setStep(2)} className="mt-3 w-full rounded-full bg-[#17352b] py-3.5 text-sm font-semibold text-white">Continue</button></>:<><input value={contact} onChange={e=>setContact(e.target.value)} placeholder="Phone or email" className="w-full rounded-2xl border border-[#17352b]/10 px-4 py-3.5 outline-none"/><div className="mt-3 grid grid-cols-2 gap-2"><button onClick={()=>setStep(1)} className="rounded-full border border-[#17352b]/12 py-3.5 text-sm font-semibold">Back</button><button onClick={()=>contact.trim()&&setDone(true)} className="rounded-full bg-[#17352b] py-3.5 text-sm font-semibold text-white">Request estimate</button></div></>}
  </div>
}
