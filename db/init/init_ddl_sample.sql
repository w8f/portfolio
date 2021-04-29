CREATE TABLE mst_user (
    id          SERIAL PRIMARY KEY,
    user_id     varchar(30),
    user_nm     varchar(60),
    mail        varchar(254),
    password    varchar(256),
    create_date timestamp,
    update_date timestamp
);

Insert into mst_user values(nextval('mst_user_id_seq'::regclass),'trial_user', 'お試しユーザ','sample@sample.co.jp','password',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
