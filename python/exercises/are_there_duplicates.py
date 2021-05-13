# Frequency counter
def are_there_duplicates(*args):
    if len(args) == 0: return False
    counter = {}
    for char in args:
        if counter.get(char):
            return True
        counter[char] = 1
    return False

print(are_there_duplicates(1, 2, 3))
print(are_there_duplicates(1, 2, 2))

# Multiple pointers

def are_there_duplicates_2(*args):
    if len(args) == 0: return False
    i = 0
    j = 1
    while i < len(args) - 1:
        if j == len(args):
            i += 1
            j = i
        elif args[i] == args[j]:
            return True
        j += 1
    return False
        
print(are_there_duplicates_2(1, 2, 3))
print(are_there_duplicates_2(1, 2, 2))
