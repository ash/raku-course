---
title: Array
translations_gpt:
---

{% include menu.html %}

Ordo est continens ordinatus cuius elementa ipsa continentes scalares sunt.

```raku
my @array = 100, 200, 300;
my @letters = 'a', 'b', 'c';
```

Sigillum `@` indicat talem variabilem ut obiectum `Positional` se gerere, ut eam subscribere possis ad elementa singula accedenda:

```raku
say @array[1];   # 200
say @letters[2]; # c
```

Quia quodque elementum continens scalaris est, valorem novum ei assignare potes, exacte ut cum variabili scalari separata faceres:

```raku
my @array = 100, 200, 300;
@array[0] = 10;
say @array; # [10 200 300]
```

Valorem typi diversi quoque assignare potes, exempli gratia:

```raku
my @array = 100, 200, 300;
@array[0] = 'ten';
say @array; # [ten 200 300]
```

Hoc est quod ordines _mutabiles_ facit: quaeque positio est continens qui valorem novum accipere potest. Ut in themate sequenti videbis, [indices](/la/advanced/ordered-containers/lists) aliter se gerunt.

{% include nav.html %}
