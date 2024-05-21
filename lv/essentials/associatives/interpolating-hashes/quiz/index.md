---
title: Viktorīna — Interpolācija ar hešiem
---

{% include menu.html %}

Ņemot vērā sekojošo hešu:

```raku
my %letters = α => 'Alpha', β => 'Beta', γ => 'Gamma';
```

Pabeidziet zemāk esošās programmas, lai iegūtu pieprasīto izvadi.

## 1

Izmantojot hešu, izdrukājiet grieķu burta `β` nosaukumu. Izmantojiet formu bez pēdiņām ap atslēgas virkni.

{:.quiz-code}
&lt;β&gt; | say &quot;Burts β tiek saukts par %letters␣␣.&quot;;

## 2

Izmantojot hešu, izdrukājiet grieķu burta `β` nosaukumu. Izmantojiet formu, kur atslēga ir pēdiņās.

{:.quiz-code}
{&apos;β&apos;} | say &quot;Burts β tiek saukts par %letters␣␣␣␣.&quot;;


## 3

Izdrukājiet burtus un to nosaukumus kā tabulu.

{:.quiz-code}
letters{ | say &quot;Šeit ir daži grieķu burti:\n%␣␣␣␣␣}\nutml.&quot;; | Ņemiet vērā, ka izvade var nebūt sakārtota.

Iespējamā izvade šajā gadījumā ir:

    Šeit ir daži grieķu burti:
    α	Alpha
    β	Beta
    γ	Gamma
    utml.

{% include quiz.html %}

{% include nav.html %}