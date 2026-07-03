# Running the course locally

The course is a collection of Markdown (`.md`) files. A dedicated Raku program,
`raku-pages.raku`, builds them into a tree of static HTML files, which you then serve with any static web server.

The live site at [course.raku.org](https://course.raku.org/) is generated the same way.

## Prerequisites

You need a Raku compiler (the best option is to use Rakudo), one Raku module, and `pandoc`. Pygments is optional but recommended for syntax highlighting.

### Rakudo (the `raku` command)

    brew install rakudo          # macOS, Homebrew
    sudo port install rakudo     # macOS, MacPorts

(See the “How to install Rakudo” page at the beginning of Part 1 for other platforms and options such as Rakudo Star, online services, and Docker.)

### The `YAMLish` module

The generator reads the table of contents from a YAML file, using the `YAMLish` module. Install it with `zef`:

    zef install YAMLish

If you don’t have `zef` yet:

    git clone https://github.com/ugexe/zef.git
    cd zef
    raku -I. bin/zef install .

Make sure `zef/bin/zef` is on your `PATH`.

### `pandoc`

Markdown is rendered to HTML with `pandoc`:

    brew install pandoc          # macOS, Homebrew
    sudo port install pandoc     # macOS, MacPorts

### Pygments (optional, for syntax highlighting)

Raku code blocks on the pages are highlighted with Pygments, an external Python tool that provides the `pygmentize` command:

    pip install Pygments

You can skip this — the site will still build, just without highlighted code. Use the `--quick` option (below) to skip highlighting and build faster.

## Building the site

From the repository root, run:

    raku raku-pages.raku

This scans the Markdown files and writes the generated HTML into the **`_out/`**
directory.

Useful options:

| Command | What it does |
|---------|--------------|
| `raku raku-pages.raku` | Build every language, with syntax highlighting |
| `raku raku-pages.raku --quick` | Skip highlighting — much faster while editing |
| `raku raku-pages.raku --language=en` | Build only one language (here, English) |
| `raku raku-pages.raku --language=en --filter=essentials` | Build only the pages whose path contains the given text |

While working on content, this combination seems to be the most practical:

    raku raku-pages.raku --language=en --quick

## Viewing the site locally

The generated pages link to CSS, JavaScript, and images with absolute paths such as `/assets/course.css`, so you must serve the `_out/` directory **as the web root**.

The repository ships a symlink, `_out/assets → ../assets`, so the `/assets/…` paths resolve. If it is missing (for example, in a fresh clone), create it once:

    ln -sfn ../assets _out/assets

Then start any static web server from inside `_out/`. The simplest is the one built into Python — no installation needed:

    cd _out
    python3 -m http.server 8000

Now open <http://localhost:8000/> in your browser.

Any other static server works too. For example, with `nginx`, point the server root at the `raku-course/_out` directory.

## Editing and rebuilding

The local server does **not** rebuild automatically. After you change a Markdown file, re-run the generator and refresh the browser. To rebuild only the part you are working on, narrow the build with `--filter`, for example:

    raku raku-pages.raku --language=en --quick --filter=essentials

The `--filter` value is matched as plain text against each page’s directory path, so `--filter=essentials/strings` rebuilds just that section.
