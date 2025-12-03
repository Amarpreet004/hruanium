import MobileAppHero from "./hero";
import TripleIphoneFrame from "./scondiframe";

import WebDevToolsCards from "./tools";
import { InfiniteMovingCardsDemo } from "../../home/review/review";
import AppTypesCards from "./typesofapp";
import WebDevelopmentServices from "./aboutservices";

const MobileApps = () => (
	<div className="mt-20 flex flex-col gap-10">
		<MobileAppHero />
		<WebDevToolsCards />
		<AppTypesCards />	
		<TripleIphoneFrame />
		<WebDevelopmentServices />
		<InfiniteMovingCardsDemo />

	</div>
);

export default MobileApps;
