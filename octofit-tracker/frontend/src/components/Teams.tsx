import { CapabilityCard } from './CapabilityCard.js';
import { getJson } from '../api/client.js';

type Team = { name: string; mascot: string; members: string[] };

async function loadTeams() {
  const { teams } = await getJson<{ teams: Team[] }>('/api/teams');
  return teams;
}

export default function Teams() {
  return (
    <CapabilityCard
      title="Teams"
      description="Manage teams and members."
      emptyMessage="No teams yet."
      load={loadTeams}
      renderItem={(team) => `${team.name} (${team.mascot}) — ${team.members.length} members`}
    />
  );
}
