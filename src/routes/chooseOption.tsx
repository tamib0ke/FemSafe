import { createFileRoute } from '@tanstack/react-router'
import ChooseOption from '../components/ui/ChooseOption'

export const Route = createFileRoute('/chooseOption')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ChooseOption />
}
