---
title: Verschachtelte Hashes
---

{% include menu.html %}

Das Erstellen von verschachtelten Hashes ist ähnlich wie das Erstellen von [verschachtelten Arrays](/de/essentials/positionals/nested-arrays). Verwenden Sie geschweifte Klammern, um die inneren Hashes einzuschließen.

```raku
my %people =
    John => {
        age => 20,
        city => 'Madrid'
    },
    Alla => {
        age => 21,
        city => 'Tokyo'
    };
```

Beachten Sie, dass ein abschließendes Komma ein gültiges Syntaxelement ist:

```raku
my %people =
    John => {
        age => 20,
        city => 'Madrid',
    },
    Alla => {
        age => 21,
        city => 'Tokyo',
    };
```

Ein Komma zu haben, hilft, wenn Sie die Struktur durch Kopieren und Einfügen der Zeilen bearbeiten.

Um die Elemente aus den inneren Hashes zu erhalten, verwenden Sie zwei Schlüssel nacheinander.

```raku
say %people<John><city>; # Madrid
say %people<Alla><city>; # Tokyo
```

{% include nav.html %}