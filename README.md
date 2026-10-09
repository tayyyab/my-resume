# portfolio.mtbahauddin.com

Personal portfolio of **Muhammad Tayyab Bahaud Din** — Senior Flutter & AI Engineer.

A hand-written static site (HTML + CSS + a little JS). No build step, no framework: everything a
recruiter, client, search engine, ATS parser or AI assistant needs is plain text in the HTML.

## Structure

| Path | What it is |
| --- | --- |
| `index.html` | The portfolio. All content lives here, plus JSON-LD structured data in `<head>`. |
| `resume.html` | Single-column, ATS-friendly résumé (also the source for the PDF). |
| `resume.pdf` | Generated from `resume.html` — don't edit by hand. |
| `llms.txt` | Plain-text profile for AI assistants and LLM crawlers. |
| `assets/css/styles.css` | All styles. Theme colours are tokens at the top of the file. |
| `assets/js/main.js` | Progressive enhancement: theme toggle, mobile menu, screenshot viewer, scroll reveals. |
| `assets/img/` | Icons, project logos and screenshots, and `og-image.png` (social share card). |
| `tools/og-image.html` | Source for the social share card. |
| `tools/build.py` | Regenerates `resume.pdf` and `og-image.png`. |
| `CNAME`, `robots.txt`, `sitemap.xml`, `site.webmanifest` | Hosting / SEO plumbing. |

## Editing content

Content appears in up to four places — keep them in sync when you change facts:

1. `index.html` — the visible page **and** the JSON-LD block in `<head>`
2. `resume.html`
3. `llms.txt`
4. then run `python tools/build.py` to refresh `resume.pdf` (and the share image)

Project ratings and install counts come straight from the App Store / Google Play listings.
Only publish numbers you can point to a source for.

### Adding a project

Copy one `<article class="project">` block in `index.html`, drop its screenshots into
`assets/img/projects/<name>/`, then add a matching `MobileApplication` entry to the JSON-LD
and a line to `resume.html` and `llms.txt`.

## Preview locally

```sh
python -m http.server 8000
# open http://localhost:8000
```

Paths are root-relative (`/assets/...`), so open it through a server rather than as a file.

## Regenerate the PDF résumé and share image

```sh
pip install pypdf          # once — used to write PDF metadata
python tools/build.py
```

Needs Microsoft Edge or Google Chrome installed.

## Deploy (GitHub Pages)

1. Push this folder to a GitHub repository (branch `main`).
2. In the **old** Pages repo, go to *Settings → Pages* and remove the custom domain
   `portfolio.mtbahauddin.com` (a domain can only be attached to one repo).
3. In this repo, go to *Settings → Pages*: *Deploy from a branch* → `main` / `/ (root)`.
   The `CNAME` file sets the custom domain; tick **Enforce HTTPS** once the certificate is issued.

DNS doesn't change as long as both repos are under the same GitHub account.
