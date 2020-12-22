#!/usr/bin/env raku

my $prefix = '/raku-course';
my $out-root = 'output';
my $in-root = 'content';

my %structure;
scan-dir($in-root);


sub scan-dir($root) {
    for dir($root) -> $path {
        if $path.d {
            scan-dir($path);
        }
        elsif $path.f {
            say $path.path;

            if $path.extension eq 'md' {
                $path.lines[0] ~~ /^'# ' (.+) $/;
                my $title;
                if $/ {
                    $title = ~$/[0];                    
                }
                else {
                    $title = $path.path;
                }

                %structure{$path.path} = $title;
            }
            elsif $path.extension eq 'list' {
                
            }
        }
    }
}
