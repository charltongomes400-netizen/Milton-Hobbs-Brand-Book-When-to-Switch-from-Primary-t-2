import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Loader2, LogOut } from "lucide-react";
import BlogAdmin from "@/components/admin/BlogAdmin";
import CareersAdmin from "@/components/admin/CareersAdmin";

interface MeResponse {
  username: string;
}

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
    <div className="admin-theme flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setError(null);
          loginMutation.mutate();
        }}
        className="w-full max-w-sm border border-border bg-white p-8 shadow-sm"
        data-testid="form-admin-login"
      >
        <h1 className="font-heading text-2xl font-bold text-mh-blue">
          Milton Hobbs
        </h1>
        <p className="mb-6 mt-1 text-sm text-muted-foreground">
          Administration
        </p>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="admin-username">Username</Label>
            <Input
              id="admin-username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
              data-testid="input-admin-username"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="admin-password">Password</Label>
            <Input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              data-testid="input-admin-password"
            />
          </div>
        </div>

        {error && (
          <p className="mt-4 text-sm text-destructive" data-testid="text-login-error">
            {error}
          </p>
        )}

        <Button
          type="submit"
          className="mt-6 w-full rounded-none bg-mh-blue text-white hover:bg-mh-blue/90"
          disabled={loginMutation.isPending}
          data-testid="button-admin-login"
        >
          {loginMutation.isPending && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default function AdminPage() {
  const queryClient = useQueryClient();
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
      <div className="admin-theme flex min-h-screen items-center justify-center bg-muted/20">
        <Loader2 className="h-8 w-8 animate-spin text-mh-blue" data-testid="spinner-admin-loading" />
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

  return (
    <div className="admin-theme min-h-screen bg-muted/20">
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <span className="font-heading text-lg font-bold text-mh-blue">
              Milton Hobbs
            </span>
            <span className="ml-2 text-sm text-muted-foreground">Admin</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground" data-testid="text-admin-username">
              {me.username}
            </span>
            <Button
              variant="outline"
              size="sm"
              className="rounded-none"
              onClick={() => logoutMutation.mutate()}
              disabled={logoutMutation.isPending}
              data-testid="button-admin-logout"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <Tabs defaultValue="insights">
          <TabsList className="rounded-none">
            <TabsTrigger value="insights" className="rounded-none" data-testid="tab-insights">
              Insights
            </TabsTrigger>
            <TabsTrigger value="careers" className="rounded-none" data-testid="tab-careers">
              Careers
            </TabsTrigger>
          </TabsList>
          <TabsContent value="insights" className="mt-6">
            <BlogAdmin />
          </TabsContent>
          <TabsContent value="careers" className="mt-6">
            <CareersAdmin />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
