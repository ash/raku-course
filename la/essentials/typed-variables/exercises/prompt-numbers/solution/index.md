---
title: Solutio ‘Examining the result of prompt — Numeri’
---

{% include menu.html %}

## Codex

Hic est completus programmatum quod problema solvit et tam valorem ingressum quam eius genus imprimit.

```raku
my $n = prompt 'Enter a number: ';
say $n;
say $n.WHAT;
```

🦋 Codicem fontis invenire potes in archivo [prompt-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/prompt-numbers.raku).

## Probationes

Programma pluries exsequi et numeros diversorum generum intrare.

### Numeri integri

Primum, numeri integri tam positi quam negativi tentemus.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 10
10
(IntStr)
```

Genus resultatus est `IntStr`. Hoc est genus inbuiltum quod habet proprietates tam `Int` quam `Str`.

### Numeri rationales

Nunc numerum rationalem tentemus. Memento quod in Raku, notatio cum puncto decimali creat `Rat` numerum potius quam numerum fluitantem.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 3.14
3.14
(RatStr)
```

Hoc tempore, programma dicit genus datae in `$n` esse `RatStr`, quod significat genus compositum tam `Rat` quam `Str`.

### Numeri fluitantes

Denique, numerum in notatione scientifica tenta. Hoc puncto, output conicere potes.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 5e-14
5e-14
(NumStr)
```

Certe, novus valor est generis `NumStr`.

{% include nav.html %}