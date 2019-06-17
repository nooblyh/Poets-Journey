import json
list=[]
for i in range(1,8):
    file = open('./WangWeiCoords/coord'+str(i)+'.json', mode='r',encoding='UTF-8-sig')
    list+=json.load(file)
print(list)

with open('./WangWeiCoords/coord.json','w+') as coord:
        json.dump(list, coord, ensure_ascii=False)