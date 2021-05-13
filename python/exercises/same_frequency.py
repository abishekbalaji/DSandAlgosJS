def same_frequency(num1, num2):
    num1 = str(num1)
    num2 = str(num2)
    if len(num1) != len(num2): return False
    counter = {}
    for char in num1:
        if counter.get(char):
            counter[char] += 1
        else:
            counter[char] = 1
    for char in num2:
        if not counter.get(char) or counter.get(char) == 0:
            return False
        counter[char] -= 1
    return True


print(same_frequency(182, 281))
print(same_frequency(18223, 28111))
print(same_frequency(34, 14))
print(same_frequency(22, 222))
print(same_frequency(3589578, 5879385))
