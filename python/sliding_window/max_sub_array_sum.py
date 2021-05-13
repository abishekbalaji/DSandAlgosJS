def max_subarray_sum(arr, window):
    if window > len(arr):
        return None
    maximum = -99999999
    i = 0
    j = 0
    total = 0
    while i <= len(arr) - 1:
        if i == window + j -1:
            i = j
            j += 1
            if total > maximum:
                maximum = total
            total = 0
        total += arr[i]
        i += 1
    return maximum


print(max_subarray_sum([1, 2, 5, 2, 8, 1, 5], 2))

print(max_subarray_sum([1, 2, 5, 2, 8, 1, 5], 4))


# Brute force

def max_subarray_sum_2(arr, window):
    if window > len(arr):
        return None
    maximum = -9999999
    for i in range(len(arr) - window):
        temp = 0
        for j in range(window):
            temp += arr[i + j]
        if temp > maximum:
            maximum = temp
    return maximum

print(max_subarray_sum_2([1, 2, 5, 2, 8, 1, 5], 2))

print(max_subarray_sum_2([1, 2, 5, 2, 8, 1, 5], 4))

            
# Sliding window

def max_subarray_sum_3(arr, window):
    if window > len(arr):
        return None
    max_sum = 0
    temp_sum = 0
    for x in arr[:window]:
        max_sum += x
    temp_sum = max_sum
    for i in range(window, len(arr)):
        temp_sum += (arr[i] - arr[i - window])
        max_sum = max(max_sum, temp_sum)
    return max_sum

print(max_subarray_sum_3([1, 2, 5, 2, 8, 1, 5], 2))

print(max_subarray_sum_3([1, 2, 5, 2, 8, 1, 5], 4))

