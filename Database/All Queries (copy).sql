Alter table InterviewSceduled rename column EmptyCol2 to Status ;
Alter table InterviewSceduled drop column EmptyCol1;


//path size increases of user profile
Alter table Users modify column Profile varchar(100);


//path size increases of interviewer profile
Alter table Interviewers modify column Profile varchar(100);
