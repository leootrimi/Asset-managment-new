import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Crown } from "lucide-react";

export const TeamCard = ({ team }) => {

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