Alter table InterviewSceduled rename column EmptyCol2 to Status ;
Alter table InterviewSceduled drop column EmptyCol1;


--path size increases of user profile
Alter table Users modify column Profile varchar(100);


--path size increases of interviewer profile
Alter table Interviewers modify column Profile varchar(100);






Create Table InterviewerSkills (skillid int auto_increment primary key,skill varchar(50));


-- Assuming InterviewerSkills is your table and skill is the column for storing skills

Insert Into InterviewerSkills (skill) values('Data Structures');
Insert Into InterviewerSkills (skill) values('Algorithms');
Insert Into InterviewerSkills (skill) values('Object-Oriented Programming (OOP)');
Insert Into InterviewerSkills (skill) values('System Design');
Insert Into InterviewerSkills (skill) values('Databases and SQL');
Insert Into InterviewerSkills (skill) values('Operating Systems');
Insert Into InterviewerSkills (skill) values('Computer Networks');
Insert Into InterviewerSkills (skill) values('Web Development');
Insert Into InterviewerSkills (skill) values('Software Development Life Cycle (SDLC)');
Insert Into InterviewerSkills (skill) values('Version Control (Git)');
Insert Into InterviewerSkills (skill) values('Cloud Computing');
Insert Into InterviewerSkills (skill) values('Cybersecurity');
Insert Into InterviewerSkills (skill) values('Big Data and Analytics');
Insert Into InterviewerSkills (skill) values('Artificial Intelligence (AI)');
Insert Into InterviewerSkills (skill) values('Machine Learning (ML)');
Insert Into InterviewerSkills (skill) values('Natural Language Processing (NLP)');
Insert Into InterviewerSkills (skill) values('Computer Vision');
Insert Into InterviewerSkills (skill) values('Blockchain');
Insert Into InterviewerSkills (skill) values('Internet of Things (IoT)');
Insert Into InterviewerSkills (skill) values('Mobile App Development');
Insert Into InterviewerSkills (skill) values('Responsive Web Design');
Insert Into InterviewerSkills (skill) values('RESTful APIs');
Insert Into InterviewerSkills (skill) values('Microservices Architecture');
Insert Into InterviewerSkills (skill) values('Software Testing and Quality Assurance');
Insert Into InterviewerSkills (skill) values('DevOps Practices');
Insert Into InterviewerSkills (skill) values('Continuous Integration/Continuous Deployment (CI/CD)');
Insert Into InterviewerSkills (skill) values('Agile Methodology');
Insert Into InterviewerSkills (skill) values('Scrum Framework');
Insert Into InterviewerSkills (skill) values('Functional Programming');
Insert Into InterviewerSkills (skill) values('Compiler Design');
Insert Into InterviewerSkills (skill) values('Computer Graphics');
Insert Into InterviewerSkills (skill) values('Human-Computer Interaction (HCI)');
Insert Into InterviewerSkills (skill) values('Parallel and Distributed Computing');
Insert Into InterviewerSkills (skill) values('Data Mining');
Insert Into InterviewerSkills (skill) values('Cryptography');
Insert Into InterviewerSkills (skill) values('Game Development');
Insert Into InterviewerSkills (skill) values('Computer Architecture');
Insert Into InterviewerSkills (skill) values('Embedded Systems');
Insert Into InterviewerSkills (skill) values('Quantum Computing');
Insert Into InterviewerSkills (skill) values('Computational Complexity');
Insert Into InterviewerSkills (skill) values('Code Review Best Practices');
Insert Into InterviewerSkills (skill) values('Design Patterns');
Insert Into InterviewerSkills (skill) values('System Performance Optimization');
Insert Into InterviewerSkills (skill) values('Computer Ethics');
Insert Into InterviewerSkills (skill) values('Robotics');
Insert Into InterviewerSkills (skill) values('Software Maintenance');
Insert Into InterviewerSkills (skill) values('Code Refactoring');
Insert Into InterviewerSkills (skill) values('Debugging Techniques');
Insert Into InterviewerSkills (skill) values('System Scalability');
Insert Into InterviewerSkills (skill) values('Open Source Contribution');

ALTER TABLE InterviewerSkills RENAME TO Skills;

Alter table InterviewSceduled modify column Title int(4);

CREATE TABLE InterviewerSkill (
    interviewer_id INT(4),
    skillid INT(4),
    FOREIGN KEY (interviewer_id) REFERENCES Interviewers(Interviewerid) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (skillid) REFERENCES Skills(skillid) ON DELETE CASCADE ON UPDATE CASCADE
);


