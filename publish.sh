#!/usr/bin/env bash
#
# Build the site and stage it into docs/ (the folder GitHub Pages serves).
#
# Usage:  ./publish.sh                # rebuild everything, then mirror
#         ./publish.sh --no-build     # mirror the _out you already have
#
# It mirrors _out into docs/ as plain static files — dereferencing the assets
# symlink, and restoring CNAME and .nojekyll, so Jekyll stays disabled and
# nothing is served through a symlink.
#
# The build covers EVERY language and EVERY part. That matters: docs/ is
# wiped and recreated from _out, so a partial build here silently deletes
# whatever it did not produce. This script once built English only, and
# defaulted to parts 1..2 — either would have taken most of the live site down.
#
# Rebuilt a few pages yourself with --filter and want to publish just those?
# Use --no-build. But note what a filtered run does NOT refresh: the home page,
# and search-index.json (the generator skips it unless the build is complete —
# see "only for a complete build" in raku-pages.raku). Page titles appear in
# both, so if you changed a title in _data/toc/*.yaml, a filtered rebuild
# leaves the contents and the search results showing the old one. Change a
# title, do a full build.
#
# The script does NOT commit or push; it stages the change and leaves the final
# `git commit` / `git push` to you after a `git status` review.

set -euo pipefail
cd "$(dirname "$0")"

RAKU="${RAKU:-rakupp}"
BUILD=1

for arg in "$@"; do
  case "$arg" in
    --no-build) BUILD=0 ;;
    -h|--help)  sed -n '2,27p' "$0"; exit 0 ;;
    [0-9]*)
      echo "ERROR: a bare number used to mean --last-part=$arg, and defaulted to 2," >&2
      echo "       publishing parts 1..2 only. The course is complete; there is no" >&2
      echo "       --last-part any more. Drop the argument." >&2
      exit 2 ;;
    *) echo "unknown option: $arg (try --help)" >&2; exit 2 ;;
  esac
done

if [ "$BUILD" = 1 ]; then
    # No --language: every language. No --last-part: every part.
    echo "==> Building _out (all languages, all parts)"
    rm -rf _out
    $RAKU raku-pages.raku --workers=1
else
    echo "==> Reusing the existing _out (--no-build)"
fi

# Refuse to mirror a build that is obviously incomplete — otherwise the wipe
# below turns a half-finished _out into a half-finished live site.
[ -f _out/index.html ] || { echo "ERROR: _out/index.html missing — nothing to publish." >&2; exit 1; }
[ -f _out/search-index.json ] || {
    echo "ERROR: _out/search-index.json missing — the last build was filtered, so the" >&2
    echo "       index is absent and search would break. Do a full build." >&2
    exit 1; }
for lang in ru uk bg nl de it es lv la eo; do
    [ -f "_out/$lang/index.html" ] || {
        echo "ERROR: _out/$lang/index.html missing — that language would be dropped from" >&2
        echo "       the live site. Build everything, or fix the build, before publishing." >&2
        exit 1; }
done
PAGES="$(find _out -name index.html | wc -l | tr -d ' ')"
echo "    _out looks complete: $PAGES pages, all 11 languages, search index present"

echo "==> Mirroring _out into docs/ (real files, no symlinks)"

# The Raku playground is a hand-maintained static app that lives only in docs/
# (it is not generated into _out), so preserve it across the wipe-and-mirror
# below — otherwise the mirror would delete it and /playground would 404.
PLAYGROUND_BAK=""
if [ -d docs/playground ]; then
    PLAYGROUND_BAK="$(mktemp -d)"
    cp -R docs/playground "$PLAYGROUND_BAK/playground"
fi

rm -rf docs
cp -RL _out docs                     # -L: copy the real assets, not the symlink

# Put the playground back now that docs/ has been recreated from _out.
if [ -n "$PLAYGROUND_BAK" ]; then
    cp -R "$PLAYGROUND_BAK/playground" docs/playground
    rm -rf "$PLAYGROUND_BAK"
fi

echo course.raku.org > docs/CNAME    # custom domain
: > docs/.nojekyll                    # keep Jekyll disabled

echo "==> Staging docs/"
git add -A docs
git add -f docs/.nojekyll            # .gitignore's '.*' would otherwise skip it

echo
echo "Done. Review with:  git status"
echo "Then publish with:  git commit -m 'Publish' && git push"
