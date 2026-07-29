---
title: 'Решение: Hyper отображение'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say <apple banana pear cherry>.hyper.map(*.uc).grep(*.chars > 4).join(' ');
```

🦋 Намерете програмата във файла [hyper-map.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/hyper-map.raku).

## Изход

```
APPLE BANANA CHERRY
```

## Коментари

1. `.hyper` изпълнява цялата верига — `map`, който превръща в главни букви, и `grep`, който филтрира по дължина — през нишки, паралелно.

1. Понеже `.hyper` запазва реда, оцелелите думи остават в първоначалната си последователност, така че `.join(' ')` дава `APPLE BANANA CHERRY`. Думата `pear`, само с четири букви, отпада.

{% include nav.html %}
