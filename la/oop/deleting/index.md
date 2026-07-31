---
title: Plicas et directoria delere
translations_gpt:
---

{% include menu.html %}

Sicut `spurt` et `mkdir` res in disco creant, duae procedurae eas removent.

Procedura `unlink` archivum delet:

```raku
spurt 'temp.txt', 'scratch data';
say 'temp.txt'.IO.e; # True

unlink 'temp.txt';
say 'temp.txt'.IO.e; # False
```

`unlink` archivum nominatum delet. Sicut ceterae procedurae systematis archivorum, etiam formam methodi in obiecto semitae habet — `'temp.txt'.IO.unlink`.

Deletio statim et perpetuo fit: nullum quisquiliarium est unde recuperes. Nota post archivum ablatum illud per `.e` (exsistentiam) potius quam per `.f` probandum esse, quia probationes generis `.f` et `.d` iaciunt cum semita non adest.

Procedura `rmdir` directoriam removet, sed solum **vacuam**:

```raku
mkdir 'reports';
rmdir 'reports';
say 'reports'.IO.e; # False
```

Si directoria adhuc aliquid continet, `rmdir` nihil removet et eam in loco relinquit. Itaque ut directoriam quae archiva tenet deleas, eam primum vacuas et deinde removes:

```raku
mkdir 'reports';
spurt 'reports/jan.txt', 'January';
spurt 'reports/feb.txt', 'February';

.unlink for 'reports'.IO.dir;   # omnem ingressum dele
rmdir 'reports';                # nunc directoria vacua est
say 'reports'.IO.e;             # False
```

`'reports'.IO.dir` ingressus directoriae enumerat (argumentum superius id tractavit), et `.unlink` in unoquoque vocans eos removet. Cum directoria vacua est, `rmdir` eam auferre potest. (Hic anulus planus supponit directoriam sola archiva tenere; arbor cum directoriis nidificatis prius in eas recurrere deberet.)

{% include nav.html %}
