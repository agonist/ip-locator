# IP address tracker solution

This is a solution for the Front-end Engineer Job application at Arkantum Labs.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![IP Address Tracker](./screenshot.jpg)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- NextJS
- TailwindCSS
- Typescript

### Showcase


### Potential improvements

- Search Errors handling. Currently its an extremly simple error handling that display a red border. A more appropriate form validation should be used. We could use Zod and have proper validation on the client and backend.
- The `/api/location` endpoint is public. It should at least be domain restricted to avoid ipify api credit usage.
- We could server side render the first load with the user IP to avoid loading.
- Instead of an endpoint we could use NextJS server action to execute server code without the need of exposing a public endpoint.
- Tooltip for text values that are truncated

