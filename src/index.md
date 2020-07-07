---
title: Kingsthings
layout: layouts/base.njk
---

<header class="flow indent">
  <h1>
    Web developer
    <code class="indent">
      HTML. CSS. JavaScript. Accessibility.
    </code>
  </h1>
  <p class="measure-short">
    I'm a front-end developer with a passion for HTML and accessibility. I
    have 15+ years of experience but still looking for opportunities to
    learn and improve.
  </p>
</header>
<div class="full-bleed hero">
  <div class="wrapper">
    <picture>
      <source type="image/webp" srcset="/images/wp-glasses.webp" />
      <img src="/images/wp-glasses.png" alt="" />
    </picture>
  </div>
</div>
<article class="full-bleed promo">
  <div class="wrapper flow">
    <p>
      I have over five years React experience but happy to work with other
      frameworks. Also happy to muck in on the server-side and work
      across the stack.
    </p>
    <p>Key strengths:</p>
    <ul>
      <li>
        Comfortable working independently, pair programming and mentoring
      </li>
      <li>
        Collaborating with other developers and designers to improve
        solutions
      </li>
      <li>Delivery focussed</li>
      <li>Strong leadership, communication and organisational skills</li>
      <li>Experienced with Agile practices and methodologies</li>
    </ul>
  </div>
</article>
<div class="full-bleed promo-gradient">
  <div class="wrapper">
    <div class="skills-interests">
      <article class="flow">
        <h2>Skills</h2>
        <dl class="inline-list">
          <dt>Development</dt>
          <dd>JavaScript,</dd>
          <dd>TypeScript,</dd>
          <dd>React,</dd>
          <dd>CSS,</dd>
          <dd>HTML5,</dd>
          <dd>Storybook,</dd>
          <dd>Accessibility,</dd>
          <dt>Testing</dt>
          <dd>Testing Library,</dd>
          <dd>Jest,</dd>
          <dd>Puppeteer,</dd>
          <dd>Cypress,</dd>
          <dd>Enzyme,</dd>
          <dd>Browserstack,</dd>
          <dd>Tape,</dd>
          <dd>Mocha,</dd>
          <dd>Chai,</dd>
          <dt>Back-end / Server side</dt>
          <dd>AWS,</dd>
          <dd>Twilio,</dd>
          <dd>CircleCI,</dd>
          <dd>Netlify,</dd>
          <dd>Contentful,</dd>
          <dd>MongoDB,</dd>
          <dd>DynamoDB,</dd>
          <dd>MySQL,</dd>
          <dd>Postgress,</dd>
          <dd>MS SQL,</dd>
          <dt>UI / UX</dt>
          <dd>Sketch,</dd>
          <dd>Zeplin,</dd>
          <dd>Figma,</dd>
          <dt>Agile</dt>
          <dd>Kanban,</dd>
          <dd>Scrum,</dd>
          <dd>User stories,</dd>
          <dt>Project management</dt>
          <dd>Trello,</dd>
          <dd>Jira,</dd>
          <dd>Clubhouse,</dd>
        </dl>
      </article>
      <article class="flow font-size--1">
        <h2>Interests</h2>
        <p>
          In addition to day-to-day development I am interested in: Business
          Analysis, Accessibility, Functional Programming (Crocks, Rambda),
          TypeScript, GraphQL, Preact, Svelte, Eleventy, server-side
          rendering, Linux.
        </p>
        <p>
          I am currently doing a course using Next.js, GraphQL and Prisma.
        </p>
        <p>
          With respect to accessibility I have been attending an <a href="https://www.meetup.com/London-Accessibility-Meetup" target="_blank" rel="noopener">Accessibility Meetup</a> whenever possible.
        </p>
        <p>
          I also enjoy reading books such as; Grokking Algorithms (Aditya
          Bhargava), Functional Light (Kyle Simpson), Code (Charles
          Petzold).
        </p>
      </article>
    </div>
  </div>
</div>
<div class="professional-experience">
  <h2>Professional experience</h2>
  <ol class="grid-list flow">
  {%- for job in collections.job | reverse -%}
    <li class="grid-list-item">
      <div class="card">
        <h3 class="card--title">{{ job.data.title }}</h3>
        <p class="card--date">
          <time dateTime="{{ job.date }}">{{ job.data.date | dateDisplay}}</time>
          -
          <time dateTime="{{ job.data.dateEnd }}">{{ job.data.dateEnd  | dateDisplay}}</time>
        </p>
        <div class="card--description measure-short flow">{{ job.templateContent | safe }}</div>
        <div class="card--skills">
        {%- for skill in job.data.skills -%}
        <span class="tag">{{ skill }}</span>
        {%- endfor -%}
        </div>
      </div>
    </li>
  {%- endfor -%}</ol>
</div>
