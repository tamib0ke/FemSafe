import { createFileRoute } from '@tanstack/react-router'
import SafeSelected from '../components/ui/SafeSelected'

export const Route = createFileRoute('/safeSelected')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SafeSelected />
}
