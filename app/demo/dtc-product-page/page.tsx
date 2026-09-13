"use client";

import Link from "next/link";
import { ArrowLeft, Check, ChevronDown, Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

const hero="https://images.unsplash.com/photo-1674390521326-a7a8efc090f4?auto=format&fit=crop&fm=jpg&q=82&w=2200";
const detail="https://images.unsplash.com/photo-1606736675231-f0ec73c6d666?auto=format&fit=crop&fm=jpg&q=82&w=2200";
const shades=[{name:"Graphite",hex:"#22272b"},{name:"Stone",hex:"#b7aa93"},{name:"Moss",hex:"#697267"}];

export default function AeroOne(){
  const [shade,setShade]=useState(shades[0]);
  const [qty,setQty]=useState(1);
  const [cart,setCart]=useState(0);
  const [cartOpen,setCartOpen]=useState(false);
  const [faq,setFaq]=useState<number|null>(0);
  const [toast,setToast]=useState("");

  function add(){ setCart(c=>c+qty); setCartOpen(true); setToast("Added to bag"); setTimeout(()=>setToast(""),1800); }
  const lineTotal=189*qty;
  const cartTotal=189*cart;

  return <main className="min-h-screen bg-[#f2eee6] text-[#171717]">
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f2eee6]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-8">
        <div className="flex items-center gap-4"><Link href="/" className="grid h-9 w-9 place-items-center rounded-full border border-black/10"><ArrowLeft size={15}/></Link><span className="display-serif text-lg tracking-[.16em]">AERO / ONE</span></div>
        <nav className="hidden gap-7 text-xs font-medium md:flex"><a href="#story">Story</a><a href="#details">Details</a><a href="#compare">Compare</a><a href="#faq">FAQ</a></nav>
        <button onClick={()=>setCartOpen(true)} className="flex items-center gap-2 rounded-full border border-black/10 px-3.5 py-2.5 text-xs font-semibold"><ShoppingBag size={14}/> Bag {cart}</button>
      </div>
    </header>

    <section className="mx-auto grid max-w-[1440px] gap-6 px-5 py-6 lg:grid-cols-[1.12fr_.88fr] lg:px-8 lg:py-8">
      <div className="relative min-h-[620px] overflow-hidden rounded-[30px] bg-[#d9d5ce] lg:min-h-[760px]">
        <img src={hero} alt="Black travel backpack in a studio setting" className="absolute inset-0 h-full w-full object-cover"/>
        <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.16em] backdrop-blur">Carry system / 01</div>
        <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl bg-black/66 px-4 py-3 text-white backdrop-blur"><span className="text-[10px] uppercase tracking-[.16em] text-white/55">Commute → cabin → weekend</span><span className="text-xs font-semibold">24L</span></div>
      </div>

      <div className="flex flex-col justify-center py-6 lg:px-8">
        <p className="text-[10px] font-semibold uppercase tracking-[.21em] text-black/35">Everyday travel pack</p>
        <h1 className="display-serif mt-4 text-[clamp(4rem,7vw,7rem)] leading-[.86] tracking-[-.055em]">Aero<br/>One</h1>
        <p className="mt-7 max-w-lg text-base leading-7 text-black/55">A compact carry system for the space between work and travel: fast laptop access, a structured main compartment, and fewer places for essentials to disappear.</p>
        <div className="mt-8 flex items-end justify-between border-b border-black/10 pb-6"><div><p className="text-[10px] uppercase tracking-[.16em] text-black/35">Price</p><p className="mt-1 text-2xl font-semibold">$189</p></div><p className="text-xs text-black/38">30-day demo return policy</p></div>

        <div className="mt-7"><div className="flex items-center justify-between"><p className="text-xs font-semibold">Color — {shade.name}</p><span className="text-[10px] text-black/35">3 finishes</span></div><div className="mt-3 flex gap-3">{shades.map(s=><button key={s.name} aria-label={s.name} onClick={()=>setShade(s)} className={`h-10 w-10 rounded-full border-2 p-1 transition ${shade.name===s.name?"border-black":"border-transparent"}`}><span className="block h-full w-full rounded-full border border-black/10" style={{background:s.hex}}/></button>)}</div></div>

        <div className="mt-7 grid grid-cols-[auto_1fr] gap-3"><div className="flex items-center rounded-full border border-black/12 bg-white/30"><button onClick={()=>setQty(q=>Math.max(1,q-1))} className="p-3.5"><Minus size={14}/></button><span className="w-8 text-center text-sm">{qty}</span><button onClick={()=>setQty(q=>q+1)} className="p-3.5"><Plus size={14}/></button></div><button onClick={add} className="rounded-full bg-black px-5 py-3.5 text-sm font-semibold text-white">Add to bag · {"$"+lineTotal}</button></div>

        <div className="mt-7 grid grid-cols-2 gap-y-3 border-t border-black/10 pt-6 text-[11px] text-black/48">{["Fits up to 16″ laptop","Carry-on friendly","Water-resistant shell","Lifetime hardware warranty"].map(x=><p key={x} className="flex items-center gap-2"><Check size={13}/>{x}</p>)}</div>
      </div>
    </section>

    <section id="story" className="mt-8 bg-[#151515] text-white">
      <div className="mx-auto grid min-h-[78vh] max-w-[1440px] gap-10 px-5 py-16 lg:grid-cols-[.7fr_1.3fr] lg:items-center lg:px-8 lg:py-20">
        <div><p className="text-[10px] uppercase tracking-[.2em] text-white/32">Product story</p><h2 className="display-serif mt-4 text-5xl leading-[.94] tracking-[-.04em]">Less organization.<br/>Better organization.</h2><p className="mt-6 max-w-md text-sm leading-7 text-white/48">Instead of turning the bag into a wall of tiny pockets, the layout prioritizes the things you reach for most: laptop, bottle, small tech, and one open volume for the rest.</p></div>
        <div className="relative min-h-[560px] overflow-hidden rounded-[28px]"><img src={detail} alt="Travel backpack photographed on a wooden surface" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"/><div className="absolute bottom-5 left-5 right-5 grid gap-2 sm:grid-cols-3"><Feature stat="16″" label="Laptop access"/><Feature stat="24L" label="Main volume"/><Feature stat="920g" label="Empty weight"/></div></div>
      </div>
    </section>

    <section id="details" className="mx-auto max-w-[1440px] px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-black/34">Details</p><h2 className="display-serif mt-3 text-5xl leading-[.94]">A product page that answers buying questions in order.</h2></div><div className="divide-y divide-black/10 border-y border-black/10"><DetailRow no="01" title="Use case before specs" text="The first screen explains what the product is for before asking shoppers to care about materials or technical details."/><DetailRow no="02" title="Variants beside purchase" text="Color and quantity stay adjacent to price and add-to-cart so the shopping decision never becomes fragmented."/><DetailRow no="03" title="Objections near the end" text="Comparison and FAQs appear after the product story, where shoppers naturally begin asking whether it is right for them."/></div></div>
    </section>

    <section id="compare" className="border-y border-black/10 bg-[#e7e2d8]"><div className="mx-auto max-w-6xl px-5 py-20 lg:px-8"><p className="text-center text-[10px] font-semibold uppercase tracking-[.2em] text-black/34">Comparison</p><h2 className="display-serif mt-3 text-center text-5xl">Built for the in-between trip.</h2><div className="mt-10 overflow-hidden rounded-[26px] border border-black/10 bg-[#f7f4ed]">{[["","Aero One","Commuter","Travel pack"],["Opening","Clamshell","Top load","Clamshell"],["Laptop access","External","Internal","External"],["Organization","Focused","High","Medium"],["Weight","920g","1.2kg","1.1kg"]].map((row,i)=><div key={i} className={`grid grid-cols-4 gap-3 px-4 py-4 text-xs sm:px-6 ${i?"border-t border-black/8":""} ${i===0?"font-semibold text-black/70":"text-black/45"}`}><span className="font-semibold text-black/68">{row[0]}</span><span className="font-semibold text-black">{row[1]}</span><span>{row[2]}</span><span>{row[3]}</span></div>)}</div></div></section>

    <section id="faq" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[.65fr_1.35fr] lg:px-8 lg:py-24">
      <div><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-black/34">FAQ</p><h2 className="display-serif mt-3 text-5xl">The last reasons to hesitate.</h2></div>
      <div className="divide-y divide-black/10 border-y border-black/10">{[["Will it fit under an airline seat?","It fits under many standard seats, but exact dimensions vary by airline and aircraft."],["Is it waterproof?","The shell is designed for everyday rain and splashes. It is water-resistant, not submersible."],["What happens at checkout?","This is a portfolio demo. The cart and checkout feedback are simulated and no payment is processed."]].map(([q,a],i)=><button key={q} onClick={()=>setFaq(faq===i?null:i)} className="w-full py-5 text-left"><div className="flex items-center justify-between gap-5"><span className="font-semibold">{q}</span><ChevronDown size={16} className={`transition ${faq===i?"rotate-180":""}`}/></div>{faq===i&&<p className="mt-3 max-w-xl text-sm leading-6 text-black/48">{a}</p>}</button>)}</div>
    </section>

    <div className="sticky bottom-0 z-30 border-t border-black/10 bg-[#f2eee6]/95 p-3 backdrop-blur md:hidden"><button onClick={add} className="flex w-full items-center justify-between rounded-full bg-black px-5 py-3.5 text-sm font-semibold text-white"><span>Add Aero One · {shade.name}</span><span>$189</span></button></div>

    {cartOpen&&<div className="fixed inset-0 z-50 bg-black/45" onClick={()=>setCartOpen(false)}><aside onClick={e=>e.stopPropagation()} className="ml-auto flex h-full w-full max-w-md flex-col bg-[#f7f4ed] p-6 shadow-2xl"><div className="flex items-center justify-between"><div><p className="display-serif text-2xl">Your bag</p><p className="mt-1 text-xs text-black/35">{cart} item{cart===1?"":"s"}</p></div><button onClick={()=>setCartOpen(false)} className="rounded-full border border-black/10 p-2"><X size={15}/></button></div>{cart>0?<><div className="mt-8 flex gap-4 border-y border-black/10 py-5"><div className="h-28 w-24 overflow-hidden rounded-xl bg-[#d0cec8]"><img src={hero} alt="" className="h-full w-full object-cover"/></div><div className="flex-1"><p className="font-semibold">Aero One</p><p className="mt-1 text-xs text-black/38">{shade.name} · Qty {cart}</p><p className="mt-5 text-sm">{"$"+cartTotal}</p></div></div><div className="mt-auto"><div className="mb-4 flex justify-between"><span className="text-black/42">Subtotal</span><strong>{"$"+cartTotal}</strong></div><button onClick={()=>{setToast("Checkout is simulated — no payment processed.");setTimeout(()=>setToast(""),2200)}} className="w-full rounded-full bg-black py-4 text-sm font-semibold text-white">Checkout</button></div></>:<div className="grid flex-1 place-items-center"><p className="text-sm text-black/35">Your bag is empty.</p></div>}</aside></div>}
    {toast&&<div className="fixed bottom-20 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-black px-4 py-2.5 text-sm text-white shadow-xl md:bottom-5">{toast}</div>}
  </main>
}

function Feature({stat,label}:{stat:string;label:string}){return <div className="rounded-2xl border border-white/15 bg-black/35 p-4 text-white backdrop-blur"><p className="text-2xl font-semibold">{stat}</p><p className="mt-1 text-[9px] uppercase tracking-[.14em] text-white/48">{label}</p></div>}
function DetailRow({no,title,text}:{no:string;title:string;text:string}){return <div className="grid gap-4 py-6 sm:grid-cols-[55px_1fr]"><span className="text-xs text-black/25">{no}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-black/48">{text}</p></div></div>}
