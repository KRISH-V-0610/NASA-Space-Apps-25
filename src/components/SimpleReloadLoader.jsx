// components/SimpleReloadLoader.jsx
import React from "react";
import { Loader2 } from "lucide-react";

export default function SimpleReloadLoader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Spinning loader */}
        <Loader2 className="w-16 h-16 text-white animate-spin" />
        
        {/* Optional loading text */}
        <p className="text-white/80 text-lg font-custom3 tracking-wider">
          Loading...
        </p>
      </div>
    </div>
  );
}