import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ChevronDown, ChevronRight, Settings, Wrench, Calendar, HardHat } from "lucide-react"
import { cn } from "@/lib/utils"
import { ProjectSettings } from "./pages/ProjectSettings"
import HolidaySettings from "./pages/HolidaySettings"
import EquipmentSettings from "./pages/EqupimentSettings"


export default function AdminSettings() {
  const [selectedItem, setSelectedItem] = useState("project-settings")
  const [expandedItems, setExpandedItems] = useState(["configuration"])

  const toggleExpanded = (itemId) => {
    setExpandedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const menuItems = [
    {
      id: "project-settings",
      label: "Project Settings",
      icon: Settings,
      component: ProjectSettings,
    },
    {
      id: "configuration",
      label: "Configuration",
      icon: Wrench,
      expandable: true,
      children: [
        {
          id: "holidays",
          label: "Holidays",
          icon: Calendar,
          component: HolidaySettings,
        },
        {
          id: "equipments",
          label: "Equipments",
          icon: HardHat,
          component: EquipmentSettings,
        },
      ],
    },
  ]

  const renderContent = () => {
    // Find the selected item in the menu structure
    for (const item of menuItems) {
      if (item.id === selectedItem && item.component) {
        const Component = item.component
        return <Component />
      }
      if (item.children) {
        for (const child of item.children) {
          if (child.id === selectedItem && child.component) {
            const Component = child.component
            return <Component />
          }
        }
      }
    }
    return <div>Select an option from the sidebar</div>
  }

  const renderMenuItem = (item, level = 0) => {
    const isExpanded = expandedItems.includes(item.id)
    const isSelected = selectedItem === item.id
    const hasChildren = item.children && item.children.length > 0
    const Icon = item.icon

    return (
      <div key={item.id}>
        <Button
          variant={isSelected ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start gap-2 h-9",
            level > 0 && "ml-4 w-[calc(100%-1rem)]",
            isSelected && "bg-accent text-accent-foreground",
          )}
          onClick={() => {
            if (hasChildren) {
              toggleExpanded(item.id)
            } else {
              setSelectedItem(item.id)
            }
          }}
        >
          {hasChildren ? (
            isExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )
          ) : (
            <Icon className="h-4 w-4" />
          )}
          {item.label}
        </Button>

        {hasChildren && isExpanded && (
          <div className="mt-1 space-y-1">{item.children.map((child) => renderMenuItem(child, level + 1))}</div>
        )}
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-background max-w-7xl mx-auto">
      {/* Settings Sidebar */}
      <div className="w-64 border-r bg-card">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Settings</h2>
          <Separator className="mb-4" />
          <nav className="space-y-1">{menuItems.map((item) => renderMenuItem(item))}</nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6">{renderContent()}</div>
    </div>
  )
}
