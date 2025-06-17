import { createFileRoute } from '@tanstack/react-router'
import HelpCenterSelected from '../components/ui/HeplCenterSelected'

export const Route = createFileRoute('/helpCenterSelected')({
  component: RouteComponent,
})

function RouteComponent() {
  return <HelpCenterSelected/>
}
