import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  
  const paths = pathname.split("/").filter(Boolean);
  
  if (paths.length === 0) return null;

  let currentPath = "";

  return (
    <nav aria-label="Breadcrumb" className="w-full bg-secondary/20 py-3 px-6 md:px-12 border-b border-border/30">
      <ol className="mx-auto max-w-[1600px] flex items-center flex-wrap gap-2 text-xs md:text-sm text-muted-foreground">
        <li>
          <Link to="/" className="hover:text-forest transition-colors">Home</Link>
        </li>
        {paths.map((path, index) => {
          currentPath += `/${path}`;
          const isLast = index === paths.length - 1;
          const formattedName = path
            .replace(/-/g, " ")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

          return (
            <li key={currentPath} className="flex items-center gap-2">
              <ChevronRight size={14} className="opacity-50" />
              {isLast ? (
                <span className="text-forest font-medium" aria-current="page">
                  {formattedName}
                </span>
              ) : (
                <Link to={currentPath as any} className="hover:text-forest transition-colors">
                  {formattedName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
