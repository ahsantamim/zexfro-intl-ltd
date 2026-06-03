import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

export default function CreateProductLoading() {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <LoadingSpinner size="lg" text="Loading form..." />
    </div>
  );
}
