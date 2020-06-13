ค้นหาจำนวนของกะลาสีเรือทั้งหมด
    
    select count(*) from sailors
    
***
ค้นหาผลรวมของอายุกะลาสีเรือทั้งหมดที่มี rating เท่ากับ 10
    
    select sum(age) from sailors where rating = 10;
    
***
ค้นหาผลรวมของอายุกะลาสีเรือทั้งหมดที่มี rating เท่ากับ 10
    
    select sum(age) from sailors where rating = 10;
    
***
ค้นหาค่าเฉลี่ยยอายุกะลาสีเรือทั้งหมดที่มี rating เท่ากับ 10
    
    select avg(age) from sailors where rating = 10;
    
***
ค้นหาชื่อคนที่มีอายุมากที่สุด
    
   select s.name from sailors  s where s.age in (select max(age) from sailors) 
    
***
ค้นหาชื่อคนที่มีอายุระหว่าง25 และ 35
    
   select distinct s.name from sailors  s where s.age between 25 and 35
    
***