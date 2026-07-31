---
title: Cum directoriis laborare
translations_gpt:
---

{% include menu.html %}

Ut cum ipso systemate archivorum labores — inspiciens quid exsistat et directorias creans — Raku _obiectis semitae_ utitur. Quaelibet chorda in unum verti potest per methodum `.IO`, et obiectum semitae deinde ad quaestiones de illa semita respondet.

Quaestiones frequentissimae sunt utrum semita exsistat, et cuius generis res sit:

```raku
spurt 'greeting.txt', 'hi';

say 'greeting.txt'.IO.e; # True  — exsistitne?
say 'greeting.txt'.IO.f; # True  — estne archivum?
say 'greeting.txt'.IO.d; # False — estne directoria?
```

`.e` exsistentiam probat, `.f` archivum ordinarium probat, et `.d` directoriam probat.

Ut novam directoriam creetur, utere `mkdir`:

```raku
mkdir 'reports';
say 'reports'.IO.d; # True
```

Argumentum sequens ostendit quomodo enumeres quid directoria contineat.

{% include nav.html %}
