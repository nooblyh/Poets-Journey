import json
list=[]
for i in range(1,8):
    file = open('C:\\Users\\l4728\\Documents\\data_visualization\\WangWeiCoords\\coord'+str(i)+'.json', mode='r')
    list+=json.load(file)
print(list)

with open('C:\\Users\\l4728\\Documents\\data_visualization\\WangWeiCoords\\coord.json','w+') as coord:
        json.dump(list, coord, ensure_ascii=False)