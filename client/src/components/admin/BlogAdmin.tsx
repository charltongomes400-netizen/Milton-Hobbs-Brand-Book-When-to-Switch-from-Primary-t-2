import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { Post } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Plus, Pencil, Trash2, Upload } from "lucide-react";
import RichTextEditor from "./RichTextEditor";

type PostForm = {
  slug: string;
  category: string;
  published: boolean;
  coverImage: string;
  titleEn: string;
  titleFr: string;
  excerptEn: string;
  excerptFr: string;
  seoDescriptionEn: string;
  seoDescriptionFr: string;
  bodyEn: string;
  bodyFr: string;
};

const emptyForm: PostForm = {
  slug: "",
  category: "",
  published: false,
  coverImage: "",
  titleEn: "",
  titleFr: "",
  excerptEn: "",
  excerptFr: "",
  seoDescriptionEn: "",
  seoDescriptionFr: "",
  bodyEn: "",
  bodyFr: "",
};

export default function BlogAdmin() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<PostForm>(emptyForm);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [uploading, setUploading] = useState(false);

  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ["/api/admin/posts"],
  });

  const set = (patch: Partial<PostForm>) =>
    setForm((f) => ({ ...f, ...patch }));

  const openNew = () => {
    setEditingId(null);
    setForm(emptyForm);
    setOpen(true);
  };

  const openEdit = (post: Post) => {
    setEditingId(post.id);
    setForm({
      slug: post.slug,
      category: post.category ?? "",
      published: post.published,
      coverImage: post.coverImage ?? "",
      titleEn: post.titleEn,
      titleFr: post.titleFr,
      excerptEn: post.excerptEn,
      excerptFr: post.excerptFr,
      seoDescriptionEn: post.seoDescriptionEn ?? "",
      seoDescriptionFr: post.seoDescriptionFr ?? "",
      bodyEn: post.bodyEn,
      bodyFr: post.bodyFr,
    });
    setOpen(true);
  };

  const saveMutation = useMutation({
    mutationFn: async () => {
      const payload = {
        ...form,
        category: form.category || null,
        coverImage: form.coverImage || null,
        seoDescriptionEn: form.seoDescriptionEn || null,
        seoDescriptionFr: form.seoDescriptionFr || null,
      };
      if (editingId) {
        await apiRequest("PATCH", `/api/admin/posts/${editingId}`, payload);
      } else {
        await apiRequest("POST", "/api/admin/posts", payload);
      }
    },
    onSuccess: () => {
      toast({ title: editingId ? "Post updated" : "Post created" });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/posts"] });
      setOpen(false);
    },
    onError: (err: Error) => {
      if (err.message.startsWith("409")) {
        toast({ title: "That slug is already taken.", variant: "destructive" });
      } else {
        toast({ title: "Failed to save post", variant: "destructive" });
      }
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/admin/posts/${id}`);
    },
    onSuccess: () => {
      toast({ title: "Post deleted" });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/posts"] });
      setDeleteId(null);
    },
    onError: () => {
      toast({ title: "Failed to delete post", variant: "destructive" });
    },
  });

  const handleImageUpload = async (file: File) => {
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("image", file);
      const res = await fetch("/api/admin/posts/image", {
        method: "POST",
        body: fd,
        credentials: "include",
      });
      if (!res.ok) throw new Error(String(res.status));
      const { url } = await res.json();
      set({ coverImage: url });
      toast({ title: "Image uploaded" });
    } catch {
      toast({ title: "Image upload failed", variant: "destructive" });
    } finally {
      setUploading(false);
    }
  };

  const validate = (): string | null => {
    const required: [keyof PostForm, string][] = [
      ["slug", "Slug"],
      ["titleEn", "English title"],
      ["titleFr", "French title"],
      ["excerptEn", "English excerpt"],
      ["excerptFr", "French excerpt"],
    ];
    for (const [key, label] of required) {
      if (!String(form[key]).trim()) return `${label} is required.`;
    }
    if (!form.bodyEn.replace(/<[^>]*>/g, "").trim())
      return "English body is required.";
    if (!form.bodyFr.replace(/<[^>]*>/g, "").trim())
      return "French body is required.";
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
        <h2 className="font-heading text-xl font-bold text-mh-black">Insights</h2>
        <Button
          className="rounded-none bg-mh-blue text-white hover:bg-mh-blue/90"
          onClick={openNew}
          data-testid="button-new-post"
        >
          <Plus className="mr-2 h-4 w-4" /> New post
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin text-mh-blue" />
        </div>
      ) : !posts || posts.length === 0 ? (
        <p className="py-12 text-center text-sm text-muted-foreground">
          No posts yet.
        </p>
      ) : (
        <div className="border border-border bg-white">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex items-center gap-4 border-b border-border p-3 last:border-b-0"
              data-testid={`row-post-${post.id}`}
            >
              <div className="h-12 w-16 flex-shrink-0 overflow-hidden bg-muted">
                {post.coverImage && (
                  <img
                    src={post.coverImage}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-mh-black" data-testid={`text-post-title-${post.id}`}>
                  {post.titleEn}
                </p>
                <p className="text-xs text-muted-foreground">
                  {post.category || "Uncategorized"} · /{post.slug}
                </p>
              </div>
              <Badge
                variant={post.published ? "default" : "secondary"}
                className="rounded-none"
                data-testid={`badge-post-status-${post.id}`}
              >
                {post.published ? "Published" : "Draft"}
              </Badge>
              <Button
                variant="outline"
                size="sm"
                className="rounded-none"
                onClick={() => openEdit(post)}
                data-testid={`button-edit-post-${post.id}`}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-none text-destructive"
                onClick={() => setDeleteId(post.id)}
                data-testid={`button-delete-post-${post.id}`}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="admin-theme max-h-[90vh] max-w-3xl overflow-y-auto rounded-none bg-white">
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit post" : "New post"}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="post-slug">Slug</Label>
                <Input
                  id="post-slug"
                  value={form.slug}
                  onChange={(e) => set({ slug: e.target.value })}
                  data-testid="input-post-slug"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="post-category">Category</Label>
                <Input
                  id="post-category"
                  value={form.category}
                  onChange={(e) => set({ category: e.target.value })}
                  data-testid="input-post-category"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Switch
                checked={form.published}
                onCheckedChange={(v) => set({ published: v })}
                data-testid="switch-post-published"
              />
              <Label>Published</Label>
            </div>

            <div className="space-y-1.5">
              <Label>Cover image</Label>
              <div className="flex items-center gap-3">
                {form.coverImage && (
                  <img
                    src={form.coverImage}
                    alt=""
                    className="h-16 w-24 object-cover"
                    data-testid="img-cover-preview"
                  />
                )}
                <label className="inline-flex cursor-pointer items-center gap-2 border border-border bg-white px-3 py-2 text-sm hover:bg-muted">
                  {uploading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Upload className="h-4 w-4" />
                  )}
                  Upload
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleImageUpload(file);
                      e.target.value = "";
                    }}
                    data-testid="input-cover-upload"
                  />
                </label>
              </div>
            </div>

            <Tabs defaultValue="en">
              <TabsList className="rounded-none">
                <TabsTrigger value="en" className="rounded-none" data-testid="tab-post-en">
                  English
                </TabsTrigger>
                <TabsTrigger value="fr" className="rounded-none" data-testid="tab-post-fr">
                  Français
                </TabsTrigger>
              </TabsList>

              <TabsContent value="en" className="mt-4 space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="post-title-en">Title (EN)</Label>
                  <Input
                    id="post-title-en"
                    value={form.titleEn}
                    onChange={(e) => set({ titleEn: e.target.value })}
                    data-testid="input-post-titleEn"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="post-excerpt-en">Excerpt (EN)</Label>
                  <Input
                    id="post-excerpt-en"
                    value={form.excerptEn}
                    onChange={(e) => set({ excerptEn: e.target.value })}
                    data-testid="input-post-excerptEn"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="post-seo-en">SEO description (EN)</Label>
                  <Input
                    id="post-seo-en"
                    value={form.seoDescriptionEn}
                    onChange={(e) => set({ seoDescriptionEn: e.target.value })}
                    data-testid="input-post-seoEn"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label>Body (EN)</Label>
                  <RichTextEditor
                    value={form.bodyEn}
                    onChange={(html) => set({ bodyEn: html })}
                  />
                </div>
              </TabsContent>

              <TabsContent value="fr" className="mt-4 space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="post-title-fr">Title (FR)</Label>
                  <Input
                    id="post-title-fr"
                    value={form.titleFr}
                    onChange={(e) => set({ titleFr: e.target.value })}
                    data-testid="input-post-titleFr"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="post-excerpt-fr">Excerpt (FR)</Label>
                  <Input
                    id="post-excerpt-fr"
                    value={form.excerptFr}
                    onChange={(e) => set({ excerptFr: e.target.value })}
                    data-testid="input-post-excerptFr"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="post-seo-fr">SEO description (FR)</Label>
                  <Input
                    id="post-seo-fr"
                    value={form.seoDescriptionFr}
                    onChange={(e) => set({ seoDescriptionFr: e.target.value })}
                    data-testid="input-post-seoFr"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label>Body (FR)</Label>
                  <RichTextEditor
                    value={form.bodyFr}
                    onChange={(html) => set({ bodyFr: html })}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              className="rounded-none"
              onClick={() => setOpen(false)}
              data-testid="button-cancel-post"
            >
              Cancel
            </Button>
            <Button
              className="rounded-none bg-mh-blue text-white hover:bg-mh-blue/90"
              onClick={handleSave}
              disabled={saveMutation.isPending}
              data-testid="button-save-post"
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
            <AlertDialogTitle>Delete this post?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-none" data-testid="button-cancel-delete-post">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="rounded-none bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => deleteId && deleteMutation.mutate(deleteId)}
              data-testid="button-confirm-delete-post"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
