"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Upload, X, Loader2 } from "lucide-react";
import { validateUploadFile } from "@/config/storage";
import {
  uploadToSupabase,
  SUPABASE_S3_CONFIG,
} from "@/lib/supabase/storage";

export type CoverUploadBucket = "blog" | "products" | "categories";

interface CoverImageUploaderProps {
  label?: string;
  value: string | null;
  onChange: (url: string | null) => void;
  required?: boolean;
  uploadBucket?: CoverUploadBucket;
  aspectRatio?: "landscape" | "square";
}

const RECOMMENDED = {
  landscape: { w: 1200, h: 675, label: "16:9" },
  square: { w: 800, h: 800, label: "1:1" },
};

export function CoverImageUploader({
  label = "Cover Image",
  value,
  onChange,
  required = false,
  uploadBucket = "blog",
  aspectRatio = "landscape",
}: CoverImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(value);
  const [error, setError] = useState<string | null>(null);

  const hint = RECOMMENDED[aspectRatio];
  const aspectClass =
    aspectRatio === "square" ? "aspect-square max-h-80" : "aspect-[16/9] max-h-80";

  useEffect(() => {
    setPreview(value);
  }, [value]);

  const displayUrl = preview ?? value;

  const handleFileSelect = async (file: File) => {
    const validation = validateUploadFile(file);
    if (!validation.valid) {
      setError(validation.error ?? "Invalid file");
      return;
    }

    setError(null);
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);

    setUploading(true);
    try {
      const bucketName = SUPABASE_S3_CONFIG.buckets[uploadBucket];
      const path = `${uploadBucket}/${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
      const result = await uploadToSupabase(bucketName, file, path);

      if (result.error || !result.url) {
        setError(result.error || "Failed to upload image");
        setPreview(value);
        return;
      }

      onChange(result.url);
      setPreview(result.url);
    } catch {
      setError("Failed to upload image. Please try again.");
      setPreview(value);
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    onChange(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="space-y-2">
      {label && (
        <Label>
          {label}
          {required && <span className="text-red-500"> *</span>}
        </Label>
      )}

      {displayUrl ? (
        <div
          className={`relative w-full ${aspectClass} bg-gray-100 rounded-lg overflow-hidden border border-gray-200`}
        >
          <Image
            src={displayUrl}
            alt="Cover preview"
            fill
            className="object-contain"
            unoptimized={displayUrl.startsWith("data:")}
          />
          {uploading && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
          )}
          <button
            type="button"
            onClick={handleRemove}
            disabled={uploading}
            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition disabled:opacity-50"
            title="Remove image"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div
          role="button"
          tabIndex={0}
          onClick={() => fileInputRef.current?.click()}
          onKeyDown={(e) => e.key === "Enter" && fileInputRef.current?.click()}
          className={`flex flex-col items-center justify-center w-full ${aspectRatio === "square" ? "aspect-square max-h-64" : "aspect-[16/9] max-h-64"} border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#0a4a9e] transition-colors bg-gray-50`}
        >
          {uploading ? (
            <Loader2 className="w-10 h-10 text-gray-400 animate-spin" />
          ) : (
            <>
              <Upload className="w-10 h-10 text-gray-400 mb-2" />
              <span className="text-sm font-medium text-gray-700">
                Click to upload cover image
              </span>
              <span className="text-xs text-gray-500 mt-1">
                Recommended {hint.w}×{hint.h}px ({hint.label})
              </span>
              <span className="text-xs text-gray-400 mt-0.5">
                JPEG, PNG, WebP, GIF
              </span>
            </>
          )}
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFileSelect(file);
          e.target.value = "";
        }}
      />

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
