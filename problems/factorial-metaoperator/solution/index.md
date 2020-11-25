[Concatenate a list](../)

# The solution

Here is the solution of the problem ‘[Compute a factorial](../)‘ that uses a reduction operator.

## Code

    sub factorial($n) {
        [*] 1..$n
    }

    say factorial(5);


You can find the full code in the file [factorial-reduction.raku](factorial-reduction.raku).

## Output

To see the output, run the program as shown below:

    $ raku factorial-reduction.raku
    120

## Discussion

The argumnet of the function `factorial` is the number that we immediately use in the range `1..$n`. This range generates a sequence of integers from 1 to `$n` (including both 1 and `$n`) that is then passed to the reduction operator `[*]`. The ‘regular operator’ in this reduction construction is multiplication operator `*`, so the the whole line is — for the input number 5 — equivalent to:

    1 * 2 * 3 * 4 * 5

Which is by definition a factorian of `$n`.

The function works correctly for the input numbers bigger than 1. Suprisingly enough, it even works for 0.

We can also make the function a bit stricter by specifying the input type of the parameter:

    sub factorial(Int $n) {
        [*] 1..$n
    }

As for the function body, you can also make it more traditional by adding an explicit `return` and the semicolon at the end of the line:

    sub factorial($n) {
        return [*] 1..$n;
    }

This is where you have to deside which style you prefer the best. For such short functions, it can also be an option to write the whole function in a single line:

    sub factorial($n) { [*] 1..$n }

## Refresh your knowledge

* [Reduction metaoperator](/metaoperators/reduction-metaoperators)
* [Functions](functions)
