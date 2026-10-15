<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website architecture
- Keep official business contact values and service definitions in `src/lib/business.ts` so all pages share consistent information.
- Shared navigation and footer live in the root layout; content and service details use separate TanStack routes for direct linking and page metadata.
- Use the existing Nitro Netlify preset only for Netlify builds to preserve the Lovable preview target.
- Keep the public site call-first with telephone and directions links; do not add a simulated inquiry submission without a delivery service.
