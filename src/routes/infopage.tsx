import { createFileRoute } from '@tanstack/react-router'
import InfoPage from '../components/ui/InfoPage'

export const Route = createFileRoute('/infopage')({
  component: RouteComponent,
})

function RouteComponent() {
    return <InfoPage />
}
