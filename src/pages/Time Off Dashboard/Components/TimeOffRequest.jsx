import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, X, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { apiRequest } from '@/services/ApiCalls';
import { toast } from 'sonner';

export function TimeOffRequest({ timeOffTypes, onCancel, onSubmit }) {
  const [selectedType, setSelectedType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculateDays = () => {
    if (!startDate || !endDate) return 0;
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  };

  const selectedTypeData = timeOffTypes.find(type => type.id === selectedType);
  const requestedDays = calculateDays();
  const availableDays = selectedTypeData ? selectedTypeData.available - selectedTypeData.used : 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedType || !startDate || !endDate) {
      toast(`Please fill in all required fields.`)
      return;
    }

    if (requestedDays > availableDays) {

      toast(`{You only have ${availableDays} days available for ${selectedTypeData?.name}.}`)
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await apiRequest({
      endpoint: '/holidays',
      method: 'POST',
      body: {fromDate: startDate, toDate: endDate, type: selectedType}
    })
    
  toast.success("Holiday request successfully sent!")

    setIsSubmitting(false);
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Time Off Type Selection */}
      <div className="space-y-2">
        <Label htmlFor="timeOffType">Time Off Type *</Label>
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Select time off type" />
          </SelectTrigger>
          <SelectContent className="bg-popover border">
            {timeOffTypes.map((type) => (
              <SelectItem key={type.id} value={type.id}>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${type.color}`} />
                  <span>{type.name}</span>
                  <span className="text-muted-foreground ml-auto">
                    ({type.available - type.used} available)
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Date Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Start Date *</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal bg-background",
                  !startDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, "PPP") : "Select start date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-popover border" align="start">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                disabled={(date) => date < new Date()}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label>End Date *</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal bg-background",
                  !endDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate ? format(endDate, "PPP") : "Select end date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-popover border" align="start">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                disabled={(date) => date < (startDate || new Date())}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Summary Card */}
      {selectedType && startDate && endDate && (
        <Card className="bg-muted/50">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Request Summary</p>
                <p className="text-sm text-muted-foreground">
                  {requestedDays} day(s) of {selectedTypeData?.name}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Remaining after request</p>
                <p className={`font-semibold ${requestedDays > availableDays ? 'text-destructive' : 'text-success'}`}>
                  {Math.max(0, availableDays - requestedDays)} days
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Reason */}
      <div className="space-y-2">
        <Label htmlFor="reason">Reason (Optional)</Label>
        <Textarea
          id="reason"
          placeholder="Brief description of your time off request..."
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="min-h-[100px] bg-background"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="flex-1"
          disabled={isSubmitting}
        >
          <X className="h-4 w-4 mr-2" />
          Cancel
        </Button>
        <Button
          type="submit"
          className="flex-1 bg-gradient-primary hover:bg-primary/90 shadow-elegant text-gray-600"
          disabled={isSubmitting || !selectedType || !startDate || !endDate}
        >
          {isSubmitting ? (
            <div className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full" />
          ) : (
            <Check className="h-4 w-4 mr-2" />
          )}
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </Button>
      </div>
    </form>
  );
}