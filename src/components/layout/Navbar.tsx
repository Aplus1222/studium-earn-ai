import { Search, Bell, User, LayoutDashboard, GraduationCap, Trophy, ShieldCheck, Menu, Settings, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Study", path: "/study", icon: GraduationCap },
    { name: "Leaderboard", path: "/leaderboard", icon: Trophy },
    { name: "Admin", path: "/admin", icon: ShieldCheck },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-blue-500/20">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none tracking-tight text-white">Dala Study</span>
              <span className="text-[10px] font-medium text-[var(--accent-color)] tracking-[0.2em] uppercase">Premium AI</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button 
                  variant="ghost" 
                  className={`relative gap-2 h-10 px-4 rounded-xl transition-all duration-300 ${
                    location.pathname === link.path ? "text-white bg-white/5" : "text-[var(--text-secondary)] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <link.icon className={`w-4 h-4 transition-colors ${location.pathname === link.path ? "text-[var(--accent-color)]" : ""}`} />
                  <span className="font-medium">{link.name}</span>
                  {location.pathname === link.path && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute -bottom-[1px] left-2 right-2 h-[2px] bg-gradient-to-r from-[var(--accent-color)] to-blue-300 rounded-full shadow-[0_0_8px_var(--accent-glow)]"
                    />
                  )}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex relative group">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)] group-focus-within:text-[var(--accent-color)] transition-colors" />
            <Input 
              placeholder="Search everything..." 
              className="w-72 bg-white/5 border-white/10 pl-11 h-10 rounded-xl focus:bg-white/10 focus:ring-1 focus:ring-[var(--accent-color)] transition-all duration-300"
            />
          </div>

          <div className="flex items-center gap-1.5">
            <Button variant="ghost" size="icon" className="relative text-[var(--text-secondary)] hover:text-white rounded-xl hover:bg-white/5">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[var(--bg-card)] shadow-sm animate-pulse"></span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-xl border border-white/10 bg-white/5 overflow-hidden p-0 w-9 h-9">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full object-cover" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-[var(--bg-card)] border-white/10 rounded-xl">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-bold leading-none">Alex Johnson</p>
                    <p className="text-xs leading-none text-[var(--text-secondary)]">Premium Plan</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/5" />
                <DropdownMenuItem className="gap-2 focus:bg-white/5 cursor-pointer rounded-lg">
                  <User className="w-4 h-4" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2 focus:bg-white/5 cursor-pointer rounded-lg">
                  <Settings className="w-4 h-4" /> Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-white/5" />
                <DropdownMenuItem className="gap-2 focus:bg-white/5 cursor-pointer text-red-400 rounded-lg">
                  <LogOut className="w-4 h-4" /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-[var(--text-secondary)] hover:text-white rounded-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden border-t border-white/5 bg-[var(--bg-card)]/95 backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            <div className="p-4 flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setIsMobileMenuOpen(false)}>
                  <div className={`flex items-center gap-3.5 p-3.5 rounded-xl transition-all ${location.pathname === link.path ? "bg-blue-500/10 text-[var(--accent-color)]" : "text-[var(--text-secondary)] hover:bg-white/5 hover:text-white"}`}>
                    <link.icon className="w-5 h-5" />
                    <span className="font-semibold text-sm">{link.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;