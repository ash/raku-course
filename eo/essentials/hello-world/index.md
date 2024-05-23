---
title: Saluton, Mondo! en Raku
---

{% include menu.html %}

Bonege, ni lernis la esencajn aferojn necesajn por paroli al Raku kaj vidi la respondon, do ni iru rekte al la unua vera programo, ‘Saluton, Mondo!’.

```raku
say 'Saluton, Mondo!';
```

Antaŭ ol ni lernu la bazojn de funkcioj, ni vidu kelkajn malsamajn opciojn, kiujn vi povas uzi en ĉi tiu programo.

Unue, vi povas meti krampojn ĉirkaŭ la funkcia argumento:

```raku
say('Saluton, Mondo!');
```

Due, vi povas uzi aliajn funkciojn, nome, `put`, kaj `print`. Denove, kun aŭ sen krampoj:

```raku
put 'Saluton, Mondo!';

print("Saluton, Mondo!\n");
```

Rimarku, ke vi devas mane aldoni la novlinian karakteron ĉe la fino de la mesaĝo en la kazo de `print`. Sed ne zorgu, ni kovros ĉiujn ĉi detalojn poste.

Antaŭ ol ni daŭrigu, permesu al mi montri unu pli ekscitan opcion. Vi povas voki funkcion kiel metodon rekte sur la ĉeno:

```raku
'Saluton, Mondo!'.say;
```

{% include nav.html %}