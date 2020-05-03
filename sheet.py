import csv

sheets=[]

f=open('11.csv','r')
read=csv.reader(f)

for line in read :
    sheets.append(line)
    
f.close