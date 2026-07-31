---
title: Heredoc
---

{% include menu.html %}

Un _heredoc_ è una forma di quoting per testo su più righe. Invece di delimitatori attorno al testo, si indica una parola terminatore con `:to`, e la stringa va dalla riga successiva fino a una riga che contiene solo quella parola:

```raku
my $text = q:to/END/;
Hello,
World!
END

print $text;
```

Questo stampa:

```
Hello,
World!
```

Il terminatore (`END` qui — qualsiasi parola va bene) indica dove finisce il testo. Nota il `print`: il testo mantiene il carattere di nuova riga che si trova prima del terminatore, quindi termina già con un'interruzione di riga — usare `say` ne aggiungerebbe una seconda e lascerebbe una riga vuota finale. Poiché l'heredoc inizia con `q:to`, il testo non viene interpolato; usa `qq:to` per interpolare le variabili:

```raku
my $name = 'Anna';

my $greeting = qq:to/EOF/;
Dear $name,
Welcome!
EOF

print $greeting;
```

Un dettaglio utile: l'**indentazione del terminatore di chiusura** viene rimossa da ogni riga del testo. Questo ti permette di indentare un heredoc per allinearlo al codice circostante senza che quell'indentazione finisca nella stringa:

```raku
sub greeting {
    return q:to/END/;
        Hello,
        World!
        END
}

print greeting;
```

Questo stampa lo stesso `Hello,` e `World!` del primo esempio. Qui il terminatore di chiusura `END` è indentato di otto spazi, quindi otto spazi vengono rimossi da ogni riga, e la stringa restituita è semplicemente `Hello,\nWorld!` senza spazi iniziali.

Il terminatore di chiusura stabilisce quanto viene rimosso, quindi ogni riga del testo deve essere indentata almeno altrettanto. Se una riga ha meno spazi iniziali, Raku non può rimuovere l'intera quantità e avvisa — *Asked to remove 8 spaces, but the shortest indent is 4 spaces*. Mantieni il terminatore non più profondo della riga con meno indentazione per evitarlo. Gli heredoc sono la scelta naturale per template, messaggi e qualsiasi blocco di testo che si estende su più righe.

{% include nav.html %}
