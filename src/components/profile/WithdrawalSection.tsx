import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

const WithdrawalSection = () => {
  return (
    <Card className="p-8 bg-[var(--bg-card)] border-[var(--border-color)] space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Withdrawal Settings</h3>
        <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">USDT & Local Bank</Badge>
      </div>
      <p className="text-[var(--text-secondary)]">Configure how you receive your rewards from the platform.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <Button variant="outline" className="h-16 rounded-xl border-[var(--border-color)] flex items-center justify-start px-6 gap-4 hover:bg-white/5">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">B</div>
            <div className="text-left">
              <p className="font-bold">CBE / Dashen</p>
              <p className="text-xs text-[var(--text-secondary)]">Ethiopian Banks</p>
            </div>
         </Button>
         <Button variant="outline" className="h-16 rounded-xl border-[var(--border-color)] flex items-center justify-start px-6 gap-4 hover:bg-white/5">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold">$</div>
            <div className="text-left">
              <p className="font-bold">USDT (TRC20)</p>
              <p className="text-xs text-[var(--text-secondary)]">Crypto Withdrawal</p>
            </div>
         </Button>
      </div>
    </Card>
  );
};

export default WithdrawalSection;