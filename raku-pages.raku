#!/usr/local/bin/raku

use YAMLish;

my %toc;

my @languages =
    en => 'English',
    de => 'Deutsch',
    es => 'Español',
    it => 'Italiano',
    lv => 'Latviešu',
    nl => 'Nederlands',
    bg => 'Български',
    ru => 'Русский',
    uk => 'Українська';

enum PageType < Part Subpart Section Topic Exercise Exercises Solution Quiz >;
my %pagetype-key =
    Section => 'sections',
    Topic => 'topics',
    Exercise => 'exercises',
    Quiz => 'quizzes';


sub get-toc($lang) returns Hash {

    # URL levels:
    #  L1         L2               L3
    # /essentials/running-programs/from-ide/
    #  ^ part     ^ section        ^ topic
    #   | subpart is not part of URL

    my $prev-url = '';

    sub read-toc($lang) {
        my $yaml-content = "_data/toc/$lang.yaml".IO.slurp;
        my $content = load-yamls($yaml-content)[0];

        return $content;
    }

    sub scan-parts($toc) {
        my $part-number = 0;

        for @$toc -> $part {
            my $part-title = $part<title>;
            my $part-url = $part<url>;

            # Only parts that hold content ('items') are numbered; intro pages
            # such as "About this course" are not counted.
            $part-number++ if $part<items>;

            say "Part $part-number. \e[1m$part-title\e[0m \e[34m$part-url\e[0m";

            %toc{$part-url} = {
                title => $part-title,
                long-title => $part<long_title>,
                url => $part-url,
                prev-url => $prev-url,
                type => Part,
                part-number => ($part<items> ?? $part-number !! Nil),
                items => $part<items>,
            };
            $prev-url = $part-url;

            scan-subparts($part<items>, $part-url) if $part<items>;
        }
    }

    sub scan-subparts($subparts, $parent-url) {
        for @$subparts -> $subpart {
            my $subpart-title = $subpart<title>;
            say "    Subpart \e[1m$subpart-title\e[0m";

            %toc{$parent-url}<subparts> //= [];
            @(%toc{$parent-url}<subparts>).push: {
                type => Subpart,
                title => $subpart-title,
            };

            scan-levels($subpart<items>, $parent-url, Section) if $subpart<items>;
            scan-levels($subpart<exercises>, $parent-url, Exercise) if $subpart<exercises>;
            scan-levels($subpart<quizzes>, $parent-url, Quiz) if $subpart<quizzes>;
        }
    }

    sub scan-levels($levels, $parent-url, $type) {
        for @$levels -> $level {
            my $level-title = $level<title>;
            my $level-url = $level<url>;

            my $url = $type == Exercise ?? "$parent-url/exercises/$level-url"
                                        !! "$parent-url/$level-url";

            %toc{$url} = {
                title => $level-title,
                url => $level-url,
                prev-url => $prev-url,
                type => $type,
            };
            $prev-url = $url;

            my $pagetype-key = %pagetype-key{$type};
            # %toc{$parent-url}{$pagetype-key} //= ();
            %toc{$parent-url}{$pagetype-key}.push($url);

            my $indent = "    " x $parent-url.comb('/').elems + 2;
            say "$indent $type \e[1m$level-title\e[0m \e[34m$url\e[0m";

            if $type eq Exercise {
                add-exercises-page($url);

                my $solution-url = "$url/solution";
                %toc{$solution-url} = {
                    title => "Solution: $level-title",
                    url => 'solution',
                    prev-url => $url,
                    type => Solution,
                };
                $prev-url = $solution-url;
            }

            scan-levels($level<items>, $url, Topic) if $level<items>;
            scan-levels($level<exercises>, $url, Exercise) if $level<exercises>;
            scan-levels($level<quizzes>, $url, Quiz) if $level<quizzes>;
        }

        sub add-exercises-page($url) {
            my $exercises-url = parent-level-url($url);
            my $parent-url = parent-level-url($exercises-url);

            %toc{$exercises-url} //= {
                title => "Exercises: %toc{$parent-url}<title>",
                short-title => 'Exercises',
                url => 'exercises',
                prev-url => $url,
                type => Exercises,
            };
        }
    }

    sub link-toc() {
        for %toc.kv -> $url, $item {
            %toc{$item<prev-url>}<next-url> = $url if $item<prev-url>;
        }
    }

    my $toc = read-toc($lang);
    scan-parts($toc<toc>);

    link-toc();

    # The home page ('' / the site root). It is not a Part itself; it holds the
    # ordered list of parts so include-toc can render the whole-course TOC.
    %toc{''} = {
        title    => $toc<title>,
        url      => '',
        type     => Part,
        parts    => $toc<toc>,
        next-url => %toc{''}<next-url>,
    };

    return %toc;
}

sub generate-pages(%toc, $lang, $destination, $quick, $filter, $uri) {
    my $pygmentize-path = find-pygmentize();
    say $pygmentize-path ?? "\e[32mPygments installed ($pygmentize-path).\e[0m" !! "\e[31mNo working pygmentize found, code blocks will not be colour-highlighted.\e[0m";
    $pygmentize-path = '' if $quick;

    my $which-pandoc = run 'which', 'pandoc', :out;
    my $pandoc-path = $which-pandoc.out.slurp.trim;
    unless $pandoc-path {
        say "No pandoc found.";
        exit;
    }
    say "Pandoc found at $pandoc-path";

    my $saved-count   = 0;
    my $pending-count = 0;
    my @pending-pages;

    sub generate-page(%toc, $lang, $dir) {
        # $dir is '' for the home page, so join carefully to avoid a leading '/'.
        my $src-dir = ($lang eq 'en' ?? $dir !! ($dir ?? "$lang/$dir" !! $lang));
        my $path = $src-dir ?? "$src-dir/index.md" !! 'index.md';
        my $title = %toc{$dir}<title>;

        if $path.IO.f {
            my $md = $path.IO.slurp;
            my $html = md-to-html(
                md => $md,
                title => $title,
                url => $dir,
                path => $path,
                lang => $lang,
                locale => $lang,
            );

            $html = post-process-html($html) if $html ~~ /'%%'/;

            my $output-dir = $lang eq 'en' ?? "$destination/$dir" !! "$destination/$lang/$dir";
            $output-dir.IO.mkdir(:parent);

            my $output-path = "$output-dir/index.html";
            $output-path.IO.spurt($html);

            $saved-count++;
            say "\e[32mSaved to $output-path\e[0m";
        }
        else {
            $pending-count++;
            @pending-pages.push: "$dir ($title)";
            say "\e[33mTODO: '$dir' — '$title' not yet written ($path)\e[0m";
        }

        sub post-process-html($html) {
            return $html
                .subst('<p>%%tipblock</p>', '<div class="tip"><p></p>')
                .subst('<p>%%/tipblock</p>', '</div>');
        }
    }

    for %toc.keys -> $dir {
        next if $filter && $dir !~~ /$filter/;
        next if $uri && $dir ne $uri;

        generate-page(%toc, $lang, $dir);
    }

    say "\e[1m\e[32m$saved-count page(s) generated for '$lang'.\e[0m"
        ~ ($pending-count ?? " \e[33m$pending-count page(s) still to write:\e[0m" !! '');
    say "  \e[33m• $_\e[0m" for @pending-pages.sort;

    sub md-to-html(*%content) {
        state $template = "_templates/default.html".IO.slurp;

        sub field-substitute($from) {
            given $from {
                when / 'title' | 'lang' | 'locale' /   { return %content{$from} }

                when 'content' { return prepare-content(%content<md>) }

                when 'head-includes' { return head-includes(%content) }

                default {
                    say "\e[31mERROR: Unknown command '$from' in '%content<path>'\e[0m";
                    return '';
                }
            }
        }

        sub format-code($language is copy, $code) {
            # Plain, HTML-escaped code block — matching the wrapper pygments uses
            # — so the code is always marked up and styled even without a
            # highlighter (--quick, no pygments, or a per-block failure).
            my $plain = '<div class="highlight"><pre>' ~ html-escape($code) ~ '</pre></div>';

            return $plain unless $pygmentize-path;

            # $language = 'bash' if $language eq 'console';
            $language = 'raku' unless $language;

            # Pipe the code through pygmentize via stdin/stdout. (Using a shared
            # temp file here races: an async read can pick up another block's
            # output.) Write input, then drain stdout/stderr, then check status.
            my $proc = run $pygmentize-path, '-f', 'html', '-l', $language,
                '-O', 'style=vs', :in, :out, :err;
            $proc.in.spurt($code, :close);
            my $html = $proc.out.slurp(:close);
            $proc.err.slurp(:close);

            return ($proc.exitcode == 0 && $html.trim) ?? $html !! $plain;
        }

        sub format-quiz($class is copy, $body) {
            my $rows;
            for $body.split("\n") -> $row {
                $rows ~= '<tr>';
                for $row.split(/\s* '|' \s*/) -> $cell is copy {
                    # Render inline `code` spans in cells, as kramdown did.
                    $cell ~~ s:g/ '`' $<c>=(<-[`]>*) '`'
                        /{ '<code>' ~ html-escape(~$<c>) ~ '</code>' }/;
                    $rows ~= "<td>{$cell}</td>";
                }
                $rows ~= "</tr>\n";
            }

            $class ~~ s:g/'.'//;

            return qq:to/QUIZ/;
            <table class="$class">
            $rows
            </table>
            QUIZ
        }

        sub process-includes($filename) {
            state %includes =
                'languages.html' => sub { '' },
                'nav.html' => &include-nav,
                'toc.html' => &include-toc,
                'menu.html' => &include-menu,
                'quiz.html' => &include-quiz,
                'translations.html' => &include-translations,
            ;

            return %includes{$filename} ?? %includes{$filename}() !! '';
        }

        sub head-includes(%content) {
            if %toc{%content<url>}<type> == Quiz {
                return qq:to/INCLUDE/;
                <link rel="stylesheet" href="/assets/quiz.css?v=2">
                <script type="text/javascript" src="/assets/quiz.js?v=2"></script>
                INCLUDE
            }

            return '';
        }

        sub include-menu() {
            my @crumbs = "[Course of Raku](/)";
            
            my $full-url = %content<url>;
            my @url-items = $full-url.split('/');
            pop @url-items;

            my $crumb-url = '';
            for @url-items -> $current-url-part {
                $crumb-url = $crumb-url ?? "$crumb-url/$current-url-part" !! $current-url-part;

                my $toc-item = %toc{$crumb-url};
                my $title = $toc-item<short-title> // $toc-item<title>;
                @crumbs.push: "[$title](/$crumb-url)";
            }

            return qq:to/MENU/;
            {@crumbs.join(' / ')}

            # {%content<title>}
            MENU
        }

        sub include-quiz() {
            # NB: keep every line flush-left. Markdown turns indented lines into
            # a code block, which would print the button tags as text.
            return qq:to/QUIZ/;
            <script>
            prepare_quiz();
            </script>
            <div style="margin: 3em 0;">
            <button onclick="checkquiz()">Check the answers</button>
            <button onclick="showanswers()" id="ShowAnswers" style="display: none;">Show correct answers</button>
            </div>
            QUIZ
        }

        sub include-nav() {
            my $url = %content<url>;

            sub topics-list() {
                my $curr = %toc{$url};
                return '' unless $curr<topics>;

                my @topics = @($curr<topics>);

                my $lang-prefix = %content<lang> eq 'en' ?? '' !! "/%content<lang>";
                my $topics;
                for @topics -> $topic-url {
                    my $topic = %toc{$topic-url};
                    $topics ~= "* [$topic<title>]($lang-prefix/$topic-url)\n";
                }

                return qq:to/TOPICS/;
                <div class="topics" markdown="1">
                ## {@topics.elems > 1 ?? "Topics in this section" !! "Also in this section"}
                $topics
                </div>
                TOPICS
            }

            sub quizzes-list() {
                return '' unless %toc{$url}<quizzes>;

                my @quizzes = @(%toc{$url}<quizzes>);

                my $lang-prefix = %content<lang> eq 'en' ?? '' !! "/%content<lang>";
                my $quizzes;
                for @quizzes -> $quiz-url {
                    my $quiz = %toc{$quiz-url};
                    $quizzes ~= "* [$quiz<title>]($lang-prefix/$quiz-url)\n";
                }

                return qq:to/QUIZZES/;
                <div class="practice" markdown="1">
                <p></p>

                ## Practice

                Complete the quiz{@quizzes.elems > 1 ?? 'zes' !! ''} that cover{@quizzes.elems == 1 ?? 's' !! ''} the contents of this topic.

                $quizzes
                </div>
                QUIZZES
            }

            sub exercises-list() {
                my $curr = %toc{$url};

                my $parent-url = $url;
                if $curr<type> == Exercises {
                    $parent-url ~~ s/ '/exercises' $ //;
                    $curr = %toc{$parent-url};
                }

                return '' unless $curr<exercises>;

                my @exercises = @($curr<exercises>);

                my $lang-prefix = %content<lang> eq 'en' ?? '' !! "/%content<lang>";
                my $exercises;
                for @exercises -> $exercise-url {
                    my $exercise = %toc{$exercise-url};
                    $exercises ~= "1. [$exercise<title>]($lang-prefix/$exercise-url)\n";
                }

                if $url ne $parent-url {
                    my $parent = %toc{$parent-url};
                    my $local-toc = '';
                    for @($parent<topics> // []) -> $topic-url {
                        my $topic = %toc{$topic-url};
                        $local-toc ~= qq:to/LOCAL-TOC/;
                            * [$topic<title>](/$parent-url/$topic<url>)
                        LOCAL-TOC
                    }

                    return qq:to/EXERCISES/;
                    <div class="exercises" markdown="1">
                    <p></p>

                    This section contains {decline(@exercises.elems, 'exercise')}.

                    $exercises
                    </div>

                    ## Refresh your knowledge

                    Refer to the contents of this section to find the answers if needed.

                    * [$parent<title>](/$parent-url)
                    $local-toc

                    EXERCISES
                }
                else {
                    return qq:to/EXERCISES/;
                    <div class="exercises" markdown="1">
                    ## Exercises

                    This section contains [{decline(@exercises.elems, 'exercise')}](exercises). Examine all the topics of this section before doing the coding practice.

                    $exercises
                    </div>
                    EXERCISES
                }
            }

            my $prev-url  = %toc{$url}<prev-url>;
            my $next-url  = %toc{$url}<next-url>;
            my $prev-page = $prev-url ?? %toc{$prev-url} !! Nil;
            my $next-page = $next-url ?? %toc{$next-url} !! Nil;

            my $course-nav = '';
            $course-nav ~= "← [$prev-page<title>](/$prev-url)" if $prev-page;
            $course-nav ~= "\n&nbsp;&nbsp;|&nbsp;&nbsp;\n"      if $prev-page && $next-page;
            $course-nav ~= "[$next-page<title>](/$next-url) →" if $next-page;

            return qq:to/NAV/;
            {topics-list()}

            {quizzes-list()}

            {exercises-list()}

            ## Course navigation

            {$course-nav}

            {link-exercises-if-any()}

            {include-translations()}
            NAV
        }

        sub include-toc() {
            my $top = %content<lang> eq 'en' ?? '' !! "/%content<lang>";

            # On a part-landing page each section shows its quiz/exercise counts
            # ($extended); on the home page the whole-course TOC omits them.
            sub counts($node, $base) {
                my @parts;
                @parts.push: "<span class=\"has-q\">[{decline($node<quizzes>.elems, 'quiz')}]($base#practice)</span>"
                    if $node<quizzes>;
                @parts.push: "<span class=\"has-e\">[{decline($node<exercises>.elems, 'exercise')}]($base/exercises)</span>"
                    if $node<exercises>;
                return @parts ?? ' — ' ~ @parts.join(' and ') !! '';
            }

            sub render-part($part, Bool $extended) {
                my $part-url = $part<url>;
                my $long     = $part<long-title> // $part<title>;
                my $toc      = "## Part {$part<part-number>}. $long\n\n";

                for @($part<items> // []) -> $subpart {
                    $toc ~= "#### $subpart<title>\n\n";

                    for @($subpart<items> // []) -> $section {
                        my $surl = "$top/$part-url/$section<url>";
                        $toc ~= "* [$section<title>]($surl)"
                            ~ ($extended ?? counts($section, $surl) !! '') ~ "\n";

                        for @($section<items> // []) -> $topic {
                            my $turl = "$surl/$topic<url>";
                            my $tq = ($extended && $topic<quizzes>)
                                ?? " — <span class=\"has-q\">[{decline($topic<quizzes>.elems, 'quiz')}]($turl#practice)</span>"
                                !! '';
                            $toc ~= "    - [$topic<title>]($turl)$tq\n";
                        }
                    }

                    $toc ~= "\n";
                }

                return $toc;
            }

            my $url = %content<url>;

            # Home page: list every content part (those with items), no counts.
            if $url eq '' {
                my $toc = '';
                for @(%toc{''}<parts> // []) -> $raw-part {
                    next unless $raw-part<items>;
                    $toc ~= render-part(%toc{$raw-part<url>}, False);
                }
                return $toc;
            }

            # Part-landing page: just this part, with quiz/exercise counts.
            return render-part(%toc{$url}, True);
        }

        sub include-translations() {
            my @links;
            for @languages -> $language {
                my $code = $language.key;
                my $name = $language.value;

                if $code eq %content<lang> {
                    @links.push: "**{$name}**";
                }
                else {
                    @links.push: $code eq 'en' ?? "[$name](/%content<url>)" !! "[$name](/$code/%content<url>)";
                }
            }

            return qq:to/TRANSLATIONS/;
            <div markdown="1" style="margin-top: 2em; border-top: 1px solid lightgray; padding-top: 2em; font-size: 80%;">
            Translations of this page: {@links.join(' • ')}
            </div>
            TRANSLATIONS
        }

        sub link-exercises-if-any() {
            my $url = %content<url>;
            my $curr = %toc{$url};

            return '' unless $curr<type> == Topic;

            my $section-url = parent-level-url($url);
            my $section = %toc{$section-url};

            return '' unless $section<exercises>;

            if $section<exercises>.elems == 1 {
                return qq:to/GOTOEXERCICE/;

                <br />
                💪 Or jump directly [to the exercise to this section](/$section<exercises>[0]).

                GOTOEXERCICE
            }
            else {
                return qq:to/GOTOEXERCICES/;

                <br />
                💪 Or jump directly [to the exercises in this section](/$section-url/exercises).

                GOTOEXERCICES
            }
        }

        sub prepare-content($md is copy) {
            $md ~~ s/ '---'\n .*? '---'\n //;
            $md ~~ s:g/ '{%' \s* 'include' \s+ (\S+) \s* '%}' /{ process-includes($0.trim) }/;
            # Resolve the only Liquid output tag still used in content: the
            # copyright year ({{ site.time | date: '%Y' }} on the home page).
            $md ~~ s:g/ '{{' \s* 'site.time' .*? '}}' /{ Date.today.year }/;
            # Drop any remaining Liquid tags ({% assign %}, {% comment %}, …) — the
            # Raku generator does its own logic, so these would otherwise leak as text.
            $md ~~ s:g/ '{%' .*? '%}' //;

            my @code = extract-code($md);
            my @quiz = extract-quiz($md);

            my $html = markdown2html($md);

            $html ~~ s:g/ '<p>' 'CodeBlockPlaceholder' (\d+) '</p>'/@code[$0 - 1]/;
            $html ~~ s:g/ '<p>' 'QuizPlaceholder' (\d+) '</p>'/@quiz[$0 - 1]/;

            return $html;
        }

        sub markdown2html($md) {
            # Disable pandoc's $…$ TeX-math extension: Raku code and prose are
            # full of $variables, which must stay literal (kramdown did the same).
            my $run = run $pandoc-path, '-f', 'markdown-tex_math_dollars', :in, :out;
            $run.in.print($md);
            $run.in.close;

            return $run.out.slurp;
        }

        sub extract-code($md is rw) {
            my @code;

            $md ~~ s:g/ '```' (\S+)? \n+ (.*?) \n+ '```' /{
                @code.push([($0 // 'raku').Str, ~$1]);
                'CodeBlockPlaceholder' ~ @code.elems
            }/;

            return @code.map({
                format-code($_[0], $_[1])
            });
        }

        sub extract-quiz($md is rw) {
            my @quiz;

            $md ~~ s:g/ '{:' ('.quiz' .*?) '}' \n (.*?) \n\n /{
                @quiz.push([~$0, ~$1]);
                'QuizPlaceholder' ~ @quiz.elems
                ~ "\n\n"
            }/;

            return @quiz.map({
                format-quiz($_[0], $_[1])
            });
        }

        my $html = $template;
        $html ~~ s:g/ '{{' (.*?) '}}' /{ field-substitute($0.trim) }/;

        return $html;
    }

}

#| Locate a pygmentize that actually runs. `which` may return a broken script
#| (e.g. a wrong shebang), so each candidate is verified with `-V`.
sub find-pygmentize() {
    my @candidates;

    my $which = run 'which', '-a', 'pygmentize', :out, :err;
    @candidates.append: $which.out.slurp.lines».trim.grep(*.chars);

    @candidates.append: </opt/local/bin/pygmentize
                         /opt/homebrew/bin/pygmentize
                         /usr/local/bin/pygmentize>;

    my $frameworks = '/Library/Frameworks/Python.framework/Versions'.IO;
    @candidates.append: $frameworks.dir.map(*.add('bin/pygmentize').Str) if $frameworks.d;

    for @candidates.unique -> $path {
        next unless $path.IO.f;
        my $test = run $path, '-V', :out, :err;
        return $path if $test.exitcode == 0;
    }

    return '';
}

#| Escape the three characters that matter in HTML text/code.
sub html-escape($s) {
    return $s.subst('&', '&amp;', :g).subst('<', '&lt;', :g).subst('>', '&gt;', :g);
}

#| "1 exercise", "2 exercises", "1 quiz", "2 quizzes" — pick singular/plural.
sub decline($n, $word) {
    my %forms = quiz => <quiz quizzes>, exercise => <exercise exercises>;
    return "$n " ~ %forms{$word}[$n == 1 ?? 0 !! 1];
}

sub parent-level-url($url is copy) {
    $url ~~ s/ '/' <-[/]>+ $ //;
    return $url;
}

sub MAIN(:$language = '', :$quick = False, :$filter = '', :$uri = '') {
    for @languages.map: *.key -> $lang {
        next if $language && $lang ne $language;

        %toc = get-toc($lang);
        generate-pages(%toc, $lang, '_out', $quick, $filter, $uri);
    }

    say "Done";
}
