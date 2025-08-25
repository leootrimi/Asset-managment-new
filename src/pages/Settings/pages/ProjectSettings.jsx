import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Save, Settings2, Globe, Shield } from "lucide-react";

export function ProjectSettings() {

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your project settings have been updated successfully.",
    });
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <Settings2 className="h-8 w-8 text-primary" />
            Project Settings
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your project configuration and preferences
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        {/* General Settings */}
        <Card className="gradient-card shadow-custom-md p-3 px-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              General Settings
            </CardTitle>
            <CardDescription>
              Basic project information and configuration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="project-name">Project Name</Label>
                <Input
                  id="project-name"
                  placeholder="Enter project name"
                  defaultValue="My Admin Project"
                  className="transition-smooth"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project-url">Project URL</Label>
                <Input
                  id="project-url"
                  placeholder="https://example.com"
                  defaultValue="https://admin.example.com"
                  className="transition-smooth"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter project description"
                defaultValue="A modern admin dashboard for managing business operations"
                className="transition-smooth min-h-20"
              />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="gradient-card shadow-custom-md p-3 px-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Security & Access
            </CardTitle>
            <CardDescription>
              Configure security and access control settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg border-border hover:bg-secondary/30 transition-smooth">
              <div>
                <Label htmlFor="two-factor" className="font-medium">Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security to your account
                </p>
              </div>
              <Switch id="two-factor" />
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg border-border hover:bg-secondary/30 transition-smooth">
              <div>
                <Label htmlFor="api-access" className="font-medium">API Access</Label>
                <p className="text-sm text-muted-foreground">
                  Allow external applications to access your data
                </p>
              </div>
              <Switch id="api-access" defaultChecked />
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg border-border hover:bg-secondary/30 transition-smooth">
              <div>
                <Label htmlFor="audit-logs" className="font-medium">Audit Logging</Label>
                <p className="text-sm text-muted-foreground">
                  Keep detailed logs of all system activities
                </p>
              </div>
              <Switch id="audit-logs" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <Button variant="outline" className="transition-smooth">
            Reset to Defaults
          </Button>
          <Button 
            onClick={handleSave}
            className="gradient-primary transition-smooth shadow-glow hover:shadow-lg"
          >
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}