---
title: Variabilis argumenti
---

{% include menu.html %}

`$_` est variabilis specialis quae _variabilis argumenti_ appellatur.

Considera iterationem super intervallum:

```raku
for 1..5 -> $n {
    say $n;
}
```

Variabilis `$n` omitti potest, quo in casu variabilis automatice generata `$_` substituetur. Programma aequivalet sequenti:

```raku
for 1..5 {
    say $_;
}
```

Ut [meministi](/la/essentials/hello-world/), possibile est uti `say` ut methodo:

```raku
for 1..5 {
    $_.say;
}
```

Vocare methodos in `$_` non requirit mentionem ipsius variabilis. Ergo, nostra iteratio ulterius simplicari potest:

```raku
for 1..5 {
    .say;
}
```

{% include nav.html %}