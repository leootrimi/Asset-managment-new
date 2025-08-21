import React, { useState } from "react";
import { Plus, Search, Filter, Eye, MoreVertical, Zap, Monitor, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const EquipmentManagement = ({ mockEquipmentData }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [typeFilter, setTypeFilter] = useState("all");

    const equipmentData = mockEquipmentData;

    const filteredData = equipmentData.filter((item) => {
        const matchesSearch =
            item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.type?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tag?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = statusFilter === "all" || item.status === statusFilter;
        const matchesType = typeFilter === "all" || item.type === typeFilter;

        return matchesSearch && matchesStatus && matchesType;
    });

    const getEquipmentIcon = (type) => {
        switch (type.toLowerCase()) {
            case 'laptop':
                return Monitor;
            case 'smartphone':
                return Zap;
            case 'printer':
                return Wrench;
            case 'monitor':
                return Monitor;
            default:
                return Monitor;
        }
    };

    const getStatusInfo = (item) => {
        if (item.assignedTo) {
            return { status: 'in-use', text: 'In Use' };
        } else if (item.warrantyLeft < 0.5) {
            return { status: 'maintenance', text: 'Maintenance' };
        } else {
            return { status: 'available', text: 'Available' };
        }
    };

    // Get unique equipment types for filter
    const equipmentTypes = [...new Set(equipmentData.map(item => item.type))];

    return (
        <div className="min-h-screen bg-background p-4 lg:p-8">
            <div className="mx-auto max-w-7xl space-y-8">
                {/* Header Section */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-semibold text-foreground">Equipment Management</h1>
                        <p className="text-muted-foreground">
                            Track and manage all company equipment, assignments, and warranties in one place.
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <Card className="bg-gradient-surface shadow-soft">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Total Equipment</p>
                                        <p className="text-2xl font-bold">{equipmentData.length}</p>
                                    </div>
                                    <div className="rounded-full bg-primary/10 p-3">
                                        <Monitor className="h-5 w-5 text-primary" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-surface shadow-soft">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">In Use</p>
                                        <p className="text-2xl font-bold">{equipmentData.filter(item => item.assignedTo).length}</p>
                                    </div>
                                    <div className="rounded-full bg-warning/10 p-3">
                                        <Zap className="h-5 w-5 text-warning" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-surface shadow-soft">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Available</p>
                                        <p className="text-2xl font-bold">{equipmentData.filter(item => !item.assignedTo && item.warrantyLeft >= 0.5).length}</p>
                                    </div>
                                    <div className="rounded-full bg-success/10 p-3">
                                        <Monitor className="h-5 w-5 text-success" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-surface shadow-soft">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Needs Attention</p>
                                        <p className="text-2xl font-bold">{equipmentData.filter(item => item.warrantyLeft < 0.5).length}</p>
                                    </div>
                                    <div className="rounded-full bg-destructive/10 p-3">
                                        <Wrench className="h-5 w-5 text-destructive" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Main Content */}
                <Card className="shadow-medium p-3">
                    <CardHeader className="border-b bg-gradient-surface">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <CardTitle className="text-xl">Equipment Inventory</CardTitle>
                                <CardDescription>
                                    Manage equipment assignments, track warranties, and monitor usage status.
                                </CardDescription>
                            </div>
                            <Button className="bg-gradient-primary hover:opacity-90">
                                <Plus className="mr-2 h-4 w-4" />
                                Add Equipment
                            </Button>
                        </div>

                        {/* Filters and Search */}
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    placeholder="Search equipment, tags, or types..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-9"
                                />
                            </div>
                            <Select value={statusFilter} onValueChange={setStatusFilter}>
                                <SelectTrigger className="w-full sm:w-[140px]">
                                    <Filter className="mr-2 h-4 w-4" />
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Status</SelectItem>
                                    <SelectItem value="available">Available</SelectItem>
                                    <SelectItem value="in-use">In Use</SelectItem>
                                    <SelectItem value="maintenance">Maintenance</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select value={typeFilter} onValueChange={setTypeFilter}>
                                <SelectTrigger className="w-full sm:w-[140px]">
                                    <SelectValue placeholder="Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Types</SelectItem>
                                    {equipmentTypes.map((type) => (
                                        <SelectItem key={type} value={type}>{type}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </CardHeader>

                    <CardContent className="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow className="hover:bg-transparent border-b">
                                    <TableHead className="font-semibold">Equipment</TableHead>
                                    <TableHead className="font-semibold">Tag</TableHead>
                                    <TableHead className="font-semibold">Status</TableHead>
                                    <TableHead className="font-semibold">Price</TableHead>
                                    <TableHead className="font-semibold">Assigned To</TableHead>
                                    <TableHead className="font-semibold hidden md:table-cell">Warranty</TableHead>
                                    <TableHead className="font-semibold hidden lg:table-cell">Location</TableHead>
                                    <TableHead className="font-semibold w-[70px]">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredData.map((item) => {
                                    const EquipmentIcon = getEquipmentIcon(item.type);
                                    const statusInfo = getStatusInfo(item);

                                    return (
                                        <TableRow key={item._id} className="hover:bg-muted/50">
                                            <TableCell className="font-medium">
                                                <div className="flex items-center gap-3">
                                                    <div className="rounded-lg bg-muted/50 p-2">
                                                        <EquipmentIcon className="h-4 w-4" />
                                                    </div>
                                                    <div>
                                                        <div className="font-medium">{item.name}</div>
                                                        <div className="text-sm text-muted-foreground">{item.type}</div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline">{item.tag}</Badge>
                                            </TableCell>
                                            <TableCell>
                                                <Badge status={statusInfo.status}>
                                                    {statusInfo.text}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="font-medium">${item.price.toLocaleString()}</TableCell>
                                            <TableCell>
                                                {item.assignedTo ? (
                                                    <div className="text-sm">
                                                        <div className="text-muted-foreground">{item.assignedTo.fullName}</div>
                                                    </div>
                                                ) : (
                                                    <span className="text-muted-foreground">Unassigned</span>
                                                )}
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                <div className="text-sm">
                                                    <div className={`font-medium ${item.warrantyLeft < 0.5 ? 'text-destructive' : ''}`}>
                                                        {item.warrantyLeft} years
                                                    </div>
                                                    {item.warrantyLeft < 0.5 && (
                                                        <div className="text-destructive text-xs">Expiring soon</div>
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden lg:table-cell text-sm text-muted-foreground">
                                                {item.location}
                                            </TableCell>
                                            <TableCell>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                                            <MoreVertical className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuItem>
                                                            <Eye className="mr-2 h-4 w-4" /> View Details
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>Edit</DropdownMenuItem>
                                                        <DropdownMenuItem>Assign</DropdownMenuItem>
                                                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>

                        {/* Pagination */}
                        <div className="flex items-center justify-between border-t px-6 py-4">
                            <div className="text-sm text-muted-foreground">
                                Showing <strong>1-{filteredData.length}</strong> of {equipmentData.length} equipment
                            </div>
                            <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm" disabled>
                                    Previous
                                </Button>
                                <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                                    1
                                </Button>
                                <Button variant="outline" size="sm">
                                    2
                                </Button>
                                <Button variant="outline" size="sm">
                                    Next
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default EquipmentManagement;