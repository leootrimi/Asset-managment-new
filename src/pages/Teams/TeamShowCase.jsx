import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Crown } from "lucide-react";

// Gradient palette
const gradients = [
  "from-blue-500 to-purple-600",
  "from-emerald-500 to-blue-500",
  "from-orange-500 to-red-500",
  "from-purple-500 to-pink-500",
  "from-cyan-500 to-blue-500",
  "from-indigo-500 to-purple-500",
  "from-rose-500 to-pink-600",
  "from-teal-500 to-green-500",
];

const teamsData = [
  {
    id: 1,
    name: "iOS Engineering",
    members: 8,
    leader: "Sarah Chen",
    dateCreated: "2022-03-15",
  },
  {
    id: 2,
    name: "Full Stack Development",
    members: 12,
    leader: "Marcus Rodriguez",
    dateCreated: "2021-11-08",
  },
  {
    id: 3,
    name: "Android Engineering",
    members: 6,
    leader: "Priya Patel",
    dateCreated: "2022-05-22",
  },
  {
    id: 4,
    name: "DevOps & Infrastructure",
    members: 5,
    leader: "Alex Thompson",
    dateCreated: "2021-09-12",
  },
  {
    id: 5,
    name: "Frontend Specialists",
    members: 9,
    leader: "Emma Watson",
    dateCreated: "2022-01-20",
  },
  {
    id: 6,
    name: "Data Engineering",
    members: 7,
    leader: "David Kim",
    dateCreated: "2022-07-10",
  },
];

const TeamCard = ({ team }) => {
  // Pick a random gradient per card
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card
      className={`group py-2 relative overflow-hidden border-1 border-gray-100 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300`}
    >
      <CardHeader className="relative z-10">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold text-gray-600 drop-shadow-md">
            {team.name}
          </CardTitle>
          <Badge variant="secondary" className="bg-white/20 text-gray-400 border-gray-300">
            Team #{team.id}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="relative z-10 space-y-4 text-gray-500">
        <div className="flex items-center gap-3">
          <Users className="h-4 w-4" />
          <span className="font-medium">{team.members} members</span>
        </div>

        <div className="flex items-center gap-2">
          <Crown className="h-4 w-4" />
          <span>
            Led by <a href={`/employers/${team.id}`} className="font-semibold underline">{team.leader}</a>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>Created {formatDate(team.dateCreated)}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export const TeamsShowcase = () => {
  return (
    <div className="min-h-screen bg-hero-gradient">
      <div className="container mx-auto px-4 py-1 space-y-10">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold bg-primary-gradient bg-clip-text text-black">
            Our Engineering Teams
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Meet the talented teams driving innovation and building the future of technology
          </p>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamsData.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>

          <hr />
        {/* Stats Section */}
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">{teamsData.length}</div>
              <div className="text-muted-foreground">Active Teams</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">
                {teamsData.reduce((sum, team) => sum + team.members, 0)}
              </div>
              <div className="text-muted-foreground">Total Engineers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">2021</div>
              <div className="text-muted-foreground">Since</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsShowcase;
