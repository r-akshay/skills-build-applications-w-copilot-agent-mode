import { CapabilityCard } from './CapabilityCard.js';
import { getJson } from '../api/client.js';

type Entry = { teamName: string; totalPoints: number; rank: number };

async function loadLeaderboard() {
  const { leaderboard } = await getJson<{ leaderboard: Entry[] }>('/api/leaderboard');
  return leaderboard;
}

export default function Leaderboard() {
  return (
    <CapabilityCard
      title="Leaderboard"
      description="Compare team point totals."
      emptyMessage="No leaderboard rankings yet."
      load={loadLeaderboard}
      renderItem={(entry) => `${entry.rank}. ${entry.teamName} — ${entry.totalPoints} points`}
    />
  );
}
