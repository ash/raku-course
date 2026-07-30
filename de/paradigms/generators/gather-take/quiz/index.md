---
title: 'Quiz — gather und take'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
my @a = gather {
    for 1..5 {
        take $_ if $_ > 3;
    }
}

say @a;
```

{:.quiz}
0 | [1 2 3 4 5]
1 | [4 5]
0 | [1 2 3]
0 | [3 4 5]

{% include quiz.html %}

<div class="extended-explanation">

Das `take` läuft nur, wenn `$_ > 3`, der Liste werden also nur `4` und `5` hinzugefügt. Alles andere wird übersprungen, was `[4 5]` ergibt.

</div>

{% include nav.html %}
