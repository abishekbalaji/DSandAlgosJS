students = []
for i in range(5):
    student = input()
    students.append(student)
    
print(students)


d = {"a": 1}

if d.get('b'):
    print(True)
else:
    print("Damn bro")

mydict = {83:  80}
txt = "Hello Sam!"
print(txt.translate(mydict))