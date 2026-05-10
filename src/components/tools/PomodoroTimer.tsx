import { useState, useEffect } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Play, Pause, RotateCcw, Timer } from "lucide-react";

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const resetTimer = () => {
    setMinutes(25);
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <Card className="p-6 bg-[var(--bg-card)] border-[var(--border-color)] text-center space-y-4">
      <div className="flex items-center justify-center gap-2 text-[var(--accent-color)]">
        <Timer className="w-5 h-5" />
        <span className="font-bold uppercase tracking-wider text-xs">Pomodoro</span>
      </div>
      <div className="text-4xl font-black font-mono">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-xl border-[var(--border-color)]"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-xl border-[var(--border-color)]"
          onClick={resetTimer}
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
};

export default PomodoroTimer;