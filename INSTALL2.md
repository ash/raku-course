You need a fresh Raku to run the Course of Raku.

The course is a collection of Markdown (`.md`) files. You need to build a collection
of HTML files to get the browsable website.

# Prerequisites

To run the site locally, install the Raku compiler, Rakudo:

    brew install raku

You also need a couple of modules, which you can install with `zef`.

Install the package maneger `zef` itself if you don't have one yet:

    git clone https://github.com/ugexe/zef.git
    cd zef
    raku -I. bin/zef install .

Make sure that `zef/bin/zef` can be found by your shell. Then, install the modules:

    zef install YAMLish
    zef install Markdown::Grammar

# Syntax highlighting

For syntax highlighting we use `Pygments`, which is an external Python program.
Install it using the following command:

    pip install Pygments

You can skip this step and do not install `Pygments` — this will increase build time,
but you will lack syntax highlighting in the generated files.

# Generating pages

Run the following command, which will build the whole site:

    raku raku-pages.raku

It will scan the directories with Markdown files and will create a corresponding
tree of HTML files in the `docs` directory.

By default, all languages will be generated. To build a single language, specify it
in the command line:

    raku raku-pages.raku eo

# Viewing site locally

It is possible to view generated files one by one, but to make it handier, install `nginx`
and point it to the `raku-course/docs` directory as root.
