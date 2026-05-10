import { motion } from "framer-motion";
import { Upload, FileText, Mic, Sparkles, BookOpen, Clock, Flame, Wallet, Trophy, ArrowRight, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import PomodoroTimer from "../tools/PomodoroTimer";
import { useRef } from "react";

const HomeDashboard = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12"
    >
      {/* Hero Section */}
      <section className="relative min-h-[460px] rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center text-center px-6 group">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.45 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/723c6ae1-042d-4239-bab6-8fdb11cf9006/hero-premium-bg-4a3ed0cf-1778186723890.webp"
            alt="Hero"
            className="w-full h-full object-cover transition-transform duration-10000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)]/40 via-transparent to-[var(--bg-primary)]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)] opacity-60"></div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="relative z-10 space-y-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Badge className="bg-blue-500/10 text-[var(--accent-color)] border-[var(--accent-color)]/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3 h-3 mr-2" /> Next-Gen AI Learning
            </Badge>
          </motion.div>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Accelerate Your <br />
            <span className="text-gradient italic">Intelligence</span>
          </h1>
          
          <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-xl mx-auto font-medium">
            Transform any document, audio, or text into a complete study ecosystem in seconds.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button size="lg" className="rounded-2xl bg-[var(--accent-color)] hover:bg-blue-600 px-10 h-14 font-bold shadow-xl shadow-blue-500/20 group">
              Get Started Free <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 px-10 h-14 font-bold backdrop-blur-sm">
              Browse Library
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Action Cards with Spotlight Effect */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Upload PDF", icon: Upload, desc: "Analyze documents & generate sets", color: "blue" },
          { title: "Paste Text", icon: FileText, desc: "Summarize articles & notes instantly", color: "purple" },
          { title: "Voice Note", icon: Mic, desc: "Transcribe & study audio lectures", color: "emerald" },
        ].map((action, i) => (
          <ActionCard key={i} action={action} index={i} variants={itemVariants} />
        ))}
      </section>

      {/* Explore & Stats Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Star className="w-6 h-6 text-[var(--reward-gold)] fill-[var(--reward-gold)]" />
                Recent Study Sets
              </h2>
              <p className="text-sm text-[var(--text-secondary)] font-medium">Pick up where you left off</p>
            </div>
            <Button variant="ghost" className="text-[var(--accent-color)] font-bold hover:bg-blue-500/10">
              View All Sets
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="p-5 bg-[var(--bg-card)] border-white/5 hover:border-[var(--accent-color)]/40 transition-all duration-300 flex gap-5 items-center group cursor-pointer hover:bg-white/[0.02]">
                <div className="w-20 h-20 rounded-2xl bg-white/5 overflow-hidden flex-shrink-0 border border-white/5">
                  <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/723c6ae1-042d-4239-bab6-8fdb11cf9006/study-icons-3d-94ebc938-1778186725538.webp" alt="Study" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                     <Badge variant="secondary" className="bg-white/5 text-[10px] uppercase tracking-tighter">Science</Badge>
                  </div>
                  <h4 className="font-bold text-lg group-hover:text-[var(--accent-color)] transition-colors">Quantum Mechanics 101</h4>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs text-[var(--text-secondary)] flex items-center gap-1">
                       <BookOpen className="w-3 h-3" /> 24 Cards
                    </span>
                    <span className="text-xs text-[var(--text-secondary)] flex items-center gap-1">
                       <Clock className="w-3 h-3" /> 2d ago
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Weekly Activity</h2>
          <Card className="p-8 bg-[var(--bg-card)] border-white/5 space-y-8 glass-panel relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
               <Trophy className="w-32 h-32" />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 shadow-lg shadow-orange-500/10">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)] font-bold uppercase tracking-wider">Daily Streak</p>
                  <p className="text-2xl font-black">12 Days</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-[var(--text-secondary)] font-bold uppercase tracking-wider">Earnings</p>
                <div className="flex items-center gap-1.5 text-[var(--reward-gold)] justify-end">
                  <Wallet className="w-5 h-5" />
                  <span className="text-2xl font-black">450</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm font-bold">
                <span className="text-[var(--text-secondary)]">Weekly Goal Progress</span>
                <span className="text-[var(--accent-color)]">85%</span>
              </div>
              <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300 rounded-full shadow-[0_0_12px_rgba(79,140,255,0.4)]"
                />
              </div>
              <p className="text-xs text-[var(--text-secondary)] text-center">You're on track! Just 3 more sessions to reach your goal.</p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
              <div className="text-center space-y-1">
                <Clock className="w-5 h-5 mx-auto text-blue-400" />
                <p className="text-xl font-black">4.2h</p>
                <p className="text-[10px] text-[var(--text-secondary)] font-bold uppercase">Study Time</p>
              </div>
              <div className="text-center space-y-1">
                <Trophy className="w-5 h-5 mx-auto text-[var(--reward-gold)]" />
                <p className="text-xl font-black">#4</p>
                <p className="text-[10px] text-[var(--text-secondary)] font-bold uppercase">Global Rank</p>
              </div>
            </div>
          </Card>

          <PomodoroTimer />
        </div>
      </section>
    </motion.div>
  );
};

const ActionCard = ({ action, variants }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div variants={variants} className="h-full">
      <Card 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="p-8 bg-[var(--bg-card)] border-white/5 spotlight-card card-hover cursor-pointer group h-full flex flex-col items-start rounded-[2rem]"
      >
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-xl ${
          action.color === 'blue' ? 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white shadow-blue-500/10' :
          action.color === 'purple' ? 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white shadow-purple-500/10' :
          'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white shadow-emerald-500/10'
        }`}>
          <action.icon className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold mb-3">{action.title}</h3>
        <p className="text-[var(--text-secondary)] text-sm font-medium">{action.desc}</p>
        <div className="mt-auto pt-8 w-full">
           <div className="flex items-center gap-2 text-xs font-bold text-[var(--text-secondary)] group-hover:text-white transition-colors">
              Start Task <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
           </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default HomeDashboard;