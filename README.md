# The Art of Leadership

A private, continuously developing institute for the study of power, judgement, strategy, governance and responsible leadership. The site is designed for GitHub Pages and uses Supabase for authentication, shared course content and study records.

## Architecture

- **Website:** static HTML, CSS and JavaScript hosted through GitHub Pages.
- **Authentication and database:** the dedicated Supabase project named **Power**.
- **Access control:** Supabase Auth plus PostgreSQL Row Level Security (RLS).
- **Shared content:** courses, lessons and resources are stored in Supabase.
- **Private study records:** each member's progress and reflections are visible only to that member.

The browser configuration in `config.js` contains the Supabase project URL and a publishable key. A publishable key is designed to be public; it is not an administrative secret. Never place a Supabase secret key or service-role key in this repository.

## First administrator accounts

The following addresses have been placed on the administrator invitation list:

- `victors@sparknews.cc`
- `victor.stanovoy25@gmail.com`

To activate an administrator account:

1. Open the website.
2. Select **Create an account**.
3. Register using one of the invited email addresses.
4. Choose an individual password and complete email confirmation if it is enabled for the project.
5. Sign in. The database assigns administrator access automatically when the invitation is consumed.

The site is invitation-only. Uninvited sign-ups are rejected by the database trigger. Administrator privileges are stored in the protected `leadership_profiles` table and cannot be assigned by editing browser profile data.

## Administration

Administrators will see **The Chancery → Administration** in the sidebar. From there, they can:

- Create courses and assign them to a discipline.
- Publish or unpublish courses.
- Create lessons with Markdown content and reading-time estimates.
- Add books, articles, documents, videos and websites to the library.
- Invite new members or additional administrators by email.

To create another administrator, use the invitation form and select **Administrator**. The recipient must register using the exact invited email address. Invitations are consumed on successful account creation.

## Database tables

The Power project contains separate tables for:

- `leadership_profiles`
- `leadership_admin_invites`
- `leadership_courses`
- `leadership_lessons`
- `leadership_resources`
- `leadership_progress`
- `leadership_notes`

All application tables have Row Level Security enabled. Members can read published teaching material and manage their own study records. Only administrators can manage courses, lessons, resources and invitations.

## Local testing

Open `index.html` in a modern browser. For a more representative local test, serve the folder with a local static HTTP server rather than opening the file directly.

## Deployment

1. Keep the repository connected to GitHub Pages.
2. In **Settings → Pages**, deploy from the `main` branch and repository root.
3. Wait for the deployment to complete.
4. Open the published Pages URL and test both an administrator sign-in and an invited member sign-in.

GitHub Pages serves the static application shell publicly. The actual course content and private records are protected by Supabase authentication and RLS. Do not hard-code confidential information into static HTML, JavaScript or CSS.
