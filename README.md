# Tingwei Chen · Academic homepage

A minimal academic website for radar perception and embodied AI, published at
https://teddyctw.github.io with GitHub Pages and Jekyll.

## Content

- `/`: personal introduction, photo, obfuscated email, and academic profiles.
- `/research/`: research directions.
- `/publications/`: selected publications and manuscripts under review.
- `/experience/`: academic and research experience.
- `/service/`: workshop organization and categorized reviewing activities.
- `/about/`: compatibility URL showing the same introduction as the homepage.

Edit `_includes/profile-intro.html` for the introduction and email placement,
`_pages/*.html` for individual pages, and `_data/academic_service.yml` for academic
service. Shared navigation is in `_data/navigation.yml`; layouts and appearance
are in `_layouts/academic*.html` and `assets/css/academic.css`.

The email is displayed as `Tingwei.Chen [at] student.uts.edu.au`, with no complete
email address or mailto link in the page source. Older homepage section links
are forwarded to their corresponding standalone pages by `assets/js/legacy-links.js`.

## Preview

```sh
bundle install
bundle exec jekyll serve
```

For Ruby 4, use the included compatibility shim:

```sh
RUBYOPT=-r./scripts/jekyll-ruby4-compat.rb bundle exec jekyll serve
```

Changes pushed to `master` are published by the existing GitHub Pages workflow.
