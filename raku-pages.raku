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
            $part-number++;
            my $part-title = $part<title>;
            my $part-url = $part<url>;

            say "Part $part-number. \e[1m$part-title\e[0m \e[34m$part-url\e[0m";

            %toc{$part-url} = {
                title => $part-title,
                url => $part-url,
                prev-url => $prev-url,
                type => Part,
            };
            $prev-url = $part-url;

            scan-subparts($part<items>, $part-url) if $part<items>;
        }
    }

    sub scan-subparts($subparts, $parent-url) {
        for @$subparts -> $subpart {
            my $subpart-title = $subpart<title>;
            say "    Subpart \e[1m$subpart-title\e[0m";

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
            my $exercises-url = $url;
            $exercises-url ~~ s/ '/' <-[/]>+ $ //;

            %toc<$exercises-url> //= {
                title => "Exercises",
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

    return %toc;
}

sub generate-pages(%toc, $lang, $destination, $quick, $filter) {
    my $which-pygments = run 'which', 'pygmentize', :out;
    my $pygmentize-path = $which-pygments.out.slurp.trim;
    say $pygmentize-path ?? "\e[32mPygments installed ($pygmentize-path).\e[0m" !! "\e[31mPygments not installed, skipping syntax highlighting.\e[0m";
    $pygmentize-path = '' if $quick;

    my $which-pandoc = run 'which', 'pandoc', :out;
    my $pandoc-path = $which-pandoc.out.slurp.trim;
    unless $pandoc-path {
        say "No pandoc found.";
        exit;
    }
    say "Pandoc found at $pandoc-path";

    sub generate-page(%toc, $lang, $dir) {        
        my $path = $lang eq 'en' ?? "$dir/index.md" !! "$lang/$dir/index.md";
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

            my $output-dir = $lang eq 'en' ?? "$destination/$dir" !! "$destination/$lang/$dir";
            $output-dir.IO.mkdir(:parent);

            my $output-path = "$output-dir/index.html";
            $output-path.IO.spurt($html);

            say "\e[32mSaved to $output-path\e[0m";
        }
        else {
            say "\e[31mERROR: File '$path' '$title' not found\e[0m";
        }
    }

    for %toc.keys -> $dir {
        next if $filter && $dir !~~ /$filter/;
        generate-page(%toc, $lang, $dir);
    }

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
            return $code unless $pygmentize-path;

            # $language = 'bash' if $language eq 'console';
            $language = 'raku' unless $language;

            '/tmp/highlight.raku'.IO.spurt($code);
            run $pygmentize-path, '-f', 'html', '-l', $language, '-O', 'style=vs', '-o', '/tmp/highlight.raku.html', '/tmp/highlight.raku';

            return '/tmp/highlight.raku.html'.IO.slurp;
        }

        sub format-quiz($class is copy, $body) {
            my $rows;
            for $body.split("\n") -> $row {
                $rows ~= '<tr>';
                for $row.split(/\s* '|' \s*/) -> $cell {
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
                'menu.html' => &include-menu,
                'quiz.html' => &include-quiz
            ;

            return %includes{$filename} ?? %includes{$filename}() !! '';
        }

        sub head-includes(%content) {
            if %toc{%content<url>}<type> == Quiz {
                return qq:to/INCLUDE/;
                <link rel="stylesheet" href="/assets/quiz.css">
                <script type="text/javascript" src="/assets/quiz.js"></script>
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
                say "\t$crumb-url";

                my $toc-item = %toc{$crumb-url};
                my $title = $toc-item<title> // 'Exercises';
                @crumbs.push: "[$title](/$crumb-url)";
            }

            return qq:to/MENU/;
            {@crumbs.join(' / ')}

            # {%content<title>}
            MENU
        }

        sub include-quiz() {
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
                return '' unless %toc{$url}<topics>;

                my @topics = @(%toc{$url}<topics>);

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
                ## Practice

                Complete the quiz{@quizzes.elems > 1 ?? 'zes' !! ''} that cover{@quizzes.elems == 1 ?? 's' !! ''} the contents of this topic.

                $quizzes
                </div>
                QUIZZES
            }

            sub exercises-list() {
                return '' unless %toc{$url}<exercises>;

                my @exercises = @(%toc{$url}<exercises>);

                my $lang-prefix = %content<lang> eq 'en' ?? '' !! "/%content<lang>";
                my $exercises;
                for @exercises -> $exercise-url {
                    my $exercise = %toc{$exercise-url};
                    $exercises ~= "1. [$exercise<title>]($lang-prefix/$exercise-url)\n";
                }

                return qq:to/EXERCISES/;
                <div class="exercises" markdown="1">
                ## Exercises

                This section contains [{@exercises.elems} exercises](exercises). Examine all the topics of this section before doing the coding practice.

                $exercises
                </div>
                EXERCISES
            }

            my $prev-page = %toc{%toc{$url}<prev-url>};
            my $next-page = %toc{%toc{$url}<next-url>};

            return qq:to/NAV/;
            {topics-list()}

            {quizzes-list()}

            {exercises-list()}

            ## Course navigation

            ← [$prev-page<title>](/%toc{$url}<prev-url>)
            &nbsp;&nbsp;|&nbsp;&nbsp;
            [$next-page<title>](/%toc{$url}<next-url>) →

            {include-translations()}
            NAV
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

        sub prepare-content($md is copy) {
            $md ~~ s/ '---'\n .*? '---'\n //;
            $md ~~ s:g/ '{%' \s* 'include' \s+ (\S+) \s* '%}' /{ process-includes($0.trim) }/;

            my @code = extract-code($md);
            my @quiz = extract-quiz($md);

            my $html = markdown2html($md);

            $html ~~ s:g/ '<p>' 'CodeBlockPlaceholder' (\d+) '</p>'/@code[$0 - 1]/;
            $html ~~ s:g/ '<p>' 'QuizPlaceholder' (\d+) '</p>'/@quiz[$0 - 1]/;

            return $html;
        }

        sub markdown2html($md) {
            my $run = run $pandoc-path, :in, :out;
            $run.in.print($md);
            $run.in.close;

            return $run.out.slurp;
        }

        sub extract-code($md is rw) {
            my @code;

            $md ~~ s:g/ '```' (\S+)? \n+ (.*?) \n+ '```' /{
                @code.push([~$0 // 'raku', ~$1]);
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

sub MAIN(:$language = '', :$quick = False, :$filter = '') {
    for @languages.map: *.key -> $lang {
        next if $language && $lang ne $language;

        %toc = get-toc($lang);
        generate-pages(%toc, $lang, '_out', $quick, $filter);
    }

    say "Done";
}
