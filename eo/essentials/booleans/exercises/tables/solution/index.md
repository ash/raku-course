---
title: Solvo al 'Buleaj tabeloj’
---

{% include menu.html %}

Jen ebla programo kiu presas ĉiujn rezultojn de buleaj operacioj.

## Kodo

```raku
say 'True && True estas ', True && True; 
say 'True && False estas ', True && False;
say 'False && True estas ', False && True;
say 'False && False estas ', False && False;

say 'True || True estas ', True || True; 
say 'True || False estas ', True || False;
say 'False || True estas ', False || True;
say 'False || False estas ', False || False;

say 'True ^^ True estas ', True ^^ True; 
say 'True ^^ False estas ', True ^^ False;
say 'False ^^ True estas ', False ^^ True;
say 'False ^^ False estas ', False ^^ False;
```

🦋 Vi povas trovi la kompletan kodon en la dosiero [tables.raku](https://github.com/ash/raku-course/blob/master/exercises/booleans/tables.raku).

## Eligo

Rulu la programon, kaj ĝi presas la jenan tabelon.

```console
$ raku tables.raku
True && True estas True
True && False estas False
False && True estas False
False && False estas False
True || True estas True
True || False estas True
False || True estas True
False || False estas False
True ^^ True estas Nil
True ^^ False estas True
False ^^ True estas True
False ^^ False estas False
```

## Komentoj

Rimarku ke pro la pli alta precedenco de la buleaj operacioj, vi ne bezonas meti ilin en krampojn. Tio, tamen, ne estas la kazo se vi uzas ŝnuran kunigon:

```raku
say 'True && True estas ' ~ (True && True);
```

Alternative, vi povas uzi [kodan interpoladon](/eo/essentials/strings/code-interpolation).

{% include nav.html %}