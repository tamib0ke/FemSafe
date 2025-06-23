import { createFileRoute } from '@tanstack/react-router'
import SendEmail from '../components/ui/SendEmail'

export const Route = createFileRoute('/sendEmail')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SendEmail />
}
