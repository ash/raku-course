[Compute a factorial](../)

# The solution

Here is the solution of the problem ‘[Compute a factorial](../)‘ that uses a reduction operator.

## Code

    my $n = 5;

    my $factorial = [*] 1..$n;

    say $factorial;

You can find the full code in the file [factorial-reduction.raku](https://github.com/ash/raku-course/blob/master/problems/factorial-metaoperator/solution/factorial-reduction.raku).

## Output

To see the output, run the program as shown below:

    $ raku factorial-reduction.raku
    120

## Discussion

The input numer `$n` is the number that we immediately use in the range `1..$n`. This range generates a sequence of integers from 1 to `$n` (including both 1 and `$n`) that is then passed to the reduction operator `[*]`. The ‘regular operator’ in this reduction construction is multiplication operator `*`, so the the whole line is — for the input number 5 — equivalent to:

    1 * 2 * 3 * 4 * 5

Which is by definition a factorian of `$n`.

The program works correctly for the input numbers bigger than 1. Suprisingly enough, it even works for 0.

## Refresh your knowledge

* [Reduction metaoperator](/raku-course/metaoperators/reduction-metaoperators)

