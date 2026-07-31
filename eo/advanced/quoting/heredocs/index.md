---
title: Heredokoj
translations_gpt:
---

{% include menu.html %}

_Heredoc_ estas cita formo por plur-linia teksto. Anstataŭ limigiloj ĉirkaŭ la teksto, vi donas finan vorton per `:to`, kaj la ĉeno daŭras de la sekva linio ĝis linio enhavanta nur tiun vorton:

```raku
my $text = q:to/END/;
Hello,
World!
END

print $text;
```

Tio presas:

```
Hello,
World!
```

La finilo (`END` ĉi tie — ajna vorto taŭgas) markas kie la teksto finiĝas. Notu la `print`: la teksto konservas la novlinion kiu sidas antaŭ la finilo, do ĝi jam finiĝas per liniorompo — uzi `say` aldonus duan kaj lasus finan malplenan linion. Ĉar la heredoc komenciĝas per `q:to`, la teksto ne estas interpolata; uzu `qq:to` por interpoli variablojn:

```raku
my $name = 'Anna';

my $greeting = qq:to/EOF/;
Dear $name,
Welcome!
EOF

print $greeting;
```

Utila detalo: la **krommarĝeno de la ferma finilo** estas forigita el ĉiu linio de la teksto. Tio ebligas vin krommarĝenigi heredoc-on por kongrui kun la ĉirkaŭa kodo sen ke tiu krommarĝeno aperu en la ĉeno:

```raku
sub greeting {
    return q:to/END/;
        Hello,
        World!
        END
}

print greeting;
```

Tio presas la samajn `Hello,` kaj `World!` kiel la unua ekzemplo. Ĉi tie la ferma `END` estas krommarĝenigita per ok spacetoj, do ok spacetoj estas forigitaj el ĉiu linio, kaj la returnita ĉeno estas nur `Hello,\nWorld!` sen komencaj spacetoj.

La ferma finilo determinas kiom estas forigita, do ĉiu linio de la teksto devas esti krommarĝenigita almenaŭ tiom. Se linio havas malpli da komencaj spacetoj, Raku ne povas forigi la plenan kvanton kaj avertas — *Asked to remove 8 spaces, but the shortest indent is 4 spaces*. Tenu la finilon ne pli profunde ol la plej malprofunda linio por eviti tion. Heredoc-oj estas la natura elekto por ŝablonoj, mesaĝoj, kaj ajna tekstobloko kiu etendas tra pluraj linioj.

{% include nav.html %}
