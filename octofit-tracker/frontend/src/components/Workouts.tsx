import { CapabilityCard } from './CapabilityCard.js';
import { getJson } from '../api/client.js';

type Workout = { title: string; reason?: string };

async function loadWorkoutSuggestions() {
  const email = encodeURIComponent('mona@example.com');
  const { suggestions } = await getJson<{ suggestions: Workout[] }>(`/api/workouts/suggestions/${email}`);
  return suggestions;
}

export default function Workouts() {
  return (
    <CapabilityCard
      title="Workout suggestions"
      description="Recommend workouts from activity patterns."
      emptyMessage="No workout suggestions available."
      load={loadWorkoutSuggestions}
      renderItem={(workout) => workout.reason ? `${workout.title}: ${workout.reason}` : workout.title}
    />
  );
}
