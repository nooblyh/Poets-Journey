import json
list=[]
file = open('WangWei.txt', mode='r',encoding='UTF-8-sig')
lines = file.readlines()
i = 0
for line in lines:
    line.strip()
    if i % 3 == 0:
        line = line[:-1]
        list.append(line)
    i+=1
tofile = open('../stages/WangWeiStage.txt', mode='w+',encoding='UTF-8-sig')
tofile.write(str(list))
tofile.close()
