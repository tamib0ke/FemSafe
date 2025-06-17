import { createFileRoute } from '@tanstack/react-router'
import AddSafe from '../components/ui/AddSafe'

export const Route = createFileRoute('/addSafe')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AddSafe />
}
