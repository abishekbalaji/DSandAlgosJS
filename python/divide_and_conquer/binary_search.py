def binary_search(arr, num):
    if len(arr) == 0: return -1
    first = 0
    last = len(arr) - 1
    while first <= last:
        mid = int((first + last) // 2)
        if arr[mid] == num:
            return mid
        elif arr[mid] > num:
            last = mid - 1
        elif arr[mid] < num:
            first = mid + 1
    return -1


print(binary_search([2, 3, 5, 8, 67, 78, 79, 100], 78))
