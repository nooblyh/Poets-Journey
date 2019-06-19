for i in range(1,20):
    file = open('./coord'+str(i)+'.json','r',encoding='UTF-8')
    x = file.readlines()
    tofile = open('./coord'+str(i)+'.json',mode='w+',encoding='UTF-8-sig')
    tofile.writelines(x)