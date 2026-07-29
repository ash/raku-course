---
title: 'Решение: Подайте манипулатор на функция'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub log-line($fh, $message) {
    $fh.say($message);
}

my $fh = open 'log.txt', :w;
log-line($fh, 'started');
log-line($fh, 'working');
log-line($fh, 'done');
$fh.close;

print slurp 'log.txt';
```

🦋 Намерете програмата във файла [pass-a-handle.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/pass-a-handle.raku).

## Изход

```
started
working
done
```

## Коментари

1. Манипулаторът, върнат от `open`, е просто стойност, съхранена в `$fh`, така че може да бъде подаден на `log-line` като аргумент, също като низ или число. Вътре в подпрограмата `$fh.say` пише през същия отворен манипулатор.

1. Понеже манипулаторът остава отворен през трите извиквания, всяко `log-line` добавя още един ред към същия файл. `close` след това изтласква всичко, а `slurp` прочита трите реда обратно.

1. Именно това прави манипулаторите компонуеми: функцията може да приеме манипулатор и да пише в него (или да чете от него), без да се интересува към кой файл сочи — това решава извикващият, когато отваря файла.

{% include nav.html %}
