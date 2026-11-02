# Tingwei Chen · Academic homepage

A minimal, responsive academic homepage for AI and wireless sensing research.
Published at https://teddyctw.github.io using GitHub Pages and Jekyll.

## Update content

- `index.html`: biography, research interests, selected publications, experience, contact.
- `_layouts/academic.html`: navigation, metadata, and footer.
- `assets/css/academic.css`: typography, spacing, colors, and responsive layout.
- `_pages/about.md`: the existing `/about/` page, retained for older links.
- `_config.yml`: site name, description, and canonical URL.
- `assets/images/profile-seaside.jpg`: profile photo.
- `_includes/contact-email.html` and `assets/js/contact.js`: obfuscated email display
  and email links, assembled only when activated.

The homepage and About page use the standalone `academic` layout. Older archive
and error pages retain their existing theme. The new layout uses system fonts
and does not require external fonts or an icon library. The page remains readable
without JavaScript; clickable email links use a small local script, with a human-readable
obfuscated address as the fallback. This discourages basic scrapers but cannot prevent
all automated collection.

## Local preview

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

For Ruby 4, use the included compatibility shim:

```sh
RUBYOPT=-r./scripts/jekyll-ruby4-compat.rb bundle exec jekyll serve
```

Open the local URL printed by Jekyll. Changes pushed to `master` are built and
published automatically by the existing GitHub Pages configuration.

## Content sources

Professional history and selected publications were checked against the linked
Chinese and English CV repositories. Publication links point to original papers
or proceedings; author names and venue details remain editable in `index.html`.
