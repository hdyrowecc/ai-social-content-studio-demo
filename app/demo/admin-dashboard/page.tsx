"use client";

import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowUp, ChevronLeft, ChevronRight, Download, Filter, Plus, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const revenue = [
  {month:"Apr", value:48},{month:"May",value:55},{month:"Jun",value:61},{month:"Jul",value:58},{month:"Aug",value:72},{month:"Sep",value:84}
];

const seed = [
  {id:"ORD-1048",customer:"Maya Chen",email:"maya@northline.co",status:"Paid",channel:"Organic",amount:842,date:"Sep 13"},
  {id:"ORD-1047",customer:"Julian Reed",email:"julian@oakstudio.co",status:"Paid",channel:"Paid Social",amount:628,date:"Sep 13"},
  {id:"ORD-1046",customer:"Nora Patel",email:"nora@frameform.io",status:"Pending",channel:"Referral",amount:394,date:"Sep 12"},
  {id:"ORD-1045",customer:"Evan Miles",email:"evan@arcgoods.com",status:"Refunded",channel:"Organic",amount:212,date:"Sep 12"},
  {id:"ORD-1044",customer:"Sofia Gray",email:"sofia@commonlab.co",status:"Paid",channel:"Email",amount:1098,date:"Sep 11"},
  {id:"ORD-1043",customer:"Leo Park",email:"leo@atlasworks.io",status:"Paid",channel:"Paid Social",amount:474,date:"Sep 11"},
  {id:"ORD-1042",customer:"Amelia Stone",email:"amelia@somewhere.co",status:"Pending",channel:"Email",amount:736,date:"Sep 10"},
  {id:"ORD-1041",customer:"Noah Blake",email:"noah@brightset.co",status:"Paid",channel:"Organic",amount:319,date:"Sep 10"},
];

export default function DashboardDemo(){
  const [rows,setRows]=useState(seed);
  const [search,setSearch]=useState("");
  const [status,setStatus]=useState("All");
  const [sortAsc,setSortAsc]=useState(false);
  const [page,setPage]=useState(1);
  const [modal,setModal]=useState(false);
  const [toast,setToast]=useState("");
  const perPage=5;
  function notify(s:string){setToast(s);setTimeout(()=>setToast(""),2200)}

  const filtered=useMemo(()=>{
    const q=search.toLowerCase();
    return rows.filter(r=>(status==="All"||r.status===status)&&(`${r.customer} ${r.email} ${r.id}`.toLowerCase().includes(q))).sort((a,b)=>sortAsc?a.amount-b.amount:b.amount-a.amount);
  },[rows,search,status,sortAsc]);
  const pageCount=Math.max(1,Math.ceil(filtered.length/perPage));
  const shown=filtered.slice((page-1)*perPage,page*perPage);

  function addRecord(formData:FormData){
    const name=String(formData.get("name")||"New customer");
    const amount=Number(formData.get("amount")||0);
    setRows(r=>[{id:`ORD-${1050+r.length}`,customer:name,email:String(formData.get("email")||"demo@example.com"),status:"Pending",channel:"Manual",amount,date:"Just now"},...r]);
    setModal(false); notify("Record created in Demo Mode.");
  }

  return <main className="min-h-screen bg-[#071017] text-[#edf5f7]">
    <header className="border-b border-white/8 bg-[#09131b]">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 lg:px-8"><div className="flex items-center gap-4"><Link href="/" className="rounded-xl border border-white/8 p-2 text-white/45 hover:bg-white/5"><ArrowLeft size={16}/></Link><div><p className="font-semibold">Command Center</p><p className="text-[10px] uppercase tracking-[.18em] text-white/30">Revenue operations</p></div></div><button onClick={()=>setModal(true)} className="flex items-center gap-2 rounded-xl bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-[#061015]"><Plus size={16}/>New record</button></div>
    </header>

    <section className="mx-auto max-w-[1500px] px-5 py-8 lg:px-8">
      <div className="mb-8"><p className="text-xs uppercase tracking-[.2em] text-cyan-300">Executive overview</p><h1 className="mt-2 text-3xl font-semibold tracking-tight">Good morning. Revenue is up 14.2% this month.</h1></div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Kpi label="Net revenue" value="$84,240" delta="+14.2%" up/><Kpi label="Orders" value="1,248" delta="+8.4%" up/><Kpi label="Conversion" value="4.8%" delta="+0.6%" up/><Kpi label="Refund rate" value="1.7%" delta="-0.3%" up/></div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.55fr_.45fr]">
        <div className="rounded-[26px] border border-white/8 bg-[#0b1720] p-5"><div className="mb-6 flex items-center justify-between"><div><p className="font-medium">Revenue trend</p><p className="mt-1 text-sm text-white/35">Trailing six months</p></div><span className="rounded-full border border-white/8 px-3 py-1 text-xs text-white/42">USD · thousands</span></div><div className="h-72"><ResponsiveContainer width="100%" height="100%"><AreaChart data={revenue}><defs><linearGradient id="fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#67e8f9" stopOpacity={0.35}/><stop offset="100%" stopColor="#67e8f9" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="rgba(255,255,255,.06)" vertical={false}/><XAxis dataKey="month" stroke="rgba(255,255,255,.28)" tickLine={false} axisLine={false}/><YAxis stroke="rgba(255,255,255,.28)" tickLine={false} axisLine={false}/><Tooltip contentStyle={{background:"#101d26",border:"1px solid rgba(255,255,255,.1)",borderRadius:12}}/><Area type="monotone" dataKey="value" stroke="#67e8f9" strokeWidth={2} fill="url(#fill)"/></AreaChart></ResponsiveContainer></div></div>
        <div className="rounded-[26px] border border-white/8 bg-[#0b1720] p-5"><p className="font-medium">Acquisition mix</p><p className="mt-1 text-sm text-white/35">Current month</p><div className="mt-8 space-y-6">{[["Organic",38],["Paid Social",31],["Email",19],["Referral",12]].map(([label,val])=><div key={label as string}><div className="mb-2 flex justify-between text-sm"><span className="text-white/55">{label}</span><span>{val}%</span></div><div className="h-2 overflow-hidden rounded-full bg-white/6"><div className="h-full rounded-full bg-cyan-300" style={{width:`${val}%`}}/></div></div>)}</div></div>
      </div>

      <div className="mt-6 rounded-[26px] border border-white/8 bg-[#0b1720]">
        <div className="flex flex-col gap-4 border-b border-white/8 p-5 lg:flex-row lg:items-center lg:justify-between"><div><p className="font-medium">Recent orders</p><p className="mt-1 text-sm text-white/35">{filtered.length} matching records</p></div><div className="flex flex-col gap-2 sm:flex-row"><label className="flex items-center gap-2 rounded-xl border border-white/8 bg-black/10 px-3 py-2.5 text-sm"><Search size={15} className="text-white/35"/><input value={search} onChange={e=>{setSearch(e.target.value);setPage(1)}} placeholder="Search customer or order" className="w-full bg-transparent outline-none sm:w-52"/></label><select value={status} onChange={e=>{setStatus(e.target.value);setPage(1)}} className="rounded-xl border border-white/8 bg-[#101d26] px-3 py-2.5 text-sm"><option>All</option><option>Paid</option><option>Pending</option><option>Refunded</option></select><button onClick={()=>notify("CSV export prepared in Demo Mode.")} className="flex items-center justify-center gap-2 rounded-xl border border-white/8 px-3 py-2.5 text-sm text-white/55"><Download size={15}/>Export</button></div></div>
        <div className="overflow-x-auto"><table className="w-full min-w-[800px] text-left text-sm"><thead className="text-[10px] uppercase tracking-[.16em] text-white/28"><tr><th className="px-5 py-4">Order</th><th>Customer</th><th>Status</th><th>Channel</th><th><button onClick={()=>setSortAsc(v=>!v)} className="flex items-center gap-1 uppercase tracking-[.16em]">Amount {sortAsc?<ArrowUp size={12}/>:<ArrowDown size={12}/>}</button></th><th>Date</th></tr></thead><tbody>{shown.map(r=><tr key={r.id} className="border-t border-white/6"><td className="px-5 py-4 font-medium">{r.id}</td><td><p>{r.customer}</p><p className="mt-1 text-xs text-white/30">{r.email}</p></td><td><Status value={r.status}/></td><td className="text-white/45">{r.channel}</td><td className="font-medium">${r.amount.toLocaleString()}</td><td className="text-white/40">{r.date}</td></tr>)}</tbody></table></div>
        <div className="flex items-center justify-between border-t border-white/8 p-4"><p className="text-xs text-white/32">Page {page} of {pageCount}</p><div className="flex gap-2"><button disabled={page<=1} onClick={()=>setPage(p=>p-1)} className="rounded-lg border border-white/8 p-2 disabled:opacity-25"><ChevronLeft size={15}/></button><button disabled={page>=pageCount} onClick={()=>setPage(p=>p+1)} className="rounded-lg border border-white/8 p-2 disabled:opacity-25"><ChevronRight size={15}/></button></div></div>
      </div>
    </section>

    {modal && <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-5 backdrop-blur-sm"><form action={addRecord} className="w-full max-w-md rounded-[26px] border border-white/10 bg-[#0d1922] p-6"><div className="flex items-start justify-between"><div><p className="text-xl font-semibold">Create record</p><p className="mt-1 text-sm text-white/35">Adds a simulated order to the table.</p></div><button type="button" onClick={()=>setModal(false)} className="p-2 text-white/35"><X size={18}/></button></div><div className="mt-6 space-y-3"><input name="name" required placeholder="Customer name" className="w-full rounded-xl border border-white/8 bg-black/15 p-3.5 text-sm outline-none"/><input name="email" required type="email" placeholder="Email" className="w-full rounded-xl border border-white/8 bg-black/15 p-3.5 text-sm outline-none"/><input name="amount" required type="number" min="1" placeholder="Amount" className="w-full rounded-xl border border-white/8 bg-black/15 p-3.5 text-sm outline-none"/></div><button className="mt-5 w-full rounded-xl bg-cyan-300 p-3.5 text-sm font-semibold text-[#061015]">Create record</button></form></div>}
    {toast && <div className="fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 rounded-full border border-white/10 bg-[#14232d] px-4 py-2.5 text-sm shadow-xl">{toast}</div>}
  </main>
}

function Kpi({label,value,delta,up}:{label:string;value:string;delta:string;up:boolean}){return <div className="rounded-[22px] border border-white/8 bg-[#0b1720] p-5"><p className="text-sm text-white/40">{label}</p><p className="mt-3 text-3xl font-semibold tracking-tight">{value}</p><p className={`mt-3 flex items-center gap-1 text-xs ${up?"text-emerald-300":"text-rose-300"}`}>{up?<ArrowUp size={13}/>:<ArrowDown size={13}/>} {delta} vs last month</p></div>}
function Status({value}:{value:string}){const c=value==="Paid"?"bg-emerald-400/10 text-emerald-200":value==="Pending"?"bg-amber-300/10 text-amber-200":"bg-rose-400/10 text-rose-200";return <span className={`rounded-full px-2.5 py-1 text-[11px] ${c}`}>{value}</span>}
