---
title: 'Тест — `try`'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

```raku
my $r = try {
    die 'Boom!';
    say 'inside';
};

say 'outside';
```

{:.quiz}
1 | outside
0 | inside
0 | inside, а потім outside
0 | Boom!
0 | помилку

{% include quiz.html %}

<div class="extended-explanation">

Тут стаються дві речі. По-перше, `die` негайно перериває решту блоку `try`, тож до рядка `say 'inside'` виконання ніколи не доходить — зсередини блоку нічого не виводиться. По-друге, оскільки `try` перехоплює виняток, сама програма не зупиняється: виконання триває далі за блоком, і `say 'outside'` спрацьовує звичайно. Тож єдиним виведеним рядком є `outside`. (`$r` була б невизначеною, а повідомлення `Boom!` чекало б у `$!`, якби ви туди зазирнули.)

</div>

{% include nav.html %}
