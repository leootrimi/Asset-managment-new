import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Edit2, Save, X } from "lucide-react";

const defaultLeaveSettings = {
  sickLeave: 10,
  vacation: 15,
  workFromHome: 5,
  maternityLeave: 90,
  paternityLeave: 10,
};

export default function HolidaySettings() {
  const [settings, setSettings] = useState(defaultLeaveSettings);
  const [editMode, setEditMode] = useState(false);
  const [tempSettings, setTempSettings] = useState(defaultLeaveSettings);

  const handleSave = () => {
    setSettings(tempSettings);
    setEditMode(false);
    toast({
      title: "Settings updated",
      description: "Default leave policy has been saved successfully.",
    });
    // 🔗 here you would also call your API to persist changes in DB
    // await api.saveLeaveSettings(tempSettings)
  };

  const handleCancel = () => {
    setTempSettings(settings);
    setEditMode(false);
  };

  const updateField = (field, value) => {
    setTempSettings({ ...tempSettings, [field]: value });
  };

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <Calendar className="h-8 w-8 text-primary" />
            Leave & Policy Defaults
          </h1>
          <p className="text-muted-foreground mt-2">
            Configure default leave entitlements for all new employees
          </p>
        </div>
        {!editMode && (
          <Button
            onClick={() => setEditMode(true)}
            className="gradient-primary shadow-glow transition-smooth"
          >
            <Edit2 className="h-4 w-4 mr-2" />
            Edit
          </Button>
        )}
      </div>

      {/* Settings Card */}
      <Card className="gradient-card shadow-custom-md p-4 px-2">
        <CardHeader>
          <CardTitle>Default Entitlements</CardTitle>
          <CardDescription>
            These values are automatically applied when a user account is created
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.keys(settings).map((key) => (
              <div key={key} className="space-y-2">
                <Label className="capitalize">{key.replace(/([A-Z])/g, " $1")}</Label>
                {editMode ? (
                  <Input
                    type="number"
                    value={tempSettings[key]}
                    onChange={(e) => updateField(key, parseInt(e.target.value) || 0)}
                  />
                ) : (
                  <p className="text-foreground font-medium">
                    {settings[key]}{" "}
                    <span className="text-muted-foreground text-sm">
                      {key.toLowerCase().includes("leave") || key === "vacation"
                        ? "days"
                        : "per month"}
                    </span>
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          {editMode && (
            <div className="flex gap-3">
              <Button onClick={handleSave} className="transition-smooth">
                <Save className="h-4 w-4 mr-2" /> Save
              </Button>
              <Button
                variant="outline"
                onClick={handleCancel}
                className="transition-smooth"
              >
                <X className="h-4 w-4 mr-2" /> Cancel
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
