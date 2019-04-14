import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom'
import Header from './Header'
import Intro from './Intro'
import Publications from './Publications'
import PublicationRender from './PublicationRender'
import Profile from './Profile'
import Relative from './Relative'
import './../styles.css';

const heads = ['Home', 'Profile', 'Publications', 'Relative Pages']
const person = {name: "Xi Da Da",
				discription: "General Secretary of the Communist Party of China",
				profile: ["Xi Da Da (born 15 June 1953) is a Chinese politician serving as general secretary of the Communist Party of China (CPC), president of the People's Republic of China (PRC), and chairman of the Central Military Commission (CMC). Often described as China's \"paramount leader\" since 2012, he officially received the title of \"core leader\" from the CPC in 2016. As general secretary, Xi holds an ex-officio seat on the Politburo Standing Committee of the Communist Party of China, China's top decision-making body.",
						  "Xi is the first general secretary born after the Second World War and the establishment of the People's Republic of China. The son of Chinese Communist veteran Xi Zhongxun, he was exiled to rural Yanchuan County as a teenager following his father's purge during the Cultural Revolution, and lived in a cave in the village of Liangjiahe, where he organised communal labourers. After studying at the Tsinghua University as a \"Worker-Peasant-Soldier student\", Xi rose through the ranks politically in China's coastal provinces. Xi was governor of Fujian province from 1999 to 2002, and governor, then party secretary of neighbouring Zhejiang province from 2002 to 2007. Following the dismissal of Chen Liangyu, Xi was transferred to Shanghai as party secretary for a brief period in 2007. He joined the Politburo Standing Committee and central secretariat in October 2007, spending the next five years as Hu Jintao's presumed successor. Xi was vice president from 2008 to 2013 and vice chairman of the Central Military Commission from 2010 to 2012.",
						  "Since assuming power, Xi has introduced far-ranging measures to enforce party discipline and to ensure internal unity. His signature anti-corruption campaign has led to the downfall of prominent incumbent and retired Communist Party officials, including members of the Politburo Standing Committee. Described as a Chinese nationalist, he has tightened restrictions over civil society and ideological discourse, advocating Internet censorship in China as the concept of \"internet sovereignty\". Xi has called for further socialist market economic reforms, for governing according to the law and for strengthening legal institutions, with an emphasis on individual and national aspirations under the slogan \"Chinese Dream\". He has also championed a more assertive foreign policy, particularly with regard to China–Japan relations, China's claims in the South China Sea, and its role as a leading advocate of free trade and globalization. Xi has sought to expand China's African and Eurasian influence through the One Belt One Road Initiative. The 2015 meeting between Xi and Taiwanese President Ma Ying-jeou marked the first time the political leaders of both sides of the Taiwan Strait have met since the end of the Chinese Civil War in 1950.",
						  "Considered the central figure of the fifth generation of leadership of the People's Republic, Xi has significantly centralised institutional power by taking on a wide range of leadership positions, including chairing the newly formed National Security Commission, as well as new steering committees on economic and social reforms, military restructuring and modernization, and the Internet. Said to be one of the most powerful leaders in modern Chinese history, Xi's political thoughts have been written into the party and state constitutions, and under his leadership the latter was amended to abolish term limits for the presidency. In 2018, Forbes ranked him as the most powerful and influential person in the world, dethroning Russian President Vladimir Putin who held the accolade for five consecutive years."
						 ]
				}
const person_info = {EMAIL: "winnieThePooh@hao123.com", PHONE: "+885 5487089487"}
const publications = [{
	title: "习近平谈治国理政",

	time: "October 1 2014",

	abstract_short: `十八大以来，以习近平同志为核心的党中央，带领全党全国各族人民积极应对前进道路上的困难和挑战，坚定不移深化改革开放，大力推进国家治理体系和治理能力现代化建设，凝聚起实现中华民族伟大复兴中国梦的强大力量，开启了中国改革开放和现代化建设的新征程。在中国共产党领导下，中国人民正在奋力开拓中国特色社会主义更为广阔的发展前景。国际社会越来越多地把目光投向中国、聚焦中国。当代中国将发生什么变化，发展的中国将给世界带来什么影响，越来越成为国际社会广泛关注的问题。`,
	
	abstract: `十八大以来，以习近平同志为核心的党中央，带领全党全国各族人民积极应对前进道路上的困难和挑战，坚定不移深化改革开放，大力推进国家治理体系和治理能力现代化建设，凝聚起实现中华民族伟大复兴中国梦的强大力量，开启了中国改革开放和现代化建设的新征程。在中国共产党领导下，中国人民正在奋力开拓中国特色社会主义更为广阔的发展前景。国际社会越来越多地把目光投向中国、聚焦中国。当代中国将发生什么变化，发展的中国将给世界带来什么影响，越来越成为国际社会广泛关注的问题。
    习近平作为中国党和国家的最高领导人，围绕治国理政发表了大量讲话，提出了许多新思想、新观点、新论断，深刻回答了新的历史条件下党和国家发展的重大理论和现实问题，集中展示了中共新一届中央领导集体的治国理念和执政方略。为回应国际社会关切，增进国际社会对中国发展理念、发展道路、内外政策的认识和理解，中国国务院新闻办公室会同中共中央文献研究室、中国外文出版发行事业局编辑了《习近平谈治国理政》一书。
    本书收入的是习近平在2012年11月15日至2014年6月13日这段时间内的重要著作，共有讲话、谈话、演讲、答问、批示、贺信等79篇。
    针对国际社会对当代中国问题的主要关注点，本书将所选篇目分为18个专题，每个专题内容按时间顺序编排。为便于读者阅读，进一步增进对中国社会制度和历史文化的了解，本书编辑时作了必要的注释，附在篇末。
    本书还收入习近平各个时期特别是中共十八大以来的图片45幅，以帮助读者了解他的工作和生活。`,
}, {
	title: "摆脱贫困",

	time: "July 1992",

	abstract_short: `本书初版于1992年7月，收录了习近平同志担任中共宁德地委书记期间自1988年9月至1990年5月的重要讲话、文章，共29篇，121千字。本书是习近平总书记的第一部个人专著，真实记录了他在宁德地区工作期间贯彻落实党的路线方针政策，全面建设小康社会、推进中国特色社会主义事业的实践探索。`,

	abstract: `《摆脱贫困》初版于1992年7月，收录了习近平同志1988年9月至1990年5月在福建宁德工作期间的重要讲话和文章，共29篇。全书围绕闽东地区如何脱贫致富、加快发展这一主题，涉及经济建设、政治建设、文化建设、社会建设、生态文明建设和党的建设等重要内容，思想丰富深刻，文风生动亲切，具有很高的理论价值和长远的指导意义，重版意义重大。

　　《摆脱贫困》一书提出的许多富有创见的思想、观点和方法，与党的十八大以来习近平总书记系列重要讲话精神是一脉相承、相互贯通的。深入学习《摆脱贫困》一书，对于我们深刻领会习近平总书记治国理政思想和方略，深入了解习近平总书记的执政风格、工作作风等有着重要作用，对于推进、深化学习贯彻习近平总书记系列重要讲话精神，必将起到积极作用。

　　《摆脱贫困》一书关于群众路线的论述，展现了习近平同志一以贯之的真挚为民情怀，是开展党的群众路线教育实践活动的生动教材。习近平同志要求把密切联系群众作为干部的一项基本功，强调的“滴水穿石”精神，提出的“四下基层”做法，至今仍具有强大的生命力。特别是在开展党的群众路线教育实践活动的当下，学习和实践习近平同志关于全心全意为人民服务、密切联系群众的教导有着特殊重要的意义。

　　《摆脱贫困》一书生动记录了习近平同志在福建宁德工作期间用发展着的马克思主义指导实践的丰富历程，凝聚着他作为一个马克思主义者在实践中的哲学思考，是学习和运用科学的思维方法和工作方法的鲜活读本。书中提出“弱鸟先飞”的理念，解决“桥与路”问题的辩证思维等，为我们认识问题、分析问题、解决问题提供了有效的方法“钥匙”，有助于我们不断增强工作的科学性、预见性、主动性和创造性。

　　《摆脱贫困》一书的理论价值和实践价值，决不会因时间的流逝而减弱，相反，只会日益显示它的重要性。`,
}]

const pages = [{
	title: "Xi Jinping - Wikipedia",
	link: "https://en.wikipedia.org/wiki/Xi_Jinping"
}, {
	title: "《习近平谈治国理政》_共产党员网",
	link: "http://www.12371.cn/special/blqs/xjptzglz/"
}, {
	title: "習近平著：《擺脫貧困》--理論--人民網",
	link: "http://theory.people.com.cn/BIG5/68294/389908/index.html"
}, {
	title: "小熊維尼 - Google 搜尋",
	link: "http://bit.ly/2Isio2m"
}, {
	title: "紫禁城 - Google 搜尋",
	link: "http://bit.ly/2G7mpql"
}, {
	title: "CVPortfolio - Free Online CV & Portfolio Website Template - Colorlib",
	link: "https://colorlib.com/wp/template/cvportfolio/"
}]

export default () => {
	return (
		<div>
			<Header heads={heads} />

			<Switch>
				<Redirect from="/home" to="/" />
				<Route exact path="/" component={() => <Intro person={person} info={person_info}/>} />

				<Route exact path="/Publications" component={() => <Publications data={publications}/>} />
				<Route path="/Publications/:id?" component={(props) => <PublicationRender data={publications} {...props}/>} />

				<Route path="/Profile" component={() => <Profile person={person}/>} />
				<Route path="/Relative Pages" component={() => <Relative data={pages}/>} />
			</Switch>	
		</div>
	)
}