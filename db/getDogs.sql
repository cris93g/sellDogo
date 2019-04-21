SELECT *
FROM dogs d JOIN owners o ON d.owner_id= o.owner_id
WHERE o.owner_id=$1