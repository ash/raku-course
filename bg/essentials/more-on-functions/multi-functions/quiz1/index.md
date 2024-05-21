---
title: Тест 1 — Прости мулти-функции
---

{% include menu.html %}

Кои са правилните начини за създаване на мулти-функция?

## 1

```raku
sub func($a) {. . .}
sub func($a, $b) {. . .}
```

{:.quiz-select}
incorrect | Тези дефиниции са&nbsp; (: correct, incorrect :) | Липсва деклараторът `multi`.

## 2

```raku
multi func($a) {. . .}
multi func($a, $b) {. . .}
```

{:.quiz-select}
correct | Тези дефиниции са&nbsp; (: correct, incorrect :) | Липсва деклараторът `sub`, но това е приемливо.

## 3

```raku
multi sub func($a) {. . .}
multi sub func($a, $b) {. . .}
```

{:.quiz-select}
correct | Тези дефиниции са&nbsp; (: correct, incorrect :) | Напълно перфектно.

## 4

```raku
sub multi func($a) {. . .}
sub multi func($a, $b) {. . .}
```

{:.quiz-select}
incorrect | Тези дефиниции са&nbsp; (: correct, incorrect :) | Трябва да бъде `multi` `sub`, а не `sub` `multi`.

## 5

```raku
multi sub func($a) {. . .}
multi sub func($b) {. . .}
```

{:.quiz-select}
incorrect | Тези дефиниции са&nbsp; (: correct, incorrect :) | Подписите не могат да бъдат разграничени при многократно разпределение.


{% include quiz.html %}

{% include nav.html %}