---
title: 'Solvo: Eraro pri negativa nombro'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
class Negative is Exception {
    has $.n;

    method message {
        "$.n is negative";
    }
}

sub check($n) {
    Negative.new(n => $n).throw if $n < 0;
    return $n;
}

{
    say check(-5);

    CATCH {
        when Negative {
            say .message;
        }
    }
}

Negative.new(n => -10).throw;
```

🦋 Vi povas trovi la fontkodon en la dosiero [negative-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/negative-error.raku).

## Eligo

```
-5 is negative
-10 is negative
  in block <unit> at negative-error.raku line 24
```

## Komentoj

1. `Negative is Exception` faras la klason ĵetebla, kaj ĝia metodo `message` uzas la atributon `n` por konstrui la tekston.

1. `check` validigas sian enigon kaj ĵetas la propran escepton por negativa nombro. La escepto vojaĝas el `check` al la `CATCH` en la vokanta bloko, kie `when Negative` kongruas kun ĝi laŭ tipo kaj presas la mesaĝon. Validigi enigon kaj signali malbonajn valorojn per tipita escepto estas tre ofta, vera uzo de propraj esceptoj.

1. La `{ … }` ĉirkaŭ la voko estas tie, ĉar fazero `CATCH` traktas la esceptojn ĵetitajn en **sia propra ĉirkaŭa bloko**. La bloko grupigas la riskan `check(-5)` kune kun la `CATCH`, kiu gardas ĝin, do la ĵetita escepto estas kaptata ĝuste ĉi tie, kaj la ekzekuto rekomenciĝas tuj post la bloko. Sen envolvi ilin en blokon, la `CATCH` gardus la tutan programon anstataŭe — kaj post kiam ĝi kaptus la escepton, la programo simple finiĝus, kun neniu natura loko por daŭrigi.

1. La fina `Negative.new(n => -10).throw` montras la alian flankon de tio. Ĝi sidas **ekster** la bloko, do nenio kaptas ĝin: la escepto disvastiĝas ĝis la supro, kaj la programo mortas, presante la mesaĝon kaj retrospuron al norma erarfluo kaj elirante kun ne-nula statuso. Jen la defaŭlta sorto de ĉiu escepto, kiun vi ne kaptas — kaj ĝuste kial la unua ĵeto bezonis `CATCH` por postvivi.

{% include nav.html %}
