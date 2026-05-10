import { User, Mail, Calendar, Settings, Shield, Wallet, Share2, TrendingUp, BookOpen, Clock, Target, Star, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import WithdrawalSection from "./WithdrawalSection";
import { motion } from "framer-motion";

const ProfileView = () => {
  const stats = [
    { label: "Study Hours", value: "124.5", icon: Clock, color: "blue" },
    { label: "Sets Created", value: "48", icon: BookOpen, color: "purple" },
    { label: "Quizzes", value: "156", icon: Target, color: "emerald" },
    { label: "Avg Score", value: "92%", icon: TrendingUp, color: "orange" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Profile Header */}
      <div className="relative">
        <div className="h-48 w-full bg-gradient-to-r from-blue-900/40 via-blue-800/20 to-transparent rounded-[2.5rem] border border-white/5 overflow-hidden">
           <div className="absolute inset-0 opacity-10 animate-pulse bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        
        <div className="px-10 -mt-16 flex flex-col md:flex-row items-end gap-8 relative z-10">
          <div className="relative">
            <div className="w-40 h-40 rounded-[2.5rem] bg-[#121821] border-8 border-[var(--bg-primary)] overflow-hidden shadow-2xl shadow-black/50">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-2 right-2 w-8 h-8 bg-emerald-500 rounded-xl border-4 border-[var(--bg-primary)] flex items-center justify-center">
               <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
          </div>
          
          <div className="flex-1 pb-4 space-y-2">
            <div className="flex items-center gap-3">
               <h1 className="text-4xl font-black tracking-tight">Alex Johnson</h1>
               <Badge className="bg-gradient-to-r from-yellow-500 to-amber-400 text-[#121821] border-none font-black">PRO</Badge>
            </div>
            <p className="text-[var(--text-secondary)] font-medium flex items-center gap-2">
               <Mail className="w-4 h-4" /> alex.johnson@example.com \u2022 Joined Oct 2023
            </p>
          </div>

          <div className="pb-4 flex gap-3">
             <Button variant="outline" className="rounded-2xl border-white/5 bg-white/5 h-12 px-6 gap-2">
                <Settings className="w-4 h-4" /> Edit Profile
             </Button>
             <Button className="rounded-2xl bg-[var(--accent-color)] hover:bg-blue-600 h-12 px-8 font-black">
                Upgrade
             </Button>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column: Stats & Progress */}
        <div className="lg:col-span-2 space-y-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <Card key={i} className="p-6 bg-[#121821] border-white/5 glass-panel rounded-3xl">
                <div className={`p-2.5 rounded-xl inline-flex mb-4 ${
                  stat.color === 'blue' ? 'bg-blue-500/10 text-blue-400' :
                  stat.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                  stat.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                  'bg-orange-500/10 text-orange-400'
                }`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)] mb-1">{stat.label}</p>
                <p className="text-2xl font-black">{stat.value}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-[#121821] border-white/5 glass-panel rounded-[2.5rem]">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-xl font-black">Achievement Roadmap</h3>
               <Button variant="ghost" className="text-xs font-black uppercase tracking-widest text-[var(--accent-color)]">All Badges</Button>
            </div>
            <div className="space-y-8">
               {[1, 2, 3].map(i => (
                 <div key={i} className="flex items-center gap-6 group cursor-pointer">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border border-white/5 shadow-xl transition-all group-hover:scale-110 ${
                      i === 1 ? 'bg-yellow-500/10 text-yellow-500' : 'bg-white/5 text-white/20'
                    }`}>
                       <Star className={`w-7 h-7 ${i===1 ? 'fill-yellow-500' : ''}`} />
                    </div>
                    <div className="flex-1">
                       <div className="flex justify-between items-center mb-1">
                          <p className="font-bold">{i === 1 ? 'Master Learner' : 'Knowledge seeker ' + i}</p>
                          <span className="text-xs font-bold text-white/30">{i === 1 ? '100%' : '45%'}</span>
                       </div>
                       <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${i === 1 ? 'bg-yellow-500' : 'bg-white/20'}`} style={{ width: i === 1 ? '100%' : '45%' }}></div>
                       </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/10 group-hover:text-white transition-colors" />
                 </div>
               ))}
            </div>
          </Card>
        </div>

        {/* Right Column: Earnings & Referral */}
        <div className="space-y-10">
          <Card className="p-8 bg-[#121821] border-white/5 glass-panel rounded-[2.5rem] relative overflow-hidden">
             <div className="absolute -top-10 -right-10 opacity-5 rotate-12">
                <Wallet className="w-40 h-40" />
             </div>
             <div className="space-y-6">
                <div className="space-y-1">
                   <p className="text-xs font-black uppercase tracking-widest text-[var(--text-secondary)]">Available Balance</p>
                   <div className="flex items-center gap-2">
                      <Wallet className="w-8 h-8 text-[var(--reward-gold)]" />
                      <span className="text-5xl font-black">450</span>
                      <span className="text-lg font-bold text-[var(--reward-gold)]">COINS</span>
                   </div>
                </div>
                
                <div className="pt-6 border-t border-white/5 space-y-4">
                   <WithdrawalSection />
                </div>
             </div>
          </Card>

          <Card className="p-8 bg-blue-600 border-none rounded-[2.5rem] text-white relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-700 opacity-90"></div>
             <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                <Share2 className="w-32 h-32" />
             </div>
             <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-black">Invite Friends</h3>
                <p className="text-blue-100 font-medium">
                   Share your link and earn 100 coins for every friend who joins.
                </p>
                <div className="flex gap-2 pt-2">
                   <div className="flex-1 bg-black/20 rounded-xl px-4 flex items-center text-sm font-bold border border-white/10">
                      dala.study/alex_j
                   </div>
                   <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-xl font-black">
                      Copy
                   </Button>
                </div>
             </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;