my %seen;
loop {
    my $word = prompt 'Word: ';
    %seen{$word}++;

    if %seen{$word} == 2 {
      say 'Seen!';
    }
    elsif %seen{$word} >= 3 {
      say "Seen %seen{$word} times!";
    }
}
