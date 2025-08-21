import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { EquipmentCard } from "./components/EquipmentCard";
import { MyEquipmentCard } from "./components/MyEquipmentCard";
// import { RequestModal } from "@/components/RequestModal";
import { StatsCard } from "./components/StatsCard";
import { 
  Package, 
  PlusCircle,
  Users, 
  TrendingUp,
  Settings
} from "lucide-react";

import laptopImg from '../../assets/laptop-coding.png'
import headphoneImg from '../../assets/headphone.png'
import computerImg from '../../assets/computer.png'
import mouseImg from '../../assets/mouse.png'

// Import images
import { Laptop, Mouse, Headphones } from "lucide-react";

const mockEquipment = [
  {
    id: 1,
    name: "MacBook Pro M3",
    description: "Latest MacBook Pro with M3 chip, 16GB RAM",
    available: 8,
    total: 12,
    image: laptopImg
  },
  {
    id: 2,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with precision tracking",
    available: 15,
    total: 20,
    image: mouseImg
  },
  {
    id: 3,
    name: "Noise-Cancelling Headphones",
    description: "Premium headphones with active noise cancellation",
    available: 3,
    total: 10,
    image: headphoneImg
  },
  {
    id: 4,
    name: "4K Monitor",
    description: "27-inch 4K display with USB-C connectivity",
    available: 0,
    total: 6,
    image: computerImg
  },
];

const mockMyEquipment = [
  {
    id: "LAP001",
    name: "MacBook Pro M3",
    status: "active",
    assignedDate: "2024-01-15",
    image: laptopImg
  },
  {
    id: "MOU023",
    name: "Wireless Mouse",
    status: "active",
    assignedDate: "2024-01-15",
    image: mouseImg
  },
    {
    id: "LAP0021",
    name: "MacBook Pro M3",
    status: "active",
    assignedDate: "2024-01-15",
    image: laptopImg
  },
  {
    id: "MOU0234",
    name: "Wireless Mouse",
    status: "active",
    assignedDate: "2024-01-15",
    image: mouseImg
  }
];

const RequestPage = () => {
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  const handleEquipmentRequest = (equipment) => {
    setSelectedEquipment(equipment);
    setIsRequestModalOpen(true);
  };

  const closeRequestModal = () => {
    setIsRequestModalOpen(false);
    setSelectedEquipment(null);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-white shadow-soft border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-foreground">EquipPro</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="gradient" size="sm">
                <PlusCircle className="w-4 h-4 mr-2" />
                Quick Request
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Active Equipment"
            value="12"
            description="Currently assigned to you"
            icon={Laptop}
            trend={{ type: 'up', value: '+2' }}
          />
          <StatsCard
            title="Available Items"
            value="26"
            description="Ready for assignment"
            icon={Package}
          />
          <StatsCard
            title="Total Requests"
            value="8"
            description="This month"
            icon={TrendingUp}
            trend={{ type: 'up', value: '+4' }}
          />
        </div>

        {/* Available Equipment */}
        <div className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5 text-primary" />
              Available Equipment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mockEquipment.map((equipment) => (
                <EquipmentCard
                  key={equipment.id}
                  equipment={equipment}
                  onRequest={handleEquipmentRequest}
                />
              ))}
            </div>
          </CardContent>
        </div>

        {/* My Equipment */}
        <div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              My Equipment
            </CardTitle>
          </CardHeader>
          <CardContent>
            {mockMyEquipment.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockMyEquipment.map((equipment) => (
                  <MyEquipmentCard
                    key={equipment.id}
                    equipment={equipment}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No equipment assigned yet</p>
                <Button variant="gradient" className="mt-4">
                  Request Your First Item
                </Button>
              </div>
            )}
          </CardContent>
        </div>
      </main>

      {/* Request Modal */}
      {/* <RequestModal
        isOpen={isRequestModalOpen}
        onClose={closeRequestModal}
        equipment={selectedEquipment}
      /> */}
    </div>
  );
};

export default RequestPage;