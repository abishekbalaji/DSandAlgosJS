# Multiple pointers

def average_pair(arr, target):
    if target > arr[len(arr) - 1] or len(arr) <= 1: return False
    # target = float(f"{target:.1f}")
    i = 0
    j = len(arr) - 1
    while i < j:
        avg = (arr[i] + arr[j]) / 2
        if avg == target:
            return True
        elif avg > target:
            j -= 1
        else:
            i += 1
    return False

print(average_pair([1, 2, 3], 2))
