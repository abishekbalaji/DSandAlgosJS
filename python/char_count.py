def is_alpha_numeric(char):
    if (char > 47 and char < 58) or (char > 64 and char < 91) or (char > 96 and char < 123):
        return True
    return False

def char_count(string):
    counter = {}
    for char in string:
        if is_alpha_numeric(ord(char)):
            char = char.lower()
            try:
                if counter[char]:
                    counter[char] += 1
            except KeyError as key:
                counter[char] = 1
    return counter

print(char_count("hello world"))