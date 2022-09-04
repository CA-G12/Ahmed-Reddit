BEGIN;
INSERT INTO users (name, email, password) values 
 ('Mohammad', 'Mohammad@gmail.com', 'MohammadPassword'),
 ('Alan' , 'Alan@gmail.com', 'AlanPassword'),
 ('Ahmed', 'Ahmed@gmail.com', 'AhmedPassword'),
 ('Majd', 'Majd@gmail.com', 'MajdPassword'),
 ('Ali', 'Ali@gmail.com', 'AliPassword'), 
 ('Mai', 'Mai@gmail.com', 'MaiPassword'),
 ('John', 'John@gmail.com', 'JohnPassword');

INSERT INTO posts (post, likes, user_id) values 
 ('MohammadPost', 2, 1),
  ('MajdPost', 4, 4),
 ('AliPost', 6, 5),
 ('MaiPost', 8, 6),
 ('AlanPost' , 10, 2),
 ('AhmedPost', 12, 3),
 ('JohnPost', 14, 7);

INSERT INTO comments (comment, user_id, post_id) values 
 ('comment13', 1, 3),
 ('comment14' , 1, 4),
 ('comment41', 4, 1),
 ('comment52', 5, 2),
 ('comment25', 2, 5);

 INSERT INTO votes ( user_id, post_id) values 
 (1, 3),
 (1, 4),
 (4, 1),
 (5, 2),
 (2, 5);
 
 COMMIT;