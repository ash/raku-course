---
title: Probationes currere
translations_gpt:
---

{% include menu.html %}

Unum archivum probationum merum programma Raku est, itaque illud directe currere potes:

```
raku t/01-basic.rakutest
```

Exitum suum TAP in screen imprimit. Pro pluribus quam uno aut altero archivo _cursorem probationum_ desideras, qui totam directoriam probationum currat effectusque in summam redigat. Cursor Raku est `prove6`:

```
prove6 t/
```

Hoc omne archivum probationum sub `t/` currit et nuntiat quot archiva et probationes transierint, cum uno effectu universali in fine — multo facilius ad legendum quam nudum TAP ex singulis archivis.

Cum distributio `META6.json` habet, instrumentum modulorum probationes eius pro te currit:

```
zef test .
```

`zef test` directoriam `t/` invenit, seriem currit et effectum nuntiat — quod exacte est id quod sponte fit antequam distributio installatur. Itaque probationes duplici munere funguntur: eas dum evolvis per `prove6` curris, et oecosystema eas currit ut distributionem verificet antequam quisquam eam installet.

> Archiva probationum extensione `.rakutest` (vel `.t`) nominantur et ex more numerantur, ut in `t/01-basic.rakutest`.

{% include nav.html %}
