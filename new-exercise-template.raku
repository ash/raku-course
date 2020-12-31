#!/usr/bin/env raku

use YAMLish;

my %toc = load-yaml('_data/toc.yaml'.IO.slurp);

for %toc<toc><> -> %part {
    for %part<items><> -> %subpart {
        for %subpart<items><> -> %section {
            if %section<exercises>:exists {
                my $section-exercise-url = "%part<url>/%section<url>/exercises";
                unless "$section-exercise-url/index.md".IO.f {
                    note "No index file for [%section<title>]($section-exercise-url)";
                };

                for %section<exercises><> -> %exercise {
                    my $exercise-url = "$section-exercise-url/%exercise<url>";
                    unless "$exercise-url/index.md".IO.f {
                        note "No exercise file for [%section<title> / %exercise<title>]($exercise-url)";
                        exercise-template(%exercise<title>, $exercise-url, %section<url>);
                    }
                    unless "$exercise-url/solution/index.md".IO.f {
                        note "No solution file for [%section<title> / %exercise<title>]($exercise-url)";
                        solution-template(%exercise<title>, $exercise-url, %section<url>);
                    }

                    my $filename = %exercise<file> // "%exercise<url>.raku";
                    unless "exercises/%section<url>/$filename".IO.f {
                        note "No code file at exercises/%section<url>/$filename";
                        mkdir "exercises/%section<url>";
                        "exercises/%section<url>/$filename".IO.spurt: '';
                    }
                }
            }
            else {
                # note "WARNING: No exercises in [%section<title>](%part<url>/%section<url>)";
            }
        }
    }
}

sub exercise-template($title, $url, $section-url) {
    mkdir $url;

    "$url/index.md".IO.spurt: qq:to/TMPL/;
    ---
    title: 'Exercise: $title'
    ---

    \{% include menu.html %}

    ## Problem
    
    ## Example

    ```console
    \$ raku $section-url.raku
    ```

    ## Solution

    ✅ [See the solution](solution)

    \{% include nav.html %}

    TMPL
}

sub solution-template($title, $url, $section-url) {
    mkdir "$url/solution";

    "$url/solution/index.md".IO.spurt: qq:to/TMPL/;
    ---
    title: 'Solution: $title'
    ---

    \{% include menu.html %}
    
    ## Code

    Here is the solution:

    ```raku
    ```

    🦋 Find the program in the file [$section-url.raku](https://github.com/ash/raku-course/blob/master/$section-url.raku).

    ## Example

    ```console
    \$ raku $url.raku
    ```

    \{% include nav.html %}

    TMPL
}
