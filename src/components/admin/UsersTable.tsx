"use client";

import { useEffect, useState } from "react";
import { Edit, Trash2, Eye, Users, Search, ChevronLeft, ChevronRight, Shield, UserCog } from "lucide-react";
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
import type { User } from "@/lib/supabase/users.service";

interface UsersTableProps {
  loading?: boolean;
}

export function UsersTable({ loading: initialLoading = false }: UsersTableProps) {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(initialLoading);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const deleteConfirm = useDeleteConfirm();

  // Fetch users
  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
        });

        if (search) params.append('search', search);
        if (roleFilter !== 'all') params.append('role', roleFilter);

        const response = await fetch(`/api/admin/users?${params}`);
        const data = await response.json();

        if (data.success) {
          setUsers(data.data);
          setTotal(data.pagination.total);
          setTotalPages(data.pagination.totalPages);
        }
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [page, limit, search, roleFilter]);

  const performDelete = async (id: string) => {
    const response = await fetch(`/api/admin/users/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();

    if (data.success) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } else {
      alert("Failed to delete user: " + data.error);
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
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Roles" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="editor">Editor</SelectItem>
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
                <TableHead className="font-bold text-gray-900">User</TableHead>
                <TableHead className="font-bold text-gray-900">Email</TableHead>
                <TableHead className="font-bold text-gray-900">Role</TableHead>
                <TableHead className="font-bold text-gray-900">Joined</TableHead>
                <TableHead className="text-right font-bold text-gray-900">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="h-32 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Users className="w-12 h-12 text-gray-300" />
                      <p className="text-gray-600">No users found</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user) => (
                  <TableRow key={user.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium text-gray-900">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0a4a9e] to-[#05306b] flex items-center justify-center text-white font-semibold">
                          {user.full_name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-semibold">{user.full_name}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {user.email}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={
                          user.role === 'admin'
                            ? "bg-purple-50 text-purple-700 hover:bg-purple-50"
                            : "bg-blue-50 text-blue-700 hover:bg-blue-50"
                        }
                      >
                        {user.role === 'admin' ? (
                          <><Shield className="w-3 h-3 mr-1" /> Admin</>
                        ) : (
                          <><UserCog className="w-3 h-3 mr-1" /> Editor</>
                        )}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {formatDate(user.created_at)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-blue-50 hover:text-[#0a4a9e]"
                          onClick={() => router.push(`/admin/users/${user.id}`)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-blue-50 hover:text-[#0a4a9e]"
                          onClick={() => router.push(`/admin/users/${user.id}/edit`)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-red-50 hover:text-red-600"
                          onClick={() =>
                            deleteConfirm.requestDelete({
                              id: user.id,
                              name: user.email,
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
              Showing {((page - 1) * limit) + 1} to {Math.min(page * limit, total)} of {total} users
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
        title="Delete user?"
        itemName={deleteConfirm.target?.name}
        description={
          deleteConfirm.target
            ? `This will permanently remove the user account for "${deleteConfirm.target.name}".`
            : undefined
        }
        onConfirm={deleteConfirm.handleConfirm}
        isLoading={deleteConfirm.isLoading}
      />
    </div>
  );
}

