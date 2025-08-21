import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const EquipmentCard = ({ equipment, onRequest }) => {
    const getStatusColor = (available, total) => {
        const percentage = (available / total) * 100;
        if (percentage > 70) return "success";
        if (percentage > 30) return "warning";
        return "destructive";
    };

    const statusVariants = {
        success: "bg-[var(--success)] text-success-foreground",
        warning: "bg-[var(--warning)] text-warning-foreground",
        destructive: "bg-[var(--destructive)] text-destructive-foreground"
    };

    const textVariants = {
        success: "text-[var(--success-foreground)]",
        warning: "text-[var(--warning-foreground)]",
        destructive: "text-[var(--destructive-foreground)]"
    }

    const status = getStatusColor(equipment.available, equipment.total);

    return (
        <Card className="group hover:shadow-medium transition-all duration-300 bg-gradient-card border-0">
            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-subtle rounded-lg flex items-center justify-center">
                        <img
                            src={equipment.image}
                            alt={equipment.name}
                            className="w-12 h-12 object-contain"
                        />
                    </div>
                    <Badge
                        className={`${statusVariants[status]} border-0`}
                    >
                        {equipment.available}/{equipment.total}
                    </Badge>
                </div>

                <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {equipment.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                    {equipment.description}
                </p>

                <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${textVariants[status]} `}>
                        {equipment.available > 0 ? "Available" : "Out of stock"}
                    </span>
                    <Button
                        size="sm"
                        variant={equipment.available > 0 ? "gradient" : "outline"}
                        disabled={equipment.available === 0}
                        onClick={() => onRequest(equipment)}
                        className="group-hover:scale-105 transition-transform border"
                    >
                        Request
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};