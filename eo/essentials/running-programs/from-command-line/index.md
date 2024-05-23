---
title: Kurante de komandlinio
---

{% include menu.html %}

Konservu la tekston de la programo en tekstdosiero, ekzemple, `hello.raku` kaj pasigu la vojon al la dosiero al la komandlinia ilo `raku` (la dolara signo indikas la ŝelan prompton):

```console
$ raku hello.raku
```

Se la programo ne enhavas erarojn, ĝi estos tuj ekzekutita, kaj se ĝi generas ajnan eliron, vi vidos la rezulton en la terminalo:

```console
$ raku hello.raku 
Hello, World!
```

Kiam vi laboras kun Uniks-bazitaj sistemoj, vi povas aldoni shebang-on kaj fari la dosieron ekzekutebla:

```raku
#!/usr/bin/env raku

say 'Hello, World!';
```

La sekvaj paŝoj estas la jenaj:

```console
$ chmod a+x hello.raku
$ ./hello.raku
Hello, World!
```

{% include nav.html %}