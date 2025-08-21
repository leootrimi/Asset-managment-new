import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, CheckCircle2 } from "lucide-react";

export const MyEquipmentCard = ({ equipment }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getStatusBadge = (status) => {
    const variants = {
      active: "bg-success text-success-foreground",
      maintenance: "bg-warning text-warning-foreground",
      returned: "bg-muted text-muted-foreground"
    };

    return (
      <Badge className={`${variants[status]} border-0 capitalize`}>
        {status}
      </Badge>
    );
  };

  return (
    <Card className="hover:shadow-soft transition-all duration-200 bg-gradient-card border-0">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-subtle rounded-lg flex items-center justify-center">
              <img 
                src={equipment.image} 
                alt={equipment.name}
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <h4 className="font-medium text-foreground">{equipment.name}</h4>
              <p className="text-sm text-muted-foreground">ID: {equipment.id}</p>
            </div>
          </div>
          {getStatusBadge(equipment.status)}
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4 h-4" />
            <span>Assigned: {formatDate(equipment.assignedDate)}</span>
          </div>
          {equipment.status === 'active' && (
            <div className="flex items-center gap-1 text-success">
              <CheckCircle2 className="w-4 h-4" />
              <span>In use</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};