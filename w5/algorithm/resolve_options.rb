# Given a string that includes curly braces containing a set of |pipe| separated options,
# select one of those options at random from the set, and replace the set in the string with the option selected.

test = "{1|2} and {7|3|4} test:{{ 1| {3|4|5}| 6}| num}"
test_2 = "1:{a|b|c|d} 2:{e 3:{f|g} 4:{h|i}|{j{{|||{|||}}}|k|l} 3:m 4:{n|o|p}}"
