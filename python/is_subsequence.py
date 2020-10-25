# Write a function called isSubsequence which takes in two strings
# and checks whether the characters in the first string form a
# subsequence of the characters in the second string. In other words,
# the fuction should check whether the characters in the first string
# appear somewhere in the second string, without their order changing.

def is_subsequence(string1, string2):
    if string1 == "":
        return True
    if len(string1) > len(string2):
        return False
    i = 1
    try:
        j = string2.index(string1[0])
    except:
        return False
    while len(string2) - j >= len(string1) - i:
        if i == len(string1):
            return True
        elif string1[i] == string2[j]:
            i += 1
        j += 1
    return False

print(is_subsequence("hello", "hello world"))
print(is_subsequence("hlello", "helello word"))
print(is_subsequence("sing", "sting"))

def is_subsequence2(str1, str2):
    if str1 == None or str1 == "":
        return True
    if str2 == None or str2 == "":
        return False
    if (str1[0] == str2[0]):
        return is_subsequence2(str1[1:], str2[1:])
    return is_subsequence2(str1, str2[1:])

print(is_subsequence2("hello", "hello world"))
print(is_subsequence2("hlello", "helello word"))
print(is_subsequence2("sing", "sting"))
print(is_subsequence2("helloh", "helo word"))


