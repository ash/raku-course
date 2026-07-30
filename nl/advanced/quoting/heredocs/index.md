---
title: Heredocs
translations_gpt:
---

{% include menu.html %}

Een _heredoc_ is een quoting-vorm voor tekst over meerdere regels. In plaats van scheidingstekens om de tekst heen, geef je een afsluitwoord op met `:to`, en de string loopt vanaf de volgende regel tot een regel die alleen dat woord bevat:

```raku
my $text = q:to/END/;
Hello,
World!
END

print $text;
```

Dit drukt af:

```
Hello,
World!
```

Het afsluitwoord (`END` hier — elk woord is mogelijk) markeert waar de tekst eindigt. Let op de `print`: de tekst behoudt de nieuwe regel die voor het afsluitwoord staat, dus hij eindigt al met een regelafbreking — het gebruik van `say` zou er een tweede toevoegen en een lege regel aan het einde achterlaten. Omdat de heredoc begint met `q:to`, wordt de tekst niet geinterpoleerd; gebruik `qq:to` om variabelen te interpoleren:

```raku
my $name = 'Anna';

my $greeting = qq:to/EOF/;
Dear $name,
Welcome!
EOF

print $greeting;
```

Een nuttig detail: de **inspringging van het afsluitende afsluitwoord** wordt van elke regel van de tekst verwijderd. Hierdoor kun je een heredoc laten inspringen om aan te sluiten bij de omringende code zonder dat die inspringging in de string terechtkomt:

```raku
sub greeting {
    return q:to/END/;
        Hello,
        World!
        END
}

print greeting;
```

Dit drukt hetzelfde `Hello,` en `World!` af als het eerste voorbeeld. Hier is het afsluitende `END` acht spaties ingesprongen, dus acht spaties worden van elke regel verwijderd, en de teruggegeven string is gewoon `Hello,\nWorld!` zonder voorloopspaties.

Het afsluitende afsluitwoord bepaalt hoeveel er wordt verwijderd, dus elke regel van de tekst moet minstens zo ver zijn ingesprongen. Als een regel minder voorloopspaties heeft, kan Raku niet de volledige hoeveelheid verwijderen en geeft een waarschuwing — *Asked to remove 8 spaces, but the shortest indent is 4 spaces*. Houd het afsluitwoord niet dieper dan de minst ingesprongen regel om dit te voorkomen. Heredocs zijn de natuurlijke keuze voor sjablonen, berichten en elk blok tekst dat meerdere regels beslaat.

{% include nav.html %}
