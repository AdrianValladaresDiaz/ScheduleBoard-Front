# Schedule Board

This is an attempt at creating a tool to manage kanban methodology (think Trello but a tiny bit more modes).

# Pages

## Home (SSR)

Each user has a private home page, that holds a list with all their projects.

## Projects (SSG/ISR)

Dynamic routing to each of the user's projects. These use static site generation since all the required data is stored in our backend database. These pages will be re-rendered on each database rewrite triggered from the frontend (on-demand IRS) or very sparingly otherwise (each day? TBD).

Only it's owner can modify a project, but projects can be shared with a team as read-only.

# Thesaurus:

- Project: A kanban board, a set of Task lists. Has a due date, an owner (who can modify the board).

- Task List:
- Task:
