# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Bilingual (English / 简体中文) Jekyll site for the Guannan He research group at Peking University, served at https://www.guannanhe.com via GitHub Pages. Jekyll 3.9.3 pinned through the `github-pages` gem (v228); CI uses Ruby 2.7 and Node 16. There are no tests or linters — the "test" is a clean `jekyll build`.

## Commands

CSS must be compiled from LESS before Jekyll sees any styles (`assets/css/main.css` is gitignored and never committed):

```sh
npm install                 # pulls bootstrap@3.4.1 LESS sources + lessc + cleancss into node_modules
sh maintenance/less.sh      # _main.less -> minified assets/css/main.css
```

Then build/serve the site:

```sh
bundle install
bundle exec jekyll serve    # http://127.0.0.1:4000
bundle exec jekyll build    # output in _site/
```

Re-run `maintenance/less.sh` after editing any `assets/css/*.less`; Jekyll does not compile LESS itself.

Ruby notes: the macOS system Ruby (2.6) is too old for the lockfile's bundler 2.4.7. Ruby 3.3 (`brew install ruby@3.3`) works, but Jekyll 3.9 crashes with the `logger >= 1.6` default gem (`undefined method '[]' for nil` in `log_adapter.rb`). Work around it locally without touching the repo's Gemfile/Gemfile.lock:

```sh
mkdir -p /tmp/jbuild && cp Gemfile.lock /tmp/jbuild/
printf 'eval_gemfile "%s/Gemfile"\ngem "logger", "~> 1.5.3"\n' "$PWD" > /tmp/jbuild/Gemfile
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH" BUNDLE_GEMFILE=/tmp/jbuild/Gemfile BUNDLE_PATH="$PWD/vendor/bundle"
gem install bundler:2.4.7 && bundle _2.4.7_ install && bundle _2.4.7_ exec jekyll build
```

CI (Ruby 2.7) does not need this. `CLAUDE.md` and `README.md` are in `_config.yml` `exclude:` — Jekyll would otherwise render them as pages and fail on the Liquid snippets in this file.

Search index (only needed when deliberately re-indexing; CI does this on push):

```sh
ALGOLIA_API_KEY=... bundle exec jekyll algolia push
```

## Deployment

`.github/workflows/publish.yml` runs on push to `main`/`test` and on PRs to `main`. It compiles LESS, runs `jekyll build`, and — only on push to `main` — commits `_site/` to the `gh-pages` branch, which is what GitHub Pages serves. Never commit to `gh-pages` by hand. The Algolia push step is `continue-on-error` and skipped when the `ALGOLIA_API_KEY` secret is absent.

## Architecture

### Everything is a collection under `pages/`

`_config.yml` sets `collections_dir: pages`, so each `pages/_<name>/` directory is a Jekyll collection (`homepage`, `research`, `fundings`, `publication`, `awards`, `activity`, `group`, `news`, `search`). The top navbar is not hardcoded: `_includes/header.html` iterates `_data/categories.yaml`, which supplies the EN/ZH label and link for each collection in display order. `search` is intentionally absent from `categories.yaml` and rendered separately as the icon item.

To add a top-level section you must touch three places: `_config.yml` `collections:`, `_data/categories.yaml`, and `pages/_<name>/index.md` + `index_zh.md`.

### Bilingual convention

Every page exists twice: `foo.md` (`language: en`) and `foo_zh.md` (`language: zh`). The language toggle in `header.html` derives the sibling URL mechanically by swapping `.html` ↔ `_zh.html` on `page.url`, so filenames must follow this pairing exactly. Front-matter escape hatches:

- `lang_link: /some/path.html` — override the derived sibling URL.
- `no_lang_link: true` — hide the toggle when no translation exists (used on ZH-only news posts).

`page.language` also drives `<html lang>`, the `<title>` suffix (`site.name` vs `site.name_zh`), meta keywords, and the Algolia `language` facet filter in `assets/js/search.js`.

### Front-matter flags recognised by the layout

There is a single layout (`_layouts/default.html`) composed of `head.html`, `header.html`, `content.html`, `footer.html`. `content.html` honours: `no_heading` (homepage), `no_date` (suppress date on news), `heading_link` (make the H1 a link — used on research area pages), and treats `collection == "news"` specially to print the date. `news.html` additionally honours `no_index` (exclude from the news list) and `external_url` (link out instead of to the rendered page). Any `href="http…"` in rendered content is rewritten to `target="_blank"` by `content.html`.

### Content patterns to copy, not reinvent

- **Group members** (`pages/_group/index*.md`): each person is `{% capture content %}…{% endcapture %}{% include student.md image="/assets/images/students/xxx.jpg" content=content %}`. Photos live in `assets/images/students/`.
- **Research areas** (`pages/_research/area_NN*.md`): end with `{% include prevnext.html parent=… prev=… next=… %}`. Prev/next links are hand-maintained in both languages — adding an area means updating its neighbours' includes and `pages/_research/index*.md`.
- **News**: `pages/_news/YYYY-MM-DD-slug.md` (+ `_zh`), listed automatically by `news.html`. The "News" bullet list on the homepage (`pages/_homepage/index*.md`) is separate and edited by hand.
- **Publication lists**: both `pages/_publication/index*.md` are one-line wrappers around `_includes/publications.md` — edit the include, never the wrappers. Section headings switch on `page.language`; list bodies are shared. Each list ends with a kramdown IAL, e.g. `{: .publication-list reversed="reversed" lang="en" }`. The journal list is written newest-first and uses `reversed`, so the newest paper shows the highest number. `**He, G.**` is bolded, `\*` marks corresponding author, `†` co-first author.
- **Icons**: `<span class="icon icon-github"></span>` etc. Classes map to `assets/images/icons/*.svg` in `assets/css/_icon.less`; add both the SVG and a rule there for a new icon.
- **`lang="en"` on an element** (via IAL or attribute) opts that subtree out of `assets/js/main.js`, which otherwise wraps Chinese quotation marks in `<span class="biaodian">` for typographic styling.

### Styling

`assets/css/_main.less` imports `_bootstrap.less` (a curated subset of Bootstrap 3 from `node_modules`) then the site partials (`_color`, `_font`, `_icon`, `_site`, `_header`, `_content`, `_sidenav`, `_footer`). Brand colours are LESS variables in `_color.less` and are also exported as CSS custom properties. Third-party JS (jQuery, Bootstrap, Algolia) is loaded from `code.bdstatic.com` (Baidu CDN) so the site works from mainland China — keep that when adding libraries. `head.html` cache-busts `main.css` and `main.js` with a `?v=YYYYMMDD` query string; bump it when changing either.

### Search

Algolia InstantSearch. The app ID and index config live in `_config.yml` (`algolia:`); the app ID and the public search-only key are duplicated in `assets/js/search.js`. `pages/_search/*` and `pages/_news/index*` are excluded from indexing.

## Formatting

`.prettierrc.json` (2-space, 120 cols, double quotes, `parser: babel`) applies to the JS in `assets/js/`.
