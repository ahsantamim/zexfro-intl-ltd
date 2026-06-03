"use client";

import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdminFormActionsProps {
  onCancel: () => void;
  isSubmitting: boolean;
  submitLabel: string;
  submittingLabel: string;
  cancelLabel?: string;
}

export function AdminFormActions({
  onCancel,
  isSubmitting,
  submitLabel,
  submittingLabel,
  cancelLabel = "Cancel",
}: AdminFormActionsProps) {
  return (
    <div className="flex flex-wrap gap-4 pt-2">
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#0a4a9e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#083d82] transition disabled:opacity-50 flex items-center gap-2"
      >
        {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
        {isSubmitting ? submittingLabel : submitLabel}
      </button>
      <Button
        type="button"
        variant="outline"
        onClick={onCancel}
        disabled={isSubmitting}
        className="px-6 py-3 h-auto"
      >
        {cancelLabel}
      </Button>
    </div>
  );
}
