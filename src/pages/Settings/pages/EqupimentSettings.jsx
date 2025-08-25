import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Plus, Trash2, Edit2, Monitor, Printer, Wifi } from "lucide-react";
import AddEquipmentForm from "./components/AddEquipmentForm";
const EquipmentSettings = () => {
  const [equipment, setEquipment] = useState([
    { id: "1", name: "Dell OptiPlex 7090", type: "computer", status: "active", location: "Office 101", serialNumber: "DL789123" },
    { id: "2", name: "HP LaserJet Pro", type: "printer", status: "maintenance", location: "Print Room", serialNumber: "HP456789" },
    { id: "3", name: "Cisco Router WRT", type: "network", status: "active", location: "Server Room", serialNumber: "CS321654" },
    { id: "4", name: "MacBook Pro M2", type: "computer", status: "active", location: "Office 205", serialNumber: "MB987321" },
  ]);
  const [isAddingEquipment, setIsAddingEquipment] = useState(false);
  const [newEquipment, setNewEquipment] = useState({
    name: "",
    type: "computer",
    status: "active",
    location: "",
    serialNumber: ""
  });

  const handleAddEquipment = () => {
    if (newEquipment.name && newEquipment.location && newEquipment.serialNumber) {
      const equipmentItem = {
        id: Date.now().toString(),
        ...newEquipment
      };
      setEquipment([...equipment, equipmentItem]);
      setNewEquipment({ name: "", type: "computer", status: "active", location: "", serialNumber: "" });
      setIsAddingEquipment(false);
    }
  };

  const handleDeleteEquipment = (id) => {
    setEquipment(equipment.filter(e => e.id !== id));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active": return "bg-success/10 text-success border-success/20 hover:bg-success/20";
      case "maintenance": return "bg-warning/10 text-warning border-warning/20 hover:bg-warning/20";
      case "inactive": return "bg-muted text-muted-foreground border-border hover:bg-muted/80";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "computer": return Monitor;
      case "printer": return Printer;
      case "network": return Wifi;
      default: return Wrench;
    }
  };

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <Wrench className="h-8 w-8 text-primary" />
            Equipment Management
          </h1>
          <p className="text-muted-foreground mt-2">
            Track and manage company equipment inventory
          </p>
        </div>
        <Button 
          onClick={() => setIsAddingEquipment(true)}
          className="gradient-primary shadow-glow transition-smooth"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Equipment
        </Button>
      </div>

      {isAddingEquipment && (
        <AddEquipmentForm
          newEquipment={newEquipment}
          setNewEquipment={setNewEquipment}
          handleAddEquipment={handleAddEquipment}
          onCancel={() => setIsAddingEquipment(false)}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {equipment.map((item) => {
          const IconComponent = getTypeIcon(item.type);
          return (
            <Card key={item.id} className="gradient-card shadow-custom-md hover:shadow-custom-lg transition-smooth">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <IconComponent className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                  </div>
                  <Badge className={getStatusColor(item.status)}>
                    {item.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-medium capitalize">{item.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="font-medium">{item.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Serial:</span>
                    <span className="font-medium font-mono text-xs">{item.serialNumber}</span>
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground hover:text-foreground">
                    <Edit2 className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={() => handleDeleteEquipment(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default EquipmentSettings;
