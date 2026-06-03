"use client";

import { useState, useEffect } from "react";
import {
  Eye,
  CheckCircle,
  XCircle,
  UserCheck,
  FileText,
  Phone,
  Mail,
  Building,
  MapPin,
  Briefcase,
  ExternalLink,
  Trash2,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DeleteConfirmDialog } from "@/components/admin/DeleteConfirmDialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableSkeleton } from "./loading";

interface Registration {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country?: string;
  designation?: string;
  clientType?: string;
  telephone?: string;
  documentUrl?: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface RegistrationsTableProps {
  loading?: boolean;
}

export function RegistrationsTable({
  loading: initialLoading = false,
}: RegistrationsTableProps) {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(initialLoading);
  const [selectedReg, setSelectedReg] = useState<Registration | null>(null);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [updating, setUpdating] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [registrationToDelete, setRegistrationToDelete] = useState<{
    id: string;
    name: string;
  } | null>(null);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/admin/registrations");
      const data = await response.json();

      if (response.ok) {
        setRegistrations(data.registrations);
      }
    } catch (error) {
      console.error("Error fetching registrations:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id: string, status: string) => {
    try {
      setUpdating(id);
      const response = await fetch("/api/admin/registrations", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });

      if (response.ok) {
        // Update local state
        setRegistrations((prev) =>
          prev.map((reg) => (reg.id === id ? { ...reg, status } : reg)),
        );
        if (selectedReg && selectedReg.id === id) {
          setSelectedReg({ ...selectedReg, status });
        }
      }
    } catch (error) {
      console.error("Error updating status:", error);
    } finally {
      setUpdating(null);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setDeleting(id);
      const response = await fetch(`/api/admin/registrations?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Remove from local state
        setRegistrations((prev) => prev.filter((reg) => reg.id !== id));
        if (selectedReg && selectedReg.id === id) {
          setViewDialogOpen(false);
          setSelectedReg(null);
        }
      } else {
        alert("Failed to delete registration");
      }
    } catch (error) {
      console.error("Error deleting registration:", error);
      alert("An error occurred while deleting the registration");
    } finally {
      setDeleting(null);
      setDeleteDialogOpen(false);
      setRegistrationToDelete(null);
    }
  };

  const confirmDelete = (reg: Registration) => {
    setRegistrationToDelete({ id: reg.id, name: reg.name });
    setDeleteDialogOpen(true);
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (loading) {
    return <TableSkeleton rows={5} columns={7} />;
  }

  return (
    <>
      <Card className="border-none shadow-sm rounded-none overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 hover:bg-gray-50">
                <TableHead className="font-bold text-gray-900">User</TableHead>
                <TableHead className="font-bold text-gray-900">
                  Company
                </TableHead>
                <TableHead className="font-bold text-gray-900">
                  Country
                </TableHead>
                <TableHead className="font-bold text-gray-900">Type</TableHead>
                <TableHead className="font-bold text-gray-900">
                  Submitted File
                </TableHead>
                <TableHead className="font-bold text-gray-900">
                  Status
                </TableHead>
                <TableHead className="font-bold text-gray-900">Date</TableHead>
                <TableHead className="text-right font-bold text-gray-900">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {registrations.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="h-32 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <UserCheck className="w-12 h-12 text-gray-300" />
                      <p className="text-gray-600">No registrations yet</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                registrations.map((reg) => (
                  <TableRow key={reg.id} className="hover:bg-gray-50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 border-2 border-[#0a4a9e]">
                          <AvatarFallback className="bg-gradient-to-br from-[#0a4a9e] to-[#05306b] text-white font-bold text-xs">
                            {getInitials(reg.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900">
                            {reg.name}
                          </p>
                          <p className="text-sm text-gray-600">{reg.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium text-gray-900">
                      {reg.company || "—"}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {reg.country || "—"}
                    </TableCell>
                    <TableCell>
                      {reg.clientType ? (
                        <Badge variant="outline" className="capitalize">
                          {reg.clientType}
                        </Badge>
                      ) : (
                        "—"
                      )}
                    </TableCell>
                    <TableCell>
                      {reg.documentUrl ? (
                        <a
                          href={reg.documentUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium"
                        >
                          <FileText className="w-4 h-4" />
                          View
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-gray-400 text-sm">—</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={
                          reg.status === "approved"
                            ? "bg-green-50 text-green-700 hover:bg-green-50"
                            : reg.status === "pending"
                              ? "bg-yellow-50 text-yellow-700 hover:bg-yellow-50"
                              : "bg-red-50 text-red-700 hover:bg-red-50"
                        }
                      >
                        {reg.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {formatDate(reg.createdAt)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-blue-50 hover:text-[#0a4a9e]"
                          onClick={() => {
                            setSelectedReg(reg);
                            setViewDialogOpen(true);
                          }}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        {reg.status === "pending" && (
                          <>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="hover:bg-green-50 hover:text-green-600"
                              onClick={() =>
                                handleStatusUpdate(reg.id, "approved")
                              }
                              disabled={updating === reg.id}
                            >
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="hover:bg-red-50 hover:text-red-600"
                              onClick={() =>
                                handleStatusUpdate(reg.id, "rejected")
                              }
                              disabled={updating === reg.id}
                            >
                              <XCircle className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-red-50 hover:text-red-600"
                          onClick={() => confirmDelete(reg)}
                          disabled={deleting === reg.id}
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

      {/* View Dialog */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-hidden p-0 [&>button]:hidden">
          {selectedReg && (
            <>
              {/* Header */}
              <div className="px-6 py-4 border-b bg-gradient-to-r from-[#0a4a9e] to-[#05306b]">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-16 h-16 border-3 border-white shadow-lg">
                      <AvatarFallback className="bg-white text-[#0a4a9e] font-bold text-xl">
                        {getInitials(selectedReg.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <DialogTitle className="text-2xl font-bold text-white mb-1">
                        {selectedReg.name}
                      </DialogTitle>
                      <DialogDescription className="text-blue-100 flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        {selectedReg.email}
                      </DialogDescription>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className={`px-3 py-1 text-sm font-semibold ${
                      selectedReg.status === "approved"
                        ? "bg-green-500 text-white hover:bg-green-600"
                        : selectedReg.status === "pending"
                          ? "bg-yellow-500 text-white hover:bg-yellow-600"
                          : "bg-red-500 text-white hover:bg-red-600"
                    }`}
                  >
                    {selectedReg.status.toUpperCase()}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(85vh-200px)] px-6 py-6">
                <div className="space-y-6">
                  {/* Contact Information */}
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                      <UserCheck className="w-5 h-5 text-[#0a4a9e]" />
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                        <div className="mt-0.5">
                          <Mail className="w-5 h-5 text-[#0a4a9e]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            Email Address
                          </label>
                          <p className="font-medium text-gray-900 truncate">
                            {selectedReg.email}
                          </p>
                        </div>
                      </div>

                      {selectedReg.phone && (
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                          <div className="mt-0.5">
                            <Phone className="w-5 h-5 text-[#0a4a9e]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                              Mobile Phone
                            </label>
                            <p className="font-medium text-gray-900">
                              {selectedReg.phone}
                            </p>
                          </div>
                        </div>
                      )}

                      {selectedReg.telephone && (
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                          <div className="mt-0.5">
                            <Phone className="w-5 h-5 text-[#0a4a9e]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                              Telephone
                            </label>
                            <p className="font-medium text-gray-900">
                              {selectedReg.telephone}
                            </p>
                          </div>
                        </div>
                      )}

                      {selectedReg.country && (
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                          <div className="mt-0.5">
                            <MapPin className="w-5 h-5 text-[#0a4a9e]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                              Country
                            </label>
                            <p className="font-medium text-gray-900">
                              {selectedReg.country}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Business Information */}
                  {(selectedReg.company ||
                    selectedReg.designation ||
                    selectedReg.clientType) && (
                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                        <Building className="w-5 h-5 text-[#0a4a9e]" />
                        Business Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedReg.company && (
                          <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                            <div className="mt-0.5">
                              <Building className="w-5 h-5 text-[#0a4a9e]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                Company Name
                              </label>
                              <p className="font-medium text-gray-900">
                                {selectedReg.company}
                              </p>
                            </div>
                          </div>
                        )}

                        {selectedReg.designation && (
                          <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                            <div className="mt-0.5">
                              <Briefcase className="w-5 h-5 text-[#0a4a9e]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                Designation
                              </label>
                              <p className="font-medium text-gray-900">
                                {selectedReg.designation}
                              </p>
                            </div>
                          </div>
                        )}

                        {selectedReg.clientType && (
                          <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                            <div className="mt-0.5">
                              <UserCheck className="w-5 h-5 text-[#0a4a9e]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                Client Type
                              </label>
                              <Badge
                                variant="outline"
                                className="capitalize mt-1 border-[#0a4a9e] text-[#0a4a9e]"
                              >
                                {selectedReg.clientType}
                              </Badge>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Submitted Document */}
                  {selectedReg.documentUrl && (
                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                        <FileText className="w-5 h-5 text-[#0a4a9e]" />
                        Submitted Document
                      </h3>
                      <a
                        href={selectedReg.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 rounded-lg bg-blue-50 border-2 border-blue-200 hover:border-[#0a4a9e] hover:bg-blue-100 transition-all group"
                      >
                        <div className="p-2 bg-[#0a4a9e] rounded-lg group-hover:scale-110 transition-transform">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 group-hover:text-[#0a4a9e]">
                            View Uploaded Document
                          </p>
                          <p className="text-sm text-gray-600">
                            Click to open in new tab
                          </p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#0a4a9e]" />
                      </a>
                    </div>
                  )}

                  {/* Timeline */}
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                      <svg
                        className="w-5 h-5 text-[#0a4a9e]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Timeline
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          Registered On
                        </label>
                        <p className="font-semibold text-gray-900 mt-1">
                          {new Date(selectedReg.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              weekday: "short",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )}
                        </p>
                        <p className="text-sm text-gray-600">
                          {new Date(selectedReg.createdAt).toLocaleTimeString(
                            "en-US",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                            },
                          )}
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          Last Updated
                        </label>
                        <p className="font-semibold text-gray-900 mt-1">
                          {new Date(selectedReg.updatedAt).toLocaleDateString(
                            "en-US",
                            {
                              weekday: "short",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )}
                        </p>
                        <p className="text-sm text-gray-600">
                          {new Date(selectedReg.updatedAt).toLocaleTimeString(
                            "en-US",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                            },
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              {selectedReg.status === "pending" && (
                <div className="px-6 py-4 border-t bg-gray-50 flex items-center justify-end gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setViewDialogOpen(false)}
                    className="min-w-[100px]"
                  >
                    Close
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-red-50 text-red-700 hover:bg-red-100 hover:text-red-800 border-red-200 min-w-[120px]"
                    onClick={() => {
                      handleStatusUpdate(selectedReg.id, "rejected");
                      setViewDialogOpen(false);
                    }}
                    disabled={updating === selectedReg.id}
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    Reject
                  </Button>
                  <Button
                    className="bg-green-600 text-white hover:bg-green-700 min-w-[120px]"
                    onClick={() => {
                      handleStatusUpdate(selectedReg.id, "approved");
                      setViewDialogOpen(false);
                    }}
                    disabled={updating === selectedReg.id}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Approve
                  </Button>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>

      <DeleteConfirmDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        title="Delete registration?"
        itemName={registrationToDelete?.name}
        description={
          registrationToDelete
            ? `This will permanently delete the registration for "${registrationToDelete.name}" and all related data.`
            : undefined
        }
        onConfirm={async () => {
          if (registrationToDelete) {
            await handleDelete(registrationToDelete.id);
          }
        }}
        isLoading={deleting !== null}
      />
    </>
  );
}
