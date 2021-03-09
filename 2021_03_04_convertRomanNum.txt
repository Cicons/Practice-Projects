'''
given a roman numeral string, convert it to an integer

# "I" -> 1
# "IV" -> 4
# "XII" -> 12
# "XX" -> 20
# "MIV" -> 1004
# "MLXVI" -> 1066

# "IV" -> 4
# "IX" -> 9
# "XL" -> 40
# "XC" -> 90
# "CD" -> 400
# "CM" -> 900

# https://en.wikipedia.org/wiki/Roman_numerals

# if you are given a inavlid roman numeral, return 0
'''

def convert(roman):
    number = 0
    prev = 'x'
    rep = 0

    for val in roman:
        print('val: ' + val)
        print('prev: ' + prev)
        print('rep: ' + str(rep))

        # if val = I, add 1
        if val == 'I':
            number += 1

        # if val = V:
        elif val == 'V':
            # if prev = I, add 3
            if prev == 'I':
                number += 3
            # else, add 5
            else:
                number += 5

        # if val = X,
        elif val == 'X':
            # if prev = I, add 8
            if prev == 'I':
                number += 8
            # else, add 10
            else:
                number += 10

        # if val = L,
        elif val == 'L':
            # if prev = X, add 30
            if prev == 'X':
                number += 30
            # else, add 50
            else:
                number += 50

        # if val = C,
        elif val == 'C':
            # if prev = X, add 80
            if prev == 'X':
                number += 80
            # else, add 100
            else:
                number += 100

        # if val = D,
        elif val == 'D':
            # if prev = C, add 300
            if prev == 'C':
                number += 300
            # else, add 500
            else:
                number += 500

        # if val = M,
        elif val == 'M':
            # if prev = C, add 800
            if prev == 'C':
                number += 800
            # else, add 1000
            else:
                number += 1000

        else:
            print('Not a Roman Numeral')
            return None

        # IIII

        if val == prev:
            rep += 1
            # rep is 2 or less (one less than max characters)
            if val == 'I' and rep > 2:
                print('Not a Roman Numeral')
                return None
        else:
            rep = 0

        prev = val

    return number


string = 'III'
print(string, convert(string))

