import { createFileRoute } from '@tanstack/react-router'
import LogoutConfirm from '../components/ui/LogoutConfirm'

export const Route = createFileRoute('/logout')({
  component: RouteComponent,
})

function RouteComponent() {
    return <LogoutConfirm />
}
