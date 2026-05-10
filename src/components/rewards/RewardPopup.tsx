import { CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";

interface RewardPopupProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
}

const RewardPopup = ({ isOpen, onClose, amount }: RewardPopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="w-full max-w-sm bg-[var(--bg-card)] border-2 border-[var(--reward-gold)] rounded-[2.5rem] p-8 text-center relative overflow-hidden"
          >
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--reward-gold)]/10 to-transparent pointer-events-none"></div>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-white"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </Button>

            <div className="relative z-10 space-y-6">
              <div className="w-24 h-24 bg-[var(--reward-gold)]/20 rounded-full flex items-center justify-center mx-auto ring-4 ring-[var(--reward-gold)]/30">
                <CheckCircle2 className="w-12 h-12 text-[var(--reward-gold)]" />
              </div>
              
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Reward Unlocked!</h2>
                <p className="text-[var(--text-secondary)]">You've successfully completed your daily goal.</p>
              </div>

              <div className="py-4 px-8 bg-white/5 rounded-2xl inline-block border border-white/10">
                <p className="text-xs uppercase tracking-widest text-[var(--reward-gold)] font-bold mb-1">Coins Earned</p>
                <p className="text-4xl font-black text-white">+{amount}</p>
              </div>

              <Button 
                onClick={onClose}
                className="w-full h-14 rounded-2xl bg-[var(--reward-gold)] text-black font-bold text-lg hover:bg-[#EAB308] glow-accent transition-all"
              >
                Claim Rewards
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RewardPopup;