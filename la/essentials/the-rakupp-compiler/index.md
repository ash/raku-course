---
title: Compilator Raku++ 🆕
translations_gpt:
---

{% include menu.html %}

**Raku++** — cuius programma exsecutabile `rakupp` nominatur — est alter compilator Raku, primum mense Iulio anni 2026 emissus. Ubi Rakudo in machina virtuali MoarVM currit, Raku++ in **C++** scriptum est et nulla machina virtuali propria eget.

Est simul **interpres** et **compilator**: programma directe exsequi potest, vel illud in codicem nativum transferre ad maiorem celeritatem. Quia nullum grave systema exsecutionis incipiendum est, `rakupp` intra pauca millisecunda incipit, quod eum ad brevia scripta et cotidianum laborem in linea imperandi iucundum reddit. Auctor eum compilatorem Raku celerrimum esse describit.

Raku++ ex more Raku 6.d implet, 6.e autem cum programma id per `use v6.e.PREVIEW` petit. Versio 5.4.1, mense Octobri anni 2026 emissa, omnia 1425 archiva probationum seriei Roast transit — officialis series probationum Raku.

Raku++ etiam in navigatro interretiali currit: in WebAssembly compilatum, palaestram apud [raku.online](https://raku.online) movet, ubi Raku experiri potes nihil installans.

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
