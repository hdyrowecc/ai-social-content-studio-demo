"use client";

import Link from "next/link";
import {
  ArrowDown, ArrowLeft, ArrowUp, Bell, ChevronLeft, ChevronRight, CircleUserRound,
  Command, Download, LayoutDashboard, Menu, MoreHorizontal, Plus, Search,
  SlidersHorizontal, X
} from "lucide-react";
import { useMemo, useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const series=[
  {day:"Mon",value:54},{day:"Tue",value:61},{day:"Wed",value:58},{day:"Thu",value:72},
  {day:"Fri",value:68},{day:"Sat",value:79},{day:"Sun",value:84}
];

const seed=[
  {id:"WF-1482",name:"Refund review queue",owner:"Maya Chen",status:"Attention",priority:"High",updated:"6 min ago",value:12840},
  {id:"WF-1481",name:"Partner catalog sync",owner:"Julian Reed",status:"Running",priority:"Medium",updated:"18 min ago",value:8240},
  {id:"WF-1479",name:"Enterprise onboarding",owner:"Nora Patel",status:"Healthy",priority:"Medium",updated:"34 min ago",value:18600},
  {id:"WF-1478",name:"Campaign approval",owner:"Sofia Gray",status:"Waiting",priority:"Low",updated:"1 hr ago",value:4280},
  {id:"WF-1477",name:"Billing reconciliation",owner:"Leo Park",status:"Healthy",priority:"High",updated:"2 hrs ago",value:9950},
  {id:"WF-1475",name:"Support escalation",owner:"Amelia Stone",status:"Running",priority:"High",updated:"3 hrs ago",value:6160},
  {id:"WF-1474",name:"Renewal follow-up",owner:"Noah Blake",status:"Waiting",priority:"Medium",updated:"Yesterday",value:7440},
];

type Row=typeof seed[number];

export default function SaaSDashboardDemo(){
  const [rows,setRows]=useState(seed);
  const [search,setSearch]=useState("");
  const [status,setStatus]=useState("All");
  const [sortAsc,setSortAsc]=useState(false);
  const [selected,setSelected]=useState<Row|null>(seed[0]);
  const [modal,setModal]=useState(false);
  const [mobileNav,setMobileNav]=useState(false);
  const [page,setPage]=useState(1);
  const [toast,setToast]=useState("");
  const perPage=5;

  function notify(s:string){setToast(s);setTimeout(()=>setToast(""),2200)}

  const filtered=useMemo(()=>{
    const q=search.toLowerCase().trim();
    return rows
      .filter(r=>(status==="All"||r.status===status)&&(`${r.name} ${r.owner} ${r.id}`.toLowerCase().includes(q)))
      .sort((a,b)=>sortAsc?a.value-b.value:b.value-a.value);
  },[rows,search,status,sortAsc]);

  const pages=Math.max(1,Math.ceil(filtered.length/perPage));
  const shown=filtered.slice((page-1)*perPage,page*perPage);

  function create(formData:FormData){
    const name=String(formData.get("name")||"New workflow");
    const owner=String(formData.get("owner")||"Demo user");
    const row={id:`WF-${1490+rows.length}`,name,owner,status:"Waiting",priority:"Medium",updated:"Just now",value:Number(formData.get("value")||0)};
    setRows(r=>[row,...r]);setModal(false);setSelected(row);setPage(1);notify("Workflow created in Demo Mode.");
  }

  return <main className="demo-dark min-h-screen bg-[#071017] text-[#edf5f7]">
    <div className="bg-[#0b1922] px-4 py-2 text-center text-[10px] uppercase tracking-[.17em] text-cyan-100/45">Spec project · B2B SaaS operations dashboard · simulated data</div>

    <div className="grid min-h-[calc(100vh-32px)] lg:grid-cols-[230px_1fr]">
      <aside className="hidden border-r border-white/8 bg-[#08131b] p-4 lg:flex lg:flex-col">
        <div className="flex items-center gap-3 px-2 py-2"><span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-300 font-black text-[#061015]">R</span><div><p className="text-sm font-semibold">Relay Ops</p><p className="text-[9px] uppercase tracking-[.16em] text-white/28">Workspace</p></div></div>
        <nav className="mt-7 space-y-1"><Nav active icon={<LayoutDashboard size={15}/>} label="Overview"/><Nav icon={<Command size={15}/>} label="Workflows"/><Nav icon={<SlidersHorizontal size={15}/>} label="Rules"/><Nav icon={<CircleUserRound size={15}/>} label="Customers"/></nav>
        <div className="mt-auto rounded-2xl border border-white/8 bg-white/[.035] p-4"><p className="text-xs font-medium">Demo workspace</p><p className="mt-2 text-[11px] leading-5 text-white/34">Interactions are simulated. No external API or customer data is connected.</p><Link href="/" className="mt-4 flex items-center gap-2 text-xs text-cyan-200/70"><ArrowLeft size={13}/> Back to portfolio</Link></div>
      </aside>

      <div className="min-w-0">
        <header className="sticky top-0 z-30 border-b border-white/8 bg-[#071017]/88 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3 lg:px-7">
            <div className="flex items-center gap-3"><button onClick={()=>setMobileNav(true)} className="rounded-xl border border-white/8 p-2 lg:hidden"><Menu size={17}/></button><div><p className="text-sm font-semibold">Operations overview</p><p className="hidden text-[10px] text-white/28 sm:block">Monitor revenue, workflows, and operational risk</p></div></div>
            <div className="flex items-center gap-2"><button onClick={()=>notify("Command palette simulated.")} className="hidden items-center gap-2 rounded-xl border border-white/8 bg-white/[.03] px-3 py-2 text-xs text-white/38 sm:flex"><Search size={14}/> Search <span className="rounded border border-white/10 px-1.5 py-0.5 text-[9px]">⌘K</span></button><button className="rounded-xl border border-white/8 p-2 text-white/44"><Bell size={16}/></button><button onClick={()=>setModal(true)} className="flex items-center gap-2 rounded-xl bg-cyan-300 px-3.5 py-2.5 text-xs font-semibold text-[#061015]"><Plus size={15}/> New workflow</button></div>
          </div>
        </header>

        <section className="px-4 py-6 lg:px-7 lg:py-8">
          <div className="mb-7 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-[.18em] text-cyan-200/52">Executive pulse</p><h1 className="mt-2 text-3xl font-semibold tracking-[-.035em]">Revenue is healthy. One workflow needs attention.</h1></div><div className="flex items-center gap-2 text-xs text-white/34"><span className="h-2 w-2 rounded-full bg-emerald-300"/> Synced 2 minutes ago</div></div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <Kpi label="Net revenue" value="$84,240" delta="+14.2%" positive/>
            <Kpi label="Active workflows" value="28" delta="+4" positive/>
            <Kpi label="Success rate" value="96.4%" delta="+1.8%" positive/>
            <Kpi label="At-risk value" value="$12,840" delta="-8.1%" positive/>
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[1.45fr_.55fr]">
            <div className="rounded-[22px] border border-white/8 bg-[#0b1720] p-4 sm:p-5">
              <div className="mb-5 flex items-center justify-between"><div><p className="text-sm font-semibold">Weekly processed value</p><p className="mt-1 text-[11px] text-white/30">USD · thousands</p></div><button onClick={()=>notify("Date-range control simulated.")} className="rounded-lg border border-white/8 px-2.5 py-1.5 text-[10px] text-white/38">Last 7 days</button></div>
              <div className="h-64"><ResponsiveContainer width="100%" height="100%"><AreaChart data={series}><defs><linearGradient id="relayFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#67e8f9" stopOpacity={0.34}/><stop offset="100%" stopColor="#67e8f9" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="rgba(255,255,255,.055)" vertical={false}/><XAxis dataKey="day" stroke="rgba(255,255,255,.24)" tickLine={false} axisLine={false} tick={{fontSize:11}}/><YAxis stroke="rgba(255,255,255,.24)" tickLine={false} axisLine={false} tick={{fontSize:11}}/><Tooltip contentStyle={{background:"#101e27",border:"1px solid rgba(255,255,255,.1)",borderRadius:12,fontSize:12}}/><Area type="monotone" dataKey="value" stroke="#67e8f9" strokeWidth={2} fill="url(#relayFill)"/></AreaChart></ResponsiveContainer></div>
            </div>

            <div className="rounded-[22px] border border-white/8 bg-[#0b1720] p-4 sm:p-5">
              <p className="text-sm font-semibold">Attention queue</p><p className="mt-1 text-[11px] text-white/30">Items that may affect revenue or SLA</p>
              <div className="mt-5 space-y-2">
                <Attention label="Refund review queue" meta="$12.8k · 18 cases" level="High"/>
                <Attention label="Catalog sync delay" meta="Partner API · 24 min" level="Medium"/>
                <Attention label="Renewal follow-up" meta="4 accounts · Today" level="Low"/>
              </div>
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-[22px] border border-white/8 bg-[#0b1720]">
            <div className="flex flex-col gap-4 border-b border-white/8 p-4 lg:flex-row lg:items-center lg:justify-between">
              <div><p className="text-sm font-semibold">Workflow monitor</p><p className="mt-1 text-[11px] text-white/30">{filtered.length} matching workflows</p></div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <label className="flex items-center gap-2 rounded-xl border border-white/8 bg-black/10 px-3 py-2.5 text-xs"><Search size={14} className="text-white/28"/><input value={search} onChange={e=>{setSearch(e.target.value);setPage(1)}} placeholder="Search workflows" className="w-full bg-transparent outline-none sm:w-44"/></label>
                <select value={status} onChange={e=>{setStatus(e.target.value);setPage(1)}} className="rounded-xl border border-white/8 bg-[#101d26] px-3 py-2.5 text-xs"><option>All</option><option>Healthy</option><option>Running</option><option>Waiting</option><option>Attention</option></select>
                <button onClick={()=>notify("CSV export prepared in Demo Mode.")} className="flex items-center justify-center gap-2 rounded-xl border border-white/8 px-3 py-2.5 text-xs text-white/44"><Download size={14}/> Export</button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] text-left text-xs">
                <thead className="text-[9px] uppercase tracking-[.15em] text-white/25"><tr><th className="px-5 py-3.5">Workflow</th><th>Owner</th><th>Status</th><th>Priority</th><th><button onClick={()=>setSortAsc(v=>!v)} className="flex items-center gap-1 uppercase tracking-[.15em]">Value {sortAsc?<ArrowUp size={11}/>:<ArrowDown size={11}/>}</button></th><th>Updated</th><th></th></tr></thead>
                <tbody>{shown.map(r=><tr key={r.id} onClick={()=>setSelected(r)} className="cursor-pointer border-t border-white/6 transition hover:bg-white/[.025]"><td className="px-5 py-4"><p className="font-semibold">{r.name}</p><p className="mt-1 text-[10px] text-white/25">{r.id}</p></td><td className="text-white/48">{r.owner}</td><td><Status value={r.status}/></td><td className="text-white/48">{r.priority}</td><td className="font-semibold">{"$"+r.value.toLocaleString()}</td><td className="text-white/36">{r.updated}</td><td><MoreHorizontal size={15} className="text-white/28"/></td></tr>)}</tbody>
              </table>
            </div>

            <div className="flex items-center justify-between border-t border-white/8 p-4"><p className="text-[10px] text-white/26">Page {page} of {pages}</p><div className="flex gap-2"><button disabled={page<=1} onClick={()=>setPage(p=>p-1)} className="rounded-lg border border-white/8 p-2 disabled:opacity-25"><ChevronLeft size={14}/></button><button disabled={page>=pages} onClick={()=>setPage(p=>p+1)} className="rounded-lg border border-white/8 p-2 disabled:opacity-25"><ChevronRight size={14}/></button></div></div>
          </div>
        </section>
      </div>
    </div>

    {mobileNav&&<div className="fixed inset-0 z-50 bg-black/60 lg:hidden" onClick={()=>setMobileNav(false)}><aside onClick={e=>e.stopPropagation()} className="flex h-full w-72 flex-col bg-[#08131b] p-4"><div className="flex items-center justify-between"><p className="font-semibold">Relay Ops</p><button onClick={()=>setMobileNav(false)} className="p-2 text-white/40"><X size={17}/></button></div><nav className="mt-6 space-y-1"><Nav active icon={<LayoutDashboard size={15}/>} label="Overview"/><Nav icon={<Command size={15}/>} label="Workflows"/><Nav icon={<SlidersHorizontal size={15}/>} label="Rules"/><Nav icon={<CircleUserRound size={15}/>} label="Customers"/></nav><Link href="/" className="mt-auto flex items-center gap-2 text-xs text-cyan-200/70"><ArrowLeft size={13}/> Back to portfolio</Link></aside></div>}

    {selected&&<div className="fixed inset-0 z-40 bg-black/30" onClick={()=>setSelected(null)}><aside onClick={e=>e.stopPropagation()} className="ml-auto h-full w-full max-w-md overflow-y-auto border-l border-white/8 bg-[#0b1720] p-6 shadow-2xl"><div className="flex items-start justify-between"><div><p className="text-[10px] uppercase tracking-[.16em] text-white/28">Workflow detail</p><h2 className="mt-2 text-2xl font-semibold tracking-[-.03em]">{selected.name}</h2></div><button onClick={()=>setSelected(null)} className="rounded-lg border border-white/8 p-2 text-white/36"><X size={16}/></button></div><div className="mt-7 grid grid-cols-2 gap-3"><Detail label="Status" value={selected.status}/><Detail label="Priority" value={selected.priority}/><Detail label="Owner" value={selected.owner}/><Detail label="Value" value={"$"+selected.value.toLocaleString()}/></div><div className="mt-7 rounded-2xl border border-white/8 bg-white/[.025] p-4"><p className="text-xs font-semibold">Recent activity</p><div className="mt-4 space-y-4 text-xs text-white/42"><p>• Rules evaluated successfully</p><p>• Owner notified of status change</p><p>• Data sync completed without errors</p></div></div><div className="mt-7 grid grid-cols-2 gap-2"><button onClick={()=>notify("Edit workflow simulated.")} className="rounded-xl border border-white/8 py-3 text-xs font-semibold">Edit</button><button onClick={()=>notify("Workflow opened in Demo Mode.")} className="rounded-xl bg-cyan-300 py-3 text-xs font-semibold text-[#061015]">Open workflow</button></div></aside></div>}

    {modal&&<div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-5 backdrop-blur-sm"><form action={create} className="w-full max-w-md rounded-[24px] border border-white/10 bg-[#0d1922] p-6"><div className="flex items-start justify-between"><div><p className="text-xl font-semibold">Create workflow</p><p className="mt-1 text-xs text-white/32">Demo record · stored only in this browser session</p></div><button type="button" onClick={()=>setModal(false)} className="p-2 text-white/35"><X size={17}/></button></div><div className="mt-6 space-y-3"><input required name="name" placeholder="Workflow name" className="w-full rounded-xl border border-white/8 bg-black/15 p-3.5 text-sm outline-none"/><input required name="owner" placeholder="Owner name" className="w-full rounded-xl border border-white/8 bg-black/15 p-3.5 text-sm outline-none"/><input required name="value" type="number" min="0" placeholder="Value at risk / managed" className="w-full rounded-xl border border-white/8 bg-black/15 p-3.5 text-sm outline-none"/></div><button className="mt-5 w-full rounded-xl bg-cyan-300 p-3.5 text-sm font-semibold text-[#061015]">Create workflow</button></form></div>}

    {toast&&<div className="fixed bottom-5 left-1/2 z-[70] -translate-x-1/2 rounded-full border border-white/10 bg-[#14232d] px-4 py-2.5 text-sm shadow-xl">{toast}</div>}
  </main>
}

function Nav({icon,label,active=false}:{icon:React.ReactNode;label:string;active?:boolean}){return <button className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs transition ${active?"bg-white/[.07] text-white":"text-white/36 hover:bg-white/[.04] hover:text-white/64"}`}>{icon}{label}</button>}
function Kpi({label,value,delta,positive}:{label:string;value:string;delta:string;positive:boolean}){return <div className="rounded-[20px] border border-white/8 bg-[#0b1720] p-4"><div className="flex items-center justify-between"><p className="text-xs text-white/34">{label}</p><span className={`rounded-full px-2 py-1 text-[9px] ${positive?"bg-emerald-300/10 text-emerald-200":"bg-rose-300/10 text-rose-200"}`}>{delta}</span></div><p className="mt-4 text-3xl font-semibold tracking-[-.035em]">{value}</p></div>}
function Attention({label,meta,level}:{label:string;meta:string;level:string}){return <button className="w-full rounded-xl border border-white/7 bg-white/[.025] p-3 text-left transition hover:bg-white/[.045]"><div className="flex items-center justify-between gap-3"><p className="text-xs font-medium">{label}</p><span className={`h-2 w-2 rounded-full ${level==="High"?"bg-rose-300":level==="Medium"?"bg-amber-300":"bg-cyan-300"}`}/></div><p className="mt-1.5 text-[10px] text-white/28">{meta}</p></button>}
function Status({value}:{value:string}){const cls=value==="Healthy"?"bg-emerald-300/10 text-emerald-200":value==="Running"?"bg-cyan-300/10 text-cyan-200":value==="Attention"?"bg-rose-300/10 text-rose-200":"bg-amber-300/10 text-amber-200";return <span className={`rounded-full px-2.5 py-1 text-[9px] font-semibold ${cls}`}>{value}</span>}
function Detail({label,value}:{label:string;value:string}){return <div className="rounded-xl border border-white/8 bg-white/[.025] p-3"><p className="text-[9px] uppercase tracking-[.13em] text-white/25">{label}</p><p className="mt-2 text-xs font-semibold">{value}</p></div>}
