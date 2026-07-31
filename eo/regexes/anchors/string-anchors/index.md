---
title: Komenco kaj fino de la ĉeno
translations_gpt:
---

{% include menu.html %}

Du ankroj markas la finojn de la ĉeno:

* `^` kongruas ĉe la tute **komenco** de la ĉeno
* `$` kongruas ĉe la tute **fino**

Uzu `^` por postuli, ke la kongruo komenciĝu ĉe la komenco:

```raku
say so 'http://example' ~~ /^ http /; # True
say so 'see http://x'   ~~ /^ http /; # False
```

La dua ĉeno enhavas `http`, sed ne ĉe la komenco, do la ankrita ŝablono malsukcesas.

Meti `^` kaj `$` ĉirkaŭ ŝablonon devigas ĝin kongrui kun la **tuta** ĉeno, kun nenio restanta ĉe ambaŭ flankoj:

```raku
say so 'hello'       ~~ /^ hello $/; # True
say so 'hello world' ~~ /^ hello $/; # False
```

Tio estas tre ofta idiomaĵo por validigo — «ĉu ĉi tiu ĉeno estas ekzakte nombro?», ekzemple:

```raku
say so '2025' ~~ /^ \d+ $/; # True
say so '20a5' ~~ /^ \d+ $/; # False
```

## Liniaj ankroj

Kiam ĉeno havas plurajn liniojn, la partneroj `^^` kaj `$$` kongruas ĉe la komenco kaj fino de **ĉiu linio** anstataŭ de la tuta ĉeno. La diferenco disde `^` kaj `$` montriĝas tuj kiam la teksto, kiun vi volas, ne estas sur la unua linio: la unuoblaj ankroj vidas nur la tutan ĉenon kaj malsukcesas, dum la duoblaj kongruas sur ajna linio.

```raku
say so "cat\ndog" ~~ /^  dog  $/;  # False
say so "cat\ndog" ~~ /^^ dog $$/;  # True
```

Ĉi tie `\n` komencas duan linion. La `^^` postulas, ke `dog` sidu ĉe la komenco de linio kaj `$$` ĉe la fino de unu; ambaŭ validas sur la dua linio, do la duoblaj ankroj sukcesas, kie la unuoblaj ne povas.

{% include nav.html %}
