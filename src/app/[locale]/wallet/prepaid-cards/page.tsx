import { Steps } from './components/steps'
import { Guide } from './components/guide'
import { Questions } from './components/questions'
import { CardSelection } from './components/card-selection'

export default function PrepaidCards() {
  return (
    <main>
      <Steps />
      <CardSelection />
      <Guide />
      <Questions />
    </main>
  )
}
