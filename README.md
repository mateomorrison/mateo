## About

**mateo** is a smart life concept combining the best of home automation and life performance.

### Triggers
- Start or stop timers with Toggl (@/pages/api/toggl/[...]). Need API credentials, see Toggl documentation.
- Turn devices (light bulbs, led strips and outlets) on or off using Google Assistant (@/pages/api/hey-google/[...]) (Need Alexa?Open a PR!)

### Devices

To trigger these API endpoints and front-end rendering, I use **NFC Tags** around my **house, car and office** to call certain APIs  (@/pages/api/tags/[...]). All they  do is reduce the time between typing the URL and performing the API call. Seconds that matter to me (a lot).

<br>

( - or - ) just use iOS Shortcuts to open the URLs depending on certain triggers (daytime, Apple Health and beyond...) 

## License

This is an Unlicensed License project. As this is v0.1, use 'AS IS' and as you please. I will continue the development of this project further for personal reasons and will launch a SaaS under mjrco. See more https://mjrco.co/mateo

## Tech stack

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

```bash
npm run dev
# or
yarn dev
```
- Vercel to have a publicly-accessible API. Soon will add authentication, cookies and bla bla bla.
- TypeScript support added. Will (most-likely) soon rewrite. As of now, we're stuck  with JS (which is better anyway)
- MongoDB to store information (or whatever works)
- Python and R to read the data real-time and use Machine Learning to recommend things based on input (soon! lol)

## Questions?

Ask StackOverFlow or Reddit.
