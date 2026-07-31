---
title: 'Solvo: Ekzameni la rezulton de `prompt` — Nombroj'
---

{% include menu.html %}

## Kodo

Jen la kompleta programo kiu solvas la problemon kaj presas ambaŭ la enmetitan valoron kaj ĝian tipon.

```raku
my $n = prompt 'Enter a number: ';
say $n;
say $n.WHAT;
```

🦋 Vi povas trovi la fontkodon en la dosiero [prompt-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/typed-variables/prompt-numbers.raku).

## Testaj kuradoj

Rulu la programon plurfoje kaj enmetu nombrojn de malsamaj tipoj.

### Entjeroj

Ni provu entjerojn unue, ambaŭ pozitivajn kaj negativajn.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 10
10
(IntStr)
```

La tipo de la rezulto estas `IntStr`. Ĉi tio estas enkonstruita tipo kiu havas la trajtojn de ambaŭ `Int` kaj `Str`.

### Raciaj nombroj

Nun ni provu racion nombron. Memoru ke en Raku, notacio kun decimala punkto kreas `Rat` nombron anstataŭ flosanta-punkta nombro.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 3.14
3.14
(RatStr)
```

Ĉi-foje, la programo diras ke la tipo de datumoj en `$n` estas `RatStr`, kiu signifas kombinita tipo de ambaŭ `Rat` kaj `Str`.

### Flosantaj-punktaj nombroj

Fine, provu nombron en la scienca notacio. Vi devus povi diveni la eliron en ĉi tiu punkto.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 5e-14
5e-14
(NumStr)
```

Efektive, la nova valoro estas de la tipo `NumStr`.

{% include nav.html %}