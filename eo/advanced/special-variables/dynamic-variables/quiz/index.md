---
title: Kvizo — Dinamikaj variabloj
translations_gpt:
---

{% include menu.html %}

Kion presas la sekva programo?

```raku
my $*n = 1;
sub show { say $*n }

sub run {
    my $*n = 2;
    show();
}

run();
```

{:.quiz}
0 | 1
1 | 2
0 | Nothing
0 | An error

{% include quiz.html %}

<div class="extended-explanation">

`show` estas skribita ĉe la supra nivelo, tuj apud `my $*n = 1`, sed tiu pozicio estas nerelevanta — dinamika variablo estas serĉata tra la *voka stako*, ne laŭ kie la kodo troviĝas. Ĉi tie `show` estas vokita el `run`, kiu redeklaras `$*n` kiel `2`, do tio estas la efektiva valoro kaj la programo presas `2`.

</div>

{% include nav.html %}
