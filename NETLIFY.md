# Deploy MSP LOCK AND KEY to Netlify

This website uses TanStack Start with the existing Nitro Netlify preset. The Lovable preview keeps its default deployment target.

1. Push the project source to your own GitHub repository using Lovable's GitHub connection.
2. In Netlify, choose **Add new project → Import an existing project** and select the repository.
3. Netlify reads `netlify.toml`: build command `bun run build`, publish directory `dist/client`, Node 22, and `NITRO_PRESET=netlify`.
4. Deploy, then connect your domain in Netlify's domain settings.
5. Check the home page, `/services`, `/services/residential`, `/about`, and `/contact`, including a direct page refresh.

Use a Git-connected build, not a drag-and-drop source upload: the pages include server rendering. Nitro generates the Netlify server functions during the build. No SPA catch-all redirect is needed.

The website has no private API keys or backend dependencies. Calls use `tel:` links and directions open Google Maps. There is no inquiry form and no undelivered form submission.

## Content confirmation before launch

Business name, telephone and address are user-provided. Service descriptions are drafted and need the owner's confirmation before going live. No prices, hours, response times, review scores, certification or licensing claims have been invented. The website's architectural and hardware photos are generated illustrations, not photos of the business or completed jobs.

Netlify configuration is included; an actual Netlify deployment has not been run from this workspace.