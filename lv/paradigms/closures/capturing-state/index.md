---
title: Slēgumi
translations_gpt:
---

{% include menu.html %}

_Slēgums_ ir apakšprogramma, kas satver mainīgos no tā redzamības apgabala, kurā tā tika definēta, un patur tos dzīvus pat pēc tam, kad šis apgabals beidzies. Tas dod apakšprogrammai savu privātu, noturīgu stāvokli.

Klasiskais piemērs ir skaitītājs:

```raku
sub make-counter {
    my $n = 0;
    return sub { ++$n };
}

my &count = make-counter;
say count(); # 1
say count(); # 2
say count(); # 3
```

Mainīgais `$n` ir deklarēts `make-counter` iekšienē. Atgrieztā apakšprogramma atsaucas uz `$n`, tāpēc tā noslēdzas pār to: katrs `count` izsaukums palielina un atgriež **to pašu** `$n`, lai gan pati `make-counter` beidza darbu jau sen.

Katrs `make-counter` izsaukums rada svaigu `$n`, tāpēc atsevišķi skaitītāji ir neatkarīgi:

```raku
my &a = make-counter;
my &b = make-counter;
say a(); # 1
say a(); # 2
say b(); # 1
```

Slēgumi ļauj funkcijai nest stāvokli bez globāla mainīgā un bez objekta. Tie ir funkcionālās programmēšanas veids, kā atcerēties kaut ko starp izsaukumiem.

{% include nav.html %}
