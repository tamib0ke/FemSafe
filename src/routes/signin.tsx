import { createFileRoute } from '@tanstack/react-router'
import SignIn from '../components/ui/SignIn'

export const Route = createFileRoute('/signin')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SignIn />
  
}
