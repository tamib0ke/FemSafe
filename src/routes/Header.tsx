import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Header')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Header"!</div>
}
