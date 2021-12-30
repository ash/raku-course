You need Raku, Ruby, and Python to run the Course of Raku.

# Running site locally

To run the site locally, install `jekyll` and `github-pages` as shown below:

    sudo apt-get install ruby-full build-essential zlib1g-dev

    sudo gem install jekyll bundler
    sudo gem install github-pages

    git clone https://github.com/ash/raku-course.git
    cd raku-course

    bundle install
    bundle exec jekyll serve

If everything worked well, you will see the prompt to visit http://localhost:4000.

Do not close the terminal window with `bundle` running. As soon as you update one of the source files, it will regenerate the site. To speed it up, run the last instruction as:

    bundle exec jekyll serve --incremental

Note that this works well if you are modifying independent `index.md` files. If you modify one of the files in `_includes`, `_data`, or `_layout` that affect the whole site, you’ll need to regenerate the site again. So either run it without `--incremental` or break it with `Ctrl+C` and start it again.

# Syntax highlighting

There is no built-in Raku syntax highlighting in the above scheme. Jekyll generates static files and saves them in the directory `_site`. A server running at http://localhost:4000 reads the files from there. The production server, https://course.raku.org/, takes the files from the `docs` directory, which contains the same files as in `_site` but with syntax-highlighted code. To generate `docs`, you need to install Pygments:

    pip install Pygments

After updating content files, wait until Jekyll finishes generating the update (it prints the time spent to regenerate the whole site, so wait untill it says how long it took) and run:

    raku highlight.raku

This program runs the highligher for every Raku code snippet in the generated HTML files and saves the updated static files at the same location but within `docs`.

To see the highlighted version, use, for instance, `nginx` and point it to the `raku-course/docs` directory as root.
