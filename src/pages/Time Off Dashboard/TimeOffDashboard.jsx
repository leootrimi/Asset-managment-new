import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Plus, User, Briefcase } from "lucide-react";
import { TimeOffRequest } from './Components/TimeOffRequest';
import { RequestHistory } from './Components/RequestHistory';
import { apiRequest } from '@/services/ApiCalls';
import useEmployerHolidayStore from '@/stores/employerHolidayStore';

const TIME_OFF_TYPES = [
  { id: 'vacation', name: 'Vacation', available: 15, used: 5, color: 'bg-primary' },
  { id: 'sick', name: 'Sick Leave', available: 10, used: 2, color: 'bg-warning' },
  { id: 'personal', name: 'Work from home', available: 5, used: 1, color: 'bg-success' },
  { id: 'bereavement', name: 'Bereavement', available: 3, used: 0, color: 'bg-muted' },
];

export function TimeOffDashboard() {
  const [showRequestForm, setShowRequestForm] = useState(false);
  const { holidayCapacity, holidayRequest, fetchHolidayCapacity, fetchHoldiays } = useEmployerHolidayStore();

  const holidayCardType = (type) => {
    console.log(type);
    
    switch (type) {
      case 'Vacation':
        return holidayCapacity.daysOff
      case 'Sick Leave':
        return holidayCapacity.medicalLeaveDays
      case 'Work from home':
        return holidayCapacity.workFromHomeDays
    }
  }

  useEffect(() => {
    fetchHoldiays()
    fetchHolidayCapacity()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Calendar className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Time Off Dashboard</h1>
              <p className="text-muted-foreground">Manage your time off requests and view available days</p>
            </div>
          </div>
        </div>

        {/* Employee Info */}
        <Card className="mb-8 bg-gradient-card shadow-soft border-0">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">John Doe</h2>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="h-4 w-4" />
                  <span>Software Engineer • Engineering Department</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Available Days Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {TIME_OFF_TYPES.map((type) => (
            <Card key={type.id} className="bg-gradient-card shadow-soft border-0 hover:shadow-elegant transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{type.name}</CardTitle>
                  <div className={`w-3 h-3 rounded-full ${type.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Available</span>
                    <Badge variant="secondary" className="font-semibold">
                      {holidayCardType(type.name)} days
                    </Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${type.color}`}
                      style={{ width: `${(type.used / type.available) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Used: {25 - holidayCapacity.daysOff}</span>
                    <span>Total: {25}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Request Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card shadow-soft border-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Plus className="h-5 w-5" />
                      Request Time Off
                    </CardTitle>
                    <CardDescription>
                      Submit a new time off request
                    </CardDescription>
                  </div>
                  {!showRequestForm && (
                    <Button 
                      onClick={() => setShowRequestForm(true)}
                      className="bg-gradient-primary hover:bg-primary/90 shadow-elegant text-black hover:text-white border-1 border-gray-200"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      New Request
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {showRequestForm ? (
                  <TimeOffRequest 
                    timeOffTypes={TIME_OFF_TYPES}
                    onCancel={() => setShowRequestForm(false)}
                    onSubmit={() => setShowRequestForm(false)}
                  />
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Click "New Request" to submit a time off request</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Recent Requests */}
          <div>
            <RequestHistory requests={holidayRequest} />
          </div>
        </div>
      </div>
    </div>
  );
}