import axios from 'axios';

interface ArticleSource {
  id?: string;
  name: string;
}

export interface Article {
  source: ArticleSource;
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content?: string;
}

interface HeadlinesResponse {
  status: 'ok' | 'error';
  code?: string;
  message?: string;
  totalResults: number;
  articles: Article[];
}

export const DefaultHeadlinesResponse: HeadlinesResponse = {
  status: 'ok',
  totalResults: 18,
  articles: [
    {
      source: {
        name: 'NBCSports.com',
      },
      author: 'Michael David Smith',
      title:
        'Patriots cut former second-round pick Tyquan Thornton - NBC Sports',
      description:
        'Patriots wide receiver Tyquan Thornton never panned out as a second-round pick in the 2022 NFL draft, and now his time in New England is coming to an end.',
      url: 'https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/patriots-cut-former-second-round-pick-tyquan-thornton',
      urlToImage:
        'https://nbcsports.brightspotcdn.com/dims4/default/b4c2d97/2147483647/strip/true/crop/3124x1757+0+163/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F69%2F57%2F627447834b5bb8fb996531e48b39%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2182326379',
      publishedAt: '2024-11-16T15:47:31Z',
      content:
        'Patriots wide receiver Tyquan Thornton never panned out as a second-round pick in the 2022 NFL draft, and now his time in New England is coming to an end.\r\nThe Patriots informed Thornton today that h… [+615 chars]',
    },
    {
      source: {
        name: 'NBCSports.com',
      },
      author: 'Mike Florio',
      title:
        'PFT’s Week 11 2024 NFL game previews, with Chiefs-Bills the game of the day - NBC Sports',
      description:
        'A quick look at each of the Week 11 Sunday and Monday games.',
      url: 'https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/pfts-week-11-2024-nfl-game-previews-with-chiefs-bills-the-game-of-the-day',
      urlToImage:
        'https://nbcsports.brightspotcdn.com/dims4/default/ff5d042/2147483647/strip/true/crop/4527x2546+0+236/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F31%2Fe9%2F7dd2982941da8e87b37d5b5df845%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1963509750',
      publishedAt: '2024-11-16T14:13:01Z',
      content:
        'Week 11 has arrived. Each window on Sunday features a game with significant playoff implications in the AFC.\r\nAnd, of course, the game of the day happens in the place where the jump through tables an… [+8732 chars]',
    },
    {
      source: {
        name: '10TV',
      },
      author: '10TV Web Staff',
      title:
        'Ohio State releases injury report ahead of Northwestern game - 10TV',
      description: 'Kickoff is at noon.',
      url: 'https://www.10tv.com/article/sports/football/ohio-state-football/ohio-state-northwestern-injury-report/530-eb758915-e510-4e35-a081-bd48f8fe6412',
      urlToImage:
        'https://media.tegna-media.com/assets/WBNS/images/e9d99c39-a906-4c3c-affb-75d21eba4cb1/e9d99c39-a906-4c3c-affb-75d21eba4cb1_1140x641.jpg',
      publishedAt: '2024-11-16T14:00:00Z',
      content:
        'CHICAGO Ohio State will be without eight players as they take on Northwestern on Saturday.\r\nThe Buckeyes are in Chicago to take on the Wildcats at Wrigley Field. Kickoff is at noon.\r\nSee the full una… [+2108 chars]',
    },
    {
      source: {
        name: 'Athlon Sports',
      },
      author: 'Chris Phelps',
      title:
        'Jake Paul Reveals True Reason For Pulling His Punches In Mike Tyson Fight - Athlon Sports',
      description:
        'Boxer Jake Paul revealed the true reason for pulling his punches in the fight against Mike Tyson.',
      url: 'https://athlonsports.com/boxing/jake-paul-reveals-true-reason-for-pulling-his-punches-mike-tyson-fight',
      urlToImage:
        'https://athlonsports.com/.image/t_share/MjEwNzM5MzExMzI5NDIxMTM3/usatsi_24755309.jpg',
      publishedAt: '2024-11-16T12:41:00Z',
      content:
        'YouTuber-turned-boxer Jake Paul defeated 58-year-old Mike Tyson by unanimous decision late Friday night in front of a crowd of more than 70,000 at AT&amp;T Stadium in Arlington, Texas.\r\nThe fight wen… [+1612 chars]',
    },
    {
      source: {
        name: 'nj.com',
      },
      author: 'Steve Politi | NJ Advance Media for NJ.com',
      title:
        'Ace Bailey’s Rutgers debut is just a glimpse of his basketball brilliance | Politi - NJ.com',
      description:
        'Ace Bailey made his much-anticipated debut for Rutgers in a game against Monmouth on Friday night.',
      url: 'https://www.nj.com/rutgersbasketball/2024/11/ace-baileys-rutgers-debut-is-just-a-glimpse-of-his-basketball-brilliance-politi.html',
      urlToImage:
        'https://www.nj.com/resizer/v2/T75MYAFKCBEEXE6PPPGLHLPLLU.jpg?auth=3399225dd687477764173ba736f854e576c9edb311a8676513b6ed7576ab2d2e&width=1280&quality=90',
      publishedAt: '2024-11-16T12:03:00Z',
    },
    {
      source: {
        name: 'Tampa Bay Times',
      },
      author: 'John Romano',
      title:
        'Rays say county’s stalling has likely killed the new stadium deal - Tampa Bay Times',
      description:
        'John Romano | Delays on bond votes have halted stadium groundbreaking plans and jeopardized baseball’s future in Tampa Bay.',
      url: 'https://www.tampabay.com/sports/2024/11/16/rays-stadium-deal-bonds-vote-pinellas-st-petersburg-tropicana-field-steinbrenner/',
      urlToImage:
        'https://www.tampabay.com/resizer/v2/IJOGUVSEVZBXBM7P2BML5JPS3Q.jpg?auth=e43c025e544ce43a419efcd6a338f3e07ebc67460d52409fb7692afd24e83e13&height=675&width=1200&smart=true',
      publishedAt: '2024-11-16T11:23:35Z',
      content:
        'ST. PETERSBURG At the time, the moment seemed unremarkable. A ground ball to Taylor Walls. An underhand flip to Jose Caballero to force Torontos Vladimir Guerrero Jr. at second base. A completed 4-3 … [+10983 chars]',
    },
    {
      source: {
        id: 'espn',
        name: 'ESPN',
      },
      author: 'Dave McMenamin',
      title: 'LeBron ups triple-double streak to 4 in L.A. win - ESPN',
      description:
        "LeBron James scored the Lakers' last four points in a 120-115 group stage win over the Spurs and finished with 15 points, 16 rebounds and 12 assists for his fourth straight triple-double -- the most he has had in a row during his 22-season career.",
      url: 'https://www.espn.com/nba/story/_/id/42418548/lebron-james-posts-4th-straight-triple-double-lakers-win',
      urlToImage:
        'https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1116%2Fr1415425_1296x729_16%2D9.jpg',
      publishedAt: '2024-11-16T05:36:00Z',
      content:
        'SAN ANTONIO -- Last year, LeBron James made history when he was named MVP of the inaugural in-season tournament. Friday night, as the Los Angeles Lakers opened their tournament defense, he made some … [+3632 chars]',
    },
    {
      source: {
        id: 'espn',
        name: 'ESPN',
      },
      author: 'Andreas Hale',
      title: 'Back at 58, Tyson drops 1-sided decision to Paul - ESPN',
      description:
        'In his return to the ring, former champ Mike Tyson struggled to mount any offense against Jake Paul and lost by unanimous decision.',
      url: 'https://www.espn.com/boxing/story/_/id/42418519/jake-paul-cruises-one-sided-decision-mike-tyson',
      urlToImage:
        'https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1116%2Fr1415495_1296x729_16%2D9.jpg',
      publishedAt: '2024-11-16T05:34:00Z',
      content:
        'ARLINGTON, Texas -- Mike Tyson\'s highly anticipated return to the boxing ring after nearly two decades saw "The Baddest Man on the Planet" fall short to YouTuber-turned-prizefighter Jake Paul, who cr… [+5092 chars]',
    },
    {
      source: {
        name: 'Fear the Sword',
      },
      author: 'Corey Walsh',
      title:
        'Player Grades: Cavs vs Bulls - Donovan Mitchell scores 37 in 14th straight victory - Fear the Sword',
      description: 'The Cavaliers recover to best Bulls in closing minutes',
      url: 'https://www.fearthesword.com/2024/11/15/24297865/player-grades-cavs-vs-bulls-donovan-mitchell-scores-37-in-14th-straight-victory-darius-garland-nba',
      urlToImage:
        'https://cdn.vox-cdn.com/thumbor/P5hLGxrn3-alT8S7prQ3OjCk8-E=/0x0:4834x2531/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25736285/usa_today_24769307.jpg',
      publishedAt: '2024-11-16T04:59:29Z',
      content:
        "After an explosive 49-point first quarter, the Cleveland Cavaliers struggled to withstand the Chicago Bulls' comeback. After a decisive last five minutes, the Cavs separated from Chicago and delivere… [+4496 chars]",
    },
    {
      source: {
        id: 'associated-press',
        name: 'Associated Press',
      },
      title:
        'Nuggets star Nikola Jokic and coach Michael Malone miss game against Pelicans for personal reasons - The Associated Press',
      description:
        "The Denver Nuggets were without star center Nikola Jokic and coach Michael Malone for their NBA Cup opener Friday night against the New Orleans Pelicans. Jokic missed Denver's 101-94 loss for personal reasons. Malone stayed behind to watch daughter Bridget co…",
      url: 'https://apnews.com/article/nuggets-jokic-malone-356652a81e208ae9647384cc9496ddb6',
      urlToImage:
        'https://dims.apnews.com/dims4/default/8b24205/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe7%2Ff8%2Fdc24969259345b2c87fa1a297710%2F6867cc41103e49a8a2e14549b938a114',
      publishedAt: '2024-11-16T03:47:00Z',
      content:
        'NEW ORLEANS (AP) The Denver Nuggets were without star center Nikola Jokic and coach Michael Malone for their NBA Cup opener Friday night against the New Orleans Pelicans.\r\nJokic missed Denvers 101-94… [+1111 chars]',
    },
    {
      source: {
        name: 'NBCSports.com',
      },
      author: 'Mike Florio',
      title:
        'Michael Irvin will pitch Deion Sanders as Cowboys coach - NBC Sports',
      description: 'He was his rival.',
      url: 'https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/michael-irvin-will-pitch-deion-sanders-as-cowboys-coach',
      urlToImage:
        'https://nbcsports.brightspotcdn.com/dims4/default/57093d6/2147483647/strip/true/crop/1514x852+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F20%2F08%2Ff7d865ae45faa9cab334615ac8c3%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F51969456',
      publishedAt: '2024-11-16T03:46:23Z',
      content:
        'He was his rival. He was his teammate. Now, Michael Irvin is a Deion Sanders supporter, when it comes to the team they played for together.\r\nOn Friday night, Irvin made a pitch for Sanders to become … [+856 chars]',
    },
    {
      source: {
        name: 'Buffalo Rumblings',
      },
      author: 'Rachel Auberger',
      title:
        'Buffalo Bills Week 11 rooting interests: It’s a big week for the top 5 AFC teams - Buffalo Rumblings',
      description:
        'Spots 2 - 5 could all change hands after this weekend, but let’s hope not!',
      url: 'https://www.buffalorumblings.com/2024/11/15/24296363/buffalo-bills-week-11-rooting-interests-its-a-big-week-for-the-top-5-afc-teams-kansas-city-chiefs',
      urlToImage:
        'https://cdn.vox-cdn.com/thumbor/cY2MFgla-2Qr05x2-qS_mq9BCxc=/0x644:4501x3001/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25733323/1433906773.jpg',
      publishedAt: '2024-11-15T22:40:48Z',
      content:
        'Its Chiefs Week, Bills Mafia! If you were to ask quarterback Josh Allen, hed tell you that this is the most important game on the Bills schedule but not because of the opponent, simply because its th… [+9048 chars]',
    },
    {
      source: {
        name: 'The Falcoholic',
      },
      author: 'Evan Birchfield',
      title:
        'Falcons vs Broncos Injury Report: Mike Hughes, seven others ruled OUT for Sunday - The Falcoholic',
      description: 'The Falcons will be without 8 players on Sunday.',
      url: 'https://www.thefalcoholic.com/2024/11/15/24297528/falcons-vs-broncos-injury-report-mike-hughes-seven-others-ruled-out-for-sunday-charlie-woerner',
      urlToImage:
        'https://cdn.vox-cdn.com/thumbor/2dUlJroXhsHWcQyuh2VQ2fMC0mg=/0x0:4810x2518/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25735583/2178147987.jpg',
      publishedAt: '2024-11-15T21:48:34Z',
      content:
        'Its finally Friday, as the Atlanta Falcons and Denver Broncos both held their final practices of the week. We have been monitoring the health of both teams throughout the week, and unfortunately, the… [+1759 chars]',
    },
    {
      source: {
        name: 'Deseret News',
      },
      author: 'Doug Robinson',
      title:
        'Even without its top two runners, BYU women win NCAA cross-country regional - Deseret News',
      description:
        'BYU’s men’s team, which also sat some runners out, also placed first',
      url: 'https://www.deseret.com/sports/2024/11/15/byu-runners-shine-at-ncaa-cross-country-regionals/',
      urlToImage:
        'https://www.deseret.com/resizer/v2/UVQB4VTGIFDGXB2UBZ3WLEN65M.jpg?focal=0%2C0&auth=66b8a2feaf42d0f6e4e2359551d2fc49cff12720cfe1acd5a5467d1c052376d0&width=1200&height=630',
      publishedAt: '2024-11-15T21:37:34Z',
      content:
        'How deep is BYUs No. 1-ranked womens cross-country team? The Cougars won the NCAA Mountain Region meet in Reno, Nevada, Friday without its top two runners.\r\nBYU finished with 47 points to place ahead… [+2219 chars]',
    },
    {
      source: {
        name: 'Sfstandard.com',
      },
      author: 'David Lombardi, Tim Kawakami',
      title:
        '49ers vs. Seahawks: The Standard’s 5 fast predictions - The San Francisco Standard',
      description:
        'If the 49ers are to truly deliver another signature November run, defending the home turf Sunday is a must.',
      url: 'https://sfstandard.com/2024/11/15/49ers-vs-seahawks-predictions/',
      urlToImage:
        'https://content.sfstandard.com/wp-content/uploads/2024/10/gettyimages-2177870635.jpg?resize=1200%2C630',
      publishedAt: '2024-11-15T17:02:03Z',
      content:
        'The 49ers notched a big road win over the Seattle Seahawks last month. Now, their divisional rematches begin. Over the back half of this regular season, the 49ers will see all three of their NFC West… [+2832 chars]',
    },
    {
      source: {
        name: 'Sports Illustrated',
      },
      author: 'Maren Angus-Coombs',
      title:
        "Padres 'More Likely' to Sign Roki Sasaki Than Dodgers, Says MLB Insider - Sports Illustrated",
      description:
        'MLB insider predicts the Padres are "more likely" to sign Roki Sasaki than the Dodgers, with several teams in the mix for the young star.',
      url: 'https://www.si.com/mlb/padres/san-diego-padres-news/padres-more-likely-to-sign-roki-sasaki-than-dodgers-says-mlb-insider-01jcpff309f0',
      urlToImage:
        'https://images2.minutemediacdn.com/image/upload/c_crop,w_4353,h_2448,x_0,y_0/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/inside_the_padres/01jcpfhk91yphchtzpyx.jpg',
      publishedAt: '2024-11-15T16:59:00Z',
      content:
        "The race to land Roki Sasaki is heating up, and like any top-tier free agent, there's plenty of speculation about where hell sign once posted.\r\nHowever, the 23-year-old right-hander is unlike most hi… [+2053 chars]",
    },
    {
      source: {
        id: 'bleacher-report',
        name: 'Bleacher Report',
      },
      author: 'Maurice Moton',
      title:
        'Fantasy Football Week 11: Biggest Sleepers at Every Position - Bleacher Report',
      description:
        "As fantasy football managers with borderline playoff teams prepare for NFL Week 11, they're either swinging for the fences with trade offers or digging…",
      url: 'https://bleacherreport.com/articles/10143350-fantasy-football-week-11-biggest-sleepers-at-every-position',
      urlToImage:
        'https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1731548817/lvgjmurqeaosrikqvgja.jpg',
      publishedAt: '2024-11-15T12:03:32Z',
      content:
        "Justin Casterline/Getty Images\r\nDraftKings DFS Price: $3,500\r\nEvery week, managers should start the tight end who faces the Kansas City Chiefs. Kansas City's defense is giving up the second-most fant… [+1317 chars]",
    },
    {
      source: {
        id: 'espn',
        name: 'ESPN',
      },
      author: 'Bill Connelly',
      title:
        'Huge stakes with Dawgs-Vols! Top 4 teams hit the road! Connelly breaks it down - ESPN',
      description:
        'Another SEC showdown, possible trap games at the top and jostling in the Big 12 and ACC are on tap for Week 12.',
      url: 'https://www.espn.com/college-football/insider/story/_/id/42387714/college-football-week-12-preview-huge-stakes-tennessee-georgia',
      urlToImage:
        'https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1114%2Fr1414803_1296x729_16%2D9.jpg',
      publishedAt: '2024-11-15T12:00:00Z',
      content:
        "By Week 12, it's all about survival. We think we know who's making the College Football Playoff, and we think we know the pecking order in each conference race, and if you're one of those teams invol… [+1821 chars]",
    },
  ],
};

type NewsCategory =
  | 'business'
  | 'entertainment'
  | 'general'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology';
export interface GetHeadlineParams {
  category?: NewsCategory;
  sources?: string;
  q?: string;
  pageSize?: number;
  page?: number;
}

export const getHeadlines = async (params?: GetHeadlineParams) => {
  return axios
    .get<HeadlinesResponse>('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'us',
        apiKey: import.meta.env.VITE_NEWS_API_KEY || '',
        ...(params && params),
      },
    })
    .then((response) => response.data)
    .catch(() => DefaultHeadlinesResponse);
};
