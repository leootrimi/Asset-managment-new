import { TeamCard } from "./Components/TeamCard";


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
