import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddEquipmentForm = ({ newEquipment, setNewEquipment, handleAddEquipment, onCancel }) => {
  return (
    <Card className="gradient-card shadow-custom-md border-primary/20 p-3 px-2">
      <CardHeader>
        <CardTitle>Add New Equipment</CardTitle>
        <CardDescription>
          Register new equipment in the inventory system
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="equipment-name">Equipment Name</Label>
            <Input
              id="equipment-name"
              placeholder="Enter equipment name"
              value={newEquipment.name}
              onChange={(e) => setNewEquipment({ ...newEquipment, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="equipment-type">Type</Label>
            <select
              id="equipment-type"
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              value={newEquipment.type}
              onChange={(e) => setNewEquipment({ ...newEquipment, type: e.target.value })}
            >
              <option value="computer">Computer</option>
              <option value="printer">Printer</option>
              <option value="network">Network</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="equipment-status">Status</Label>
            <select
              id="equipment-status"
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              value={newEquipment.status}
              onChange={(e) => setNewEquipment({ ...newEquipment, status: e.target.value })}
            >
              <option value="active">Active</option>
              <option value="maintenance">Maintenance</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="equipment-location">Location</Label>
            <Input
              id="equipment-location"
              placeholder="Enter location"
              value={newEquipment.location}
              onChange={(e) => setNewEquipment({ ...newEquipment, location: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="equipment-serial">Serial Number</Label>
            <Input
              id="equipment-serial"
              placeholder="Enter serial number"
              value={newEquipment.serialNumber}
              onChange={(e) => setNewEquipment({ ...newEquipment, serialNumber: e.target.value })}
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={handleAddEquipment} className="transition-smooth">
            Add Equipment
          </Button>
          <Button
            variant="outline"
            onClick={onCancel}
            className="transition-smooth"
          >
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddEquipmentForm;
