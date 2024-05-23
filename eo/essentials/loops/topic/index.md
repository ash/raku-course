---
title: Variablo de temo
---

{% include menu.html %}

`$_` estas speciala variablo nomata _variablo de temo_.

Konsideru la buklon super intervalo:

```raku
for 1..5 -> $n {
    say $n;
}
```

La variablo `$n` povas esti preterlasita, en kiu kazo ĝi estos anstataŭigita per aŭtomate generita variablo `$_`. La programo estas ekvivalenta al la sekva:

```raku
for 1..5 {
    say $_;
}
```

Kiel vi [memoras](/eo/essentials/hello-world/), eblas uzi `say` kiel metodon:

```raku
for 1..5 {
    $_.say;
}
```

Voki metodojn sur `$_` ne postulas mencii la variablon mem. Do, nia buklo povas esti plue simpligita:

```raku
for 1..5 {
    .say;
}
```

{% include nav.html %}