import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Loader2,
  LogOut,
  FileText,
  Briefcase,
  Inbox,
  ArrowRight,
  Lock,
} from "lucide-react";
import BlogAdmin from "@/components/admin/BlogAdmin";
import { JobsAdmin, ApplicationsAdmin } from "@/components/admin/CareersAdmin";

interface MeResponse {
  username: string;
}

type Section = "insights" | "jobs" | "applications";

const NAV: { key: Section; label: string; icon: typeof FileText; desc: string }[] =
  [
    { key: "insights", label: "Insights", icon: FileText, desc: "Articles & blog posts" },
    { key: "jobs", label: "Jobs", icon: Briefcase, desc: "Open positions" },
    { key: "applications", label: "Applications", icon: Inbox, desc: "Candidate submissions" },
  ];

function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const loginMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", "/api/admin/login", {
        username,
        password,
      });
      return res.json();
    },
    onSuccess: () => {
      setError(null);
      onSuccess();
    },
    onError: (err: Error) => {
      const msg = err.message || "";
      if (msg.startsWith("429")) {
        setError("Too many attempts, try again later.");
      } else if (msg.startsWith("401")) {
        setError("Invalid username or password");
      } else {
        setError("Something went wrong. Please try again.");
      }
    },
  });

  return (
    <div className="admin-theme grid min-h-screen grid-cols-1 bg-white lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden overflow-hidden bg-mh-blue lg:flex lg:flex-col lg:justify-between lg:p-14">
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="grid h-full w-full grid-cols-6 grid-rows-8">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-white/40" />
            ))}
          </div>
        </div>
        <div className="relative">
          <span className="font-heading text-2xl font-bold tracking-tight text-white">
            Milton Hobbs
          </span>
        </div>
        <div className="relative">
          <h2 className="font-heading text-4xl font-bold leading-tight text-white">
            Reason.
            <br />
            Rigor.
            <br />
            Resolution.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
            Content & careers control center. Manage insights, open positions
            and candidate applications in one place.
          </p>
        </div>
        <div className="relative text-xs uppercase tracking-[0.2em] text-white/50">
          Administration
        </div>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center px-6 py-12">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setError(null);
            loginMutation.mutate();
          }}
          className="w-full max-w-sm"
          data-testid="form-admin-login"
        >
          <div className="mb-8 flex h-11 w-11 items-center justify-center bg-mh-blue">
            <Lock className="h-5 w-5 text-white" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-mh-black">
            Sign in
          </h1>
          <p className="mb-8 mt-1.5 text-sm text-muted-foreground">
            Enter your credentials to access the dashboard.
          </p>

          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="admin-username" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Username
              </Label>
              <Input
                id="admin-username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
                className="h-11 rounded-none"
                data-testid="input-admin-username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin-password" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Password
              </Label>
              <Input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="h-11 rounded-none"
                data-testid="input-admin-password"
              />
            </div>
          </div>

          {error && (
            <p
              className="mt-4 border-l-2 border-destructive bg-destructive/5 px-3 py-2 text-sm text-destructive"
              data-testid="text-login-error"
            >
              {error}
            </p>
          )}

          <Button
            type="submit"
            className="group mt-7 h-11 w-full rounded-none bg-mh-blue text-white hover:bg-mh-blue/90"
            disabled={loginMutation.isPending}
            data-testid="button-admin-login"
          >
            {loginMutation.isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            Sign in
            {!loginMutation.isPending && (
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const queryClient = useQueryClient();
  const [section, setSection] = useState<Section>("insights");

  const { data: me, isLoading } = useQuery<MeResponse | null>({
    queryKey: ["/api/admin/me"],
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("POST", "/api/admin/logout");
    },
    onSuccess: () => {
      queryClient.setQueryData(["/api/admin/me"], null);
      queryClient.invalidateQueries({ queryKey: ["/api/admin/me"] });
    },
  });

  if (isLoading) {
    return (
      <div className="admin-theme flex min-h-screen items-center justify-center bg-white">
        <Loader2
          className="h-8 w-8 animate-spin text-mh-blue"
          data-testid="spinner-admin-loading"
        />
      </div>
    );
  }

  if (!me) {
    return (
      <LoginForm
        onSuccess={() =>
          queryClient.invalidateQueries({ queryKey: ["/api/admin/me"] })
        }
      />
    );
  }

  const active = NAV.find((n) => n.key === section)!;

  return (
    <div className="admin-theme flex min-h-screen bg-muted/30">
      {/* Sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 flex-shrink-0 flex-col bg-mh-blue md:flex">
        <div className="flex h-16 items-center border-b border-white/10 px-6">
          <span className="font-heading text-lg font-bold tracking-tight text-white">
            Milton Hobbs
          </span>
        </div>
        <nav className="flex-1 space-y-1 p-3">
          {NAV.map((item) => {
            const Icon = item.icon;
            const isActive = item.key === section;
            return (
              <button
                key={item.key}
                onClick={() => setSection(item.key)}
                data-testid={`nav-${item.key}`}
                className={`group flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm transition-colors ${
                  isActive
                    ? "bg-white/15 text-white"
                    : "text-white/65 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span
                  className={`h-5 w-0.5 ${isActive ? "bg-white" : "bg-transparent"}`}
                />
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </nav>
        <div className="border-t border-white/10 p-3">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="flex h-8 w-8 items-center justify-center bg-white/15 text-sm font-medium text-white">
              {me.username.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <p
                className="truncate text-xs font-medium text-white"
                data-testid="text-admin-username"
              >
                {me.username}
              </p>
              <p className="text-[10px] uppercase tracking-wide text-white/50">
                Administrator
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="mt-1 w-full justify-start rounded-none text-white/70 hover:bg-white/10 hover:text-white"
            onClick={() => logoutMutation.mutate()}
            disabled={logoutMutation.isPending}
            data-testid="button-admin-logout"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Mobile top bar with nav */}
        <header className="flex items-center justify-between gap-4 border-b border-border bg-white px-5 py-3 md:hidden">
          <span className="font-heading text-base font-bold text-mh-blue">
            Milton Hobbs
          </span>
          <Button
            variant="outline"
            size="sm"
            className="rounded-none"
            onClick={() => logoutMutation.mutate()}
            disabled={logoutMutation.isPending}
            data-testid="button-admin-logout-mobile"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </header>
        <div className="flex gap-1 border-b border-border bg-white px-2 py-2 md:hidden">
          {NAV.map((item) => (
            <button
              key={item.key}
              onClick={() => setSection(item.key)}
              data-testid={`nav-mobile-${item.key}`}
              className={`flex-1 px-3 py-2 text-xs font-medium ${
                item.key === section
                  ? "bg-mh-blue text-white"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Page header */}
        <div className="border-b border-border bg-white px-6 py-6 md:px-10">
          <h1 className="font-heading text-2xl font-bold tracking-tight text-mh-black">
            {active.label}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">{active.desc}</p>
        </div>

        <main className="flex-1 px-6 py-8 md:px-10">
          <div className="mx-auto max-w-5xl">
            {section === "insights" && <BlogAdmin />}
            {section === "jobs" && <JobsAdmin />}
            {section === "applications" && <ApplicationsAdmin />}
          </div>
        </main>
      </div>
    </div>
  );
}
