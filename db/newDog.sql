INSERT INTO dogs
    (name,age,picture,breed,sex)
VALUES($1, $2, $3, $4, $5)
RETURNING *;