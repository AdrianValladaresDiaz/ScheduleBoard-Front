# Schedule Board

This is an attempt at creating a tool to manage kanban methodology (think Trello but a tiny bit more modes).

# Backend

# Setup

## Environment variables:

NEXT_PUBLIC_BACKEND= URL of your backend. e.g. https://myProjectName.onrender.com/ (or wherever you host your backend)
NEXT_PUBLIC_FRONTEND= URL of your frontend. e.g. http://localhost:3000/. Used by some navigation calls and On-demand ISR.
NEXT_PUBLIC_ODISR= Secret key used to trigger On-demand ISR. Any request to pages/api/revalidate should be sent with this key or fail.
NEXT_PUBLIC_AUTH_COOKIE_NAME= User authentication is stored in a cookie with this name. Any name will work
DEV_JWT_TOKEN: Used for development only. This should be a valid JWT, properly signed, and verifiable by your backend.

Any page requiring authentication will look for a cookie with the name defined by NEXT_PUBLIC_AUTH_COOKIE_NAME. If no such cookie exists, then DEV_JWT_TOKEN is used instead.
For obvious reasons DEV_JWT_TOKEN should **NOT** be set in your hosting service, only in your dev machine.

## Deployment:

Obviously there are many ways and places to deploy a project. These lines below apply only to deployments on Vercel:

This project uses msw to mock requests to the backend during testing. Unfortunatelly the last version of msw requires a node.js version not available in vercel yet. There are two solutions for this:

- Setting msw to an older version ( I believe 0.38 should work but this has not been verified)
- Setting the build command to "vercel-deployment" (as seen in package.json)

# Design / Ramblings / WiP:

The following lines may not be informative at all to anyone. These are left here as a way to organize my thoughts in hopes this section may some day become a decent explanation of how the project is structured.

# Auth

Only users can see projects. Each user can be the projects they are owners of, or projects shared with them by other users.

# Middleware?

We will check all requests for access

# Pages

## Home (SSR)

Each user has a private home page, that holds a list with all their projects.

## Project (SSG/ISR)

Dynamic routing to each of the user's projects. These use static site generation since all the required data is stored in our backend database. These pages will be re-rendered on each database rewrite triggered from the frontend (on-demand IRS) or very sparingly otherwise (each day? TBD).

Only it's owner can modify a project, but projects can be shared with a team as read-only.

# Thesaurus:

- Project: A kanban board, a set of Task lists. Has a due date, an owner (who can modify the board).

- Task List:
- Task:
