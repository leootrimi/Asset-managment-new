import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, History } from "lucide-react";
import { format } from "date-fns";

const statusConfig = {
  pending: { color: 'bg-warning text-warning-foreground', label: 'Pending' },
  approved: { color: 'bg-success text-success-foreground', label: 'Approved' },
  denied: { color: 'bg-destructive text-destructive-foreground', label: 'Denied' }
};

export function RequestHistory({ requests }) {
  return (
    <Card className="bg-gradient-card shadow-soft border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <History className="h-5 w-5" />
          Recent Requests
        </CardTitle>
        <CardDescription>
          Your latest time off requests
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {requests.length > 0 ? (
          requests.map((request) => {
            const startDate = new Date(request.startDate);
            const endDate = new Date(request.endDate);
            const config = statusConfig[request.status];
            
            return (
              <div
                key={request.id}
                className="p-4 rounded-lg bg-background/50 border border-border/50 hover:bg-background transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium text-sm">{request.type}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <Calendar className="h-3 w-3" />
                      {format(startDate, 'MMM dd')} - {format(endDate, 'MMM dd')}
                    </div>
                  </div>
                  <Badge className={config.color}>
                    {config.label}
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground">
                  {request.days} day{request.days !== 1 ? 's' : ''}
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <Calendar className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No recent requests</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}