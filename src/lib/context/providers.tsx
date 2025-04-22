import { PostHogProvider } from "@/lib/context/posthog-context";
import { StatsProvider } from "@/lib/context/stats-context";

export function Providers({
  children,
}: { children: React.ReactNode; }) {
  return (
    <PostHogProvider>
      <StatsProvider>
        {children}
      </StatsProvider>
    </PostHogProvider>
  );
}
