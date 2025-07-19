create table emp(
emp_id serial primary key,
emp_name Text not null,
is_married boolean default false,
dob date,
created_at timestamp,
profile_data json
);

INSERT INTO EMP(emp_name, is_married,dob, created_at, profile_data)
values
('Akash',true,'1998-02-12','2025-05-23 12:12:12', '{"hobby":"cricket"}'),
('Pooja',true,'1998-02-12','2025-05-23 12:12:12', '{"hobby":"cricket"}');



INSERT INTO EMP(emp_name,dob, created_at, profile_data)
values
('Akash','1998-02-12','2025-05-23 12:12:12', '{"hobby":"cricket"}');

select * from emp;