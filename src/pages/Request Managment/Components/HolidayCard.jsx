import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Calendar, 
  Laptop, 
  Package, 
  User, 
  Building2, 
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  MoreHorizontal
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { formatToDayMonth } from '@/services/DateConverter'

const HolidayCard = ({ request, onAction }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'warning'
      case 'approved': return 'success'
      case 'rejected': return 'destructive'
      default: return 'secondary'
    }
  }  

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending': return Clock
      case 'approved': return CheckCircle
      case 'rejected': return XCircle
      default: return AlertCircle
    }
  }

  const getTypeIcon = (type) => {
    switch(type) {
      case 'holiday': return Calendar
      case 'equipment': return Laptop
      default: return Package
    }
  }

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'destructive'
      case 'medium': return 'warning'
      case 'low': return 'secondary'
      default: return 'secondary'
    }
  }

  const StatusIcon = getStatusIcon(request.status)
  const TypeIcon = getTypeIcon(request.type)
  const statusColor = getStatusColor(request.status)

  return (
    <Card className="transition-all duration-300 hover:shadow-lg border-l-4 p-3 py-5 " 
          style={{borderLeftColor: `var(--${statusColor})`}}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <div className={`p-2 rounded-lg bg-${statusColor}-light`}>
              <TypeIcon className={`h-5 w-5 text-${statusColor}`} />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-lg">Leave Request</h3>
                <Badge variant="outline" className="capitalize">
                  {request.type}
                </Badge>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{request.employer_name}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Building2 className="h-4 w-4" />
                  <span>Software Engineer</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant={getPriorityColor(request.priority)} className="capitalize">
              Make with priority if needed
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {request.status === 'pending' && (
                  <>
                    <DropdownMenuItem onClick={() => onAction(request.id, 'approved')}>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Approve
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onAction(request.id, 'rejected')}>
                      <XCircle className="h-4 w-4 mr-2" />
                      Reject
                    </DropdownMenuItem>
                  </>
                )}
                <DropdownMenuItem>
                  <User className="h-4 w-4 mr-2" />
                  View Details
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-muted-foreground mb-4">Here goes the descprition (Optional)</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {request.fromDate && (
            <div className="flex items-center space-x-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Start:</span>
              <span className="font-medium">{formatToDayMonth(request.fromDate)}</span>
            </div>
          )}
          
          {request.toDate && (
            <div className="flex items-center space-x-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">End:</span>
              <span className="font-medium">{formatToDayMonth(request.toDate)}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <StatusIcon className={`h-4 w-4 text-${statusColor}`} />
            <Badge variant={statusColor} className="capitalize">
              {request.status}
            </Badge>
            <span className="text-sm text-muted-foreground">
              • Submitted {formatToDayMonth(request.appliedDate)}
            </span>
          </div>
          
          {request.status === 'pending' && (
            <div className="flex space-x-2">
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => onAction(request.id, 'rejected')}
                className="text-destructive hover:text-destructive-foreground hover:bg-destructive"
              >
                Reject
              </Button>
              <Button 
                size="sm"
                onClick={() => onAction(request.id, 'approved')}
                className="bg-success hover:bg-success/90 text-success-foreground"
              >
                Approve
              </Button>
            </div>
          )}
        </div>

        {request.rejectionReason && (
          <div className="mt-3 p-3 bg-destructive/10 rounded-lg border border-destructive/20">
            <p className="text-sm text-destructive">
              <strong>Rejection Reason:</strong> {request.rejectionReason}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default HolidayCard