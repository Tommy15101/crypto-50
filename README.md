# CRYPTO 50

#### Video Demo: https://youtu.be/JUEnGi3OtNQ

#### Description:

A cryptocurrencey / NFT information dashboard sourced from coingecko. This is to give people a quick glance at the top 30 crypto currencies, as well as the listed NFT projects accross multiple blockchains. I have made it possible for the user to link directly to each NFT projects contract address on its specific blockchain scanner.

I initially considered bootstrapping the whole project to not use too much energy on styling, but I kind of get a kick out of designing and styling manually. I made a free logo online and opted in for friendly orange colors utilizing styled components.

I opted against making a user login / authentication / registration and focused more on API and data handling as that is more what I want to get into in the future. (Front End / Smart Contracts).

It took me some time to figure out the useEffect react hooks with the API calls. Initially it kept rendering twice and taking multiple API calls to render the data. But then I learnt a bit more about state and the queue in React hooks. So useEffect saved the day.

I used react-apexcharts for the chart data, which looked a little bit buggy in the beginning. Once I cleaned up my code and fixed any terminal errors and warnings (basic stuff), it seemed to work much better. So I couldn't understand why.

The NFT data that I used from coin gecko is still in beta mode, which is fine and it is working well. But it looks like many of the NFT projects are rug pulls and older projects. This doesn't take away form the functionality of my project, but it would have been great to source all live projects.
I initially wanted to make the NFT section a 'breaking blockchain news' section, but I could not find a reliable free API for cryptocurrency news. So then the NFT section was born.

I used ReactJS for this projects as well as styled-components / a little bootstrap for the Navbar.
I also used react-apexcharts for the charting and moment.js to format dates.
I inclued dotenv to keep my API keys secure.

I may expand on this project in the future or do a better build eventually.

I've enjoyed making this project so much and it is so satisfying to finally start standing on my own 2 feet after 2 longs years of self learning.

#### Live Site: https://effulgent-snickerdoodle-eb699d.netlify.app/

#### Github: https://github.com/Tommy15101

#### My Portfolio: https://tommy-atkins.on.fleek.co/
