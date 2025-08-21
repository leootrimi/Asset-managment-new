import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Calendar, 
  Laptop, 
  Package, 
  Search, 
  Filter,
  Clock,
  CheckCircle,
  XCircle,
  User,
  Building
} from 'lucide-react'
import RequestCard from './Components/RequestCard'
import { useToast } from '@/hooks/use-toast'

const RequestManagement = () => {
  const { toast } = useToast()
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')

  const [requests, setRequests] = useState([
    {
      id: 1,
      type: 'holiday',
      title: '2 weeks summer vacation',
      employee: 'John Smith',
      department: 'Engineering',
      description: 'Summer vacation from July 15 to July 29',
      startDate: '2024-07-15',
      endDate: '2024-07-29',
      status: 'pending',
      submittedDate: '2024-06-20',
      priority: 'medium'
    },
    {
      id: 2,
      type: 'equipment',
      title: 'MacBook Pro 16-inch',
      employee: 'Sarah Johnson',
      department: 'Design',
      description: 'Need new laptop for design work. Current one is running slow.',
      status: 'approved',
      submittedDate: '2024-06-18',
      priority: 'high',
      estimatedCost: '$2,499'
    },
    {
      id: 3,
      type: 'other',
      title: 'Home office setup',
      employee: 'Mike Davis',
      department: 'Marketing',
      description: 'Request for ergonomic chair and standing desk for home office',
      status: 'rejected',
      submittedDate: '2024-06-15',
      priority: 'low',
      estimatedCost: '$800',
      rejectionReason: 'Budget constraints for current quarter'
    },
    {
      id: 4,
      type: 'holiday',
      title: 'Sick Leave',
      employee: 'Emily Wilson',
      department: 'HR',
      description: 'Medical appointment and recovery time',
      startDate: '2024-06-25',
      endDate: '2024-06-27',
      status: 'approved',
      submittedDate: '2024-06-20',
      priority: 'high'
    },
    {
      id: 5,
      type: 'equipment',
      title: 'Wireless Mouse & Keyboard',
      employee: 'Alex Chen',
      department: 'Finance',
      description: 'Ergonomic wireless peripherals for daily work',
      status: 'pending',
      submittedDate: '2024-06-22',
      priority: 'low',
      estimatedCost: '$150'
    }
  ])

  const handleRequestAction = (requestId, action) => {
    setRequests(prev => prev.map(req => 
      req.id === requestId 
        ? { ...req, status: action }
        : req
    ))
    
    toast({
      title: `Request ${action}`,
      description: `The request has been ${action} successfully.`,
      variant: action === 'approved' ? 'default' : 'destructive'
    })
  }

  const filteredRequests = requests.filter(request => {
    const matchesSearch = request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.employee.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.department.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' || request.status === statusFilter
    const matchesType = typeFilter === 'all' || request.type === typeFilter
    
    return matchesSearch && matchesStatus && matchesType
  })

  const getStatusCounts = () => {
    return {
      total: requests.length,
      pending: requests.filter(r => r.status === 'pending').length,
      approved: requests.filter(r => r.status === 'approved').length,
      rejected: requests.filter(r => r.status === 'rejected').length
    }
  }

  const statusCounts = getStatusCounts()

  const getTypeIcon = (type) => {
    switch(type) {
      case 'holiday': return Calendar
      case 'equipment': return Laptop
      default: return Package
    }
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Request Management
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage employee holiday, equipment, and other requests
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Building className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">HR Dashboard</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Requests</p>
                  <p className="text-2xl font-bold">{statusCounts.total}</p>
                </div>
                <Package className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-pending">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold text-pending">{statusCounts.pending}</p>
                </div>
                <Clock className="h-8 w-8 text-pending" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-green-600">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Approved</p>
                  <p className="text-2xl font-bold text-success">{statusCounts.approved}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-destructive">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Rejected</p>
                  <p className="text-2xl font-bold text-destructive">{statusCounts.rejected}</p>
                </div>
                <XCircle className="h-8 w-8 text-destructive" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by employee, title, or department..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="holiday">Holiday</SelectItem>
                  <SelectItem value="equipment">Equipment</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Requests */}
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Requests</TabsTrigger>
            <TabsTrigger value="holiday">Holidays</TabsTrigger>
            <TabsTrigger value="equipment">Equipment</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {filteredRequests.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-muted-foreground">No requests found</h3>
                  <p className="text-sm text-muted-foreground">
                    Try adjusting your search or filter criteria
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {filteredRequests.map(request => (
                  <RequestCard
                    key={request.id}
                    request={request}
                    onAction={handleRequestAction}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          {['holiday', 'equipment', 'other'].map(type => (
            <TabsContent key={type} value={type} className="space-y-4">
              <div className="grid gap-4">
                {filteredRequests
                  .filter(request => request.type === type)
                  .map(request => (
                    <RequestCard
                      key={request.id}
                      request={request}
                      onAction={handleRequestAction}
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

export default RequestManagement