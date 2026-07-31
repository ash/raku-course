---
title: Iepriekš definētas rakstzīmju klases
translations_gpt:
---

{% include menu.html %}

Dažas rakstzīmju klases ir tik izplatītas, ka Raku tām dod īsus nosaukumus. Tos raksta ar atpakaļvērstu slīpsvītru:

* `\d` — cipars
* `\w` — «vārda» rakstzīme: burts, cipars vai pasvītrojums
* `\s` — atstarpes rakstzīme (atstarpe, tabulācija, jauna rinda)

```raku
say 'order 66' ~~ /\d/; # ｢6｣
say 'a_b'      ~~ /\w/; # ｢a｣
say '  hi'     ~~ /\s/; # ｢ ｣
```

Katrai no tām ir lielo burtu partneris, kas piemeklē **pretējo** kopu:

* `\D` — jebkas, kas nav cipars
* `\W` — jebkas, kas nav vārda rakstzīme
* `\S` — jebkas, kas nav atstarpe

```raku
say '  hi' ~~ /\S/; # ｢h｣
```

Visbeidzot viens punkts `.` piemeklē **jebkuru** rakstzīmi:

```raku
say 'abc' ~~ /./; # ｢a｣
```

Šīs iepriekš definētās klases ietaupa daudz rakstīšanas, un šīs daļas atlikumā tās izmantosiet nepārtraukti.

{% include nav.html %}
