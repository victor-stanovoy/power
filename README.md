# The Art of Leadership — GitHub Pages starter

A responsive, GitHub Pages-compatible learning portal for a continuous leadership programme.

## Important security notice

This starter includes a **convenience password gate only**. It is not genuine access control. GitHub Pages serves static files publicly, and the shared phrase is present in `config.js`, which visitors can inspect or bypass. Do not put confidential notes, personal information, or sensitive course material in a public repository.

For genuine shared-password protection, put the GitHub Pages site behind an access-control service such as **Cloudflare Access** (or use a host with server-side authentication). Configure an access policy that permits only the two intended users. Do not rely on the JavaScript gate for security.

## Before publishing

1. Open `config.js`.
2. Replace `CHANGE-THIS-PHRASE` with a temporary phrase if you only want the convenience gate.
3. If you need actual privacy, do not publish the site publicly until you have configured Cloudflare Access or equivalent protection.
4. Test the site locally by opening `index.html` in a browser.

## Publish with GitHub Pages

1. Create a GitHub repository, preferably private while preparing the site.
2. Upload `index.html`, `styles.css`, `app.js`, and `config.js` to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. GitHub will provide the Pages address after deployment.

A private GitHub repository does **not** automatically make its published GitHub Pages website private. Confirm the Pages visibility and access-control options available to your account before publishing.

## Included pages

- Overview dashboard
- Six-part continuous curriculum
- Five starter lessons
- Case studies
- Assignments
- Reading library
- Study register

## Progress and notes

The current starter stores lesson completion and written notes in the browser's `localStorage`. This means data stays on the device/browser where it was entered. It does not synchronise between the instructor and student. Shared accounts and synchronised progress require a backend or database.

## Customising the course

Edit the `disciplines`, `lessons`, `cases`, and `books` arrays near the top of `app.js`. The programme is designed to grow without a fixed end date.
