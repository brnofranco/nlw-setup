interface HabitProps {
	completed: number;
}

function Habit({ completed }: HabitProps) {
	return <div className="bg-zinc-900">{completed}</div>;
}

export default Habit;
