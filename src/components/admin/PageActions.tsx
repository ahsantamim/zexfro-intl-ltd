"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, ArrowRight, Loader2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface PageActionsProps {
  title: string;
  description: string;
  createButtonText?: string;
  createLink?: string;
}

export function PageActions({
  title,
  description,
  createButtonText,
  createLink,
}: PageActionsProps) {
  const router = useRouter();
  const [isCreating, setIsCreating] = useState(false);

  const handleCreate = () => {
    if (!createLink || isCreating) return;
    setIsCreating(true);
    router.push(createLink);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0a4a9e] to-[#05306b] bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-gray-600 mt-2 text-lg">{description}</p>
        </div>
        {createButtonText && createLink && (
          <button
            type="button"
            onClick={handleCreate}
            disabled={isCreating}
            className={cn(
              "group inline-flex items-center gap-2 bg-gradient-to-r from-[#0a4a9e] to-[#05306b] hover:from-[#0d5bbf] hover:to-[#0a4a9e] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300",
              isCreating
                ? "opacity-80 cursor-wait scale-100"
                : "transform hover:scale-105"
            )}
          >
            {isCreating ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Plus className="w-5 h-5" strokeWidth={2.5} />
            )}
            {isCreating ? "Opening..." : createButtonText}
            {!isCreating && (
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            )}
          </button>
        )}
      </div>
      <Separator />
    </div>
  );
}
