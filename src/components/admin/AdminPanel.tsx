import { motion } from "framer-motion";
import { Users, BookOpen, TrendingUp, DollarSign, Activity, Shield, MoreVertical, Search, Filter, Download } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { name: "Mon", users: 400, activity: 240 },
  { name: "Tue", users: 300, activity: 139 },
  { name: "Wed", users: 200, activity: 980 },
  { name: "Thu", users: 278, activity: 390 },
  { name: "Fri", users: 189, activity: 480 },
  { name: "Sat", users: 239, activity: 380 },
  { name: "Sun", users: 349, activity: 430 },
];

const AdminPanel = () => {
  const stats = [
    { label: "Total Users", value: "12,543", growth: "+12%", icon: Users, color: "blue" },
    { label: "Active Sets", value: "48,291", growth: "+5%", icon: BookOpen, color: "purple" },
    { label: "Revenue", value: "$84,200", growth: "+18%", icon: DollarSign, color: "emerald" },
    { label: "Retention", value: "68%", growth: "+2%", icon: TrendingUp, color: "orange" },
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[var(--accent-color)] font-black text-xs uppercase tracking-widest">
             <Shield className="w-4 h-4" /> System Overview
          </div>
          <h1 className="text-4xl font-black tracking-tight">Admin Command Center</h1>
        </div>
        <div className="flex items-center gap-3">
           <Button variant="outline" className="rounded-xl border-white/5 bg-white/5 hover:bg-white/10 gap-2 h-11">
             <Download className="w-4 h-4" /> Export Report
           </Button>
           <Button className="rounded-xl bg-white text-black hover:bg-gray-200 h-11 px-6 font-bold">
             System Settings
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="p-6 bg-[var(--bg-card)] border-white/5 glass-panel hover:border-white/10 transition-colors rounded-3xl">
              <div className="flex items-start justify-between">
                <div className={`p-3 rounded-2xl ${
                  stat.color === 'blue' ? 'bg-blue-500/10 text-blue-400' :
                  stat.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                  stat.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                  'bg-orange-500/10 text-orange-400'
                }`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <Badge className="bg-emerald-500/10 text-emerald-500 border-none">{stat.growth}</Badge>
              </div>
              <div className="mt-4 space-y-1">
                <p className="text-sm text-[var(--text-secondary)] font-bold uppercase tracking-wider">{stat.label}</p>
                <p className="text-3xl font-black">{stat.value}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 p-8 bg-[var(--bg-card)] border-white/5 glass-panel rounded-[2.5rem]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-black">User Engagement</h3>
              <p className="text-sm text-[var(--text-secondary)] font-medium">Weekly activity overview</p>
            </div>
            <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl">
               <Button variant="ghost" size="sm" className="rounded-lg h-8 text-xs font-bold">Week</Button>
               <Button variant="ghost" size="sm" className="rounded-lg h-8 text-xs font-bold text-white bg-white/10">Month</Button>
            </div>
          </div>
          
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-color)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--accent-color)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="rgba(255,255,255,0.3)" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis 
                  stroke="rgba(255,255,255,0.3)" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#121821', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
                  itemStyle={{ color: '#E6EDF3' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="activity" 
                  stroke="var(--accent-color)" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorUsers)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-8 bg-[var(--bg-card)] border-white/5 glass-panel rounded-[2.5rem] flex flex-col">
          <h3 className="text-xl font-black mb-6">Recent Moderation</h3>
          <div className="flex-1 space-y-6 overflow-y-auto pr-2">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 border border-white/5">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold">Flagged Content #{item}482</p>
                  <p className="text-xs text-[var(--text-secondary)]">Inorganic Chemistry Set</p>
                </div>
                <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-none">Pending</Badge>
              </div>
            ))}
          </div>
          <Button variant="link" className="mt-6 text-[var(--accent-color)] font-bold text-xs uppercase tracking-widest">View Full Queue</Button>
        </Card>
      </div>

      <Card className="overflow-hidden border-white/5 bg-[var(--bg-card)] glass-panel rounded-[2.5rem]">
        <div className="p-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div>
              <h3 className="text-xl font-black">User Management</h3>
              <p className="text-sm text-[var(--text-secondary)] font-medium">Manage access and permissions</p>
           </div>
           <div className="flex items-center gap-3">
              <div className="relative">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                 <Input placeholder="Search users..." className="pl-10 h-10 w-64 bg-white/5 border-white/10 rounded-xl" />
              </div>
              <Button variant="outline" className="rounded-xl h-10 border-white/10 bg-white/5">
                 <Filter className="w-4 h-4" />
              </Button>
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/[0.02] border-b border-white/5">
                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)]">User</th>
                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)]">Status</th>
                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)]">Role</th>
                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)]">Join Date</th>
                <th className="px-8 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="hover:bg-white/[0.01] transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 overflow-hidden">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="User" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">User Name #{i}</p>
                        <p className="text-xs text-[var(--text-secondary)]">user{i}@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <Badge className="bg-blue-500/10 text-blue-400 border-none">Active</Badge>
                  </td>
                  <td className="px-8 py-5 text-sm font-medium">User</td>
                  <td className="px-8 py-5 text-sm text-[var(--text-secondary)] font-medium">Oct {i + 10}, 2023</td>
                  <td className="px-8 py-5 text-right">
                    <Button variant="ghost" size="icon" className="text-white/20 hover:text-white"><MoreVertical className="w-4 h-4" /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AdminPanel;