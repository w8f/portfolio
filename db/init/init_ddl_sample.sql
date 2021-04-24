CREATE TABLE Sample (
    id         SERIAL PRIMARY KEY,
    name       varchar(20),
    age        int,
    create_date timestamp,
    update_date timestamp
);

Insert into sample values(1,'sample花子',24,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
