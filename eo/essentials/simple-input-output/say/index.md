---
title: Eligo kun say
---

{% include menu.html %}

La funkcio `say` (aŭ subrutino, aŭ simple rutino) presas la valorojn al la norma eliga fluo, `STDOUT`. Se vi rulas la programon el terminalo, la eligo aperas tie. Se vi uzas retajn servojn, la eligo estas sendita al dediĉita areo de la retpaĝo.

Jen ekzemplo de uzado de `say`:

```raku
say 42;
```

Ĉi tiu linio povas esti parto de pli granda programo aŭ esti la tuta programo mem. Ĝi evidente presas `42` al la eligo.

Ni laboru kun ŝnuroj nun:

```raku
say 'Hello, World!';
```

Voilà, ni ricevis `Hello, World!` sur la ekrano.

La rutino `say` povas akcepti pli ol unu argumenton, do ni povas presi pli da valoroj en unu fojo:

```raku
say 42, 'Hello, World!';
```

Nur notu, ke la partoj de ĉi tiu eligo estas kunigitaj al unu sola ŝnuro: `42Hello, World!`, do estas pli bone aldoni spacon inter ili. Kaj vi devus povi solvi ĉi tiun problemon nun, ekzemple, tiel:

```raku
say 42, ' ', 'Hello, World!';
```

Post presado de ĉiuj argumentoj, la rutino `say` aldonas novlinian signon al la eligo.

{% include nav.html %}