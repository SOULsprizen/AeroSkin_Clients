import ShiftingCountdown from './ShiftingCountdown.jsx'
import { SmoothScrollHero } from './SmoothScrollHero.jsx'
import BubbleText from './BubbleText.jsx'
import { SFT } from './SFT.jsx'

export default function Home() {
    return (
        <div>
            <SmoothScrollHero />
            <BubbleText />
            <SFT />
            <ShiftingCountdown />
        </div>
    )
}
