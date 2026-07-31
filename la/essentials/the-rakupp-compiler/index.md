---
title: Compilator Raku++ 🆕
translations_gpt:
---

{% include menu.html %}

**Raku++** — cuius programma exsecutabile `rakupp` nominatur — est alter compilator Raku, primum mense Iulio anni 2026 emissus. Ubi Rakudo in machina virtuali MoarVM currit, Raku++ in **C++** scriptum est et nulla machina virtuali propria eget.

Est simul **interpres** et **compilator**: programma directe exsequi potest, vel illud in codicem nativum transferre ad maiorem celeritatem. Quia nullum grave systema exsecutionis incipiendum est, `rakupp` intra pauca millisecunda incipit, quod eum ad brevia scripta et cotidianum laborem in linea imperandi iucundum reddit. Auctor eum compilatorem Raku celerrimum esse describit.

Raku++ Raku 6.d implet (cum quibusdam facultatibus 6.e). In versione 1.5.2 iam circiter 90% seriei probationum Roast transit — officialis series probationum Raku. Iuvenis est, itaque totam linguam nondum comprehendit, sed celeriter crescit.

## Modi interpretis et compilatoris

Programma statim exsequere, sicut cum Rakudo faceres:

```console
$ rakupp hello.raku
```

Vel pete ut Raku++ programma in exsecutabile nativum et solitarium vertat, quod etiam celerius currit:

```console
$ rakupp --exe hello.raku -o hello
$ ./hello
```

Ad cotidianum discendum modus interpretis simplex omnino sufficit; modi compilandi adsunt cum maiorem celeritatem desideras.

## Codex fons

Raku++ fontis aperti est. Illud, una cum binariis emissis et praeceptis aedificandi, invenies apud [github.com/ash/rakupp](https://github.com/ash/rakupp).

{% include nav.html %}
