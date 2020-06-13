ค้นหาเลขบัญชีที่เปิดในสาขา riverside
    
    select a.account_number from branch b left join account a on b.branch_name = a.branch_name where b.branch_city = 'Riverside'


    select account_number from account where branch_name in (select branch_name from branch where branch_city = 'Riverside')

***

ค้นหาเลขบัญชีที่เปิดในสาขา a หรือ b
    
    select account_number from account where branch_name = 'a' or branch_name = 'b'

    select account_number from account where branch_name in ('a','b')
    
***

ค้นหาจำนวนเงินทั้งหมดแต่ละคนฟาก
    
    select customer,sum(balance) account_number from depositor d left join account a on d.account_number  = a.account_number 
    group by d.customer_name

    
***

ค้นหาจำนวนเงินทั้งหมดแต่ละคนฟากที่มีบัญชีธนาคารอย่างน้อย 2 บัญชี
    
    select customer,sum(balance) account_number from depositor d left join account a on d.account_number  = a.account_number 
    group by d.customer_name having count(*)>1

    
***

ค้นหาจำนวนเงินทั้งหมดแต่ละคนฟากที่มีบัญชีธนาคารอย่างน้อย 2 บัญชีดดยเรียงมากไปน้อย
    
    select customer,sum(balance) account_number from depositor d left join account a on d.account_number  = a.account_number 
    group by d.customer_name having count(*)>1 order by sum(balance)

    
***