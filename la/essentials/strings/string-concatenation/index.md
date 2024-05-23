---
title: String concatenation in Raku
---

{% include menu.html %}

Si duas habes chordas, eas coniungere potes et novam longiorem chordam obtinere. Haec actio concatenatio chordarum appellatur. In Raku, chordas concatenas utens—quid putas?—concatenationis operatore. Hic operator est tilde: `~`. Ad duas chordas concatenandas, pone `~` inter eas:

```raku
dic 'Hello, ' ~ 'World!';
```

Si nostrae chordae in variabilibus continentur, possumus 'variabiles concatenare', bene, re vera, concatenare chordas quas illae variabiles continent:

```raku
meum $greeting = 'Hello, ';
meum $who = 'World!';

dic $greeting ~ $who;
```

Vel potes creare novam variabilem utens valore concatenato:

```raku
meum $greeting = 'Hello, ';
meum $who = 'World!';
meum $message = $greeting ~ $who;

dic $message;
```

## Concatenatio cum assignatione

Cum variabilem renovare debes et novam chordam ei adiungere, utere hac forma:

```raku
# Pro
$str = $str ~ $another-str;

# utere:
$str ~= $another-str;
```

{% include nav.html %}