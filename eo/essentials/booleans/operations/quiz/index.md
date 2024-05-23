---
title: 'Kviz: Bulaj operacioj'
---

{% include menu.html %}

En ĉiu el la sekcioj sube, elektu la ĝustan respondon, kiun la programo presas.

## 1

Jen la programo:

```raku
my $value = True && False;
say $value;
```

Kion ĝi presas?

{:.quiz}
0 | True
1 | False

## 2 

Kion presas la dua programo?

```raku
my $value = True && False || True;
say $value;
```

{:.quiz}
1 | True
0 | False

## 3

Kio estas la eligo de ĉi tiu programo?

```raku
my $value = True || False && True;
say $value;
```

{:.quiz}
1 | True
0 | False

{% include quiz.html %}

## Komentoj

En la dua kaj tria programoj, ni havas esprimojn kun tri Bulaj valoroj. La rezulto dependas de la ordo en kiu la operacioj estas plenumitaj. La `&&` operaciilo havas pli striktan precedencon ol `||`, do ĝi estas plenumita unue.

{% include nav.html %}