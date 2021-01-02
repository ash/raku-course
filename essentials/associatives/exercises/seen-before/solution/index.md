---
title: 'Solution: Seen before?'
---

{% include menu.html %}

This task is a classical example of using a hash to keep track of items. Before a loop, a hash `%seen` is created. Inside the loop, the entered `$word` serves a key of the hash.

## Code

Here is the solution:

```raku
my %seen;
loop {
    my $word = prompt 'Word: ';
    if %seen{$word} {
        say %seen{$word} == 1 ?? 'Seen!' !! say "Seen %seen{$word} times!";
    }
    %seen{$word}++;
}
```

🦋 Find the program in the file [seen-before.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/seen-before.raku).

## Output

```console
$ raku exercises/associatives/seen-before.raku
Word: I
Word: never
Word: saw
Word: a
Word: saw
Seen!
Word: that
Word: saw
Seen 2 times!
True
Word: as
Word: that
Seen!
Word: saw
Seen 3 times!
True
Word: sawed
Word: ^C
```

## Comment

The construct `%seen{$word}++` not only increments the value, but also creates it if it did not exist yet. The process of creating is called _autovivification_. Notice that it does not happen when you only read the value as in the condition: `if %seen{$word}`.

{% include nav.html %}
