import { Calendar, Home, Inbox, BookOpen } from "lucide-react";
import { Button } from "../components/ui/button";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

import { NavLink } from "react-router-dom";
import AvatarDisplay from "./avatar-display";

import useAuth from "../hooks/useAuth";

// Menu items.
const items = [
  {
    title: "Overview",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Projects",
    url: "/dashboard/projects",
    icon: Inbox,
  },
  {
    title: "Documentation",
    url: "#",
    icon: BookOpen,
  },
];

export function AppSidebar() {
  const { user } = useAuth();
  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "";

  return (
    <Sidebar className="">
      <SidebarContent>
        <SidebarGroup>
          <div className="flex items-center gap-3 my-5">
            <img src="/tokari-logo.png" alt="logo" width={42} />
            <SidebarGroupLabel className="text-lg">Tokari Core</SidebarGroupLabel>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="text-2xl my-1" asChild>
                    <NavLink to={item.url}>
                      <item.icon className="!size-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center gap-3">
          <AvatarDisplay
            className="size-14"
            src={user?.profile_image || ""}
            fallback={initials}
          />
          <Button variant="destructive">Logout</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
