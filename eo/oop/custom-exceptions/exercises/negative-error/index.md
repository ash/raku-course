---
title: Eraro pri negativa nombro
translations_gpt:
---

{% include menu.html %}

## Problemo

Difinu propran esceptoklason `Negative`, kiu heredas de `Exception`, havas atributon `n`, kaj kies metodo `message` redonas `<n> is negative`.

Skribu subrutinon `check($n)`, kiu ĵetas `Negative` (portantan tiun `n`), kiam ĝia argumento estas sub nulo, kaj alie redonas la argumenton. Poste, en bloko, voku `check(-5)` kaj uzu fazeron `CATCH` kun `when Negative` por presi la mesaĝon de la escepto.

Fine, post la bloko, ĵetu alian `Negative` (kun `n` `-10`) por montri, ke escepto ĵetita tie, kie neniu `CATCH` gardas ĝin, finas la programon.

## Ekzemplo

La programo presas:

```
-5 is negative
-10 is negative
  in block <unit> at negative-error.raku line 24
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
