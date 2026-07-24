# Content Editing Guide

The website includes a form-based content editor at `/admin`. It updates JSON files in GitHub without exposing the application code.

## Editing Through `/admin`

1. Open `https://your-site-domain/admin`.
2. Sign in with the authorized GitHub account.
3. Select the content area to edit.
4. Save the draft.
5. Submit it for review.
6. Publish after the automated checks and preview succeed.

Production login requires the hosting provider to supply a GitHub OAuth endpoint. See `CMS_SETUP.md`.

## Local Editor

Run the website and the Decap local proxy in separate terminals:

```bash
npm run dev
npx decap-server
```

Then open `http://localhost:3000/admin`. Local editor changes are written directly to the working tree.

## Editor Sections

- **Site Settings:** company details, navigation, footer, contact information and social links
- **Homepage:** hero, trust messages, partners, testimonials, news heading and call to action
- **About Page:** hero, mission, values and company history
- **Catalog Content:** products, categories and news articles

The showcase content remains stored in JSON files under `src/data`. Advanced users can still update these files directly in GitHub.

## Before Editing

1. Create a new branch in GitHub.
2. Edit one or more JSON files.
3. Keep commas, quotes, brackets, and braces intact.
4. Open a pull request and wait for the automated checks and preview deployment.

## Company Details

Edit `src/data/company.json` for:

- Company name, mission, and vision
- Countries served
- Certifications and certificate dates
- Contact details and map URL
- Social links

The product count and years since founding are calculated automatically.

## Products

Edit `src/data/products.json`.

Each product needs a unique:

- `id`, such as `prod-53`
- `slug`, such as `new-product-name`
- `name`

The `category` must exactly match a name in `categories.json`. If `subCategory` is present, it must also belong to that category.

Place product images under `public/images/products` and reference them with paths such as:

```json
"/images/products/new-product-name-1.svg"
```

To offer a brochure, place the PDF under `public/pdfs` and add:

```json
"pdfBrochure": "/pdfs/new-product-name-brochure.pdf"
```

The download button is hidden when `pdfBrochure` is omitted.

## Categories

Edit `src/data/categories.json`.

Product and subcategory counts are calculated automatically. Editors should not add count fields.

## News

Edit `src/data/news.json`.

Use dates in `YYYY-MM-DD` format. Allowed categories are:

- `announcement`
- `product-launch`
- `healthcare-news`
- `research`
- `event`

Place news images under `public/images/news`.

## Validation

Run this locally when possible:

```bash
npm run validate:content
```

GitHub automatically checks content, TypeScript, tests, lint, and the production build for every pull request. A failed check must be corrected before publishing.
