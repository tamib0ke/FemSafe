import { createFileRoute } from '@tanstack/react-router'
import HomePage from '../components/ui/HomePage'

export const Route = createFileRoute('/homepage')({
  component: RouteComponent,
})

function RouteComponent() {
    return <HomePage />
}
