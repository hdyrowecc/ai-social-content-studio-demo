"use client";

import Link from "next/link";
import { ArrowLeft, Check, Minus, Moon, Plus, ShoppingBag, Sun, X } from "lucide-react";
import { useState } from "react";

const products = [
  {name:"Form Jacket", price:248, category:"Outerwear", image:"https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=1000&q=85"},
  {name:"Arc Knit", price:168, category:"Knitwear", image:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1000&q=85"},
  {name:"Line Trouser", price:189, category:"Tailoring", image:"https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1000&q=85"},
];

export default function EcommerceDemo(){
  const [dark,setDark]=useState(false);
  const [cartOpen,setCartOpen]=useState(false);
  const [menu,setMenu]=useState(false);
  const [selected,setSelected]=useState(products[0]);
  const [size,setSize]=useState("M");
  const [qty,setQty]=useState(1);
  const [cartQty,setCartQty]=useState(0);
  const [toast,setToast]=useState("");

  const page = dark ? "bg-[#11100f] text-[#f0ece4]" : "bg-[#f3efe7] text-[#161513]";
  const line = dark ? "border-white/10" : "border-black/10";
  const muted = dark ? "text-white/46" : "text-black/48";
  function notify(s:string){setToast(s);setTimeout(()=>setToast(""),2200)}
  function add(){setCartQty(q=>q+qty);setCartOpen(true);notify("Added to bag.");}

  return <main className={`min-h-screen transition-colors duration-300 ${page}`}>
    <header className={`sticky top-0 z-30 border-b backdrop-blur-xl ${line} ${dark?"bg-[#11100f]/90":"bg-[#f3efe7]/90"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <div className="flex items-center gap-4"><Link href="/" className={`rounded-full border p-2 ${line}`}><ArrowLeft size={16}/></Link><button onClick={()=>setMenu(v=>!v)} className="text-xs uppercase tracking-[.22em] md:hidden">Menu</button><nav className="hidden gap-6 text-xs uppercase tracking-[.18em] md:flex"><a href="#new">New</a><a href="#shop">Shop</a><a href="#story">Journal</a></nav></div>
        <button className="font-serif text-xl tracking-[.18em]">ATELIER / 09</button>
        <div className="flex items-center gap-2"><button onClick={()=>setDark(v=>!v)} className={`rounded-full border p-2 ${line}`}>{dark?<Sun size={16}/>:<Moon size={16}/>}</button><button onClick={()=>setCartOpen(true)} className={`flex items-center gap-2 rounded-full border px-3 py-2 text-xs ${line}`}><ShoppingBag size={15}/> Bag {String(cartQty).padStart(2,"0")}</button></div>
      </div>
      {menu && <div className={`border-t px-5 py-4 text-sm ${line}`}><a className="block py-2" href="#new" onClick={()=>setMenu(false)}>New arrivals</a><a className="block py-2" href="#shop" onClick={()=>setMenu(false)}>Shop collection</a><a className="block py-2" href="#story" onClick={()=>setMenu(false)}>Journal</a></div>}
    </header>

    <section id="new" className="mx-auto grid min-h-[72vh] max-w-7xl items-center gap-8 px-5 py-10 lg:grid-cols-[1.08fr_.92fr] lg:px-8">
      <div className="relative min-h-[520px] overflow-hidden rounded-[32px] bg-[#b9afa4]">
        <div className="absolute inset-0 bg-cover bg-center transition-all duration-500" style={{backgroundImage:`url('${selected.image}')`}}/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"/>
        <div className="absolute bottom-6 left-6 rounded-full bg-white/90 px-3 py-1.5 text-[10px] uppercase tracking-[.18em] text-black">Edition 04 · City form</div>
      </div>
      <div className="lg:px-8">
        <p className={`text-xs uppercase tracking-[.22em] ${muted}`}>New season / 2026</p>
        <h1 className="mt-5 max-w-xl font-serif text-5xl leading-[.95] sm:text-6xl">Quiet structure for everyday movement.</h1>
        <p className={`mt-6 max-w-lg text-sm leading-7 ${muted}`}>An editorial commerce concept built around restrained tailoring, tactile materials, and a deliberately simple buying flow.</p>
        <a href="#shop" className={`mt-8 inline-flex rounded-full border px-5 py-3 text-sm ${line}`}>Explore the collection</a>
      </div>
    </section>

    <section id="shop" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="mb-8 flex items-end justify-between"><div><p className={`text-xs uppercase tracking-[.22em] ${muted}`}>Collection</p><h2 className="mt-2 font-serif text-4xl">Core forms</h2></div><p className={`hidden text-sm sm:block ${muted}`}>3 pieces · free shipping this week</p></div>
      <div className="grid gap-6 md:grid-cols-3">{products.map(p=><button key={p.name} onClick={()=>{setSelected(p);document.getElementById("detail")?.scrollIntoView({behavior:"smooth"})}} className="text-left"><div className="aspect-[4/5] overflow-hidden rounded-[24px] bg-black/5"><div className="h-full w-full bg-cover bg-center transition duration-500 hover:scale-[1.03]" style={{backgroundImage:`url('${p.image}')`}}/></div><div className="mt-4 flex items-start justify-between gap-3"><div><p className="font-medium">{p.name}</p><p className={`mt-1 text-xs ${muted}`}>{p.category}</p></div><p className="text-sm">${p.price}</p></div></button>)}</div>
    </section>

    <section id="detail" className={`border-y ${line}`}>
      <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-2">
        <div className="min-h-[580px] bg-cover bg-center" style={{backgroundImage:`url('${selected.image}')`}}/>
        <div className="p-6 sm:p-10 lg:p-14">
          <p className={`text-xs uppercase tracking-[.2em] ${muted}`}>{selected.category}</p><h2 className="mt-3 font-serif text-5xl">{selected.name}</h2><p className="mt-3 text-lg">${selected.price}</p>
          <p className={`mt-6 max-w-md text-sm leading-7 ${muted}`}>Cut with a clean architectural line and softened for everyday wear. Designed as an elevated essential rather than a statement piece.</p>
          <div className="mt-8"><p className="mb-3 text-xs uppercase tracking-[.18em]">Size</p><div className="flex gap-2">{["S","M","L","XL"].map(s=><button key={s} onClick={()=>setSize(s)} className={`grid h-11 w-11 place-items-center rounded-full border text-sm ${size===s?(dark?"border-white bg-white text-black":"border-black bg-black text-white"):line}`}>{s}</button>)}</div></div>
          <div className="mt-8 flex items-center gap-3"><div className={`flex items-center rounded-full border ${line}`}><button onClick={()=>setQty(q=>Math.max(1,q-1))} className="p-3"><Minus size={15}/></button><span className="w-8 text-center text-sm">{qty}</span><button onClick={()=>setQty(q=>q+1)} className="p-3"><Plus size={15}/></button></div><button onClick={add} className={`flex-1 rounded-full px-5 py-3.5 text-sm font-semibold ${dark?"bg-[#f2eee6] text-black":"bg-black text-white"}`}>Add to bag · ${selected.price*qty}</button></div>
          <div className={`mt-8 grid gap-3 border-t pt-6 text-sm ${line} ${muted}`}><p className="flex items-center gap-2"><Check size={15}/> Complimentary standard shipping</p><p className="flex items-center gap-2"><Check size={15}/> 14-day returns in Demo Mode</p></div>
        </div>
      </div>
    </section>

    <section id="story" className="mx-auto max-w-4xl px-5 py-24 text-center"><p className={`text-xs uppercase tracking-[.22em] ${muted}`}>Journal / 04</p><h2 className="mt-5 font-serif text-5xl">Designed to disappear into your life.</h2><p className={`mx-auto mt-6 max-w-2xl text-sm leading-7 ${muted}`}>The visual system uses editorial spacing, restrained typography, tactile imagery, and low-friction commerce interactions to create a premium independent-brand experience.</p></section>

    {cartOpen && <div className="fixed inset-0 z-50 bg-black/35" onClick={()=>setCartOpen(false)}><aside onClick={e=>e.stopPropagation()} className={`ml-auto flex h-full w-full max-w-md flex-col p-6 shadow-2xl ${dark?"bg-[#151412]":"bg-[#f7f3eb]"}`}><div className="flex items-center justify-between"><div><p className="font-serif text-2xl">Your bag</p><p className={`mt-1 text-xs ${muted}`}>{cartQty} item{cartQty===1?"":"s"}</p></div><button onClick={()=>setCartOpen(false)} className={`rounded-full border p-2 ${line}`}><X size={16}/></button></div>{cartQty>0?<><div className={`mt-8 flex gap-4 border-y py-5 ${line}`}><div className="h-28 w-24 rounded-xl bg-cover bg-center" style={{backgroundImage:`url('${selected.image}')`}}/><div className="flex-1"><p>{selected.name}</p><p className={`mt-1 text-xs ${muted}`}>Size {size}</p><p className="mt-5 text-sm">${selected.price} × {cartQty}</p></div></div><div className="mt-auto"><div className="mb-4 flex justify-between"><span className={muted}>Subtotal</span><strong>${selected.price*cartQty}</strong></div><button onClick={()=>notify("Checkout opened in Demo Mode — no payment is processed.")} className={`w-full rounded-full py-4 text-sm font-semibold ${dark?"bg-white text-black":"bg-black text-white"}`}>Checkout</button></div></>:<div className="grid flex-1 place-items-center text-center"><div><ShoppingBag className="mx-auto opacity-35"/><p className="mt-3 font-serif text-2xl">Your bag is empty</p><p className={`mt-2 text-sm ${muted}`}>Choose a piece from the collection.</p></div></div>}</aside></div>}
    {toast && <div className={`fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 rounded-full px-4 py-2.5 text-sm shadow-xl ${dark?"bg-white text-black":"bg-black text-white"}`}>{toast}</div>}
  </main>
}
