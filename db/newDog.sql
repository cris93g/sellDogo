INSERT INTO dogs
    (name,age,picture,breed,sex,owner_id,price,descript)
VALUES($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING *;