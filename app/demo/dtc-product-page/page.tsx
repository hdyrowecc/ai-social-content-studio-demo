"use client";

import Link from "next/link";
import { ArrowLeft, Check, ChevronDown, Minus, Plus, ShoppingBag, Star, X } from "lucide-react";
import { useState } from "react";

const colors = [
  {name:"Graphite", hex:"#252a2e"},
  {name:"Stone", hex:"#b9ab92"},
  {name:"Moss", hex:"#70786c"},
];
const reviews = [
  ["5.0","Exactly the balance I wanted between a work bag and a weekend carry."],
  ["4.9","The organization is simple, not over-designed. Laptop access is excellent."],
  ["5.0","Looks compact but holds much more than I expected."],
];

export default function DtcProductDemo(){
  const [color,setColor]=useState(colors[0]);
  const [qty,setQty]=useState(1);
  const [cart,setCart]=useState(0);
  const [cartOpen,setCartOpen]=useState(false);
  const [faq,setFaq]=useState<number|null>(0);
  const [toast,setToast]=useState("");

  function notify(s:string){setToast(s);setTimeout(()=>setToast(""),2200)}
  function add(){setCart(c=>c+qty);setCartOpen(true);notify("Added to bag.");}

  return <main className="demo-light min-h-screen bg-[#f5f2eb] text-[#151617]">
    <div className="bg-black px-4 py-2 text-center text-[10px] uppercase tracking-[.18em] text-white/72">Spec project · premium DTC product landing page · simulated checkout</div>

    <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f5f2eb]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <div className="flex items-center gap-4"><Link href="/" className="rounded-full border border-black/10 p-2 text-black/48"><ArrowLeft size={16}/></Link><span className="font-serif text-lg tracking-[.16em]">AERO / ONE</span></div>
        <nav className="hidden gap-7 text-xs font-medium md:flex"><a href="#story">Story</a><a href="#compare">Compare</a><a href="#reviews">Reviews</a><a href="#faq">FAQ</a></nav>
        <button onClick={()=>setCartOpen(true)} className="flex items-center gap-2 rounded-full border border-black/10 px-3 py-2 text-xs font-semibold"><ShoppingBag size={15}/> Bag {cart}</button>
      </div>
    </header>

    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-8 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-12">
      <div className="grid gap-3 sm:grid-cols-[.22fr_.78fr]">
        <div className="order-2 grid grid-cols-3 gap-2 sm:order-1 sm:grid-cols-1">
          {[0,1,2].map((n)=><button key={n} className={`aspect-square rounded-[18px] border ${n===0?"border-black/35":"border-black/8"} bg-[radial-gradient(circle_at_50%_38%,#d9d7d1,#9b9993_70%,#7f7e79)]`}><BagShape small shade={color.hex}/></button>)}
        </div>
        <div className="order-1 relative min-h-[520px] overflow-hidden rounded-[30px] bg-[radial-gradient(circle_at_50%_42%,#d8d7d1_0%,#a19f98_58%,#7a7974_100%)] sm:order-2 lg:min-h-[650px]">
          <BagShape shade={color.hex}/>
          <span className="absolute left-5 top-5 rounded-full bg-white/88 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.14em]">Carry system / 01</span>
        </div>
      </div>

      <div className="flex flex-col justify-center lg:px-5">
        <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-black/38">24L everyday travel pack</p>
        <h1 className="mt-3 font-serif text-6xl tracking-[-.045em]">Aero One</h1>
        <div className="mt-4 flex items-center gap-3"><div className="flex text-black">{[1,2,3,4,5].map(i=><Star key={i} size={13} fill="currentColor"/>)}</div><span className="text-xs text-black/44">4.9 · 128 verified reviews</span></div>
        <p className="mt-7 max-w-lg text-base leading-7 text-black/58">One compact carry for commuting, short trips, and the hours in between. Built around fast laptop access, a structured main compartment, and fewer unnecessary pockets.</p>
        <p className="mt-7 text-2xl font-semibold">$189</p>

        <div className="mt-7"><div className="flex items-center justify-between"><p className="text-xs font-semibold">Color — {color.name}</p><span className="text-[10px] text-black/38">3 colors</span></div><div className="mt-3 flex gap-3">{colors.map(c=><button aria-label={c.name} key={c.name} onClick={()=>setColor(c)} className={`h-9 w-9 rounded-full border-2 p-1 ${color.name===c.name?"border-black":"border-transparent"}`}><span className="block h-full w-full rounded-full border border-black/8" style={{background:c.hex}}/></button>)}</div></div>

        <div className="mt-7 grid grid-cols-[auto_1fr] gap-3"><div className="flex items-center rounded-full border border-black/12"><button onClick={()=>setQty(q=>Math.max(1,q-1))} className="p-3.5"><Minus size={15}/></button><span className="w-8 text-center text-sm">{qty}</span><button onClick={()=>setQty(q=>q+1)} className="p-3.5"><Plus size={15}/></button></div><button onClick={add} className="rounded-full bg-black px-5 py-3.5 text-sm font-semibold text-white">Add to bag · {189*qty}</button></div>

        <div className="mt-7 grid gap-3 border-t border-black/10 pt-6 text-xs text-black/54 sm:grid-cols-2">{["Free shipping over $100","30-day returns","Lifetime hardware warranty","Fits up to 16″ laptop"].map(x=><p key={x} className="flex items-center gap-2"><Check size={14}/>{x}</p>)}</div>
      </div>
    </section>

    <section id="story" className="border-y border-black/10 bg-[#151617] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[.7fr_1.3fr] lg:px-8 lg:py-28">
        <div><p className="text-[10px] uppercase tracking-[.2em] text-white/35">Why this page works</p><h2 className="mt-3 max-w-md font-serif text-5xl leading-[.98]">Sell the use case before the feature list.</h2></div>
        <div className="grid gap-4 sm:grid-cols-3">
          <StoryCard no="01" title="Problem first" text="The hero answers what the bag is for before asking the shopper to care about materials or pocket counts."/>
          <StoryCard no="02" title="Proof in context" text="Benefits, comparison, reviews, and FAQs appear where a buyer naturally starts asking the next question."/>
          <StoryCard no="03" title="Purchase stays close" text="Variant, quantity, cart, and sticky mobile purchase actions remain obvious without dominating the entire page."/>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="min-h-[520px] rounded-[30px] bg-[linear-gradient(145deg,#bbb8af,#777772)] relative overflow-hidden"><BagShape shade={color.hex}/></div>
        <div className="flex flex-col justify-center lg:p-10"><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-black/35">Designed around movement</p><h2 className="mt-3 font-serif text-5xl">Workday structure. Weekend flexibility.</h2><p className="mt-6 max-w-xl text-sm leading-7 text-black/52">A clamshell opening keeps packing simple. The laptop sleeve is reachable without opening the main compartment. External storage is intentionally limited so essentials stay easy to find.</p><div className="mt-8 divide-y divide-black/10 border-y border-black/10">{[["16″","Laptop sleeve"],["24L","Main capacity"],["920g","Empty weight"],["18 × 12 × 7″","Carry-on friendly"]].map(([a,b])=><div key={b} className="flex items-center justify-between py-4"><span className="text-2xl font-semibold">{a}</span><span className="text-xs text-black/42">{b}</span></div>)}</div></div>
      </div>
    </section>

    <section id="compare" className="border-y border-black/10 bg-[#ebe7df]">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="mb-9 text-center"><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-black/35">Comparison</p><h2 className="mt-2 font-serif text-5xl">Built for the in-between trip.</h2></div>
        <div className="overflow-hidden rounded-[28px] border border-black/10 bg-[#f8f6f1]">
          {[
            ["Laptop access","External quick-access","Main compartment only","External quick-access"],
            ["Opening","Clamshell","Top load","Clamshell"],
            ["Weight","920g","1.25kg","1.08kg"],
            ["Organization","Focused","High","Medium"],
          ].map((row,i)=><div key={row[0]} className={`grid grid-cols-4 gap-2 px-4 py-4 text-xs sm:px-6 ${i?"border-t border-black/8":""}`}><strong>{row[0]}</strong><span className="font-semibold">{row[1]}</span><span className="text-black/42">{row[2]}</span><span className="text-black/42">{row[3]}</span></div>)}
        </div>
      </div>
    </section>

    <section id="reviews" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="mb-9 flex items-end justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-black/35">Social proof</p><h2 className="mt-2 font-serif text-5xl">What buyers need to hear.</h2></div><span className="hidden text-sm text-black/40 sm:block">Demo reviews · illustrative content</span></div>
      <div className="grid gap-4 md:grid-cols-3">{reviews.map(([score,text],i)=><div key={i} className="rounded-[24px] border border-black/10 bg-white/45 p-6"><div className="flex items-center justify-between"><span className="text-2xl font-semibold">{score}</span><div className="flex">{[1,2,3,4,5].map(j=><Star key={j} size={12} fill="currentColor"/>)}</div></div><p className="mt-7 text-sm leading-7 text-black/58">“{text}”</p><p className="mt-6 text-[10px] uppercase tracking-[.15em] text-black/30">Illustrative review {i+1}</p></div>)}</div>
    </section>

    <section id="faq" className="border-t border-black/10 bg-[#efebe3]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[.7fr_1.3fr] lg:px-8">
        <div><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-black/35">FAQ</p><h2 className="mt-2 font-serif text-5xl">Remove the last reasons to hesitate.</h2></div>
        <div className="divide-y divide-black/10 border-y border-black/10">{[
          ["Will it fit under an airline seat?","It fits under many standard airline seats, though exact limits vary by carrier and aircraft."],
          ["Is the fabric waterproof?","The shell is highly water-resistant for everyday weather. It is not designed for full submersion."],
          ["Can I return it after trying it at home?","This demo models a 30-day return policy. No real orders or returns are processed."],
        ].map(([q,a],i)=><button key={q} onClick={()=>setFaq(faq===i?null:i)} className="w-full py-5 text-left"><div className="flex items-center justify-between gap-5"><span className="font-semibold">{q}</span><ChevronDown size={17} className={`transition ${faq===i?"rotate-180":""}`}/></div>{faq===i&&<p className="mt-3 max-w-xl text-sm leading-6 text-black/48">{a}</p>}</button>)}</div>
      </div>
    </section>

    <div className="sticky bottom-0 z-30 border-t border-black/10 bg-[#f5f2eb]/94 p-3 backdrop-blur md:hidden"><button onClick={add} className="flex w-full items-center justify-between rounded-full bg-black px-5 py-3.5 text-sm font-semibold text-white"><span>Add Aero One · {color.name}</span><span>$189</span></button></div>

    {cartOpen&&<div className="fixed inset-0 z-50 bg-black/35" onClick={()=>setCartOpen(false)}><aside onClick={e=>e.stopPropagation()} className="ml-auto flex h-full w-full max-w-md flex-col bg-[#f8f6f1] p-6 shadow-2xl"><div className="flex items-center justify-between"><div><p className="font-serif text-2xl">Your bag</p><p className="mt-1 text-xs text-black/38">{cart} item{cart===1?"":"s"}</p></div><button onClick={()=>setCartOpen(false)} className="rounded-full border border-black/10 p-2"><X size={16}/></button></div>{cart>0?<><div className="mt-8 flex gap-4 border-y border-black/10 py-5"><div className="relative h-28 w-24 overflow-hidden rounded-xl bg-[#9a9993]"><BagShape small shade={color.hex}/></div><div className="flex-1"><p className="font-semibold">Aero One</p><p className="mt-1 text-xs text-black/40">{color.name} · Qty {cart}</p><p className="mt-5 text-sm">{189*cart}</p></div></div><div className="mt-auto"><div className="mb-4 flex justify-between"><span className="text-black/45">Subtotal</span><strong>{189*cart}</strong></div><button onClick={()=>notify("Checkout is simulated — no payment is processed.")} className="w-full rounded-full bg-black py-4 text-sm font-semibold text-white">Checkout</button></div></>:<div className="grid flex-1 place-items-center text-center"><div><ShoppingBag className="mx-auto text-black/22"/><p className="mt-3 font-serif text-2xl">Your bag is empty</p></div></div>}</aside></div>}
    {toast&&<div className="fixed bottom-20 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-black px-4 py-2.5 text-sm text-white shadow-xl md:bottom-5">{toast}</div>}
  </main>
}

function BagShape({shade,small=false}:{shade:string;small?:boolean}){
  return <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${small?"h-[60%] w-[46%]":"h-[55%] w-[42%]"} rounded-[38%_38%_32%_32%] shadow-2xl`} style={{background:shade}}><div className="absolute left-[9%] right-[9%] top-[17%] h-[32%] rounded-[35%] border border-white/10"/><div className="absolute -top-[7%] left-[32%] h-[12%] w-[36%] rounded-t-full border-4 border-b-0 border-black/35"/><div className="absolute bottom-[12%] left-[12%] right-[12%] h-px bg-white/8"/></div>
}
function StoryCard({no,title,text}:{no:string;title:string;text:string}){return <div className="rounded-[24px] border border-white/10 bg-white/[.035] p-5"><p className="text-xs text-white/24">{no}</p><h3 className="mt-8 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/44">{text}</p></div>}
