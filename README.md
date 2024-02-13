# Fyle Frontend Challenge

## Who is this for?

This challenge is meant for candidates who wish to intern at Fyle and work with our engineering team. The candidate should be able to commit to at least 6 months of dedicated time for internship.

## Why work at Fyle?

Fyle is a fast-growing Expense Management SaaS product. We are ~40 strong engineering team at the moment. 

We are an extremely transparent organization. Check out our [careers page](https://careers.fylehq.com) that will give you a glimpse of what it is like to work at Fyle. Also, check out our Glassdoor reviews [here](https://www.glassdoor.co.in/Reviews/Fyle-Reviews-E1723235.htm). You can read stories from our teammates [here](https://stories.fylehq.com).

## Challenge outline

This challenge involves implementing application using github api. 

The services that you need to use are already implemented - check out ApiService.

You can see details of this challenge [here](https://fyleuniverse.notion.site/fyleuniverse/Fyle-Frontend-development-challenge-cb5085e5e0864e769e7b98c694400aaa)

__Note__ - This challenge is in angular. We work on angular frameworks & after you join we expect the same from you. Hence it is required to complete this assignement in angular itself.

## What happens next?

You will hear back within 48 hours from us via email.

## Installation

1. Fork this repository to your github account.
2. Clone the forked repository and proceed with steps mentioned below.

### Install requirements
* Install angular cli [Ref](https://angular.io/cli)
* `npm install` in this repository

## Unit Test: Api Service
The Api Service is responsible for fetching public repositories of a given GitHub username.

## Overview
This unit test suite ensures that the Api service behaves correctly under different scenarios, including successful data fetching and error handling.

## Test Cases

Fetch Repositories Test -
Test Description: Tests the getRepositories method to ensure that it correctly fetches repositories for a given username.

Test Method:

It sets up the test environment by configuring TestBed with the necessary imports and providers.
It creates a mock response for repositories and sets up an HTTP request to mock the GitHub API response.
It calls the getRepositories method with a mock username and verifies that the returned repositories match the mock response.


Error Handling Test - 
Test Description: Tests how the service handles errors when fetching repositories.

Test Method:

It sets up the test environment similar to the Fetch Repositories Test.
It simulates an error response from the GitHub API by causing the HTTP request to error out.
It expects that the service correctly handles the error and emits an error event.
How to Run
Run the unit tests using your preferred Angular testing framework. For example:
ng test

## Adjustments
Adjust the test cases as needed based on changes to the GitHub service implementation or additional requirements.


## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Further help

Visit the [Angular Documentation](https://angular.io/guide/styleguide) to learn more.
Styling is to be strictly done with [Tailwind](https://tailwindcss.com/docs/installation).
