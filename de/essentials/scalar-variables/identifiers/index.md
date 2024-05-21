---
title: Variablennamen
---

{% include menu.html %}

Bevor wir weitergehen, lassen Sie uns etwas Zeit auf ein interessantes Thema der erlaubten Namen von Variablen verwenden. Bisher haben wir einfache Namen wie `$name` oder `$age` gesehen, die vollständig aus Kleinbuchstaben des englischen Alphabets bestanden. Aber es gibt noch mehr Möglichkeiten.

## Groß- und Kleinschreibung

Namen der Variablen (oder _Bezeichner_) sind groß- und kleinschreibungssensitiv. Das bedeutet, dass alle unten stehenden Namen auf unterschiedliche skalare Container verweisen:

```raku
$myname

$MyName

$myName

$MYNAME
```

Es liegt an Ihnen, sich an ein Namensschema zu halten, aber Sie können wahrscheinlich die vollständig großgeschriebenen Namen für Konstanten reservieren.

## Andere Zeichen

Unter den ASCII-Zeichen können Sie Ziffern, das Unterstrich-Zeichen `_`, einen Bindestrich `-` und das einfache Anführungszeichen (das für Apostroph steht) `'` verwenden. Beachten Sie, dass das erste Zeichen des Bezeichners entweder ein Buchstabe oder ein Unterstrich sein muss. Sowohl `-` als auch `'` müssen von einem alphabetischen Zeichen gefolgt werden. Hier sind ein paar weitere gültige Bezeichner:

```raku
$___

$a'b'c

$my-name

$address2
```

Auch hier liegt es an Ihnen, die Namen zu wählen, aber es ist wahrscheinlich keine gute Praxis, absichtlich Namen zu wählen, die kryptisch aussehen.

## Unicode-Zeichen

Die Definition von Buchstaben und Ziffern wird tatsächlich erweitert, um all jene Zeichen einzuschließen, die gemäß ihren Unicode-Eigenschaften als Buchstaben und Dezimalziffern gelten. Zum Beispiel sind die nächsten Variablen in Raku gültig:

```raku
$привет

$駱駝道

$αβγ

$Δ۲ # wobei ۲ eine Ziffer ist
```

{% include nav.html %}