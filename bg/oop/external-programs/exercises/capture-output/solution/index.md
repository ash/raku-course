---
title: 'Решение: Уловете изхода'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $proc = run 'echo', 'hello world raku', :out;
my $output = $proc.out.slurp(:close).trim;
say $output.words.elems;
```

🦋 Намерете програмата във файла [capture-output.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/capture-output.raku).

## Изход

```
3
```

## Коментари

1. `:out` пренасочва изхода на програмата в `Proc` вместо на екрана, а `.out.slurp(:close)` го прочита целия обратно; `.trim` премахва завършващия нов ред, който `echo` добавя.

1. Щом изходът е обикновен низ в нашата програма, ние го третираме като всякакви други данни: `.words.elems` го разделя по празните места и преброява парчетата, давайки `3`. Точно това е смисълът на улавянето — външната програма става градивен блок, чийто резултат обработваме нататък.

{% include nav.html %}
