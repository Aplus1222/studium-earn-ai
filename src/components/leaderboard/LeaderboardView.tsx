import { motion } from "framer-motion";
import { Trophy, Medal, Star, ArrowUpRight, ChevronRight, User } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const LeaderboardView = () => {
  const topUsers = [
    { rank: 1, name: "Sarah Connor", score: 12540, streak: 42, avatar: "Sarah" },
    { rank: 2, name: "Marcus Wright", score: 11200, streak: 15, avatar: "Marcus" },
    { rank: 3, name: "Kyle Reese", score: 10850, streak: 28, avatar: "Kyle" },
  ];

  const otherUsers = [
    { rank: 4, name: "Ellen Ripley", score: 9400, streak: 12 },
    { rank: 5, name: "Rick Deckard", score: 8900, streak: 8 },
    { rank: 6, name: "Dana Scully", score: 8200, streak: 21 },
    { rank: 7, name: "Fox Mulder", score: 7600, streak: 5 },
    { rank: 8, name: "James Bond", score: 7100, streak: 3 },
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      <div className="text-center space-y-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-black uppercase tracking-widest"
        >
          <Trophy className="w-4 h-4" /> Season 4 Active
        </motion.div>
        <h1 className="text-5xl font-black tracking-tight">Global Rankings</h1>
        <p className="text-[var(--text-secondary)] text-lg font-medium max-w-xl mx-auto">
          Competing for the top spot. New rewards released every Sunday at 00:00 UTC.
        </p>
      </div>

      {/* Top 3 Podiums */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end pt-10">
        {/* Rank 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="order-2 md:order-1"
        >
          <Card className="p-8 bg-[#121821] border-white/5 glass-panel text-center space-y-4 rounded-[2.5rem] relative overflow-hidden h-[340px] flex flex-col justify-center">
             <div className="absolute top-0 inset-x-0 h-1 bg-slate-400"></div>
             <div className="relative mx-auto w-24 h-24">
                <div className="w-24 h-24 rounded-[2rem] bg-slate-400/10 border-2 border-slate-400/20 overflow-hidden">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${topUsers[1].avatar}`} alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-slate-400 rounded-2xl flex items-center justify-center text-white font-black shadow-xl">
                   2
                </div>
             </div>
             <div className="space-y-1">
                <h3 className="text-xl font-black">{topUsers[1].name}</h3>
                <p className="text-[var(--accent-color)] font-bold">{topUsers[1].score.toLocaleString()} pts</p>
             </div>
             <Badge variant="secondary" className="bg-white/5 font-bold">{topUsers[1].streak} Day Streak</Badge>
          </Card>
        </motion.div>

        {/* Rank 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 0, scale: 0.95 }}
          animate={{ opacity: 1, y: -20, scale: 1 }}
          className="order-1 md:order-2"
        >
          <Card className="p-10 bg-[#121821] border-yellow-500/20 glass-panel text-center space-y-6 rounded-[3rem] relative shadow-2xl shadow-yellow-500/5 h-[400px] flex flex-col justify-center">
             <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-yellow-500 to-yellow-300"></div>
             <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <motion.div
                   animate={{ rotate: [0, 10, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity }}
                >
                   <Trophy className="w-16 h-16 text-yellow-500 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
                </motion.div>
             </div>
             <div className="relative mx-auto w-32 h-32">
                <div className="w-32 h-32 rounded-[2.5rem] bg-yellow-500/10 border-4 border-yellow-500/20 overflow-hidden">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${topUsers[0].avatar}`} alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-yellow-500 rounded-[1.2rem] flex items-center justify-center text-[#121821] font-black shadow-2xl">
                   1
                </div>
             </div>
             <div className="space-y-1">
                <h3 className="text-2xl font-black">{topUsers[0].name}</h3>
                <div className="flex items-center justify-center gap-2">
                   <span className="text-2xl font-black text-yellow-500">{topUsers[0].score.toLocaleString()}</span>
                   <span className="text-xs font-bold uppercase tracking-widest text-white/40">Points</span>
                </div>
             </div>
             <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-black mx-auto">
                <Star className="w-3 h-3 fill-yellow-500" /> Master Tier
             </div>
          </Card>
        </motion.div>

        {/* Rank 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="order-3 md:order-3"
        >
          <Card className="p-8 bg-[#121821] border-white/5 glass-panel text-center space-y-4 rounded-[2.5rem] relative overflow-hidden h-[340px] flex flex-col justify-center">
             <div className="absolute top-0 inset-x-0 h-1 bg-orange-700"></div>
             <div className="relative mx-auto w-24 h-24">
                <div className="w-24 h-24 rounded-[2rem] bg-orange-900/10 border-2 border-orange-700/20 overflow-hidden">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${topUsers[2].avatar}`} alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-orange-700 rounded-2xl flex items-center justify-center text-white font-black shadow-xl">
                   3
                </div>
             </div>
             <div className="space-y-1">
                <h3 className="text-xl font-black">{topUsers[2].name}</h3>
                <p className="text-[var(--accent-color)] font-bold">{topUsers[2].score.toLocaleString()} pts</p>
             </div>
             <Badge variant="secondary" className="bg-white/5 font-bold">{topUsers[2].streak} Day Streak</Badge>
          </Card>
        </motion.div>
      </div>

      {/* List Table */}
      <Card className="bg-[#121821] border-white/5 glass-panel rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
           <h3 className="text-xl font-black">Challengers</h3>
           <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">Prev</Button>
              <div className="flex gap-1">
                 {[1,2,3].map(i => (
                   <Button key={i} variant="ghost" className={`w-8 h-8 p-0 rounded-lg text-xs font-bold ${i===1 ? 'bg-white/10 text-white' : 'text-white/40'}`}>{i}</Button>
                 ))}
              </div>
              <Button variant="ghost" className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">Next</Button>
           </div>
        </div>
        <div className="p-4">
          {otherUsers.map((user, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group flex items-center justify-between p-4 hover:bg-white/[0.02] rounded-2xl transition-all cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <span className="w-6 text-sm font-black text-white/20 group-hover:text-[var(--accent-color)] transition-colors text-center">{user.rank}</span>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      <User className="w-5 h-5 text-white/30" />
                   </div>
                   <div>
                      <p className="text-base font-bold">{user.name}</p>
                      <p className="text-xs text-[var(--text-secondary)] font-medium">{user.streak} Day Streak</p>
                   </div>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-right">
                   <p className="text-lg font-black">{user.score.toLocaleString()}</p>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Points</p>
                </div>
                <ChevronRight className="w-5 h-5 text-white/10 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default LeaderboardView;