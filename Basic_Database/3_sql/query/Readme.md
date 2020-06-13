ค้นหาชื่อและอายุจากกะลาสีทุกคน

    select sname,age from sailors;
***
ค้นหาชื่อและอายุจากกะลาสีทุกคน(ซ้ำ)

    select distinct sl.sname,sl.age from sailors sl;
***
ค้นหาชื่อของกะลาสีทั้งหมดที่จองเรือรหัส 103

    select s.sname from sailors s left join reserves r on s.id = r.id where r.bid = 103;
***
ค้นหา sid ทั้งหมดขของกะลาสีเรือที่จองเรือสีแดง

    select distinct r.sid from reserves r left join boats b on r.bid = b.bid where b.color = 'red' ;
***
ค้นหาชื่อ ทั้งหมดขของกะลาสีเรือที่จองเรือสีแดง(join 3 table)

    select * from sailors s left join reserves r 
    on s.sid=r.sid
    left join boats b on r.bid = b.bid where b.color = 'red';
***
ค้นหาสีของเรือทั้งหมดที่ถูกจองโดย 'Lubber'(join 3 table)

    select * from sailors s left join reserves r 
    on s.sid=r.sid
    left join boats b on r.bid = b.bid where s.sname = 'Lubber' ;
***

ค้นหากะลาสีเรือที่จองเรืออย่างน้อย 1 ลำ

    select * from sailors s left join reserves r 
    on s.sid=r.sid
    where bid is not null ;
***

ค้นหาชื่อกะลาสีเรือทั้งหมดที่จองเรือสีแดงหรือสีเขียว

    select * from sailors s left join reserves r 
    on s.sid=r.sid
    left join boats b on r.bid = b.bid where b.color ='red' or b.color = 'green';
***

ค้นหาชื่อกะลาสีเรือทั้งหมดที่จองเรือทั้งสีแดงและสีเขียว
    
    select * from sailors s where s.sid in
    (
        select distinct s.sid from sailors s left join reserves r 
        on s.sid=r.sid
        left join boats b on r.bid = b.bid where b.color ='red'
    )
    and s.sid in
    (
        select distinct s.sid from sailors s left join reserves r 
        on s.sid=r.sid
        left join boats b on r.bid = b.bid where b.color ='green'
    )
    
***

ค้นหาชื่อกะลาสีเรือทั้งหมดที่จองเรือสีแดงแต่ไม่จองสีเขียว
    
    select * from sailors s where s.sid in
    (
        select distinct s.sid from sailors s left join reserves r 
        on s.sid=r.sid
        left join boats b on r.bid = b.bid where b.color ='red'
    )
    and s.sid not in
    (
        select distinct s.sid from sailors s left join reserves r 
        on s.sid=r.sid
        left join boats b on r.bid = b.bid where b.color ='green'
    )
    
***