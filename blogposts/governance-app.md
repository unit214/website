---
title: 'Building a Trustless Decentralised Governance Application 🌐'
date: '2024-07-09T10:41:00'
tags: ['Blockchain', 'Node.js', 'Decentralized', 'Aeternity', 'Vue.js', 'web3']
author: 'Keno Dreßel'
previewText: 'Explore the development, features, and impact of the aeternity Governance App.'
previewImage: '/blogposts/preview/governance-app.png'
---

**TLDR**: We made a decentralized app which you can try it out at [governance.aeternity.com](https://governance.aeternity.com)!

## 🏛️ Introduction and Background

aeternity, a platform committed to creating a more equitable online ecosystem through scalable, open-source, and
cryptographic protocols, introduced the Governance App to embody its vision for participatory digital governance within
the Web3 space. This case study explores the app's development, features, challenges, and its broader implications for
blockchain governance.

The Governance App was envisioned as a tool to empower the aeternity community, enabling them to have a say in the
platform's direction through a transparent and verifiable polling mechanism. The Unit 214 Team was commissioned to
implement this vision. The development process was focused on their commitment to open-source principles, with actively
seeking and incorporating feedback from testing phases to refine and improve the app. Key challenges such as user
accessibility and poll result verification were addressed through iterative testing and community feedback.

## ⚙️ Features and Functionality

At its core, the Governance App allows users to create and participate in polls, facilitating a democratic
decision-making process within the aeternity ecosystem. It emphasises ease of use, with a user-friendly interface that
makes participation accessible to all members of the community. To ensure transparency and trust, the app features
robust verification mechanisms for poll results, and ongoing optimizations have significantly improved performance and
user experience.

## 🛠️ Challenges and Solutions

The development of the aeternity Governance App had three core technical challenges, each addressed through innovative
use of technology and programming frameworks:

### 🔄 Liquid Democracy and Real-time Aggregation

Implementing a liquid democracy system, with its potential for infinite delegations, required a robust and fast solution
for real-time vote tallying. We leveraged smart contracts on the blockchain to manage the complex logic of delegations
and secure voting. The Node.js backend, developed with efficiency in mind, ensures accurate, transparent, and immediate
aggregation of polling results, embodying the democratic ideals of the app.

### 🌍 Application Optimization for Global Accessibility

To enable the Governance App's responsiveness worldwide, especially on slower networks, we focused on minimising the
application's size. Utilising Vue.js for the frontend allows for a lightweight, yet dynamic user interface. On the
backend, Node.js, combined with efficient database management through PostgreSQL and caching solutions via Redis,
significantly enhances the app's delivery speeds and overall performance.

### 💪 Resilience and Independence

Building an app capable of functioning independently of its backend was a priority, ensuring usability even when the
backend was offline or not trustworthy. Smart contracts play a pivotal role in maintaining functionality, allowing users
to interact with the blockchain directly and securely for critical operations like voting and delegations. Additionally,
the app is also validating the smart contracts code to ensure their integrity.

These challenges were met with a blend of modern technologies and innovative approaches, ensuring the Governance App was
not only a testament to aeternity's technical possibilities but also a forward-looking solution for decentralised
governance.

## 📈 Results and Impact

The Governance App has seen a positive reception from the aeternity community, with an increasing number of polls and
active participation reflecting its utility and impact. The app has been built from scratch in 4 months and has been
running in production on low maintenance and with no significant incidents since 2019.

## 🎯 Conclusion

The aeternity Governance App's development signifies a remarkable achievement in blockchain-based digital governance,
showcasing our team's ability to navigate complex technical challenges with innovative and effective solutions. We have
successfully implemented a system that supports liquid democracy and ensures global accessibility and resilience. This
work has not only demonstrated our technical capabilities but has also had an impact on the aeternity community,
fostering a more democratic and participatory decision-making process.

<p className="screenshots">
  <img src="/blogposts/governance-app/img.png"  />
  <img src="/blogposts/governance-app/img_1.png" /> 
  <img src="/blogposts/governance-app/img_2.png" />
</p>
<p className="center">
    These are some screenshots from the application, showing the user interface of the poll overview, a poll detail view and
    a user account.
</p>
