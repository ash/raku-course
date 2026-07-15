# A Complete Course of the Raku Programming Language

This course covers all the main aspects of the language that you need to use in your daily practice. The course consists of five parts that explain the theory and offer many practical assignments, followed by a final test and an addendum with comprehensive exercises. It is assumed that you try solving the tasks yourself before looking at the solution.

If you’re only starting to learn Raku, you are advised to go through all the parts in the order they are listed in the table of contents. If you have some practice and you want to have some specific training, you are welcome to start with the desired section.

## Structure

The course is divided into five parts, each of which includes several sections, which in turn include a number of topics (simply put, different pages with their unique URL).

The course includes materials of the following four types:

* Theory that covers the current topic
* Quizzes that test your understanding of the theory of the topic and/or the section
* Exercises for the material of the whole section
* Answers to the exercises

Sometimes, practical assignments (both quizzes and exercises) give additional information on the subject, so to make the most of the course, it is recommended you do not skip them.

Below each page, there is a navigation block that you can use to traverse the entire course. You can also always jump to the desired section using the breadcrumbs menu at the top of the page.

Main content pages also contain links to the official Raku documentation so that you can explore the topic more thoroughly.

While the navigation guides you through the assignments in a particular order, you can solve them in more or less random order within the current section or topic.

## Contents

The five parts of the course are:

1. Raku essentials
1. Advanced Raku subjects
1. Objects, I/O, and exceptions
1. Regexes and grammars
1. Functional, concurrent, reactive, and web programming

The parts contain:

| Part | Topics | Quizzes | Exercises |
|------|-------:|--------:|----------:|
| Raku essentials | 113 | 73 | 65 |
| Advanced Raku subjects | 108 | 55 | 115 |
| Objects, I/O, and exceptions | 39 | 22 | 60 |
| Regexes and grammars | 51 | 29 | 49 |
| Functional, concurrent, reactive, and web programming | 73 | 38 | 57 |

Beyond the five parts, the course also offers:

* [The Final Test](https://course.raku.org/final-test/) — a 100-question quiz covering the whole course, with a shareable result.
* An addendum with 50 comprehensive exercises that draw on the material of the entire course.
* An [online Raku playground](https://course.raku.org/playground/) for running code straight in the browser.

New exercises and quizzes may appear in the already published topics, and the theory may be slightly modified to achieve the best flow of the course.

The course is hosted as GitHub Pages at the following address: [course.raku.org](https://course.raku.org/).

## Prerequisites

To follow the course and run exercises, you need to have a working compiler. There are a number of options:

* Install the Rakudo compiler, or
* Install the newer [Raku++](https://github.com/ash/rakupp) compiler, or
* Use the course's own [online playground](https://course.raku.org/playground/) or other online services, or
* Use docker containers

The different installation options are described at the beginning of the first part.

## About the author

The course is written by [Andrew Shitov](https://andrewshitov.com), who has been following the development of Raku since about 2000 (when it was known as Perl 6). He is the author of a number of [books about programming in Raku](https://andrewshitov.com/books). The course material is based on daily experience, particularly on contributing to [The Weekly Challenge](https://perlweeklychallenge.org) and reviewing the solutions of other participants, as well as on the experience obtained from using Raku as the main language for the [Covid Observer](https://github.com/ash/covid.observer) website.

## Contributing, terms of use, and feedback

The creation of the course is supported by the grant of [The Perl & Raku Foundation](https://www.perlfoundation.org). You can use the course for self-study or as a set of ready-to-use materials for teaching others. The commercial usage in classes is allowed without permission. Releasing the course as a separate product must be first negotiated with the author.

The course content is available in several languages. These are automated AI-based translations of the original English manuscript.

The source files are available on GitHub: [github.com/ash/raku-course](https://github.com/ash/raku-course). Feel free to submit a pull request to correct the potential mistakes or typos or create an issue on GitHub if you want to discuss a broader subject. You can also contact the author by [e-mail](mailto:mail@andreyshitov.com).

## Running locally

The course is a set of Markdown files that the `raku-pages.raku` program builds
into a static HTML site. In short:

    # 1. Install the prerequisites (Rakudo, the YAMLish module, and pandoc)
    zef install YAMLish

    # 2. Build the site (output goes to the _out/ directory)
    raku raku-pages.raku --language=en --highlighter=none

    # 3. Serve it locally and open http://localhost:8000/
    ln -sfn ../assets _out/assets    # once, if the symlink is missing
    cd _out
    python3 -m http.server 8000

For the full instructions — including syntax highlighting, build options, and
the edit/rebuild loop — see [INSTALL.md](INSTALL.md).
