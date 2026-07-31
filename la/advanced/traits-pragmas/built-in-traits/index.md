---
title: Proprietates incorporatae
---

{% include menu.html %}

_Trait_ applicatur cum verbo clave `is` statim post declarationem. Tempore compilationis currit et aliquam proprietatem fixam rei cui adiunctum est mutat. Raku multas habet; iam paucas usus es.

Ex defectu, parametra subroutinae sunt **tantum-lectu** — eis intra routinam assignare non potes. Trait `is copy` tibi copiam privatam et mutabilem argumenti dat, quam mutare potes sine affectione vocantis:

```raku
sub greet($name is copy) {
    $name = "dear $name";
    say "Hello, $name!";
}

my $who = 'Anna';
greet($who); # Hello, dear Anna!
say $who;    # Anna — the caller's own variable is untouched
```

Trait `is rw` longius procedit: parametrum variabili vocantis ligat, ita ut mutatio intra routinam facta foris visibilis sit:

```raku
sub bump($n is rw) {
    $n++;
}

my $x = 10;
bump($x);
say $x; # 11
```

Sine uno horum traituum, `$n++` error tempore compilationis esset, quia parametrum tantum-lectu esset.

Alius trait communis valorem defectivum statuit:

```raku
my $port is default(8080);
say $port; # 8080
```

Hic `is default` variabili valorem dat ad quem recurrat. Quisque trait incorporatus — `is rw`, `is copy`, `is default`, et plura — unum specificum comportamentum tempore compilationis declarationi adiungit. Thema proximum ostendit traits non esse coniunctionem clausam: [tuum proprium definire potes](/la/advanced/traits-pragmas/writing-a-trait).

{% include nav.html %}
