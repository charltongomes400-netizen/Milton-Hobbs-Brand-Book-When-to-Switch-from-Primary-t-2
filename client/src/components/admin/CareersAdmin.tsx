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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import {
  Loader2,
  Plus,
  Pencil,
  Trash2,
  Download,
  ChevronDown,
  ChevronUp,
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

function JobListings() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<JobForm>(emptyJob);
  const [deleteId, setDeleteId] = useState<number | null>(null);

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
    mutationFn: async () => {
      if (editingId) {
        await apiRequest("PATCH", `/api/admin/jobs/${editingId}`, form);
      } else {
        await apiRequest("POST", "/api/admin/jobs", form);
      }
    },
    onSuccess: () => {
      toast({ title: editingId ? "Job updated" : "Job created" });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/jobs"] });
      setOpen(false);
    },
    onError: () => {
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

  const handleSave = () => {
    const err = validate();
    if (err) {
      toast({ title: err, variant: "destructive" });
      return;
    }
    saveMutation.mutate();
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-heading text-lg font-bold text-mh-black">
          Job listings
        </h3>
        <Button
          className="rounded-none bg-mh-blue text-white hover:bg-mh-blue/90"
          onClick={openNew}
          data-testid="button-new-job"
        >
          <Plus className="mr-2 h-4 w-4" /> New job
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin text-mh-blue" />
        </div>
      ) : !jobs || jobs.length === 0 ? (
        <p className="py-12 text-center text-sm text-muted-foreground">
          No jobs yet.
        </p>
      ) : (
        <div className="border border-border bg-white">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="flex items-center gap-4 border-b border-border p-3 last:border-b-0"
              data-testid={`row-job-${job.id}`}
            >
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-mh-black" data-testid={`text-job-title-${job.id}`}>
                  {job.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {job.department} · {job.location} · {job.type}
                </p>
              </div>
              <Badge
                variant={job.isActive ? "default" : "secondary"}
                className="rounded-none"
                data-testid={`badge-job-status-${job.id}`}
              >
                {job.isActive ? "Active" : "Inactive"}
              </Badge>
              <div className="flex items-center gap-2">
                <Switch
                  checked={job.isActive}
                  onCheckedChange={(v) =>
                    toggleMutation.mutate({ id: job.id, isActive: v })
                  }
                  data-testid={`switch-job-active-${job.id}`}
                />
              </div>
              <Button
                variant="outline"
                size="sm"
                className="rounded-none"
                onClick={() => openEdit(job)}
                data-testid={`button-edit-job-${job.id}`}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-none text-destructive"
                onClick={() => setDeleteId(job.id)}
                data-testid={`button-delete-job-${job.id}`}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="admin-theme max-h-[90vh] max-w-2xl overflow-y-auto rounded-none bg-white">
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit job" : "New job"}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="job-title">Title</Label>
              <Input
                id="job-title"
                value={form.title}
                onChange={(e) => set({ title: e.target.value })}
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
                  data-testid="input-job-department"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="job-location">Location</Label>
                <Input
                  id="job-location"
                  value={form.location}
                  onChange={(e) => set({ location: e.target.value })}
                  data-testid="input-job-location"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="job-type">Type</Label>
                <Input
                  id="job-type"
                  value={form.type}
                  onChange={(e) => set({ type: e.target.value })}
                  data-testid="input-job-type"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="job-level">Level</Label>
                <Input
                  id="job-level"
                  value={form.level}
                  onChange={(e) => set({ level: e.target.value })}
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
                data-testid="input-job-requirements"
              />
            </div>
            <div className="flex items-center gap-3">
              <Switch
                checked={form.isActive}
                onCheckedChange={(v) => set({ isActive: v })}
                data-testid="switch-job-form-active"
              />
              <Label>Active</Label>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              className="rounded-none"
              onClick={() => setOpen(false)}
              data-testid="button-cancel-job"
            >
              Cancel
            </Button>
            <Button
              className="rounded-none bg-mh-blue text-white hover:bg-mh-blue/90"
              onClick={handleSave}
              disabled={saveMutation.isPending}
              data-testid="button-save-job"
            >
              {saveMutation.isPending && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog
        open={deleteId !== null}
        onOpenChange={(o) => !o && setDeleteId(null)}
      >
        <AlertDialogContent className="admin-theme rounded-none bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this job?</AlertDialogTitle>
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
              data-testid="button-confirm-delete-job"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

function ApplicationsList() {
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
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="font-heading text-lg font-bold text-mh-black">
          Applications
        </h3>
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
        <div className="flex justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin text-mh-blue" />
        </div>
      ) : !applications || applications.length === 0 ? (
        <p className="py-12 text-center text-sm text-muted-foreground">
          No applications yet.
        </p>
      ) : (
        <div className="border border-border bg-white">
          {applications.map((app) => (
            <div
              key={app.id}
              className="border-b border-border last:border-b-0"
              data-testid={`row-application-${app.id}`}
            >
              <div className="flex items-center gap-4 p-3">
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-mh-black" data-testid={`text-applicant-name-${app.id}`}>
                    {app.name}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {app.email} · {app.phone}
                  </p>
                </div>
                <Badge variant="secondary" className="rounded-none">
                  {jobTitle(app.jobId)}
                </Badge>
                <span className="hidden text-xs text-muted-foreground sm:inline">
                  {app.createdAt
                    ? new Date(app.createdAt).toLocaleDateString()
                    : ""}
                </span>
                {app.coverLetter && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-none"
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
                <div className="border-t border-border bg-muted/30 px-3 py-3 text-sm text-mh-black" data-testid={`text-cover-letter-${app.id}`}>
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

export default function CareersAdmin() {
  return (
    <Tabs defaultValue="jobs">
      <TabsList className="rounded-none">
        <TabsTrigger value="jobs" className="rounded-none" data-testid="subtab-jobs">
          Job Listings
        </TabsTrigger>
        <TabsTrigger value="applications" className="rounded-none" data-testid="subtab-applications">
          Applications
        </TabsTrigger>
      </TabsList>
      <TabsContent value="jobs" className="mt-6">
        <JobListings />
      </TabsContent>
      <TabsContent value="applications" className="mt-6">
        <ApplicationsList />
      </TabsContent>
    </Tabs>
  );
}
