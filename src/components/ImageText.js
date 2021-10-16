import React from 'react';
import "./IT.css";
import S1 from '../pics/Solutions1.jpg'
import S2 from '../pics/Solutions2.jpg'
function ImageText(){
	return(
	<>
	<div class="main">
	<div class="left"><img class="photo" alt="random" src={S1} /></div>
	<div class="right">
	<h1 class="title">SEATED, GENERAL ADMISSION AND GREENFIELD TICKETING.</h1>
	<p class="txt">“Seamless customer journeys”</p>
	<p class="txt">At Flicket we are specialists in sports ticketing and our technology has been developed to serve an industry where fans have strong brand alliances. Having a deep understanding of casual ticket holders, memberships and commercial partners allows us to minimise the workload for your team and maximise your returns on marketing efforts.</p>
	<p class="txt">Minimal queues at an event is critical to a great fan experience. People can often underestimate the cost of a fan waiting in-line, delaying and reducing spend on food and beverage as well as merchandise, if the entrance process has not been done right.  We have built our technology to be quick and stable, while giving you complete visibility and control over your fans, while ensuring you are able to deliver your event in a cost effective manner.</p>
	</div>
	<div class="clear"></div>
	</div>
	<div class="main">
	<div class="right"><img class="photo" alt="random" src={S2} /></div>
	<div class="left">
	<h1 class="title">MEMBERSHIPS AND INDUSTRY EXPERTS AND HANDS ON EXPERIENCE.</h1>
	<p class="txt">“Bring your most loyal customers an elevated experience”</p>
	<p class="txt">At Flicket we drive increased membership sales by giving you the tools to have complete control of your data. We ensure that your members can secure their same seats, minimising decision making and reducing churn rates. Flickets “Fan Finder” allows you to assess who is most likely to become a member at the completion of each season. Our membership renewal program is secondary to none and reduces the workload required from your internal teams.</p>
	<p class="txt">Our dedicated team has a vast amount of experience working within the sports and entertainment industry. We become a true partner by understanding their business then tailoring our services to suit budgets and needs.</p>
	</div>
	<div class="clear"></div>
	</div>
	</>
	)
}
export default ImageText