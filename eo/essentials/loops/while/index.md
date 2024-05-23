---
title: while
---

{% include menu.html %}

La `while` konstruaĵo havas Boole-an kondiĉon kaj kodoblokon. Raku ekzekutas la kodoblokon ripete _dum_ la kondiĉo estas `True`.

```raku
my $x = 0;
while $x <= 10 {
    $x = prompt 'Enigu numeron, kiu ne estas pli granda ol 10: ';
    say "Vi enigis $x.";
}
say "$x estas pli granda ol 10.";
```

La programo petas enigi numeron, kaj se la numero ne estas pli granda ol 10, la korpo de la buklo ripetiĝas. Tuj kiam la enigita numero rompas la kondiĉon `$x <= 10`, la buklo finiĝas, kaj la sekva linio de la programo estas ekzekutita.

```console
$ raku t.raku
Enigu numeron, kiu ne estas pli granda ol 10: 10
Vi enigis 10.
Enigu numeron, kiu ne estas pli granda ol 10: 4
Vi enigis 4.
Enigu numeron, kiu ne estas pli granda ol 10: 1
Vi enigis 1.
Enigu numeron, kiu ne estas pli granda ol 10: 20
Vi enigis 20.
20 estas pli granda ol 10.
```

{% include nav.html %}