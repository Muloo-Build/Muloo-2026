import { useQuery } from "@tanstack/react-query";
import type { WebsiteContent } from "@shared/website-content";

export function useWebsiteContent() {
  return useQuery<WebsiteContent>({
    queryKey: ["/api/website-content"],
  });
}
