<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Audio-Core <br> 100 DaysOfGatsby Challenges
</h1>

## 🚀 Getting Started

1.  **How this Gatsby site was initially created**

    Used the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd audio-c0re/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

### **Project Requirements**

<br>
<br>

#### **Briefing 1: Create a Proof-of-Concept**

> Welcome, “Dev”!
>
> Today is your first day at AudioC0RE, and I’m your manager, Senior Dev!
>
> As you know, AudioC0RE is the leading headphones sharing app in the world! (And by “leading” I mean we’re the only one. And by “world”, I mean 3 cities in California.)
>
> Our users love us because with AudioC0RE you can pick up a pair of premium AudioC0RE headphones on a city street, pay for a rental through our app, then drop them back on the ground when you’re finished!
>
> So far we just have a mobile app, and we need to launch our first website. It’s a high priority, high visibility, very important project that will skyrocket our growth. But it’s “website development”, which I find boring, so I’m assigning it to you!
>
> You’ll see the tickets tagged to you in our project tracker and ranked by due date. In our tracker it’s pretty simple – all of the dates default to ASAP, and there’s no other option. So prioritize your time properly!
>
> ### For the website project we’ve decided to use Gatsby.
>
> Why? Well, honestly I just like the name and logo. I ordered a Gatsby swag drop for my whole family and it’s all we wear! My spouse loves the [JAMstack jammies](https://store.gatsbyjs.org/product/jamstack-jammies)!
>
> But our CEO wanted a better justification for using Gatsby, so the engineering team did some research:
>
> We considered a traditional CMS because of how rapidly we can build a site with it. But we expect a lot of traffic spikes, and unfortunately, it’s a full-time job just keeping a monolithic CMS fast and secure. So scratch the all-in-one CMS!
>
> Then we considered React frameworks. Since our mobile app is already built with React Native, it’s a library we’re familiar with. We weighed server-side rendering vs static site generation, and we were worried about long build times. But then we learned that Gatsby Cloud has incremental builds, with [sub-10 seconds builds](https://willit.build/)! So that satisfied our concern.
>
> We also discovered that Gatsby has [over 2600 plugins](https://www.gatsbyjs.com/plugins)! Dev, our website is going to start simple, but as soon as we get a Marketing team and a Humans Resources division, believe me – we’re going to have a lot of use cases to support. So instead of coding everything from scratch, with Gatsby we can just install a plugin that gets the job done, while we take credit for the results! That’s free career advice for you, Dev!
>
> ### Dev, here’s your challenge for your first sprint:
>
> - Build a proof of concept (POC) Gatsby site to test their routing API, builds service, hosting, and Contentful integration
> - Use Gatsby’s Contentful plugin and connect to a test Contentful site
> - Create the following pages: 
>   - home 
>   - about
>   - and a collection of pages for every city we’re in.
> - Build it on Gatsby Cloud and use their preview URL
> - Don’t worry about content or styling – this is only a POC. You can display the title of the page on a white background. That is enough for now
>
> Dev, your resume says you’re a little familiar with React, but not with GraphQL. It also looks like you’ve never used a CI/CD tool before. 
>
> That’s fine. Gatsby has great documentation and you can skill up as you go.
>
> ## Here are a few resources to get you started:
>
> - Create a free 
>
>   Contentful
>
>    account
>
>   - Retrieve your [Contentful API keys](https://www.contentful.com/developers/docs/references/authentication/) from Settings → API Keys
>   - The Gatsby wizard will ask you for these keys before scaffolding your site
>
> - Run 
>
>   npm init gatsby
>
>    in your terminal to quick start a new site
>
>   - Choose Contentful as your CMS and add your API keys
>   - Name your site and folder anything you want
>   - Choose “responsive images”, “sitemap”, and “metatags”
>   - Ignore the other options for now. You will use those features in a later sprint!
>   - Now follow the rest of the “quick start” tutorial I linked to above
>
> - After the tutorial, create pages using [Gatsby’s File System Route API](https://www.gatsbyjs.com/docs/reference/routing/creating-routes/) (**/home**, **/about**, and three cities under a **/location** route)
>
> - [Build and deploy](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/) the site on Gatsby Cloud. And you’re done!
>
> ## Dev, if you have a question..
>
> …don’t bother anyone on the team with it. We’re all 10x engineers here, and if we help you we may end up with a blank hole in our GitHub commit graph. 
>
> So ask the [Gatsby community](https://github.com/gatsbyjs/gatsby/discussions/categories/show-tell). There are thousands of friendly developers in the community, and you’ll find many people willing to help you!
>
> ### Again, welcome to AudioC0RE, Dev!
>
> Now get working on that Gatsby Proof-of-Concept – ASAP.

Register for [#100DaysOfGatsby prompts](https://www.gatsbyjs.com/blog/100days/) so you never miss a **BRIEFING**, **HELP**, or **SOLUTION** week!<br>
<br>
<br>


#### **Briefing 2: Launch the Website**

> Great work on delivering the proof-of-concept with Gatsby so fast, Dev!
>
> (I would have given you feedback sooner, but I didn’t see the GitHub notification when you tagged me. I also missed your message on Slack and your email and your text. So thank you for your DM on Twitter – it’s the only inbox I pay attention to!)
>
> For this next sprint we need to launch the AudioC0re website live.
>
> As you know, AudioC0re puts users first in every decision we make. And the website is no exception. However, because user experience and accessibility interviews are so slow and expensive, we’ve exchanged our human decision making for automated [Lighthouse scores](https://www.gatsbyjs.com/docs/how-to/performance/audit-with-lighthouse/).
>
> Dev, I want the website you develop to have Lighthouse scores in the 90s and above for Performance, SEO, Accessibility, Best Practices, and PWA! Plus, if we get high scores with Lighthouse, maybe a DevRel from Google will tweet about us!
>
> ## Dev, here are more details on your requirements:
>
> - Use the [Chakra UI component library](https://www.gatsbyjs.com/docs/how-to/styling/other-css-frameworks/#chakra-ui) as the basis for the site design
> - Create a “contact” page, and [add a form using Formium](https://formium.io/docs/react/frameworks/gatsby).
> - [Choose a CDN](https://www.gatsbyjs.com/docs/deploying-and-hosting/) to deploy the site to, and continue to measure Lighthouse scores as you add features.
> - Add an image of headphones for the homepage, and a skyline image for each city page. Use Gatsby’s new gatsby-plugin-image project to optimize the images. [Here’s the step-by-step guide](https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image).
> - Replace React with Preact [using this plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-preact/).
> - Add [Progressive Web App capabilities](https://www.gatsbyjs.com/docs/progressive-web-app) to the site, including making the site work offline.
> - Follow Gatsby’s tutorial for [optimizing the site for SEO](https://www.gatsbyjs.com/docs/add-seo-component).
>
> You have 3 weeks in this sprint to complete your tasks! Good luck, Dev!

[Learn more about #100DaysOfGatsby](https://www.gatsbyjs.com/blog/100days/) and subscribe to the email list for alerts on new challenges!