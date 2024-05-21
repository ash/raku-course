---
title: Oplossing van 'True and False strings'
---

{% include menu.html %}

Deze oefening is vergelijkbaar met [de vorige](../../true-false-numbers), maar deze keer is de taak iets lastiger. Er zijn meer 'verdachte' strings die als `False` kunnen worden behandeld. Laten we ze verkennen.

```raku
say ?'';

say ?' ';
say ?'        ';

say ?"\n";

say ?'0';
say ?'0.0';
```

Van al deze wordt alleen de lege string als `False` beschouwd. Alle andere strings, zelfs die welke alleen spaties bevatten of een expliciet teken `0`, worden `True`.

🦋 Je kunt het volledige programma met het bovenstaande voorbeeld vinden in het bestand [true-false-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/coercion/true-false-strings.raku).

{% include nav.html %}