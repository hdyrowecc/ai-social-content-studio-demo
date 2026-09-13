"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight, BarChart3, Check, ChevronRight, Clipboard, Clock3, Download,
  History, LayoutDashboard, LoaderCircle, LockKeyhole, Menu, MessageSquareText,
  Moon, Plus, Rocket, Sparkles, WandSparkles, X, Zap
} from "lucide-react";

type View = "home" | "workspace" | "history" | "pricing";
type Platform = "Instagram" | "LinkedIn" | "TikTok" | "X";

type HistoryItem = {
  title: string;
  platform: Platform;
  tone: string;
  time: string;
  status: "Ready" | "Draft";
};

const samples: Record<Platform, string[]> = {
  Instagram: [
    "Your launch deserves more than a product photo. Turn one campaign idea into scroll-stopping captions built for discovery, saves, and clicks.",
    "Less blank-page energy. More publish-ready content. Signal Studio turns a rough brief into on-brand social copy in seconds.",
    "One brief. Three angles. A week of content. That’s the workflow modern ecommerce teams actually need."
  ],
  LinkedIn: [
    "Marketing velocity is rarely blocked by ideas — it is blocked by the time it takes to turn those ideas into usable drafts. Signal Studio compresses that gap.",
    "A useful AI workflow should not replace brand judgment. It should remove repetitive drafting so teams can spend more time on positioning, proof, and distribution.",
    "The strongest content systems are repeatable: one campaign brief, multiple platform-ready outputs, and a clear review loop before publishing."
  ],
  TikTok: [
    "POV: your content calendar was empty 10 minutes ago 👀 One brief → multiple hooks → ready-to-post drafts.",
    "Stop rewriting the same launch copy for every channel. Build the angle once, then adapt it for the feed.",
    "The 15-second content workflow: choose the platform, set the tone, drop the offer, generate, tweak, post."
  ],
  X: [
    "One campaign brief shouldn’t become five separate writing sessions. Draft once. Adapt fast. Publish with intent.",
    "AI is most useful when it removes repetitive work without removing the human review step.",
    "Good content ops = fewer blank pages, faster iterations, clearer brand constraints."
  ]
};

const initialHistory: HistoryItem[] = [
  { title: "Fall skincare launch", platform: "Instagram", tone: "Warm", time: "12 min ago", status: "Ready" },
  { title: "B2B product update", platform: "LinkedIn", tone: "Confident", time: "Yesterday", status: "Ready" },
  { title: "Weekend flash sale", platform: "TikTok", tone: "Playful", time: "Sep 10", status: "Draft" },
];

export default function Page() {
  const [view, setView] = useState<View>("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [topic, setTopic] = useState("Launch our new lightweight travel backpack for city commuters");
  const [platform, setPlatform] = useState<Platform>("Instagram");
  const [tone, setTone] = useState("Confident");
  const [context, setContext] = useState("Water-resistant, laptop sleeve, 24L capacity, free shipping this week.");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(samples.Instagram);
  const [copied, setCopied] = useState<number | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [historyItems, setHistoryItems] = useState(initialHistory);

  const nav = useMemo(() => [
    { id: "workspace" as View, label: "Workspace" },
    { id: "history" as View, label: "History" },
    { id: "pricing" as View, label: "Pricing" },
  ], []);

  function notify(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(null), 2600);
  }

  function generate() {
    if (!topic.trim()) return notify("Add a campaign topic first.");
    setLoading(true);
    setResult([]);
    window.setTimeout(() => {
      setResult(samples[platform]);
      setLoading(false);
      setHistoryItems((items) => [
        { title: topic.slice(0, 34), platform, tone, time: "Just now", status: "Ready" },
        ...items
      ]);
      notify("3 social drafts generated in Demo Mode.");
    }, 1450);
  }

  async function copyText(text: string, index: number) {
    try { await navigator.clipboard.writeText(text); } catch {}
    setCopied(index);
    window.setTimeout(() => setCopied(null), 1500);
  }

  return (
    <main className="min-h-screen grid-bg">
      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#080a10]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button onClick={() => setView("home")} className="flex items-center gap-3 text-left">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-black shadow-lg shadow-violet-950/50"><Sparkles size={19}/></span>
            <span><strong className="block tracking-tight">Signal Studio</strong><span className="block text-[11px] uppercase tracking-[.24em] text-white/42">AI social workspace</span></span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map(item => <button key={item.id} onClick={() => setView(item.id)} className={`rounded-xl px-4 py-2 text-sm transition ${view===item.id?"bg-white/10 text-white":"text-white/58 hover:bg-white/6 hover:text-white"}`}>{item.label}</button>)}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <button onClick={() => setLoginOpen(true)} className="rounded-xl px-4 py-2 text-sm text-white/70 hover:bg-white/7">Log in</button>
            <button onClick={() => setView("workspace")} className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.02]">Open demo</button>
          </div>
          <button className="md:hidden" onClick={() => setMobileOpen(v => !v)}>{mobileOpen ? <X/> : <Menu/>}</button>
        </div>
        {mobileOpen && <div className="border-t border-white/8 px-5 py-3 md:hidden">{nav.map(item => <button key={item.id} onClick={()=>{setView(item.id);setMobileOpen(false)}} className="block w-full rounded-xl px-3 py-3 text-left text-sm text-white/70 hover:bg-white/6">{item.label}</button>)}</div>}
      </header>

      {view === "home" && <Home onOpen={() => setView("workspace")} onPricing={() => setView("pricing")} />}
      {view === "workspace" && (
        <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14 fade-in">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div><p className="mb-2 text-xs font-semibold uppercase tracking-[.24em] text-cyan-300">Campaign workspace</p><h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Turn one brief into publish-ready drafts.</h1></div>
            <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/7 px-3 py-1.5 text-xs text-emerald-200"><span className="h-2 w-2 rounded-full bg-emerald-300"/>Demo Mode — simulated AI</div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
            <div className="glass rounded-[28px] p-5 md:p-6">
              <div className="mb-6 flex items-center justify-between"><div><p className="font-medium">Content brief</p><p className="mt-1 text-sm text-white/43">Define the angle and channel.</p></div><span className="rounded-full bg-violet-500/12 px-3 py-1 text-xs text-violet-200">12 credits</span></div>
              <label className="mb-2 block text-xs font-medium text-white/55">Campaign topic</label>
              <textarea value={topic} onChange={e=>setTopic(e.target.value)} className="mb-5 min-h-28 w-full resize-none rounded-2xl border border-white/9 bg-black/20 p-4 text-sm outline-none transition focus:border-violet-400/55"/>
              <div className="mb-5 grid gap-4 sm:grid-cols-2">
                <div><label className="mb-2 block text-xs font-medium text-white/55">Platform</label><select value={platform} onChange={e=>setPlatform(e.target.value as Platform)} className="w-full rounded-2xl border border-white/9 bg-[#10131c] p-3.5 text-sm outline-none">{Object.keys(samples).map(p=><option key={p}>{p}</option>)}</select></div>
                <div><label className="mb-2 block text-xs font-medium text-white/55">Tone</label><select value={tone} onChange={e=>setTone(e.target.value)} className="w-full rounded-2xl border border-white/9 bg-[#10131c] p-3.5 text-sm outline-none"><option>Confident</option><option>Warm</option><option>Playful</option><option>Minimal</option></select></div>
              </div>
              <label className="mb-2 block text-xs font-medium text-white/55">Product context</label>
              <textarea value={context} onChange={e=>setContext(e.target.value)} className="mb-5 min-h-24 w-full resize-none rounded-2xl border border-white/9 bg-black/20 p-4 text-sm outline-none transition focus:border-violet-400/55"/>
              <button onClick={generate} disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-3.5 font-semibold text-black transition hover:brightness-110 disabled:opacity-60">{loading?<><LoaderCircle className="animate-spin" size={18}/>Generating concepts…</>:<><WandSparkles size={18}/>Generate 3 drafts</>}</button>
              <p className="mt-3 text-center text-[11px] text-white/32">No live AI API is used in this portfolio demo.</p>
            </div>

            <div className="glass rounded-[28px] p-5 md:p-6">
              <div className="mb-5 flex items-center justify-between"><div><p className="font-medium">Generated directions</p><p className="mt-1 text-sm text-white/43">Three distinct angles for {platform}.</p></div><button onClick={()=>notify("Export prepared in Demo Mode.")} className="flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-xs text-white/65 hover:bg-white/6"><Download size={14}/>Export</button></div>
              {loading ? <LoadingState/> : <div className="space-y-4">{result.map((text,index)=><article key={index} className="rounded-2xl border border-white/8 bg-white/[.025] p-5 transition hover:border-white/15"><div className="mb-4 flex items-center justify-between"><span className="text-xs font-medium text-cyan-200">Direction {index+1}</span><button onClick={()=>copyText(text,index)} className="rounded-lg p-2 text-white/45 hover:bg-white/7 hover:text-white">{copied===index?<Check size={16}/>:<Clipboard size={16}/>}</button></div><p className="text-[15px] leading-7 text-white/82">{text}</p><div className="mt-5 flex flex-wrap gap-2 text-[11px] text-white/38"><span className="rounded-full border border-white/8 px-2.5 py-1">{tone}</span><span className="rounded-full border border-white/8 px-2.5 py-1">{platform}</span><span className="rounded-full border border-white/8 px-2.5 py-1">Brand-safe</span></div></article>)}</div>}
            </div>
          </div>
        </section>
      )}
      {view === "history" && <HistoryView items={historyItems} onNew={()=>setView("workspace")}/>}
      {view === "pricing" && <Pricing onStart={()=>setView("workspace")} notify={notify}/>}

      {loginOpen && <LoginModal close={()=>setLoginOpen(false)} notify={notify}/>}
      {toast && <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/10 bg-[#171a23] px-4 py-2.5 text-sm shadow-2xl">{toast}</div>}
    </main>
  );
}

function Home({onOpen,onPricing}:{onOpen:()=>void;onPricing:()=>void}) {
  return <>
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-24 lg:pt-24 fade-in">
      <div><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/8 px-3 py-1.5 text-xs text-violet-200"><Zap size={14}/>Built for lean marketing teams</div><h1 className="max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-7xl">A faster way to turn campaign ideas into social content.</h1><p className="mt-6 max-w-xl text-base leading-7 text-white/55 md:text-lg">Signal Studio is a concept SaaS workspace for ecommerce and marketing teams that need consistent, platform-ready drafts without the repetitive rewriting.</p><div className="mt-8 flex flex-wrap gap-3"><button onClick={onOpen} className="flex items-center gap-2 rounded-2xl bg-white px-5 py-3.5 font-semibold text-black">Launch interactive demo <ArrowRight size={17}/></button><button onClick={onPricing} className="rounded-2xl border border-white/10 bg-white/4 px-5 py-3.5 font-medium text-white/75 hover:bg-white/7">View pricing</button></div><div className="mt-8 flex flex-wrap gap-5 text-xs text-white/38"><span>✓ No signup required</span><span>✓ Fully interactive</span><span>✓ Simulated AI workflow</span></div></div>
      <div className="relative"><div className="absolute -inset-6 rounded-[42px] bg-gradient-to-br from-violet-500/20 to-cyan-400/10 blur-3xl"/><div className="glass relative overflow-hidden rounded-[32px] p-3"><div className="rounded-[24px] border border-white/7 bg-[#0d1018] p-5"><div className="mb-6 flex items-center justify-between"><div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/70"/><span className="h-2.5 w-2.5 rounded-full bg-amber-300/70"/><span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70"/></div><span className="text-[10px] uppercase tracking-[.22em] text-white/30">Live workspace preview</span></div><div className="grid gap-3 sm:grid-cols-3"><Metric n="3.2×" label="Draft velocity"/><Metric n="14m" label="Time saved"/><Metric n="92%" label="Brand fit"/></div><div className="mt-4 rounded-2xl border border-white/8 bg-white/[.025] p-4"><p className="text-xs text-white/40">Campaign brief</p><p className="mt-2 text-sm text-white/78">Launch a lightweight commuter backpack with a sharper angle for urban travel.</p><div className="mt-4 flex gap-2"><span className="rounded-lg bg-violet-400/10 px-2.5 py-1 text-[11px] text-violet-200">Instagram</span><span className="rounded-lg bg-white/5 px-2.5 py-1 text-[11px] text-white/48">Confident</span></div></div><div className="mt-3 rounded-2xl border border-cyan-300/10 bg-cyan-300/[.035] p-4"><div className="mb-2 flex items-center gap-2 text-xs text-cyan-200"><Sparkles size={14}/>Generated direction</div><p className="text-sm leading-6 text-white/72">Built for the commute. Ready for the gate. One carry that keeps your laptop, layers, and everyday essentials moving.</p></div></div></div></div>
    </section>
    <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8"><div className="grid gap-4 md:grid-cols-3"><Feature icon={<MessageSquareText/>} title="Channel-aware drafts" text="Generate platform-specific copy instead of generic text blocks."/><Feature icon={<LayoutDashboard/>} title="Focused workflow" text="Brief, generate, review, export — no complicated workspace setup."/><Feature icon={<History/>} title="Campaign history" text="Keep past generations organized so teams can reuse strong angles."/></div></section>
  </>;
}

function Metric({n,label}:{n:string;label:string}) { return <div className="rounded-2xl border border-white/7 bg-white/[.025] p-3"><p className="text-xl font-semibold">{n}</p><p className="mt-1 text-[10px] uppercase tracking-[.14em] text-white/35">{label}</p></div> }
function Feature({icon,title,text}:{icon:React.ReactNode;title:string;text:string}) { return <div className="glass rounded-[26px] p-6"><div className="mb-5 grid h-10 w-10 place-items-center rounded-xl bg-white/6 text-cyan-200">{icon}</div><h3 className="font-medium">{title}</h3><p className="mt-2 text-sm leading-6 text-white/45">{text}</p></div> }
function LoadingState(){return <div className="space-y-4">{[0,1,2].map(i=><div key={i} className="rounded-2xl border border-white/8 bg-white/[.02] p-5"><div className="pulse-soft h-3 w-24 rounded-full bg-white/10"/><div className="pulse-soft mt-5 h-3 w-full rounded-full bg-white/8"/><div className="pulse-soft mt-2 h-3 w-5/6 rounded-full bg-white/8"/><div className="pulse-soft mt-2 h-3 w-2/3 rounded-full bg-white/8"/></div>)}</div>}

function HistoryView({items,onNew}:{items:HistoryItem[];onNew:()=>void}){
  return <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8 fade-in"><div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[.24em] text-violet-300">Library</p><h1 className="mt-2 text-4xl font-semibold tracking-tight">Campaign history</h1></div><button onClick={onNew} className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black"><Plus size={16}/>New campaign</button></div><div className="glass overflow-hidden rounded-[28px]"><div className="hidden grid-cols-[1.4fr_.8fr_.7fr_.6fr_.5fr] gap-4 border-b border-white/8 px-6 py-4 text-[11px] uppercase tracking-[.18em] text-white/30 md:grid"><span>Campaign</span><span>Platform</span><span>Tone</span><span>Created</span><span>Status</span></div>{items.map((item,i)=><div key={i} className="grid gap-2 border-b border-white/6 px-6 py-5 last:border-0 md:grid-cols-[1.4fr_.8fr_.7fr_.6fr_.5fr] md:items-center md:gap-4"><p className="font-medium">{item.title}</p><p className="text-sm text-white/52">{item.platform}</p><p className="text-sm text-white/52">{item.tone}</p><p className="flex items-center gap-1.5 text-sm text-white/38"><Clock3 size={13}/>{item.time}</p><span className={`w-fit rounded-full px-2.5 py-1 text-[11px] ${item.status==="Ready"?"bg-emerald-400/10 text-emerald-200":"bg-amber-300/10 text-amber-200"}`}>{item.status}</span></div>)}</div></section>
}

function Pricing({onStart,notify}:{onStart:()=>void;notify:(s:string)=>void}){
  const plans=[{name:"Starter",price:"$19",desc:"For solo creators",features:["80 generations / month","4 social channels","Campaign history"]},{name:"Growth",price:"$49",desc:"For lean marketing teams",features:["300 generations / month","Brand voice presets","CSV & copy export"],featured:true},{name:"Studio",price:"$99",desc:"For multi-brand teams",features:["Unlimited campaigns","5 team seats","Priority generation"]}];
  return <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8 fade-in"><div className="mx-auto mb-10 max-w-2xl text-center"><p className="text-xs font-semibold uppercase tracking-[.24em] text-cyan-300">Simple pricing</p><h1 className="mt-3 text-4xl font-semibold tracking-tight">Choose the workflow that fits your team.</h1><p className="mt-4 text-white/45">Pricing is included as part of the product concept. Checkout is simulated.</p></div><div className="grid gap-5 md:grid-cols-3">{plans.map(plan=><div key={plan.name} className={`rounded-[28px] p-6 ${plan.featured?"border border-violet-400/35 bg-violet-400/[.06] shadow-2xl shadow-violet-950/30":"glass"}`}><div className="flex items-start justify-between"><div><p className="font-medium">{plan.name}</p><p className="mt-1 text-sm text-white/38">{plan.desc}</p></div>{plan.featured&&<span className="rounded-full bg-violet-400/15 px-2.5 py-1 text-[10px] text-violet-200">Most popular</span>}</div><p className="mt-7 text-4xl font-semibold tracking-tight">{plan.price}<span className="text-sm font-normal text-white/35"> /mo</span></p><div className="my-6 space-y-3">{plan.features.map(f=><p key={f} className="flex items-center gap-2 text-sm text-white/62"><Check size={15} className="text-cyan-200"/>{f}</p>)}</div><button onClick={()=>{plan.featured?onStart():notify("Demo checkout opened — payment is simulated.")}} className={`w-full rounded-xl px-4 py-3 text-sm font-semibold ${plan.featured?"bg-white text-black":"border border-white/10 bg-white/4 text-white/76"}`}>Start demo</button></div>)}</div></section>
}

function LoginModal({close,notify}:{close:()=>void;notify:(s:string)=>void}){
  return <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-5 backdrop-blur-sm"><div className="glass w-full max-w-md rounded-[28px] p-6 fade-in"><div className="mb-6 flex items-start justify-between"><div><div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-white text-black"><LockKeyhole size={18}/></div><h2 className="text-2xl font-semibold">Welcome back</h2><p className="mt-1 text-sm text-white/42">Demo account — no credentials required.</p></div><button onClick={close} className="rounded-lg p-2 text-white/40 hover:bg-white/7"><X size={18}/></button></div><input placeholder="name@company.com" className="mb-3 w-full rounded-xl border border-white/9 bg-black/20 px-4 py-3.5 text-sm outline-none"/><input type="password" placeholder="••••••••" className="mb-4 w-full rounded-xl border border-white/9 bg-black/20 px-4 py-3.5 text-sm outline-none"/><button onClick={()=>{close();notify("Signed in to the demo workspace.")}} className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3.5 text-sm font-semibold text-black">Continue <ChevronRight size={16}/></button></div></div>
}
