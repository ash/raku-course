---
title: 'Решение: Номерирайте редовете'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
spurt 'words.txt', "apple\nbanana\ncherry\n";

my $n = 0;
for 'words.txt'.IO.lines -> $line {
    $n++;
    say "$n: $line";
}
```

🦋 Намерете програмата във файла [shout-the-lines.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/shout-the-lines.raku).

## Изход

```
1: apple
2: banana
3: cherry
```

## Коментари

1. `spurt` записва трите думи във файла, разделени с нови редове.

1. `.IO.lines` подава редовете един по един, без завършващите им нови редове. Държим брояч `$n`, който увеличаваме при всяко преминаване, така че всеки ред се отпечатва заедно с позицията си във файла.

{% include nav.html %}
