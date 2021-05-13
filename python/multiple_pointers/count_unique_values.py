def count_unique_values(arr):
    return len(set(arr))


print(count_unique_values([1, 2, 1, 2, 1, 1, 3]))


# Works only on sorted lists

def count_unique_values_2(arr):
    i = 0
    j = i + 1
    count = 1
    while j <= len(arr) - 1:
        if arr[i] != arr[j]:
            i = j
            count += 1
        j += 1
    return count


print(count_unique_values_2([-1, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4]))

def count_unique_values_3(arr):
    i = 0
    j = i + 1
    while j <= len(arr) - 1:
        if arr[i] != arr[j]:
            i += 1
            arr[i] = arr[j]
        j += 1
    return i + 1

print(count_unique_values_3([-1, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4]))
print(count_unique_values_3([-1, 0, 1, 1, 2, 2, 3, 4, 4, 4, 4, 5, 6, 6, 20]))


def count_unique_values_3_re(arr):
    i = 0
    for j in range(1, len(arr)):
        if arr[i] != arr[j]:
            i += 1
            arr[i] = arr[j]
    return i + 1

print(count_unique_values_3_re([-1, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4]))
print(count_unique_values_3_re([-1, 0, 1, 1, 2, 2, 3, 4, 4, 4, 4, 5, 6, 6, 20]))