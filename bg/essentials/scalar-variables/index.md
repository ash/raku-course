---
title: Скаларни променливи
---

{% include menu.html %}

Досега, програмите, които видяхме, имаха твърдо кодирани текстови низове. Нека въведем малко свобода и позволим на програмата да използва променливи.

Има няколко типа променливи в Raku. Променливата е контейнер, който може да съхранява някакви данни. Ще започнем с най-простите контейнери, които могат да съхраняват само една стойност. Такива контейнери се наричат _скалари_ или скаларни променливи. Променливата има име, предшествано от специален индикатор, който показва природата на контейнера. Този индикатор е символ, наречен _сигил_. За скаларните контейнери, такъв сигил е символът долар `$`.

Ето няколко примера за скаларни променливи:

```raku
$name

$age
```

{% include nav.html %}