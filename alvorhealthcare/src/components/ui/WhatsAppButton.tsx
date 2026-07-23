"use client";

import { MessageCircle } from "lucide-react";
import { companyInfo } from "@/data";

export function WhatsAppButton() {
  const phone = companyInfo.contact.whatsapp?.replace(/\D/g, "");
  const message = encodeURIComponent("Hello! I'm interested in Alvor Healthcare products.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-large hover:bg-[#22c55e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
