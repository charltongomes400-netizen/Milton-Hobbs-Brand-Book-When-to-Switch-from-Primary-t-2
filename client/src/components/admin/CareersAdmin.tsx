import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { Job, Application } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Loader2,
  Plus,
  Pencil,
  Trash2,
  Download,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Inbox,
  Globe,
  Save,
  Send,
  Mail,
  Phone,
} from "lucide-react";

type JobForm = {
  title: string;
  department: string;
  location: string;
  type: string;
  level: string;
  summary: string;
  description: string;
  requirements: string;
  isActive: boolean;
};

const emptyJob: JobForm = {
  title: "",
  department: "",
  location: "",
  type: "",
  level: "",
  summary: "",
  description: "",
  requirements: "",
  isActive: true,
};

function StatusPill({ active }: { active: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide ${
        active ? "bg-mh-blue/10 text-mh-blue" : "bg-muted text-muted-foreground"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          active ? "bg-mh-blue" : "bg-muted-foreground/50"
        }`}
      />
      {active ? "Active" : "Inactive"}
    </span>
  );
}

export function JobsAdmin() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<JobForm>(emptyJob);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [confirmSave, setConfirmSave] = useState<{ active: boolean } | null>(
    null,
  );

  const { data: jobs, isLoading } = useQuery<Job[]>({
    queryKey: ["/api/admin/jobs"],
  });

  const set = (patch: Partial<JobForm>) => setForm((f) => ({ ...f, ...patch }));

  const openNew = () => {
    setEditingId(null);
    setForm(emptyJob);
    setOpen(true);
  };

  const openEdit = (job: Job) => {
    setEditingId(job.id);
    setForm({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      level: job.level,
      summary: job.summary,
      description: job.description,
      requirements: job.requirements,
      isActive: job.isActive,
    });
    setOpen(true);
  };

  const saveMutation = useMutation({
    mutationFn: async (isActive: boolean) => {
      const payload = { ...form, isActive };
      if (editingId) {
        await apiRequest("PATCH", `/api/admin/jobs/${editingId}`, payload);
      } else {
        await apiRequest("POST", "/api/admin/jobs", payload);
      }
    },
    onSuccess: (_data, isActive) => {
      toast({
        title: isActive
          ? editingId
            ? "Job updated & published"
            : "Job published"
          : "Draft saved",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/jobs"] });
      setConfirmSave(null);
      setOpen(false);
    },
    onError: () => {
      setConfirmSave(null);
      toast({ title: "Failed to save job", variant: "destructive" });
    },
  });

  const toggleMutation = useMutation({
    mutationFn: async ({ id, isActive }: { id: number; isActive: boolean }) => {
      await apiRequest("PATCH", `/api/admin/jobs/${id}`, { isActive });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/jobs"] });
    },
    onError: () => {
      toast({ title: "Failed to update status", variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/admin/jobs/${id}`);
    },
    onSuccess: () => {
      toast({ title: "Job deleted" });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/jobs"] });
      setDeleteId(null);
    },
    onError: () => {
      toast({ title: "Failed to delete job", variant: "destructive" });
    },
  });

  const validate = (): string | null => {
    const required: [keyof JobForm, string][] = [
      ["title", "Title"],
      ["department", "Department"],
      ["location", "Location"],
      ["type", "Type"],
      ["level", "Level"],
      ["summary", "Summary"],
      ["description", "Description"],
      ["requirements", "Requirements"],
    ];
    for (const [key, label] of required) {
      if (!String(form[key]).trim()) return `${label} is required.`;
    }
    return null;
  };

  const requestSave = (active: boolean) => {
    const err = validate();
    if (err) {
      toast({ title: err, variant: "destructive" });
      return;
    }
    setConfirmSave({ active });
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground" data-testid="text-job-count">
          {jobs ? `${jobs.length} ${jobs.length === 1 ? "job" : "jobs"}` : "—"}
        </p>
        <Button
          className="rounded-none bg-mh-blue text-white hover:bg-mh-blue/90"
          onClick={openNew}
          data-testid="button-new-job"
        >
          <Plus className="mr-2 h-4 w-4" /> New job
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-16">
          <Loader2 className="h-6 w-6 animate-spin text-mh-blue" />
        </div>
      ) : !jobs || jobs.length === 0 ? (
        <div className="flex flex-col items-center border border-dashed border-border bg-white py-16 text-center">
          <Briefcase className="mb-3 h-8 w-8 text-muted-foreground/40" />
          <p className="text-sm font-medium text-mh-black">No jobs yet</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Post your first open position.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-border border border-border bg-white">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="group flex items-center gap-4 p-4 transition-colors hover:bg-muted/40"
              data-testid={`row-job-${job.id}`}
            >
              <div className="min-w-0 flex-1">
                <p
                  className="truncate font-medium text-mh-black"
                  data-testid={`text-job-title-${job.id}`}
                >
                  {job.title}
                </p>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">
                  {job.department} · {job.location} · {job.type}
                </p>
              </div>
              <div data-testid={`badge-job-status-${job.id}`}>
                <StatusPill active={job.isActive} />
              </div>
              <Switch
                checked={job.isActive}
                onCheckedChange={(v) =>
                  toggleMutation.mutate({ id: job.id, isActive: v })
                }
                data-testid={`switch-job-active-${job.id}`}
              />
              <div className="flex items-center gap-1 opacity-70 transition-opacity group-hover:opacity-100">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-none hover:bg-mh-blue/10 hover:text-mh-blue"
                  onClick={() => openEdit(job)}
                  data-testid={`button-edit-job-${job.id}`}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-none text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                  onClick={() => setDeleteId(job.id)}
                  data-testid={`button-delete-job-${job.id}`}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="admin-theme max-h-[90vh] max-w-2xl overflow-y-auto rounded-none bg-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 font-heading">
              {editingId ? "Edit job" : "New job"}
              {editingId !== null && <StatusPill active={form.isActive} />}
            </DialogTitle>
            <DialogDescription>
              Fill in the role details, then save as a draft or publish it to the
              public Careers page.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="job-title">Title</Label>
              <Input
                id="job-title"
                value={form.title}
                onChange={(e) => set({ title: e.target.value })}
                className="rounded-none"
                data-testid="input-job-title"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="job-department">Department</Label>
                <Input
                  id="job-department"
                  value={form.department}
                  onChange={(e) => set({ department: e.target.value })}
                  className="rounded-none"
                  data-testid="input-job-department"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="job-location">Location</Label>
                <Input
                  id="job-location"
                  value={form.location}
                  onChange={(e) => set({ location: e.target.value })}
                  className="rounded-none"
                  data-testid="input-job-location"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="job-type">Type</Label>
                <Input
                  id="job-type"
                  value={form.type}
                  onChange={(e) => set({ type: e.target.value })}
                  className="rounded-none"
                  data-testid="input-job-type"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="job-level">Level</Label>
                <Input
                  id="job-level"
                  value={form.level}
                  onChange={(e) => set({ level: e.target.value })}
                  className="rounded-none"
                  data-testid="input-job-level"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="job-summary">Summary</Label>
              <Textarea
                id="job-summary"
                value={form.summary}
                onChange={(e) => set({ summary: e.target.value })}
                className="rounded-none"
                data-testid="input-job-summary"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="job-description">Description</Label>
              <Textarea
                id="job-description"
                rows={5}
                value={form.description}
                onChange={(e) => set({ description: e.target.value })}
                className="rounded-none"
                data-testid="input-job-description"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="job-requirements">Requirements</Label>
              <Textarea
                id="job-requirements"
                rows={5}
                value={form.requirements}
                onChange={(e) => set({ requirements: e.target.value })}
                className="rounded-none"
                data-testid="input-job-requirements"
              />
            </div>
          </div>

          <DialogFooter className="gap-2 border-t border-border pt-4 sm:justify-between">
            <Button
              variant="ghost"
              className="rounded-none"
              onClick={() => setOpen(false)}
              data-testid="button-cancel-job"
            >
              Cancel
            </Button>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="rounded-none"
                onClick={() => requestSave(false)}
                disabled={saveMutation.isPending}
                data-testid="button-save-draft-job"
              >
                <Save className="mr-2 h-4 w-4" />
                Save as draft
              </Button>
              <Button
                className="rounded-none bg-mh-blue text-white hover:bg-mh-blue/90"
                onClick={() => requestSave(true)}
                disabled={saveMutation.isPending}
                data-testid="button-save-job"
              >
                <Send className="mr-2 h-4 w-4" />
                Publish
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Save confirmation */}
      <AlertDialog
        open={confirmSave !== null}
        onOpenChange={(o) => !o && setConfirmSave(null)}
      >
        <AlertDialogContent className="admin-theme rounded-none bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              {confirmSave?.active ? (
                <Globe className="h-5 w-5 text-mh-blue" />
              ) : (
                <Save className="h-5 w-5 text-muted-foreground" />
              )}
              {confirmSave?.active ? "Publish this job?" : "Save as draft?"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {confirmSave?.active
                ? "This job will be visible to the public on the Careers page."
                : "This job will be saved as inactive and will not appear on the public Careers page."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              className="rounded-none"
              data-testid="button-cancel-save-job"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="rounded-none bg-mh-blue text-white hover:bg-mh-blue/90"
              onClick={(e) => {
                e.preventDefault();
                if (confirmSave) saveMutation.mutate(confirmSave.active);
              }}
              disabled={saveMutation.isPending}
              data-testid="button-confirm-save-job"
            >
              {saveMutation.isPending && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {confirmSave?.active ? "Publish" : "Save draft"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete confirmation */}
      <AlertDialog
        open={deleteId !== null}
        onOpenChange={(o) => !o && setDeleteId(null)}
      >
        <AlertDialogContent className="admin-theme rounded-none bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <Trash2 className="h-5 w-5 text-destructive" />
              Delete this job?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. Existing applications will be kept but
              unlinked from this job.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-none" data-testid="button-cancel-delete-job">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="rounded-none bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => deleteId && deleteMutation.mutate(deleteId)}
              disabled={deleteMutation.isPending}
              data-testid="button-confirm-delete-job"
            >
              {deleteMutation.isPending && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export function ApplicationsAdmin() {
  const [jobFilter, setJobFilter] = useState<string>("all");
  const [expanded, setExpanded] = useState<number | null>(null);

  const { data: jobs } = useQuery<Job[]>({ queryKey: ["/api/admin/jobs"] });

  const queryKey =
    jobFilter === "all"
      ? ["/api/admin/applications"]
      : ["/api/admin/applications", `?jobId=${jobFilter}`];

  const { data: applications, isLoading } = useQuery<Application[]>({
    queryKey,
    queryFn: async () => {
      const url =
        jobFilter === "all"
          ? "/api/admin/applications"
          : `/api/admin/applications?jobId=${jobFilter}`;
      const res = await fetch(url, { credentials: "include" });
      if (!res.ok) throw new Error(String(res.status));
      return res.json();
    },
  });

  const jobTitle = (jobId: number | null) => {
    if (jobId === null) return "Spontaneous";
    return jobs?.find((j) => j.id === jobId)?.title ?? `Job #${jobId}`;
  };

  const downloadCv = (id: number) => {
    window.open(`/api/admin/applications/${id}/cv`, "_blank");
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-4">
        <p
          className="text-sm text-muted-foreground"
          data-testid="text-application-count"
        >
          {applications
            ? `${applications.length} ${
                applications.length === 1 ? "application" : "applications"
              }`
            : "—"}
        </p>
        <Select value={jobFilter} onValueChange={setJobFilter}>
          <SelectTrigger className="w-56 rounded-none" data-testid="select-job-filter">
            <SelectValue placeholder="Filter by job" />
          </SelectTrigger>
          <SelectContent className="admin-theme">
            <SelectItem value="all">All applications</SelectItem>
            {jobs?.map((job) => (
              <SelectItem key={job.id} value={String(job.id)}>
                {job.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-16">
          <Loader2 className="h-6 w-6 animate-spin text-mh-blue" />
        </div>
      ) : !applications || applications.length === 0 ? (
        <div className="flex flex-col items-center border border-dashed border-border bg-white py-16 text-center">
          <Inbox className="mb-3 h-8 w-8 text-muted-foreground/40" />
          <p className="text-sm font-medium text-mh-black">No applications yet</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Submissions from the Careers page will appear here.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-border border border-border bg-white">
          {applications.map((app) => (
            <div
              key={app.id}
              data-testid={`row-application-${app.id}`}
            >
              <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/40">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-mh-blue/10 text-sm font-medium text-mh-blue">
                  {app.name.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <p
                    className="truncate font-medium text-mh-black"
                    data-testid={`text-applicant-name-${app.id}`}
                  >
                    {app.name}
                  </p>
                  <p className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-0.5 truncate text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Mail className="h-3 w-3" /> {app.email}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Phone className="h-3 w-3" /> {app.phone}
                    </span>
                  </p>
                </div>
                <Badge variant="secondary" className="rounded-none font-normal">
                  {jobTitle(app.jobId)}
                </Badge>
                <span className="hidden text-xs text-muted-foreground lg:inline">
                  {app.createdAt
                    ? new Date(app.createdAt).toLocaleDateString()
                    : ""}
                </span>
                {app.coverLetter && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-none"
                    onClick={() =>
                      setExpanded(expanded === app.id ? null : app.id)
                    }
                    data-testid={`button-toggle-cover-${app.id}`}
                  >
                    {expanded === app.id ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-none"
                  onClick={() => downloadCv(app.id)}
                  data-testid={`button-download-cv-${app.id}`}
                >
                  <Download className="mr-2 h-4 w-4" /> CV
                </Button>
              </div>
              {expanded === app.id && app.coverLetter && (
                <div
                  className="border-t border-border bg-muted/30 px-4 py-4 text-sm leading-relaxed text-mh-black"
                  data-testid={`text-cover-letter-${app.id}`}
                >
                  {app.coverLetter}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
