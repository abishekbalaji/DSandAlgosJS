# Write a function called averagePair. Given a sorted array of integers and a target average, determine
# if there is a pair of values in the array where the average of the
# pair equals the target average. There may be more than one pair
# that matches the average target.

def average_pair(l, avg):
    i = 0
    j = len(l) - 1
    
    while not i == j:
        temp_avg = (l[i] + l[j]) / 2
        if temp_avg == avg:
            return True
        elif temp_avg > avg:
            j -= 1
        else:
            i += 1
    return False

print(average_pair([1, 2, 7], 2.5))