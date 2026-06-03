import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryForm } from "@/components/admin/forms/CategoryForm";

export default function CreateCategoryPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/categories">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Create New Category
          </h1>
          <p className="text-gray-600 mt-2">Add a new product category</p>
        </div>
      </div>
      <CategoryForm />
    </div>
  );
}
