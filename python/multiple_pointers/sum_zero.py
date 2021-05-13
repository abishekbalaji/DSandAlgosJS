def sum_zero(arr):
    i = 0
    j = i + 1
    while True:
        if i == len(arr) - 1:
            return None
        elif j == len(arr):
            i += 1
            j = i
        elif arr[i] + arr[j] == 0:
            return [arr[i], arr[j]]
        j += 1
    

print(sum_zero([6, -3, -2, 0, 1, 2, 3]))

# For sorted list

def sum_zero_sorted(arr):
    i = 0
    j = len(arr) - 1
    while i < j:
        total = arr[i] + arr[j]
        if total == 0:
            return [arr[i], arr[j]]
        elif total > 0:
            j -= 1
        elif total < 0:
            i += 1
    return None

print(sum_zero_sorted([-3, -2, 0, 1, 3]))
