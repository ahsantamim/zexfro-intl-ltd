"use client";

import { useEffect, useState } from "react";
import { Edit, Trash2, Eye, TrendingUp, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TableSkeleton } from "./loading";
import { DeleteConfirmDialog } from "@/components/admin/DeleteConfirmDialog";
import { useDeleteConfirm } from "@/hooks/useDeleteConfirm";
import { useRouter } from "next/navigation";
import type { TradeType } from "@/lib/supabase/trade-types.service";

interface TradeTypesTableProps {
  loading?: boolean;
}

export function TradeTypesTable({ loading: initialLoading = false }: TradeTypesTableProps) {
  const router = useRouter();
  const [tradeTypes, setTradeTypes] = useState<TradeType[]>([]);
  const [loading, setLoading] = useState(initialLoading);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const deleteConfirm = useDeleteConfirm();

  // Fetch trade types
  useEffect(() => {
    async function fetchTradeTypes() {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
        });

        if (search) params.append('search', search);
        if (statusFilter !== 'all') params.append('status', statusFilter);

        const response = await fetch(`/api/admin/trade-types?${params}`);
        const data = await response.json();

        if (data.success) {
          setTradeTypes(data.data);
          setTotal(data.pagination.total);
          setTotalPages(data.pagination.totalPages);
        }
      } catch (error) {
        console.error('Failed to fetch trade types:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTradeTypes();
  }, [page, limit, search, statusFilter]);

  const performDelete = async (id: string) => {
    const response = await fetch(`/api/admin/trade-types/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();

    if (data.success) {
      setTradeTypes((prev) => prev.filter((tt) => tt.id !== id));
    } else {
      alert("Failed to delete trade type: " + data.error);
      throw new Error(data.error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  if (loading) {
    return <TableSkeleton rows={5} columns={5} />;
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <Card className="p-4 border-none shadow-sm rounded-none">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search trade types..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="true">Active</SelectItem>
              <SelectItem value="false">Inactive</SelectItem>
            </SelectContent>
          </Select>

          <Select value={limit.toString()} onValueChange={(val) => setLimit(parseInt(val))}>
            <SelectTrigger>
              <SelectValue placeholder="Show 10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">Show 10</SelectItem>
              <SelectItem value="25">Show 25</SelectItem>
              <SelectItem value="50">Show 50</SelectItem>
              <SelectItem value="100">Show 100</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Table */}
      <Card className="border-none shadow-sm rounded-none overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 hover:bg-gray-50">
                <TableHead className="font-bold text-gray-900">Trade Type</TableHead>
                <TableHead className="font-bold text-gray-900">Slug</TableHead>
                <TableHead className="font-bold text-gray-900">Products</TableHead>
                <TableHead className="font-bold text-gray-900">Status</TableHead>
                <TableHead className="font-bold text-gray-900">Created</TableHead>
                <TableHead className="text-right font-bold text-gray-900">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tradeTypes.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-32 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <TrendingUp className="w-12 h-12 text-gray-300" />
                      <p className="text-gray-600">No trade types found</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                tradeTypes.map((tradeType) => (
                  <TableRow key={tradeType.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0a4a9e] to-[#05306b] flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-semibold">{tradeType.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-sm text-gray-600">
                      {tradeType.slug}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="border-[#0a4a9e] text-[#0a4a9e]">
                        {tradeType._count?.products || 0} products
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={
                          tradeType.status
                            ? "bg-green-50 text-green-700 hover:bg-green-50"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                        }
                      >
                        {tradeType.status ? 'Active' : 'Inactive'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {formatDate(tradeType.created_at)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-blue-50 hover:text-[#0a4a9e]"
                          onClick={() => router.push(`/admin/trade-types/${tradeType.id}`)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-blue-50 hover:text-[#0a4a9e]"
                          onClick={() => router.push(`/admin/trade-types/${tradeType.id}/edit`)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-red-50 hover:text-red-600"
                          onClick={() =>
                            deleteConfirm.requestDelete({
                              id: tradeType.id,
                              name: tradeType.name,
                              onConfirm: performDelete,
                            })
                          }
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <Card className="p-4 border-none shadow-sm rounded-none">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing {((page - 1) * limit) + 1} to {Math.min(page * limit, total)} of {total} trade types
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              <div className="text-sm text-gray-600">
                Page {page} of {totalPages}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}

      <DeleteConfirmDialog
        open={deleteConfirm.open}
        onOpenChange={deleteConfirm.handleOpenChange}
        title="Delete trade type?"
        itemName={deleteConfirm.target?.name}
        onConfirm={deleteConfirm.handleConfirm}
        isLoading={deleteConfirm.isLoading}
      />
    </div>
  );
}

