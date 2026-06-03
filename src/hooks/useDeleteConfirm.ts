"use client";

import { useCallback, useState } from "react";

export interface DeleteConfirmTarget {
  id: string;
  name: string;
}

interface OpenDeleteOptions {
  id: string;
  name: string;
  onConfirm: (id: string) => void | Promise<void>;
}

export function useDeleteConfirm() {
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState<DeleteConfirmTarget | null>(null);
  const [onConfirmFn, setOnConfirmFn] = useState<
    ((id: string) => void | Promise<void>) | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);

  const requestDelete = useCallback(
    ({ id, name, onConfirm }: OpenDeleteOptions) => {
      setTarget({ id, name });
      setOnConfirmFn(() => onConfirm);
      setOpen(true);
    },
    []
  );

  const handleConfirm = useCallback(async () => {
    if (!target || !onConfirmFn) return;
    setIsLoading(true);
    try {
      await onConfirmFn(target.id);
      setOpen(false);
      setTarget(null);
      setOnConfirmFn(null);
    } finally {
      setIsLoading(false);
    }
  }, [target, onConfirmFn]);

  const handleOpenChange = useCallback(
    (next: boolean) => {
      if (!isLoading) {
        setOpen(next);
        if (!next) {
          setTarget(null);
          setOnConfirmFn(null);
        }
      }
    },
    [isLoading]
  );

  return {
    open,
    target,
    isLoading,
    requestDelete,
    handleConfirm,
    handleOpenChange,
  };
}
