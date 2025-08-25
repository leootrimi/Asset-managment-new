import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronRight, Settings2, Calendar, Wrench } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const settingsItems = [
  { 
    title: "Project Settings", 
    url: "/settings/project", 
    icon: Settings2,
    type: "single"
  },
  {
    title: "Configuration",
    icon: Wrench,
    type: "group",
    children: [
      { title: "Holidays", url: "/settings/configuration/holidays", icon: Calendar },
      { title: "Equipment", url: "/settings/configuration/equipment", icon: Wrench },
    ]
  }
];

export function SettingsSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [openGroups, setOpenGroups] = useState(new Set(["Configuration"]));

  const isActive = (path) => currentPath === path;
  
  const isGroupActive = (children) => 
    children.some(child => currentPath === child.url);

  const getNavClass = (itemPath) => {
    const active = isActive(itemPath);
    return active 
      ? "bg-primary/10 text-primary border-r-2 border-primary font-medium" 
      : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-smooth";
  };

  const toggleGroup = (title) => {
    const newOpenGroups = new Set(openGroups);
    if (newOpenGroups.has(title)) {
      newOpenGroups.delete(title);
    } else {
      newOpenGroups.add(title);
    }
    setOpenGroups(newOpenGroups);
  };

  return (
    <Sidebar className="w-64 border-r border-border">
      <SidebarContent className="bg-card">
        <div className="p-4 border-b border-border">
          <h2 className="font-semibold text-card-foreground flex items-center gap-2">
            <Settings2 className="h-5 w-5" />
            Settings
          </h2>
        </div>

        <SidebarGroup className="py-4">
          <SidebarGroupContent>
            <SidebarMenu className="px-2 space-y-1">
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.type === "single" ? (
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className={getNavClass(item.url)}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  ) : (
                    <Collapsible 
                      open={openGroups.has(item.title)}
                      onOpenChange={() => toggleGroup(item.title)}
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className={`w-full justify-between ${
                            isGroupActive(item.children) 
                              ? "bg-primary/5 text-primary" 
                              : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground"
                          } transition-smooth`}
                        >
                          <div className="flex items-center gap-2">
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </div>
                          <ChevronRight 
                            className={`h-4 w-4 transition-transform duration-200 ${
                              openGroups.has(item.title) ? "rotate-90" : ""
                            }`} 
                          />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-4 mt-1 space-y-1">
                        {item.children?.map((child) => (
                          <SidebarMenuButton key={child.title} asChild>
                            <NavLink
                              to={child.url}
                              className={getNavClass(child.url)}
                            >
                              <child.icon className="h-4 w-4" />
                              <span>{child.title}</span>
                            </NavLink>
                          </SidebarMenuButton>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
