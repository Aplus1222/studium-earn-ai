import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Progress } from "../ui/progress";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { ChevronLeft, ChevronRight, RotateCcw, MessageSquare, BrainCircuit, Sparkles, CheckCircle2, MoreHorizontal, Maximize2, Send, Info } from "lucide-react";
import { toast } from "sonner";

const StudyExperience = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [progress, setProgress] = useState(35);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hi! I'm your AI tutor. How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState("");

  const flashcards = [
    { q: "What is photosynthesis?", a: "The process by which plants use sunlight, water, and carbon dioxide to create oxygen and energy in the form of sugar.", tag: "Biology" },
    { q: "Who proposed the theory of relativity?", a: "Albert Einstein proposed it in the early 20th century, revolutionizing our understanding of space and time.", tag: "Physics" },
    { q: "What is the capital of France?", a: "Paris is the capital and most populous city of France, famous for its culture and the Eiffel Tower.", tag: "Geography" },
  ];

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentCard((prev) => (prev + 1) % flashcards.length);
      setProgress((prev) => Math.min(prev + 15, 100));
    }, 150);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const newMsg = { role: 'user', text: inputValue };
    setMessages([...messages, newMsg]);
    setInputValue("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', text: "That's a great question about " + flashcards[currentCard].tag + "! Let me explain..." }]);
    }, 1000);
  };

  const handleFinish = () => {
    toast.success("Study session completed!", {
      description: "You've earned 50 coins for today's effort.",
      icon: <Sparkles className="w-5 h-5 text-yellow-500" />
    });
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-color)] bg-blue-500/10 px-2 py-0.5 rounded-md">In Progress</span>
            <span className="text-xs text-[var(--text-secondary)] font-medium">Created 3h ago</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight">Biology 101: Plant Life</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="rounded-xl gap-2 border-white/5 bg-white/5 hover:bg-white/10 h-11">
            <RotateCcw className="w-4 h-4" /> Reset
          </Button>
          <Button className="rounded-xl gap-2 bg-[var(--accent-color)] hover:bg-blue-600 h-11 px-6">
            Save Progress
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
             <span className="text-sm font-bold text-white">Session Progress</span>
             <p className="text-xs text-[var(--text-secondary)]">{flashcards.length - currentCard} cards remaining</p>
          </div>
          <span className="text-2xl font-black text-[var(--accent-color)]">{progress}%</span>
        </div>
        <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-blue-600 to-indigo-400 rounded-full shadow-[0_0_15px_rgba(79,140,255,0.3)]"
          />
        </div>
      </div>

      <Tabs defaultValue="flashcards" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="inline-flex h-14 items-center justify-center rounded-2xl bg-white/5 border border-white/5 p-1.5 w-full max-w-lg">
            <TabsTrigger value="flashcards" className="inline-flex items-center justify-center whitespace-nowrap rounded-xl px-8 py-2.5 text-sm font-bold transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:shadow-sm flex-1 gap-2">
              <RotateCcw className="w-4 h-4" /> Flashcards
            </TabsTrigger>
            <TabsTrigger value="quiz" className="inline-flex items-center justify-center whitespace-nowrap rounded-xl px-8 py-2.5 text-sm font-bold transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:shadow-sm flex-1 gap-2">
              <CheckCircle2 className="w-4 h-4" /> Quiz
            </TabsTrigger>
            <TabsTrigger value="tutor" className="inline-flex items-center justify-center whitespace-nowrap rounded-xl px-8 py-2.5 text-sm font-bold transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:shadow-sm flex-1 gap-2">
              <BrainCircuit className="w-4 h-4" /> AI Tutor
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="flashcards" className="mt-0 space-y-10 outline-none">
          <div className="relative h-[480px] w-full perspective-1000 cursor-pointer group" onClick={() => setIsFlipped(!isFlipped)}>
            <motion.div
              className="w-full h-full relative"
              initial={false}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100, damping: 15 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front */}
              <Card className="absolute inset-0 backface-hidden p-12 bg-[#1A212D] border-white/5 flex flex-col items-center justify-center text-center rounded-[3rem] shadow-2xl overflow-hidden">
                <div className="absolute top-10 left-10 flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-secondary)]">Scientific Concept</span>
                </div>
                <Button variant="ghost" size="icon" className="absolute top-8 right-8 text-white/20">
                   <Maximize2 className="w-5 h-5" />
                </Button>
                
                <Badge variant="outline" className="mb-10 rounded-full border-blue-500/20 text-blue-400 px-4">{flashcards[currentCard].tag}</Badge>
                <p className="text-3xl md:text-5xl font-black leading-tight text-white">
                  {flashcards[currentCard].q}
                </p>
                <div className="mt-16 flex flex-col items-center gap-2">
                  <p className="text-white/30 text-xs font-bold uppercase tracking-[0.3em]">Tap to reveal</p>
                  <div className="w-10 h-1 bg-white/5 rounded-full overflow-hidden">
                     <motion.div 
                       animate={{ x: [-20, 20] }}
                       transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                       className="w-5 h-full bg-blue-500/40"
                     />
                  </div>
                </div>
              </Card>

              {/* Back */}
              <Card 
                className="absolute inset-0 backface-hidden p-12 bg-gradient-to-br from-indigo-950/40 to-[#121821] border-blue-500/20 flex flex-col items-center justify-center text-center rounded-[3rem] shadow-2xl overflow-hidden"
                style={{ transform: "rotateY(180deg)" }}
              >
                <div className="absolute top-0 right-0 p-12 opacity-10">
                   <Sparkles className="w-40 h-40 text-blue-400" />
                </div>
                <Badge variant="outline" className="mb-10 rounded-full border-indigo-400/30 text-indigo-300 px-4">The Answer</Badge>
                <p className="text-2xl md:text-3xl font-medium leading-relaxed text-blue-50">
                  {flashcards[currentCard].a}
                </p>
                <div className="mt-12 flex items-center gap-4">
                   <Button variant="outline" className="rounded-full border-white/10 bg-white/5 hover:bg-white/10">Too Easy</Button>
                   <Button variant="outline" className="rounded-full border-white/10 bg-white/5 hover:bg-white/10">Hard</Button>
                </div>
              </Card>
            </motion.div>
          </div>

          <div className="flex items-center justify-between bg-white/5 p-4 rounded-[2rem] border border-white/5">
            <div className="flex items-center gap-2">
               <Button 
                size="icon" 
                variant="ghost" 
                className="w-12 h-12 rounded-2xl hover:bg-white/10 text-white/50"
                onClick={(e) => { e.stopPropagation(); setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length); }}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/5">
                <span className="text-white font-black">{currentCard + 1}</span>
                <span className="text-white/30 mx-2">/</span>
                <span className="text-white/30 font-bold">{flashcards.length}</span>
              </div>
              <Button 
                size="icon" 
                variant="ghost" 
                className="w-12 h-12 rounded-2xl hover:bg-white/10 text-white/50"
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            <div className="hidden md:flex items-center gap-4">
               <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[var(--bg-card)] bg-white/10 flex items-center justify-center text-[10px] font-bold">
                      +{i}k
                    </div>
                  ))}
               </div>
               <span className="text-xs text-[var(--text-secondary)] font-bold uppercase tracking-wider">Studying now</span>
            </div>

            <Button onClick={handleFinish} className="rounded-2xl px-10 h-12 gap-2 bg-[var(--accent-color)] hover:bg-blue-600 font-bold shadow-lg shadow-blue-500/20">
              Finish Session <Sparkles className="w-4 h-4" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="quiz" className="mt-0 outline-none">
           <Card className="p-16 bg-[#121821] border-white/5 text-center space-y-8 rounded-[3rem] glass-panel">
              <div className="w-24 h-24 bg-blue-500/10 rounded-[2rem] flex items-center justify-center mx-auto text-[var(--accent-color)] shadow-2xl shadow-blue-500/10 rotate-12">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <div className="space-y-3">
                <h2 className="text-4xl font-black">Smart Knowledge Test</h2>
                <p className="text-[var(--text-secondary)] max-w-lg mx-auto text-lg font-medium">
                  Generate a dynamic quiz based on your study materials. Our AI evaluates your conceptual understanding.
                </p>
              </div>
              <div className="flex justify-center gap-4">
                 <Button size="lg" className="rounded-2xl h-14 px-12 bg-[var(--accent-color)] font-bold text-lg hover:bg-blue-600">Start New Quiz</Button>
                 <Button size="lg" variant="outline" className="rounded-2xl h-14 px-8 border-white/10 bg-white/5 font-bold">Review Past Tests</Button>
              </div>
              <div className="pt-8 border-t border-white/5 flex justify-center gap-12">
                 <div className="text-center">
                    <p className="text-2xl font-black">92%</p>
                    <p className="text-xs text-[var(--text-secondary)] font-bold uppercase tracking-widest">Avg Score</p>
                 </div>
                 <div className="text-center">
                    <p className="text-2xl font-black">14</p>
                    <p className="text-xs text-[var(--text-secondary)] font-bold uppercase tracking-widest">Completed</p>
                 </div>
                 <div className="text-center">
                    <p className="text-2xl font-black">4.8</p>
                    <p className="text-xs text-[var(--text-secondary)] font-bold uppercase tracking-widest">Difficulty</p>
                 </div>
              </div>
           </Card>
        </TabsContent>

        <TabsContent value="tutor" className="mt-0 outline-none">
          <Card className="flex flex-col h-[600px] bg-[#121821] border-white/5 rounded-[3rem] overflow-hidden glass-panel">
            <div className="p-8 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                  <BrainCircuit className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-black text-xl">AI Study Partner</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <p className="text-xs text-emerald-500 font-bold uppercase tracking-widest">Neural Model Active</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-xl hover:bg-white/5 text-white/30"><Info className="w-5 h-5" /></Button>
                <Button variant="ghost" size="icon" className="rounded-xl hover:bg-white/5 text-white/30"><MoreHorizontal className="w-5 h-5" /></Button>
              </div>
            </div>
            
            <div className="flex-1 p-8 space-y-6 overflow-y-auto custom-scrollbar bg-gradient-to-b from-transparent to-white/[0.01]">
              <AnimatePresence mode="popLayout">
                {messages.map((msg, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[75%] p-5 rounded-[2rem] text-sm font-medium ${
                      msg.role === 'user' 
                        ? 'bg-[var(--accent-color)] text-white rounded-tr-none shadow-xl shadow-blue-500/10' 
                        : 'bg-white/5 text-white/90 border border-white/5 rounded-tl-none'
                    }`}>
                      <p className="leading-relaxed">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="p-8 bg-[var(--bg-primary)]/50 border-t border-white/5">
              <div className="flex gap-3 bg-white/5 p-2 rounded-[1.5rem] border border-white/5 focus-within:border-[var(--accent-color)]/30 transition-all">
                <Input 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask a deep question..."
                  className="flex-1 bg-transparent border-none focus-visible:ring-0 rounded-xl px-4 h-12 text-sm"
                />
                <Button 
                  onClick={handleSendMessage}
                  size="icon" 
                  className="rounded-xl bg-[var(--accent-color)] hover:bg-blue-600 flex-shrink-0 w-12 h-12 shadow-lg shadow-blue-500/20 transition-transform active:scale-95"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-center text-[10px] text-white/20 mt-4 uppercase tracking-[0.2em] font-bold">AI can make mistakes. Verify important facts.</p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudyExperience;