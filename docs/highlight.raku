#!/usr/bin/env raku

my $output-root = 'docs';

scan-dir('_site');

sub scan-dir($root) {
    say "Scanning $root";
    for dir($root) -> $path {
        # next if $path ~~ /^'_' | ^'.'/;
        next if $path ~~ /^ 'docs' /;

        if $path.d {
            scan-dir($path);
        }
        else {
            process-file($path);
        }
    }
}

sub process-file($path) {
    my $output-path = "$output-root/$path";
    $output-path ~~ s/ '_site/' //;
    # say $output-path;

    my $dirname = $output-path.IO.dirname;
    $dirname.IO.mkdir unless $dirname.IO.d;

    if $path ~~ / 'index.html' / {
        my $html = $path.slurp;

        $html ~~ s:g/'<pre><code class="language-raku">' (.*?) '</code></pre>'/{
            highlight(~$0)
        }/;
        $output-path.IO.spurt: $html;
    }
    elsif $path !~~ / 'index.md' / {
        $path.IO.copy: $output-path;
    }
}

sub highlight($code is copy) {
    $code ~~ s:g/'&lt;'/</;
    $code ~~ s:g/'&gt;'/>/;
say $code;
    '/tmp/highlight.raku'.IO.spurt($code);
    run '/usr/local/bin/pygmentize', '-f', 'html', '-l', 'raku', '-O', 'style=vs', '-o', '/tmp/highlight.raku.html', '/tmp/highlight.raku';

    my $html = '/tmp/highlight.raku.html'.IO.slurp;



    return $html;
}
