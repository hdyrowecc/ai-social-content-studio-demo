"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Check, Clipboard, Download, History, LoaderCircle, LockKeyhole, Sparkles, WandSparkles, X } from "lucide-react";

type Platform = "Instagram" | "LinkedIn" | "TikTok" | "X";
const samples: Record<Platform, string[]> = {
  Instagram: [
    "Built for the commute. Ready for the gate. Meet the 24L carry that keeps your laptop, layers, and everyday essentials moving.",
    "Your everyday backpack should work just as hard Monday morning as it does Friday night. Lightweight, water-resistant, and made for the city.",
    "One bag. Workday organization. Weekend flexibility. Free shipping this week."
  ],
  LinkedIn: [
    "A better launch story starts with the customer problem, not the feature list. This campaign positions the product around movement, flexibility, and everyday utility.",
    "For modern ecommerce teams, content velocity matters most when brand consistency survives every channel adaptation.",
    "The campaign reframes a travel backpack as an everyday operating system for mobile work."
  ],
  TikTok: [
    "POV: your work bag finally stops feeling like luggage 👀 24L, laptop-ready, rain-safe, city-sized.",
    "3 reasons this is the commuter bag I would actually take on a weekend flight.",
    "Desk → train → airport. One carry, zero repacking."
  ],
  X: [
    "A commuter bag should not force you to choose between work organization and weekend flexibility.",
    "24L. Laptop-ready. Water-resistant. Built for people who move.",
    "The best travel products earn a place in your weekday routine first."
  ]
};

export default function AiDemo() {
  const [topic, setTopic] = useState("Launch our new lightweight travel backpack for city commuters");
  const [platform, setPlatform] = useState<Platform>("Instagram");
  const [tone, setTone] = useState("Confident");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(samples.Instagram);
  const [tab, setTab] = useState<"workspace"|"history"|"pricing">("workspace");
  const [toast, setToast] = useState("");
  const [login, setLogin] = useState(false);

  function notify(text:string){ setToast(text); setTimeout(()=>setToast(""),2200); }
  function generate(){
    if(!topic.trim()) return notify("Add a campaign topic first.");
    setLoading(true);
    setResult([]);
    setTimeout(()=>{ setResult(samples[platform]); setLoading(false); notify("3 drafts generated in Demo Mode."); },1250);
  }

  return (
    <main className="min-h-screen bg-[#07090f] text-white">
      <header className="sticky top-0 z-30 border-b border-white/8 bg-[#080a10]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="rounded-xl border border-white/8 p-2 text-white/50 hover:bg-white/5"><ArrowLeft size={16}/></Link>
            <div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-300 text-black"><Sparkles size={17}/></span><div><p className="text-sm font-semibold">Signal Studio</p><p className="text-[10px] uppercase tracking-[.18em] text-white/32">AI social workspace</p></div></div>
          </div>
          <nav className="hidden items-center gap-1 md:flex">{(["workspace","history","pricing"] as const).map(x=><button key={x} onClick={()=>setTab(x)} className={`rounded-xl px-3 py-2 text-sm capitalize ${tab===x?"bg-white/10":"text-white/45 hover:bg-white/5"}`}>{x}</button>)}</nav>
          <button onClick={()=>setLogin(true)} className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black">Log in</button>
        </div>
      </header>

      {tab==="workspace" && <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div><p className="text-xs uppercase tracking-[.22em] text-cyan-300">Campaign workspace</p><h1 className="mt-2 text-4xl font-semibold tracking-tight">Turn one brief into publish-ready drafts.</h1></div>
          <span className="w-fit rounded-full border border-emerald-400/20 bg-emerald-400/8 px-3 py-1.5 text-xs text-emerald-200">Demo Mode · simulated AI</span>
        </div>
        <div className="grid gap-6 lg:grid-cols-[.88fr_1.12fr]">
          <div className="glass rounded-[28px] p-6">
            <label className="mb-2 block text-xs text-white/48">Campaign topic</label>
            <textarea value={topic} onChange={e=>setTopic(e.target.value)} className="min-h-32 w-full rounded-2xl border border-white/9 bg-black/20 p-4 text-sm outline-none"/>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div><label className="mb-2 block text-xs text-white/48">Platform</label><select value={platform} onChange={e=>setPlatform(e.target.value as Platform)} className="w-full rounded-xl border border-white/9 bg-[#10131c] p-3 text-sm">{Object.keys(samples).map(p=><option key={p}>{p}</option>)}</select></div>
              <div><label className="mb-2 block text-xs text-white/48">Tone</label><select value={tone} onChange={e=>setTone(e.target.value)} className="w-full rounded-xl border border-white/9 bg-[#10131c] p-3 text-sm"><option>Confident</option><option>Warm</option><option>Playful</option><option>Minimal</option></select></div>
            </div>
            <button onClick={generate} disabled={loading} className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-300 px-4 py-3.5 font-semibold text-black disabled:opacity-60">{loading?<><LoaderCircle className="animate-spin" size={18}/>Generating…</>:<><WandSparkles size={18}/>Generate 3 drafts</>}</button>
            <p className="mt-3 text-center text-[11px] text-white/28">External AI service intentionally simulated for this portfolio build.</p>
          </div>

          <div className="glass rounded-[28px] p-6">
            <div className="mb-5 flex items-center justify-between"><div><p className="font-medium">Generated directions</p><p className="mt-1 text-sm text-white/38">Three angles adapted for {platform}.</p></div><button onClick={()=>notify("Export prepared in Demo Mode.")} className="rounded-xl border border-white/9 p-2.5 text-white/45 hover:bg-white/5"><Download size={16}/></button></div>
            {loading ? <div className="space-y-4">{[1,2,3].map(i=><div key={i} className="rounded-2xl border border-white/8 p-5"><div className="pulse-soft h-3 w-24 rounded bg-white/10"/><div className="pulse-soft mt-5 h-3 w-full rounded bg-white/8"/><div className="pulse-soft mt-2 h-3 w-4/5 rounded bg-white/8"/></div>)}</div> :
            <div className="space-y-4">{result.map((text,i)=><article key={i} className="rounded-2xl border border-white/8 bg-white/[.025] p-5"><div className="mb-3 flex items-center justify-between"><span className="text-xs text-cyan-200">Direction {i+1}</span><button onClick={async()=>{try{await navigator.clipboard.writeText(text)}catch{} notify("Copied to clipboard.")}} className="rounded-lg p-2 text-white/40 hover:bg-white/5"><Clipboard size={15}/></button></div><p className="text-sm leading-7 text-white/78">{text}</p><div className="mt-4 flex gap-2 text-[10px] text-white/35"><span className="rounded-full border border-white/8 px-2.5 py-1">{tone}</span><span className="rounded-full border border-white/8 px-2.5 py-1">{platform}</span></div></article>)}</div>}
          </div>
        </div>
      </section>}

      {tab==="history" && <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8"><h1 className="text-4xl font-semibold">Campaign history</h1><div className="glass mt-8 overflow-hidden rounded-[26px]">{[["Fall skincare launch","Instagram","Ready"],["B2B product update","LinkedIn","Ready"],["Weekend flash sale","TikTok","Draft"]].map((r,i)=><div key={i} className="grid gap-2 border-b border-white/7 px-6 py-5 last:border-0 sm:grid-cols-[1.4fr_.7fr_.5fr]"><p className="font-medium">{r[0]}</p><p className="text-sm text-white/45">{r[1]}</p><span className="w-fit rounded-full bg-white/6 px-2.5 py-1 text-[11px] text-white/55">{r[2]}</span></div>)}</div></section>}

      {tab==="pricing" && <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8"><div className="mb-10 text-center"><p className="text-xs uppercase tracking-[.2em] text-violet-300">Pricing concept</p><h1 className="mt-2 text-4xl font-semibold">Plans for every content rhythm.</h1></div><div className="grid gap-5 md:grid-cols-3">{[["Starter","$19"],["Growth","$49"],["Studio","$99"]].map((p,i)=><div key={p[0]} className={`rounded-[26px] p-6 ${i===1?"border border-violet-400/30 bg-violet-400/[.06]":"glass"}`}><p className="font-medium">{p[0]}</p><p className="mt-5 text-4xl font-semibold">{p[1]}<span className="text-sm font-normal text-white/35"> /mo</span></p><div className="my-6 space-y-3 text-sm text-white/52">{["Campaign workspace","History library","Export tools"].map(f=><p key={f} className="flex items-center gap-2"><Check size={14} className="text-cyan-200"/>{f}</p>)}</div><button onClick={()=>notify("Checkout is simulated in Demo Mode.")} className="w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black">Choose plan</button></div>)}</div></section>}

      {login && <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-5 backdrop-blur-sm"><div className="glass w-full max-w-md rounded-[28px] p-6"><div className="flex items-start justify-between"><div><div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-white text-black"><LockKeyhole size={18}/></div><h2 className="text-2xl font-semibold">Welcome back</h2><p className="mt-1 text-sm text-white/38">Demo login — no credentials required.</p></div><button onClick={()=>setLogin(false)} className="p-2 text-white/40"><X size={18}/></button></div><input placeholder="name@company.com" className="mt-6 w-full rounded-xl border border-white/9 bg-black/20 p-3.5 text-sm"/><button onClick={()=>{setLogin(false);notify("Signed in to demo workspace.")}} className="mt-3 w-full rounded-xl bg-white p-3.5 text-sm font-semibold text-black">Continue</button></div></div>}
      {toast && <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/10 bg-[#171a23] px-4 py-2.5 text-sm shadow-2xl">{toast}</div>}
    </main>
  );
}
