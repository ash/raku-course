#!/usr/local/bin/raku

use YAMLish;
use Markdown::Grammar;

sub get-toc($lang) returns Hash {

    # URL levels:
    #  L1         L2               L3
    # /essentials/running-programs/from-ide/
    #  ^ part     ^ section        ^ topic
    #   | subpart is not part of URL

    my %toc;

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

            say "Part $part-number. '$part-title' /$part-url";

            %toc{$part-url} = {
                title => $part-title,
                url => $part-url
            };

            scan-subparts($part<items>, $part-url) if $part<items>;
        }
    }

    sub scan-subparts($subparts, $part-url) {
        for @$subparts -> $subpart {
            my $subpart-title = $subpart<title>;
            say "\t$subpart-title";

            scan-sections($subpart<items>, $part-url) if $subpart<items>;
        }
    }

    sub scan-sections($sections, $part-url) {
        for @$sections -> $section {
            my $section-title = $section<title>;
            my $section-url = $section<url>;

            say "\t\t$section-title $section-url";

            %toc{"$part-url/$section-url"} = {
                title => $section-title,
                url => $section-url,
            };
        }
    }

    my $toc = read-toc('en');
    scan-parts($toc<toc>);

    return %toc;
}

sub generate-pages(%toc, $lang, $destination) {
    state %locale =
        en => 'en_US';

    sub generate-page(%toc, $lang, $dir) {

        my $path = "$dir/index.md";
        my $title = %toc{$dir}<title>;

        if $path.IO.f {
            my $md = $path.IO.slurp;
            my $html = md-to-html(
                md => $md,
                title => $title,
                path => $path,
                lang => $lang,
                locale => %locale{$lang},
            );

            my $output-dir = "$destination/$dir";
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
        generate-page(%toc, $lang, $dir);
    }
}

sub md-to-html(*%content) {
    state $template = "_templates/default.html".IO.slurp;

    sub field-substitute($from) {
        given $from {
            when / 'title' | 'lang' | 'locale' /   { return %content{$from} }

            when 'content' { return prepare-content(%content<md>) }

            default {
                say "\e[31mERROR: Unknown command '$from' in '%content<path>'\e[0m";
                return '';
            }
        }
    }

    sub format-code($language is copy, $code) {
        # $language = 'bash' if $language eq 'console';
        $language = 'raku' unless $language;        

        '/tmp/highlight.raku'.IO.spurt($code);
        run '/usr/local/bin/pygmentize', '-f', 'html', '-l', $language, '-O', 'style=vs', '-o', '/tmp/highlight.raku.html', '/tmp/highlight.raku';

        return '/tmp/highlight.raku.html'.IO.slurp;
    }

    sub process-includes($filename) {
        state %includes =
            'languages.html' => sub { '' },
            'nav.html' => &include-nav
        ;


        return %includes{$filename} ?? %includes{$filename}() !! '';

    }

    sub include-nav() {
        my $nav = "## Course navigation\n\n←\n\n";

        return $nav;
    }

    sub prepare-content($md is copy) {
        $md ~~ s/ '---'\n .*? '---'\n //;
        $md ~~ s:g/ '{%' \s* 'include' \s+ (\S+) \s* '%}' /{ process-includes($0.trim) }/;

        return from-markdown($md, to => 'html');
    }

    my $html = $template;
    $html ~~ s:g/ '{{' (.*?) '}}' /{ field-substitute($0.trim) }/;    
    $html ~~ s:g/ '<pre><code' [' class="' $<language> = (.*?) '"']? '>' $<code> = (.+?) '</code></pre>' /{ format-code(($<language>//'').trim, $<code>.trim) }/;

    return $html;
}

sub MAIN($preview?) {
    for < en > -> $lang {
        my %toc = get-toc($lang);
        generate-pages(%toc, $lang, '_out');
    }
}

say "Done";
