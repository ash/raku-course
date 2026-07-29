---
title: 'Solution: Заглушете предупреждение'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $name;

my $greeting = quietly { "Hello, " ~ $name ~ "!" };
say $greeting;
```

🦋 Изходният код на тази програма можете да намерите във файла [silence-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/silence-warning.raku).

## Изход

```
Hello, !
```

## Коментари

1. Интерполирането на неопределената `$name` в низа нормално предизвиква предупреждение „use of uninitialized value". Обвиването на израза в `quietly` го потиска, така че се отпечатва само поздравът.

1. Подобно на `do`, `quietly` връща стойността на своя блок, така че съставеният низ (с липсващото име, оставящо празно място) се записва в `$greeting`.

1. `quietly` само скрива предупреждението — стойността все още е неопределена. Ако вместо това искате да *се справите* с липсващата стойност, задайте стойност по подразбиране с оператора за определеност `//`: `$name // 'friend'` дава `'friend'`, когато `$name` е неопределена, така че `"Hello, " ~ ($name // 'friend') ~ "!"` отпечатва `Hello, friend!` без никакво предупреждение.

{% include nav.html %}
