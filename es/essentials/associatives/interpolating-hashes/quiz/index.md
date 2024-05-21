---
title: Quiz — Interpolating hashes
---

{% include menu.html %}

Dado el siguiente hash:

```raku
my %letters = α => 'Alpha', β => 'Beta', γ => 'Gamma';
```

Completa los siguientes programas para obtener la salida solicitada.

## 1

Usando el hash, imprime el nombre de la letra griega `β`. Usa la forma sin comillas alrededor de la cadena clave.

{:.quiz-code}
&lt;β&gt; | say &quot;La letra β se llama %letters␣␣.&quot;;

## 2

Usando el hash, imprime el nombre de la letra griega `β`. Usa la forma donde la clave está entre comillas simples.

{:.quiz-code}
{&apos;β&apos;} | say &quot;La letra β se llama %letters␣␣␣␣.&quot;;


## 3

Imprime las letras y sus nombres como una tabla.

{:.quiz-code}
letters{ | say &quot;Aquí hay algunas letras griegas:\n%␣␣␣␣␣}\netc.&quot;; | Nota que la salida puede no estar ordenada.

La posible salida para este caso es:

    Aquí hay algunas letras griegas:
    α	Alpha
    β	Beta
    γ	Gamma
    etc.

{% include quiz.html %}

{% include nav.html %}