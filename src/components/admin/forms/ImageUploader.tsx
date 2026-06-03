"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { X, Upload, Loader2 } from "lucide-react";
import { uploadMultipleToSupabase } from "@/lib/supabase/storage";
import { SUPABASE_S3_CONFIG } from "@/lib/supabase/storage";
import { validateUploadFile } from "@/config/storage";

type AspectRatioPreset = "square" | "landscape" | "portrait";

const ASPECT_HINTS: Record<
  AspectRatioPreset,
  { ratio: string; dimensions: string }
> = {
  square: { ratio: "1:1", dimensions: "800×800px" },
  landscape: { ratio: "16:9", dimensions: "1200×675px" },
  portrait: { ratio: "3:4", dimensions: "600×800px" },
};

const ASPECT_CLASSES: Record<AspectRatioPreset, string> = {
  square: "aspect-square",
  landscape: "aspect-video",
  portrait: "aspect-[3/4]",
};

interface ImageUploaderProps {
  label?: string;
  value: string[];
  onChange: (urls: string[]) => void;
  bucket?: "products" | "blog" | "categories";
  maxFiles?: number;
  required?: boolean;
  accept?: string;
  aspectRatio?: AspectRatioPreset;
}

export function ImageUploader({
  label = "Product Images",
  value,
  onChange,
  bucket = "products",
  maxFiles = 5,
  required = false,
  accept = "image/*",
  aspectRatio = "square",
}: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const aspectHint = ASPECT_HINTS[aspectRatio];
  const aspectClass = ASPECT_CLASSES[aspectRatio];

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files) return;

    if (value.length + files.length > maxFiles) {
      setError(`Maximum ${maxFiles} images allowed`);
      return;
    }

    const filesArray = Array.from(files);
    for (const file of filesArray) {
      const validation = validateUploadFile(file);
      if (!validation.valid) {
        setError(validation.error ?? "Invalid file");
        return;
      }
    }

    setError(null);
    setUploading(true);

    try {
      const bucketName = SUPABASE_S3_CONFIG.buckets[bucket];

      const results = await uploadMultipleToSupabase(
        bucketName,
        filesArray,
        `${bucket}/${Date.now()}`
      );

      const successfulUrls = results
        .filter((result) => !result.error && result.url)
        .map((result) => result.url);

      const errors = results.filter((result) => result.error);
      if (errors.length > 0) {
        setError(
          `Failed to upload ${errors.length} file(s): ${errors[0].error}`
        );
      }

      if (successfulUrls.length > 0) {
        onChange([...value, ...successfulUrls]);
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to upload images"
      );
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleRemoveImage = (url: string) => {
    onChange(value.filter((v) => v !== url));
    setError(null);
  };

  const remainingSlots = maxFiles - value.length;

  return (
    <div className="space-y-4">
      {label && (
        <Label>
          {label}
          {required && <span className="text-red-500"> *</span>}
        </Label>
      )}

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition">
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={accept}
          onChange={handleFileSelect}
          disabled={uploading || remainingSlots === 0}
          className="hidden"
        />

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading || remainingSlots === 0}
          className="w-full"
        >
          {uploading ? (
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Uploading...</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <Upload className="w-8 h-8 text-gray-400" />
              <span className="text-sm font-medium">
                Click to upload or drag and drop
              </span>
              <span className="text-xs text-gray-500">
                {remainingSlots > 0
                  ? `${remainingSlots} slot${remainingSlots !== 1 ? "s" : ""} remaining`
                  : "Maximum images reached"}
              </span>
              <span className="text-xs text-gray-400">
                Recommended {aspectHint.dimensions} ({aspectHint.ratio})
              </span>
            </div>
          )}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
          {error}
        </div>
      )}

      {value.length > 0 && (
        <div>
          <h4 className="text-sm font-medium mb-3">
            Uploaded Images ({value.length}/{maxFiles})
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {value.map((url) => (
              <div key={url} className="relative group">
                <div
                  className={`${aspectClass} rounded-lg overflow-hidden bg-gray-100 border border-gray-200`}
                >
                  <img
                    src={url}
                    alt="Uploaded"
                    className="w-full h-full object-contain"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveImage(url)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                  title="Remove image"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <p className="text-xs text-gray-500">
        Supported formats: JPEG, PNG, WebP, GIF. First image is used as the
        primary display image.
      </p>
    </div>
  );
}
