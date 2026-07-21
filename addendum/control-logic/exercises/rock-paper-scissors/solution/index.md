---
title: The solution of ’Rock, paper, scissors‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my %beats = rock => 'scissors', scissors => 'paper', paper => 'rock';

sub winner($a, $b) {
    return 'tie' if $a eq $b;
    return %beats{$a} eq $b ?? "$a wins" !! "$b wins";
}

for <rock scissors>, <paper rock>, <paper paper> -> ($a, $b) {
    say "$a vs $b: { winner($a, $b) }";
}
```

🦋 You can find the source code in the file [rock-paper-scissors.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/rock-paper-scissors.raku).

## Output

```
rock vs scissors: rock wins
paper vs rock: paper wins
paper vs paper: tie
```

## Comments

1. The `%beats` hash encodes the rules: each move maps to the move it defeats. That
turns judging into a single lookup instead of a long chain of conditions.

1. If `%beats{$a}` is the opponent's move, then `$a` wins; otherwise (equal moves
already handled) `$b` wins.

{% include nav.html %}
