export default function TaskPage({ params }: { params: { id: string } }) {
  return <p>Task data: {params.id}</p>;
}
