#!/usr/bin/env raku

use YAMLish;

my %toc = load-yaml('_data/toc.yaml'.IO.slurp);

my $root = '_site';

my $out = '';

for %toc<toc><> -> %part {
    $out ~= "\n\n<h1>{%part<title>}</h1>\n\n";

    for %part<items><> -> %subpart {
        $out ~= "\n\n<h1>{%subpart<title>}</h1>\n\n";

        for %subpart<items><> -> %section {
            # $out ~= "\n\n<h2>{%section<title>}</h2>\n\n";
            $out ~= content("$root/%part<url>/%section<url>/index.html");

            if %section<quizzes>:exists {
                for %section<quizzes><> -> %quiz {
                    # $out ~= "\n\n<h4>{%quiz<title>}</h4>\n\n";
                    $out ~= content("$root/%part<url>/%section<url>/%quiz<url>/index.html");;
                }
            }

            if %section<items>:exists {
                for %section<items><> -> %topic {
                    # $out ~= "\n\n<h3>{%topic<title>}</h3>\n\n";
                    $out ~= content("$root/%part<url>/%section<url>/%topic<url>/index.html");

                    if %topic<quizzes>:exists {
                        for %topic<quizzes><> -> %quiz {
                            $out ~= "\n\n<h4>{%quiz<title>}</h4>\n\n";
                            $out ~= content("$root/%part<url>/%section<url>/%topic<url>/%quiz<url>/index.html");;
                        }
                    }
                }
            }

            if %section<exercises>:exists {
                for %section<exercises><> -> %exercise {
                    # $out ~= "\n\n<h4>{%exercise<title>}</h4>\n\n";
                    $out ~= content("$root/%part<url>/%section<url>/exercises/%exercise<url>/index.html");

                    # $out ~= "\n\n<h4>Solution: {%exercise<title>}</h4>\n\n";
                    $out ~= content("$root/%part<url>/%section<url>/exercises/%exercise<url>/solution/index.html");
                }
            }
        }
    }
}

$out.say;

sub content($path) {
    my $html = $path.IO.slurp;    
    $html ~~ /('<h1' .*? '>' .* )'<h2 id="course-navigation">Course navigation</h2>'/;

    return ~$/[0];
}
