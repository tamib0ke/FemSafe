import { createFileRoute } from '@tanstack/react-router'
import AddDanger from '../components/ui/AddDanger'

export const Route = createFileRoute('/addDanger')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AddDanger />
}
