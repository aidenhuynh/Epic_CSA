---
toc: true
comments: true
layout: post
title: Debugging Event
description: Aiden Huynh, P1
type: review
courses: {csa: {week: 25}}
---
# How to Run with Debugger

## Frontend
1. Run locally using bundler, use whatever port
``bundle exec jekyll serve -P 4001``

2. Open up post/markdown page locally
![Screen Shot 2024-03-05 at 9 18 41 AM](https://github.com/aidenhuynh/Epic_CSA/assets/112529809/bee24be5-9fc4-4dc1-afd2-a1508b440175)

3. Open inspect and navigate to js code
![Screen Shot 2024-03-05 at 9 19 59 AM](https://github.com/aidenhuynh/Epic_CSA/assets/112529809/924bee8b-5c97-4cc1-b769-fa2f09ea125c)

4. Add breakpoints by clicking on the line numbers on the left.
![Screen Shot 2024-03-05 at 9 19 45 AM](https://github.com/aidenhuynh/Epic_CSA/assets/112529809/5726a9b6-714c-4ae7-b92f-25b52475da21)

5. When running code, press the arrow to step through each breakpoint. In our case, the code will be run when attempting to login.
![Screen Shot 2024-03-05 at 10 13 50 AM](https://github.com/aidenhuynh/Epic_CSA/assets/112529809/1022cfa3-4e0c-437d-b761-312b722088b4)

## Backend
1. Navigate to Main.java
2. In VSCode, press on the arrow next to the run button and click "Debug Java"
![Screen Shot 2024-03-05 at 9 43 22 AM](https://github.com/aidenhuynh/Epic_CSA/assets/112529809/1a3fbe54-4788-4581-81b2-0a773ba62979)

## Demonstration on teacher_portfolio
First, we run our frontend locally with ``bundle exec jekyll serve -P 4001`` and navigate to http://localhost:4001/teacher_portfolio/java/login
(You can choose any port, but preferably not 4000 to see a CORS error later)

Then, inspect element and find the "login" js code in Sources

Setting three breakpoints on the .fetch, .then, and .catch allows us to see possible points of error from our frontend.
![Screen Shot 2024-03-05 at 9 19 45 AM](https://github.com/aidenhuynh/Epic_CSA/assets/112529809/5726a9b6-714c-4ae7-b92f-25b52475da21)

The following errors occur in different cases when trying to sign in:
1. ``ERR_CONNECTION_REFUSED`` occurs from not running the backend, and is fixed by doing so
![Screen Shot 2024-03-05 at 9 23 41 AM](https://github.com/aidenhuynh/Epic_CSA/assets/112529809/c70f578c-9c02-41a7-a8b3-8b05924f8c7a)

2. This CORS error occurs from not allowing the correct origins on ``MvcConfig.java``
![Screen Shot 2024-03-05 at 9 24 04 AM](https://github.com/aidenhuynh/Epic_CSA/assets/112529809/92f3094e-a7b2-4cd5-abdb-e922e466f0be)

This error is fixed by making sure the origin is allowed, and in this case, we had to change the port to match our localhost.
```java
@Override
    public void addCorsMappings(@NonNull CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins("https://nighthawkcoders.github.io", "http://localhost:4001"); // Changed port to 4001 from 4000
    }
```

3. The 401 error occurs from an authorization issue, which in this case was from incorrect login credentials
![Screen Shot 2024-03-05 at 9 26 41 AM](https://github.com/aidenhuynh/Epic_CSA/assets/112529809/9bceb67f-f6db-4441-aedc-21bcea58ac00)

This is fixed by making sure to use the correct login information from Person.java, as we testing with a random password, instead of the actual password initialized within the file.

## Successful Run
The expected outcome of properly avoiding all of these errors is being redirected to the data page (http://localhost:4001/teacher_portfolio/java/data). Yay!

![Screen Shot 2024-03-05 at 9 27 48 AM](https://github.com/aidenhuynh/Epic_CSA/assets/112529809/76dd76a1-a9ec-42d4-bd18-61d01f16c4d7)

## Demonstration on Team Project

I will be running our website's dashboard page for the frontend, and showing the backend interaction for fetching user information based on the inputted UID.

## Screenshot of breakpoints
I have set breakpoints on the main .fetch, two of the .then's, and a .catch

![Screen Shot 2024-03-05 at 10 34 16 AM](https://github.com/aidenhuynh/Epic_CSA/assets/112529809/225c6215-3f75-4fdd-8664-400da0e57247)

## Catch output for funsies
I forgot to change the allowed origins so I got a CORS error when stepping through to the following .catch

```js
.catch(error => {
            console.error('There was a problem with the fetch operation:', error);
});
```

![Screen Shot 2024-03-05 at 1 51 50 PM](https://github.com/aidenhuynh/Epic_CSA/assets/112529809/6eb465f5-b624-4398-abf4-ceda61927289)

After editing the MvcConfig.java and SecurityConfig.java files to allow the port I was using, the issue was fixed.

## Screenshot of data output
Data is returned from the fetch in the following code block:
```js
.then(data => {
            console.log(JSON.stringify(data)); // Log the data
            populateAssignmentContainer(data); // Show the data on the frontend
})
```
Console output
![Screen Shot 2024-03-05 at 1 56 13 PM](https://github.com/aidenhuynh/Epic_CSA/assets/112529809/070df6e2-a7b5-49b6-841c-f643ae2d8166)

Frontend update with data
![Screen Shot 2024-03-05 at 1 57 09 PM](https://github.com/aidenhuynh/Epic_CSA/assets/112529809/f91c96ee-d737-4fae-9a0f-22d9078eb584)
