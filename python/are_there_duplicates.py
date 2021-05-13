# Counters

def are_there_duplicates(*args):
    counter = {}
    for x in args:
        if counter.get(x):
            return True
        counter[x] = 1
    return False

print(are_there_duplicates(1, 2, 3, 4, 1))

# Multiple pointers

def are_there_duplicates2(*args):
    i = 0
    j = 1
    while  i < len(args) - 1:
        if j == len(args):
            i += 1
            j = i
        elif args[i] == args[j]:
            return True
        j += 1
    return False

print(are_there_duplicates2(1, 2, 3, 4, 2, 1, 3))

# Multiple pointers 2

def are_there_duplicates3(*args):
    arg_list = list(args)
    arg_list.sort()
    start = 0
    next_ = 1
    while next_ < len(arg_list):
        if arg_list[start] == arg_list[next_]:
            return True
        start += 1
        next_ += 1
    return False


print(are_there_duplicates3(2, 1, 4, 5 ,7, 1))

def are_there_duplicates4(*args):
    return not len(set(args)) == len(args)
    

print(are_there_duplicates4(2, 1, 4, 5 ,7))
