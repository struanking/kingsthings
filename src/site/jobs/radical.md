---
title: Radical Company
date: "2016-03-05"
dateEnd: "2016-05-01"
skills: ["React", "Redux", "Enzyme"]
permalink: false
---

Two functional prototypes (with extensive UX) for Lloyds Bank. Part of a small team working closely with the client, delivery lead and UX to produce and present weekly demos.

The principle architecture was React with Redux so I extended my experience to include; Reselect, higher order components (where useful) and testing with Enzyme.

These applications required significant data modelling to normalise the structure the Redux store and involved complex maths to calculate the results. Users enter income and expenditure allowing a projected cashflow to be presented graphically, allowing shortfalls and surpluses to be identified during the year.

Included features are:

- Items can be marked as monthly, quarterly or one-off to reduce repetitive data entry.
- Sliders to quickly and easily flex results.
- The graph instantly updates to show the change in data entered.
- Add scenarios to compare agains a "baseline" projection.
- Scenarios inherit data from the "baseline" as a quick starting point but immutability is respected so that changes do not affect other scenarios.
- CSS transitions provide a smooth experience when navigating between scenarios.
- Export data to an email.
- Send data to the second application.
- Memoization to optimise expensive re-calculations.

The second application helps a user identify surplus cash for investing at specific times of the year. It imports a dataset of the user's cash situation and a live list of available investment fund accounts. Qualifying accounts are calculated throughout year and presented on-screen. For example there may be minimum invest amounts and durations.

Website isot publicly available but I can demo a locally running version.
