INSERT INTO dogs
    (name,age,picture,breed,sex,owner_id)
VALUES($1, $2, $3, $4, $5, $6)
RETURNING *;