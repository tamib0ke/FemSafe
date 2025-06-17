import { createFileRoute } from '@tanstack/react-router'
import DangerSelected from '../components/ui/DangerSelected'

export const Route = createFileRoute('/dangerSelected')({
  component: RouteComponent,
})

function RouteComponent() {
  return <DangerSelected />
}
