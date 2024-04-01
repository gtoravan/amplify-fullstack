# DisruptAI.tech - Frontend

DisruptAI is revolutionizing advertising with our next-generation platform tailored for ad campaign managers, influencers, and dropshippers. Our specialty lies in crafting hyper-targeted advertisements using cutting-edge Generative AI technology.

### Made with love in React JS

#### URL - https://dev.d3n6se89h1gpq0.amplifyapp.com/

#### Special thanks to https://github.com/George-iam

### Key Features:

- **Targeted Advertisement Generation:** Create advertisements tailored to your target demographic and purchase impressions seamlessly. Our AI algorithms analyze user behavior and preferences to ensure your ads reach the right audience.

- **Full AutoPilot:** Experience automated campaigns using sample product images, with dynamic changes to keep your campaigns fresh. Our platform continuously optimizes your ads based on performance data, ensuring maximum ROI.

- **Text Generation with Ads via OpenAI:** Utilize advanced AI to generate compelling ad copy. Our platform can generate engaging headlines, taglines, and body text that resonate with your audience.

- **Voice Over Integration via OpenAI:** Add professional voice-overs to your ads with ease. Our platform can generate natural-sounding voice-overs in multiple languages and accents, enhancing the impact of your ads.

- **Future Video Generation with Sora:** Soon, you'll be able to create video ads effortlessly. Our integration with Sora will allow you to generate high-quality video ads using AI, saving you time and resources.

### Plan of Action:

- [X] Create git repo
- [X] Establish a connection to Midjourney programmatically, as they don't provide APIs. Explore alternative methods for integrating with Midjourney's platform to access their data securely.
  - Able to listen to midjourney, send prompts and download images.
- Setup unofficial using this github repository George-iam/Midjourney_api
- [X] Make connection to OpenAI 
    - [X] Leverage ChatGPT to craft prompts to feed into midjourney based on user input
- [X] Create a spring API in Intellij
  - [X] Create a REST API
  - [X] Have it listened to a port
  - [X] Receive a POST call
  - [X] Configure a workflow
  - Design basic database
  - Retrieve user pictures for generating ad responses from DynamoDB
  - [X] Call openAI
  - [X] Call Midjourney
  - [X] Return image response to user
  - [ ] Generate images based on sample image
- [ ] Design a Website
  - [X] Get Website hosted on Amplify
  - [X] Purchase Domain
  - [X] Setup Mailbox on Amplify for myself (gaurav@disruptai.tech)
  - [X] Create Landing page
  - [] Create About page
  - [ ] Contact us Page
  - [ ] Setup team@disruptai.tech mailbox
- [ ] Competitor Scouting
  - [ ] Lookup UI for inspiration for competing companies
- [ ] Develop a sample UI
    - [ ] Incorporate Midjourney UI elements
    - [ ] Enable users to submit sample pictures, stored in a DynamoDB
    - [X] Consider hosting on AWS Amplify to utilize local endpoints and minimize costs
    - [ ] Test Connections
- [ ] Implement functionality to purchase impressions on Google Adx/Pubmatic. Explore the APIs provided by Google Adx/Pubmatic to integrate impression purchasing into your platform.
- [ ] Investigate if SSP platforms provide demographic data for enhanced targeting capabilities. If not, consider other data sources or methods for gathering demographic information.
- [ ] Allow ad campaign managers to submit requests with demographic targeting, budget, and sample product pictures. Create an intuitive interface for campaign managers to easily create and manage their campaigns.
- [ ] Explore options for running automated campaigns. Research automation tools and algorithms that can optimize ad campaigns based on performance data.

*Work in Progress*


### Currently in Research Stage. This is for profit. If I make a company, I will offer employment to open source contributors. MIT License is the only one. For personal use, you can use this. Ideally once this is on AWS, I will change the usage.