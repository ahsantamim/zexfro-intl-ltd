"use client";

import { AlertTriangle, Loader2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export interface DeleteConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  itemName?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void | Promise<void>;
  isLoading?: boolean;
}

export function DeleteConfirmDialog({
  open,
  onOpenChange,
  title = "Delete this item?",
  itemName,
  description,
  confirmLabel = "Delete",
  cancelLabel = "Cancel",
  onConfirm,
  isLoading = false,
}: DeleteConfirmDialogProps) {
  const resolvedDescription =
    description ??
    (itemName
      ? `You are about to permanently delete "${itemName}". This action cannot be undone.`
      : "This action cannot be undone. The item will be permanently removed from the system.");

  const handleOpenChange = (next: boolean) => {
    if (!isLoading) onOpenChange(next);
  };

  const handleConfirm = async () => {
    await onConfirm();
  };

  return (
    <AlertDialog open={open} onOpenChange={handleOpenChange}>
      <AlertDialogContent className="sm:max-w-md gap-0 p-0 overflow-hidden border-gray-200">
        <div className="p-6">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50 border border-red-100">
              <AlertTriangle className="h-6 w-6 text-red-600" aria-hidden />
            </div>
            <AlertDialogHeader className="text-left space-y-2 flex-1 p-0">
              <AlertDialogTitle className="text-xl font-bold text-gray-900 pr-0">
                {title}
              </AlertDialogTitle>
              <AlertDialogDescription className="text-gray-600 text-sm leading-relaxed">
                {resolvedDescription}
              </AlertDialogDescription>
            </AlertDialogHeader>
          </div>
        </div>

        <AlertDialogFooter className="flex-row gap-3 border-t border-gray-100 bg-gray-50/80 px-6 py-4 sm:justify-end">
          <AlertDialogCancel disabled={isLoading} className="mt-0 border-gray-300">
            {cancelLabel}
          </AlertDialogCancel>
          <Button
            type="button"
            variant="destructive"
            onClick={handleConfirm}
            disabled={isLoading}
            className="bg-red-600 hover:bg-red-700 min-w-[7.5rem]"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Deleting...
              </>
            ) : (
              confirmLabel
            )}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
