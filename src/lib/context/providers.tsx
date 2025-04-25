import { PostHogProvider } from "@/lib/context/posthog-context";
import { StatsProvider } from "@/lib/context/stats-context";
import { NextIntlClientProvider } from "next-intl";

export function Providers({
  children,
}: { children: React.ReactNode; }) {
  return (
    <NextIntlClientProvider>
      <PostHogProvider>
        <StatsProvider>
          {children}
        </StatsProvider>
      </PostHogProvider>
    </NextIntlClientProvider>
  );
}
