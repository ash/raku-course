---
title: 'Solutio: Salve Mundi!'
---

{% include menu.html %}

Post longam viam per cursum, necesse erat ad hunc programmatum iterum redire, sicut modo novum modum scribendi Raku programmata didicimus.

## Codex 1

```raku
sub MAIN() {
    say 'Salve, Mundi!';
}
```

🦋 Invenire programmatum in archivo [hello-world.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/hello-world.raku).

## Codex 2

```raku
unit sub MAIN;
say 'Salve, Mundi!';
```

🦋 Invenire programmatum in archivo [hello-world-unit.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/hello-world-unit.raku).

## Exemplum

Curre utrumque programmatum:

```console
$ raku exercises/the-main-function/hello-world.raku
Salve, Mundi!

$ raku exercises/the-main-function/hello-world-unit.raku
Salve, Mundi!
```

{% include nav.html %}