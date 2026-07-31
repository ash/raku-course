---
title: 'Solvo: Veraj kaj falsaj stringoj'
---

{% include menu.html %}

Ĉi tiu ekzerco estas simila al [la antaŭa](../../true-false-numbers), sed ĉi-foje, la tasko estas iom pli malfacila. Estas pli da ’suspektaj’ ŝnuroj kiuj povas esti traktataj kiel `False`. Ni esploru ilin.

```raku
say ?'';

say ?' ';
say ?'        ';

say ?"\n";

say ?'0';
say ?'0.0';
```

El ĉiuj ĉi tiuj, nur la malplena ŝnuro estas interpretata kiel `False`. Ĉiuj aliaj ŝnuroj, eĉ tiuj kiuj enhavas nur spacojn aŭ eksplicitan karakteron `0`, fariĝas `True`.

🦋 Vi povas trovi la plenan programon kun la supra ekzemplo en la dosiero [true-false-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/coercion/true-false-strings.raku).

{% include nav.html %}