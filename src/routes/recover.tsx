import { createFileRoute } from '@tanstack/react-router'
import Recover from '../components/ui/Recover'

export const Route = createFileRoute('/recover')({
  component: RouteComponent,
})

function RouteComponent() {
    return <Recover />
}
