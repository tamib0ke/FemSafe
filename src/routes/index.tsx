import { createFileRoute } from '@tanstack/react-router'
import WelcomeScreen from '../components/pages/WelcomeScreen'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
   return 
   
    <WelcomeScreen imgLogo="src/assets/FemSafe Logo blanco.webp" title="FemSafe"/>

}
