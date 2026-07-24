# CMS Setup

The content editor is available at `/admin` and uses Decap CMS with the GitHub backend.

## Repository

- Repository: `SuntoshKumar/alvorhealthcare`
- Branch: `main`
- Publishing mode: editorial workflow
- Editor configuration: `public/admin/config.yml`

## Production Authentication

Decap CMS requires a GitHub OAuth provider before editors can sign in on the deployed site. Configure that provider through the final hosting platform and authorize the repository.

Do not commit the GitHub OAuth client secret to this repository.

If the OAuth service uses custom endpoints, add these properties under `backend` in `public/admin/config.yml`:

```yaml
base_url: https://your-oauth-service.example
auth_endpoint: auth
```

The authorized GitHub account needs permission to create branches and pull requests in the repository.

## Local Testing

From the repository root:

```bash
npm run dev
npx decap-server
```

Open `http://localhost:3000/admin`. The `local_backend: true` setting connects the editor to the local proxy without GitHub authentication.

## Publishing Flow

1. The editor saves a draft.
2. Decap creates a content branch and pull request.
3. GitHub Actions validates content, TypeScript, tests, lint and the production build.
4. Review the deployment preview.
5. Publish or merge the approved change.
