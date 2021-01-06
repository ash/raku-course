---
title: String length in Raku
---

{% include menu.html %}

The Unicode nature of the strings makes some trivial things it a bit more difficult. Or, at least, you need to think of it as of a less straightforward topic. Take, for example, the length of a string. Is it the number of characters, or is it the number of bytes? Or what if the same character is decomposed differently in different strings, is it still one character?

## Length in characters

To get the lengths of the string in characters, use the `chars` _method_:

```raku
my $str = '你好世界';
say $str.chars;
```

While we’ll talk about methods later, we already should be able to use them. In Raku, you can call methods on almost every object, including strings and scalar variables. To call a method, use a dot. So, here we see the method called on a variable that keeps a string: `$str.chars`.

There are four characters in this Chinese greeting 你好世界. And `$str.chars` returns exactly `4`.

## Length in bytes

Just for the reference, this is how you get the lengths of the string in bytes. In this case, it is important to know which encoding is used to keep the string:

```raku
my $str = '你好世界';
say $str.encode('UTF-8').bytes;
```

This time, the program prints `12`. Notice that we have two chained method calls in the second line here.

## Length in code points

Just for the completeness, here is another useful method that also relates to string lengths: `codes`. It returns the number of code points in the string after it is being normalized. In many cases, `codes` and `chars` return the same. Still, in some rare cases, when, for example, you built ‘an impossible’ character, for which there is no single codepoint in the whole Unicode space, the methods give different results.

```raku
say 'x̨'.chars;
say 'x̨'.codes;
```

This character, `x̨`, does not have a dedicated code point and can only be constructed from the two parts: the lowercase letter `x` and the combining character `0x0328`. So, there is still one character but two codepoints. So, the program prints:

    1
    2

{% include nav.html %}
