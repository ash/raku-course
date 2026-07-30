---
title: Wortgrenzen
translations_gpt:
---

{% include menu.html %}

`cat` zu treffen gelingt innerhalb von `category`, denn die drei Buchstaben stehen dort tatsächlich. Oft ist das nicht, was Sie wollen — Sie meinen das ganze Wort `cat`. Ein Anker für eine _Wortgrenze_ löst das.

* `<<` trifft am **linken** Rand eines Wortes (dem Wortanfang)
* `>>` trifft am **rechten** Rand eines Wortes (dem Wortende)

Hüllen Sie ein Wort in diese Anker, um es nur als vollständiges Wort zu treffen:

```raku
say 'the cat sat' ~~ /<< cat >>/;    # ｢cat｣
say so 'category'  ~~ /<< cat >>/;   # False
```

In `category` steht direkt hinter `cat` keine Wortgrenze, das verankerte Muster scheitert also — genau das Verhalten, das wir wollten.

Eine Wortgrenze liegt zwischen einem Wortzeichen (`\w`) und einem Nicht-Wortzeichen, sie verbraucht also selbst nichts; wie `^` und `$` behauptet sie nur eine Position.

Die beiden Anker lassen sich auch mit den Guillemet-Zeichen `«` und `»` schreiben, wenn Ihnen die lieber sind. Sie verhalten sich genau wie `<<` und `>>`:

```raku
say 'the cat sat' ~~ /« cat »/;  # ｢cat｣
say so 'category'  ~~ /« cat »/;  # False
```

{% include nav.html %}
