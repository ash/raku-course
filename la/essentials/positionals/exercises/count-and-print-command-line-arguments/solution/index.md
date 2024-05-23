---
title: Solutio ‘Count and print command-line arguments’
---

{% include menu.html %}

In hoc programmate, `for` ansa bona electio est.

## Codex

```raku
for ^@*ARGS -> $n {
    say "{$n + 1}. @*ARGS[$n]";
}
```

🦋 Invenies programma in archivo [count-and-print-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/count-and-print-arguments.raku).

## Effectus

Curre programma et confirma quod argumenta et lineas numeros imprimit:

```console
$ raku exercises/positionals/count-and-print-arguments.raku one two three four
1. one
2. two
3. three
4. four
```

## Disputatio

Hoc programma paucae artes utiles utitur. Primo, `for` ansa pergit per [extensionem constructam cum `^`](/la/essentials/ranges/excluding-endpoints). Ita, extensio incipit ab 0 et pergit usque ad (sed non includens) valorem `@*ARGS`. In hoc contextu, [redit](/la/essentials/positionals/arrays#size) longitudines array.

Cum primum elementum array indicem `0` habeat, et opus sit ut lineas a `1` numeremus, haec simplex translatio computatur [intra codicem clausulam](/la/essentials/strings/code-interpolation) in chorda: `"{$n + 1} ..."`.

{% include nav.html %}