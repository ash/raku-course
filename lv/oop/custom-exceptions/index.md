---
title: Paša veidoti izņēmumi
translations_gpt:
---

{% include menu.html %}

Bez iebūvētajiem `X::` izņēmumiem varat definēt savējos. Paša definēts izņēmums ir klase, kas manto no iebūvētās klases `Exception` un nodrošina metodi `message`:

```raku
class TooBig is Exception {
    has $.value;

    method message {
        "Value $.value is too big";
    }
}
```

`TooBig` ir parasta klase — tai var būt atribūti, piemēram, `value` —, taču, tā kā tā `is Exception`, to var izmest. To izmetat, izveidojot objektu un izsaucot uz tā `.throw`:

```raku
my $value = 20 * 30;

TooBig.new(value => $value).throw if $value > 50;

CATCH {
    when TooBig {
        say .message;
    }
}
```

Programma izdrukā:

```
Value 600 is too big
```

`CATCH` iekšienē `when TooBig` atbilst, jo izmestais objekts ir šī tipa. Paša definēts izņēmums nes sev līdzi tos datus, ko tam dodat (šeit `value`), tāpēc apstrādātājs var uzbūvēt precīzu paziņojumu vai reaģēt konkrētā veidā — daudz noderīgāk nekā vienkārša virkne, kas padota `die`.

Tas savij kopā visu šo daļu: paša definēts izņēmums ir _klase_ (ar atribūtiem un metodi), kas piedalās izņēmumu mehānismā, gatava paziņot tieši to, kas noticis greizi.

{% include nav.html %}
