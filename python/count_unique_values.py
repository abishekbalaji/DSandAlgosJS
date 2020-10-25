# Implement a function called countUniqueValues which accepts a sorted array and counts
# unique values in the array. There can be negative numbers in the array
# but it will always be sorted.

def count_unique_values(arr):
    i = 0
    j = 1
    while j < len(arr):
        if not arr[i] == arr[j]:
            i += 1
            arr[i] = arr[j]
        j += 1
    return i + 1

print(count_unique_values([-2, -1, 0, 0, 1, 1, 2, 4, 5, 5]))
print(count_unique_values([-2, -1, 0, 0]))

def count_unique_values2(arr):
    counter = {}
    for x in arr:
        try:
            if counter[x]:
                counter[x] += 1
        except KeyError:
            counter[x] = 1
    return len(counter.keys())

print(count_unique_values2([-2, -1, 0, 0, 1, 1, 2, 4, 5, 5]))

def count_unique_values3(arr):
    return len(set(arr))
        
print(count_unique_values3([-2, -1, 0, 0, 1, 1, 2, 4, 5, 5]))

def count_unique_values4(arr):
    i = 0
    stack = [arr[i]]
    while i < len(arr) - 1:
        if not stack[-1] == arr[i + 1]:
            stack.append(arr[i + 1]) 
        i += 1
    return len(stack)

print(count_unique_values4([-2, -1, 0, 0, 1, 1, 2, 4, 5, 5]))

def count_unique_values5(arr):
    stack = [arr[0]]
    for i in range(1, len(arr)):
        if not arr[i] in stack:
            stack.append(arr[i])
    return len(stack)

print(count_unique_values5([-2, -1, 0, 0, 1, 1, 2, 4, 5, 5]))
        