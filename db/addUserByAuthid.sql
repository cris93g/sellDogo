INSERT INTO owners
    (firstname,lastname, auth_id,picture,username)
VALUES
    ($1, $2,
        $3, $4, $5)
RETURNING *;