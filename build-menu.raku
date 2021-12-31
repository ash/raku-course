use YAMLish;

my $yaml = '_data/toc.yaml'.IO.slurp;
my $toc = load-yaml($yaml);

my %toc;
my %prev-page =
    url => '/',
    title => '',
    type => 'root';

for @($toc<toc>) -> $part {
    my %page =
        url => "/$part<url>/",
        title => $part<title>,
        type => 'part';    
    reg(%page);

    for @($part<items>) -> $subpart {
        # No url for subparts
        my %page =
            url => '',
            title => $subpart<title>,
            type => 'subpart';
        reg(%page);

        if $subpart<items> {
            for @($subpart<items>) -> $section {
                my %page =
                    url => "/$part<url>/$section<url>/",
                    title => $section<title>,
                    type => 'section';
                reg(%page);

                if $section<items> {
                    for @($section<items>) -> $topic {
                        my %page =
                            url => "/$part<url>/$section<url>/$topic<url>/",
                            title => $topic<title>,
                            type => 'topic';
                        reg(%page);

                        if $topic<quizzes> {
                            for @($topic<quizzes>) -> $quiz {
                                my %page =
                                    url => "/$part<url>/$section<url>/$topic<url>/$quiz<url>/",
                                    title => $quiz<title>,
                                    type => 'quiz';
                                reg(%page);
                            }
                        }
                        
                        if $topic<exercises> {
                            for @($topic<exercises>) -> $exercise {
                                my %page =
                                    url => "/$part<url>/$section<url>/$topic<url>/exercises/$exercise<url>/",
                                    title => $exercise<title>,
                                    type => 'exercise';
                                reg(%page);
                            }
                        }

                    }
                }

                if $section<quizzes> {
                    for @($section<quizzes>) -> $quiz {
                        my %page =
                            url => "/$part<url>/$section<url>/$quiz<url>/",
                            title => $quiz<title>,
                            type => 'quiz';
                        reg(%page);
                    }
                }
                
                if $section<exercises> {
                    for @($section<exercises>) -> $exercise {
                        my %page =
                            url => "/$part<url>/$section<url>/exercises/$exercise<url>/",
                            title => $exercise<title>,
                            type => 'exercise';
                        reg(%page);
                    }
                }
            }
        }
    }
}

"_data/navigation.yaml".IO.spurt(save-yaml(%toc));


sub reg(%page) {
    info(%page);

    return unless %page<url>;

    %toc{%page<url>} = %page;

    %page<prev> = %prev-page<url>;
    %toc{%prev-page<url>}<next> = %page<url> if %prev-page<url>;

    %prev-page = %page;    
}

sub info(%page) {
    my $spaces = 80 - %page<url>.chars;
    
    my $slashes = %page<url>;
    $slashes ~~ s:g/ <-[/]> //;
    my $level = $slashes.chars;

    say %page<url> ~ (' ' x $spaces) ~ ('  ' x $level) ~ %page<title>;
}
