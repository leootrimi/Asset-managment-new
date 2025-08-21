import { Card, CardContent } from "@/components/ui/card";

export const StatsCard = ({ title, value, description, icon: Icon, trend }) => {
  return (
    <Card className="bg-gradient-card border-0 hover:shadow-soft transition-all duration-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground text-sm font-medium">{title}</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-3xl font-bold text-foreground">{value}</h3>
              {trend && (
                <span className={`text-sm font-medium ${
                  trend.type === 'up' ? 'text-success' : 'text-destructive'
                }`}>
                  {trend.value}
                </span>
              )}
            </div>
            <p className="text-muted-foreground text-sm mt-1">{description}</p>
          </div>
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-purple-800" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};