import { createFileRoute } from '@tanstack/react-router'
import AddHeplCenter from '../components/ui/AddHeplCenter'

export const Route = createFileRoute('/addHelpCenter')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AddHeplCenter />
}
