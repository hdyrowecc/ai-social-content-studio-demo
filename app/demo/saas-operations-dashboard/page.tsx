"use client";

import Link from "next/link";
import { ArrowLeft, Bell, ChevronRight, Command, Download, LayoutDashboard, Menu, Plus, Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const chart=[
  {d:"Mon",v:42},{d:"Tue",v:48},{d:"Wed",v:46},{d:"Thu",v:60},{d:"Fri",v:57},{d:"Sat",v:69},{d:"Sun",v:76}
];
const initial=[
  {id:"WF-1482",name:"Refund review queue",owner:"Maya Chen",status:"Attention",value:12840,time:"6m"},
  {id:"WF-1481",name:"Partner catalog sync",owner:"Julian Reed",status:"Running",value:8240,time:"18m"},
  {id:"WF-1479",name:"Enterprise onboarding",owner:"Nora Patel",status:"Healthy",value:18600,time:"34m"},
  {id:"WF-1478",name:"Campaign approval",owner:"Sofia Gray",status:"Waiting",value:4280,time:"1h"},
  {id:"WF-1477",name:"Billing reconciliation",owner:"Leo Park",status:"Healthy",value:9950,time:"2h"},
  {id:"WF-1475",name:"Support escalation",owner:"Amelia Stone",status:"Running",value:6160,time:"3h"},
];

type Row=typeof initial[number];

export default function Relay(){
  const [rows,setRows]=useState(initial);
  const [query,setQuery]=useState("");
  const [filter,setFilter]=useState("All");
  const [selected,setSelected]=useState<Row|null>(null);
  const [createOpen,setCreateOpen]=useState(false);
  const [navOpen,setNavOpen]=useState(false);
  const [toast,setToast]=useState("");

  const shown=useMemo(()=>rows.filter(r=>{
    const q=query.toLowerCase();
    return (filter==="All"||r.status===filter)&&(`${r.name} ${r.owner} ${r.id}`.toLowerCase().includes(q));
  }),[rows,query,filter]);

  function notify(s:string){setToast(s);setTimeout(()=>setToast(""),2000)}
  function create(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const fd=new FormData(e.currentTarget);
    const row={id:"WF-"+(1490+rows.length),name:String(fd.get("name")||"New workflow"),owner:String(fd.get("owner")||"Demo user"),status:"Waiting",value:Number(fd.get("value")||0),time:"now"};
    setRows(r=>[row,...r]);setCreateOpen(false);setSelected(row);notify("Workflow created in Demo Mode.");
  }

  return <main className="min-h-screen bg-[#eff0eb] text-[#141616]">
    <div className="grid min-h-screen lg:grid-cols-[220px_1fr]">
      <aside className="hidden bg-[#111414] p-4 text-white lg:flex lg:flex-col">
        <div className="flex items-center gap-3 px-2 py-2"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#d9ff55] font-black text-black">R</span><div><p className="text-sm font-semibold">Relay</p><p className="text-[9px] uppercase tracking-[.16em] text-white/28">Operations</p></div></div>
        <div className="mt-7 space-y-1"><Nav active icon={<LayoutDashboard size={15}/>} label="Overview"/><Nav icon={<Command size={15}/>} label="Workflows"/><Nav icon={<SlidersHorizontal size={15}/>} label="Automation"/></div>
        <div className="mt-auto rounded-2xl border border-white/8 bg-white/[.035] p-4"><p className="text-[10px] uppercase tracking-[.15em] text-white/28">Demo workspace</p><p className="mt-2 text-xs leading-5 text-white/42">Static sample data with local interactions. No customer system is connected.</p><Link href="/" className="mt-4 flex items-center gap-2 text-xs text-[#d9ff55]/78"><ArrowLeft size={13}/> Portfolio</Link></div>
      </aside>

      <section className="min-w-0">
        <header className="sticky top-0 z-30 border-b border-black/8 bg-[#eff0eb]/92 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-4 lg:px-7">
            <div className="flex items-center gap-3"><button onClick={()=>setNavOpen(true)} className="grid h-9 w-9 place-items-center rounded-xl border border-black/10 lg:hidden"><Menu size={16}/></button><div><p className="text-sm font-semibold">Operations overview</p><p className="hidden text-[10px] text-black/34 sm:block">Sunday · Sep 13</p></div></div>
            <div className="flex items-center gap-2"><button onClick={()=>notify("Search shortcut simulated.")} className="hidden items-center gap-2 rounded-xl border border-black/10 bg-white/55 px-3 py-2 text-xs text-black/42 sm:flex"><Search size={14}/> Search <span className="rounded border border-black/10 px-1.5 py-0.5 text-[9px]">⌘K</span></button><button className="grid h-9 w-9 place-items-center rounded-xl border border-black/10 bg-white/55"><Bell size={15}/></button><button onClick={()=>setCreateOpen(true)} className="flex items-center gap-2 rounded-xl bg-[#111414] px-3.5 py-2.5 text-xs font-semibold text-white"><Plus size={14}/> New workflow</button></div>
          </div>
        </header>

        <div className="px-4 py-7 lg:px-7 lg:py-9">
          <div className="grid gap-8 xl:grid-cols-[1fr_auto] xl:items-end">
            <div><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-black/34">Executive pulse</p><h1 className="mt-3 max-w-4xl text-[clamp(2.6rem,5vw,5.4rem)] font-medium leading-[.9] tracking-[-.065em]">Healthy throughput.<br/>One queue needs attention.</h1></div>
            <div className="flex items-center gap-2 text-xs text-black/36"><span className="h-2 w-2 rounded-full bg-emerald-500"/> Synced 2 min ago</div>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <Kpi label="Processed value" value="$84.2k" delta="+14.2%"/>
            <Kpi label="Active workflows" value="28" delta="+4"/>
            <Kpi label="Success rate" value="96.4%" delta="+1.8%"/>
            <Kpi label="At risk" value="$12.8k" delta="-8.1%"/>
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[1.45fr_.55fr]">
            <div className="rounded-[24px] border border-black/8 bg-white/65 p-5">
              <div className="flex items-start justify-between"><div><p className="text-sm font-semibold">Processed value</p><p className="mt-1 text-[10px] uppercase tracking-[.14em] text-black/30">Last 7 days · USD thousands</p></div><span className="rounded-full border border-black/8 bg-[#f7f7f3] px-3 py-1.5 text-[10px] text-black/42">Weekly</span></div>
              <div className="mt-5 h-72"><ResponsiveContainer width="100%" height="100%"><AreaChart data={chart}><defs><linearGradient id="limeFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#b4d72f" stopOpacity={.30}/><stop offset="100%" stopColor="#b4d72f" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="rgba(0,0,0,.055)" vertical={false}/><XAxis dataKey="d" tickLine={false} axisLine={false} tick={{fontSize:11,fill:"rgba(0,0,0,.35)"}}/><YAxis tickLine={false} axisLine={false} tick={{fontSize:11,fill:"rgba(0,0,0,.35)"}}/><Tooltip contentStyle={{border:"1px solid rgba(0,0,0,.08)",borderRadius:14,fontSize:12}}/><Area type="monotone" dataKey="v" stroke="#89a51e" strokeWidth={2.5} fill="url(#limeFill)"/></AreaChart></ResponsiveContainer></div>
            </div>

            <div className="rounded-[24px] bg-[#111414] p-5 text-white">
              <p className="text-sm font-semibold">Attention queue</p><p className="mt-1 text-[10px] uppercase tracking-[.14em] text-white/28">Potential SLA / revenue impact</p>
              <div className="mt-6 space-y-2"><Queue title="Refund review" meta="$12.8k · 18 cases" hot/><Queue title="Partner sync delay" meta="24 minutes"/><Queue title="Renewal follow-up" meta="4 accounts"/></div>
              <button onClick={()=>notify("Queue view simulated.")} className="mt-5 flex w-full items-center justify-between border-t border-white/10 pt-4 text-xs text-white/48"><span>View all exceptions</span><ChevronRight size={14}/></button>
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-[24px] border border-black/8 bg-white/65">
            <div className="flex flex-col gap-4 border-b border-black/8 p-5 lg:flex-row lg:items-center lg:justify-between">
              <div><p className="text-sm font-semibold">Workflow monitor</p><p className="mt-1 text-[10px] uppercase tracking-[.14em] text-black/30">{shown.length} visible records</p></div>
              <div className="flex flex-col gap-2 sm:flex-row"><label className="flex items-center gap-2 rounded-xl border border-black/9 bg-[#f5f5f1] px-3 py-2.5 text-xs"><Search size={14} className="text-black/28"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search workflow" className="w-full bg-transparent outline-none sm:w-44"/></label><select value={filter} onChange={e=>setFilter(e.target.value)} className="rounded-xl border border-black/9 bg-[#f5f5f1] px-3 py-2.5 text-xs"><option>All</option><option>Healthy</option><option>Running</option><option>Waiting</option><option>Attention</option></select><button onClick={()=>notify("CSV prepared in Demo Mode.")} className="flex items-center justify-center gap-2 rounded-xl border border-black/9 bg-[#f5f5f1] px-3 py-2.5 text-xs text-black/48"><Download size={14}/> Export</button></div>
            </div>

            <div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-xs"><thead className="text-[9px] uppercase tracking-[.15em] text-black/28"><tr><th className="px-5 py-3.5">Workflow</th><th>Owner</th><th>Status</th><th>Managed value</th><th>Updated</th><th></th></tr></thead><tbody>{shown.map(r=><tr key={r.id} onClick={()=>setSelected(r)} className="cursor-pointer border-t border-black/6 transition hover:bg-black/[.025]"><td className="px-5 py-4"><p className="font-semibold">{r.name}</p><p className="mt-1 text-[10px] text-black/28">{r.id}</p></td><td className="text-black/48">{r.owner}</td><td><Status value={r.status}/></td><td className="font-semibold">{"$"+r.value.toLocaleString()}</td><td className="text-black/36">{r.time}</td><td><ChevronRight size={14} className="text-black/24"/></td></tr>)}</tbody></table></div>
          </div>
        </div>
      </section>
    </div>

    {navOpen&&<div className="fixed inset-0 z-50 bg-black/45 lg:hidden" onClick={()=>setNavOpen(false)}><aside onClick={e=>e.stopPropagation()} className="flex h-full w-72 flex-col bg-[#111414] p-4 text-white"><div className="flex items-center justify-between"><p className="font-semibold">Relay Operations</p><button onClick={()=>setNavOpen(false)} className="p-2 text-white/45"><X size={16}/></button></div><div className="mt-6 space-y-1"><Nav active icon={<LayoutDashboard size={15}/>} label="Overview"/><Nav icon={<Command size={15}/>} label="Workflows"/><Nav icon={<SlidersHorizontal size={15}/>} label="Automation"/></div><Link href="/" className="mt-auto flex items-center gap-2 text-xs text-[#d9ff55]/75"><ArrowLeft size={13}/> Portfolio</Link></aside></div>}

    {selected&&<div className="fixed inset-0 z-50 bg-black/35" onClick={()=>setSelected(null)}><aside onClick={e=>e.stopPropagation()} className="ml-auto h-full w-full max-w-md overflow-y-auto bg-[#f5f5f0] p-6 shadow-2xl"><div className="flex items-start justify-between"><div><p className="text-[10px] uppercase tracking-[.16em] text-black/30">Workflow detail</p><h2 className="mt-2 text-2xl font-semibold tracking-[-.035em]">{selected.name}</h2></div><button onClick={()=>setSelected(null)} className="rounded-full border border-black/10 p-2"><X size={15}/></button></div><div className="mt-7 grid grid-cols-2 gap-3"><Detail label="Status" value={selected.status}/><Detail label="Owner" value={selected.owner}/><Detail label="Managed" value={"$"+selected.value.toLocaleString()}/><Detail label="Updated" value={selected.time}/></div><div className="mt-7 rounded-2xl border border-black/8 bg-white p-4"><p className="text-xs font-semibold">Recent activity</p><div className="mt-4 space-y-4 text-xs text-black/46"><p>Rules evaluated successfully</p><p>Owner notified of status change</p><p>Data sync completed</p></div></div><button onClick={()=>notify("Workflow opened in Demo Mode.")} className="mt-6 w-full rounded-full bg-[#111414] py-3.5 text-sm font-semibold text-white">Open workflow</button></aside></div>}

    {createOpen&&<div className="fixed inset-0 z-50 grid place-items-center bg-black/45 p-4 backdrop-blur-sm"><form onSubmit={create} className="w-full max-w-md rounded-[26px] bg-[#f5f5f0] p-6 shadow-2xl"><div className="flex items-start justify-between"><div><p className="text-xl font-semibold">New workflow</p><p className="mt-1 text-xs text-black/35">Demo record · local only</p></div><button type="button" onClick={()=>setCreateOpen(false)} className="rounded-full border border-black/10 p-2"><X size={15}/></button></div><div className="mt-6 space-y-3"><input required name="name" placeholder="Workflow name" className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none"/><input required name="owner" placeholder="Owner" className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none"/><input required name="value" type="number" min="0" placeholder="Managed value" className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none"/></div><button className="mt-5 w-full rounded-full bg-[#111414] py-3.5 text-sm font-semibold text-white">Create workflow</button></form></div>}

    {toast&&<div className="fixed bottom-5 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-[#111414] px-4 py-2.5 text-sm text-white shadow-xl">{toast}</div>}
  </main>
}

function Nav({icon,label,active=false}:{icon:React.ReactNode;label:string;active?:boolean}){return <button className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs ${active?"bg-white/[.08] text-white":"text-white/38 hover:bg-white/[.04]"}`}>{icon}{label}</button>}
function Kpi({label,value,delta}:{label:string;value:string;delta:string}){return <div className="rounded-[22px] border border-black/8 bg-white/65 p-4"><div className="flex items-center justify-between"><p className="text-xs text-black/38">{label}</p><span className="rounded-full bg-[#d9ff55] px-2 py-1 text-[9px] font-semibold text-black">{delta}</span></div><p className="mt-5 text-3xl font-semibold tracking-[-.04em]">{value}</p></div>}
function Queue({title,meta,hot=false}:{title:string;meta:string;hot?:boolean}){return <button className="w-full rounded-2xl border border-white/8 bg-white/[.035] p-4 text-left"><div className="flex items-center justify-between"><p className="text-xs font-semibold">{title}</p><span className={`h-2 w-2 rounded-full ${hot?"bg-rose-300":"bg-[#d9ff55]"}`}/></div><p className="mt-2 text-[10px] text-white/30">{meta}</p></button>}
function Status({value}:{value:string}){const c=value==="Healthy"?"bg-emerald-500/10 text-emerald-700":value==="Running"?"bg-blue-500/10 text-blue-700":value==="Attention"?"bg-rose-500/10 text-rose-700":"bg-amber-500/10 text-amber-700";return <span className={`rounded-full px-2.5 py-1 text-[9px] font-semibold ${c}`}>{value}</span>}
function Detail({label,value}:{label:string;value:string}){return <div className="rounded-2xl border border-black/8 bg-white p-4"><p className="text-[9px] uppercase tracking-[.14em] text-black/28">{label}</p><p className="mt-2 text-xs font-semibold">{value}</p></div>}
