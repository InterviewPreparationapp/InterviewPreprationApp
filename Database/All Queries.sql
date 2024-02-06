CREATE SCHEMA IF NOT EXISTS `InterviewApp` ;


use InterviewApp;
show tables;
 desc Admin;
 
 desc Users;
 
 desc Interviewers;
 desc DemoQuestions;
 
 CREATE TABLE IF NOT EXISTS `InterviewApp`.`Admin` (
  `Adminid` INT(4) NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(20) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(20) NOT NULL,
  `Role` VARCHAR(10) NOT NULL,
  `EmptyCol1` VARCHAR(45) NULL DEFAULT NULL,
  `EmptyCol2` INT NULL DEFAULT NULL,
  `EmptyCol3` INT NULL DEFAULT NULL,
  PRIMARY KEY (`Adminid`),
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `InterviewApp`.`Users` (
  `Userid` INT(4) NOT NULL AUTO_INCREMENT,
  `FirstName` VARCHAR(20) NOT NULL,
  `LastName` VARCHAR(20) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(20) NOT NULL,
  `Mobile` VARCHAR(20) NOT NULL,
  `Address` VARCHAR(45) NULL,
  `Dob` DATE NOT NULL,
  `Qualification` VARCHAR(20) NOT NULL,
  `Profile` VARCHAR(45) NULL,
  `LastModified` DATETIME NULL,
  `Gender` VARCHAR(9) NOT NULL,
  `Role` VARCHAR(9) NOT NULL,
  `Adminid` INT NULL,
  `EmptyCol1` INT NULL DEFAULT NULL,
  `EmptyCol2` VARCHAR(45) NULL DEFAULT NULL,
  `EmptyCol3` TINYINT NULL DEFAULT NULL,
  `EmptyCol4` VARCHAR(45) NULL DEFAULT NULL,
  `EmptyCol5` VARCHAR(30) NULL DEFAULT NULL,
  `EmptyCol` TINYINT NULL DEFAULT NULL,
  PRIMARY KEY (`Userid`),
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE,
  INDEX `fk_admin_user_idx` (`Adminid` ASC) VISIBLE,
  CONSTRAINT `fk_admin_control`
    FOREIGN KEY (`Adminid`)
    REFERENCES `InterviewApp`.`Admin` (`Adminid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `InterviewApp`.`Interviewers` (
  `Interviewerid` INT(4) NOT NULL AUTO_INCREMENT,
  `FirstName` VARCHAR(20) NOT NULL,
  `LastName` VARCHAR(20) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(20) NOT NULL,
  `Mobile` VARCHAR(20) NULL,
  `Address` VARCHAR(45) NULL,
  `Dob` DATE NOT NULL,
  `CompanyPosition` VARCHAR(45) NOT NULL,
  `QualifiedDegree` VARCHAR(20) NOT NULL,
  `Profile` VARCHAR(45) NULL,
  `ProfileUpdated` DATETIME NULL,
  `Gender` VARCHAR(9) NOT NULL,
  `Role` VARCHAR(15) NOT NULL,
  `Adminid` INT NULL,
  `EmptyCol1` INT NULL DEFAULT NULL,
  `EmptyCol2` VARCHAR(45) NULL DEFAULT NULL,
  `EmptyCol3` VARCHAR(45) NULL DEFAULT NULL,
  `EmptyCol4` VARCHAR(30) NULL DEFAULT NULL,
  `EmptyCol5` TINYINT NULL DEFAULT NULL,
  PRIMARY KEY (`Interviewerid`),
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE,
  INDEX `fk_admin_Interviewers_idx` (`Adminid` ASC) VISIBLE,
  CONSTRAINT `fk_admin_control_1`
    FOREIGN KEY (`Adminid`)
    REFERENCES `InterviewApp`.`Admin` (`Adminid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `InterviewApp`.`Sessions` (
  `id` INT(4) NOT NULL ,
  `SessionToken` VARCHAR(45) NULL,
  `EmptyCol1` INT NULL DEFAULT NULL,
  `EmptyCol2` VARCHAR(45) NULL DEFAULT NULL,
  `EmptyCol3` VARCHAR(45) NULL DEFAULT NULL,
  `EmptyCol4` VARCHAR(30) NULL DEFAULT NULL,
  `EmptyCol5` TINYINT NULL DEFAULT NULL,
  INDEX `Admin_key_idx` (`id` ASC) VISIBLE,
  CONSTRAINT `Interviewer_key`
    FOREIGN KEY (`id`)
    REFERENCES `InterviewApp`.`Interviewers` (`Interviewerid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Admin_key`
    FOREIGN KEY (`id`)
    REFERENCES `InterviewApp`.`Admin` (`Adminid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `User_key`
    FOREIGN KEY (`id`)
    REFERENCES `InterviewApp`.`Users` (`Userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

	CREATE TABLE IF NOT EXISTS `InterviewApp`.`DemoQuestions` (
	  `Questionid` INT(4) NOT NULL AUTO_INCREMENT,
	  `Question` TEXT NOT NULL,
	  `Answer` TEXT NOT NULL,
	  `Subjectid` INT NULL,
	  `EmptyCol1` INT NULL DEFAULT NULL,
	  `EmptyCol2` VARCHAR(45) NULL DEFAULT NULL,
	  `EmptyCol3` VARCHAR(45) NULL DEFAULT NULL,
	  `EmptyCol4` VARCHAR(30) NULL DEFAULT NULL,
	  `EmptyCol5` TINYINT NULL DEFAULT NULL,
	  PRIMARY KEY (`Questionid`),
	  INDEX `fk_subjectid_idx` (`Subjectid` ASC) VISIBLE,
	  CONSTRAINT `fk_subjectid`
		FOREIGN KEY (`Subjectid`)
		REFERENCES `InterviewApp`.`SubjectsTypes` (`Subjectid`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION)
	ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `InterviewApp`.`SubjectsTypes` (
  `Subjectid` INT(4) NOT NULL AUTO_INCREMENT,
  `Subjects` VARCHAR(20) NOT NULL,
  `Title` VARCHAR(20) NULL,
  `EmptyCol1` INT NULL DEFAULT NULL,
  `EmptyCol2` VARCHAR(45) NULL DEFAULT NULL,
  `EmptyCol3` VARCHAR(45) NULL DEFAULT NULL,
  `EmptyCol4` VARCHAR(30) NULL DEFAULT NULL,
  `EmptyCol5` TINYINT NULL DEFAULT NULL,
  PRIMARY KEY (`Subjectid`))
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `InterviewApp`.`FeedbackRecords` (
  `Feedbackid` INT(4) NOT NULL AUTO_INCREMENT,
  `Interviewerid` INT(4) NULL,
  `Userid` INT(4) NULL,
  `Feedback` TEXT NULL,
  `EmptyCol1` INT NULL DEFAULT NULL,
  `EmptyCol2` VARCHAR(45) NULL DEFAULT NULL,
  `EmptyCol3` VARCHAR(45) NULL DEFAULT NULL,
  `EmptyCol4` VARCHAR(30) NULL DEFAULT NULL,
  `EmptyCol5` TINYINT NULL DEFAULT NULL,
  PRIMARY KEY (`Feedbackid`),
  INDEX `fk_interviewerid_idx` (`Interviewerid` ASC) VISIBLE,
  INDEX `fk_userid_idx` (`Userid` ASC) VISIBLE,
  CONSTRAINT `fk_interviewer_feedback`
    FOREIGN KEY (`Interviewerid`)
    REFERENCES `InterviewApp`.`Interviewers` (`Interviewerid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_feedback`
    FOREIGN KEY (`Userid`)
    REFERENCES `InterviewApp`.`Users` (`Userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `InterviewApp`.`InterviewSceduled` (
  `Interviewid` INT(4) NOT NULL AUTO_INCREMENT,
  `Date` DATETIME NULL,
  `Title` VARCHAR(20) NULL,
  `Interviewerid` INT(4) NULL,
  `Userid` INT(4) NULL,
  `EmptyCol1` INT NULL DEFAULT NULL,
  `EmptyCol2` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`Interviewid`),
  INDEX `fk_interviewerid_idx` (`Interviewerid` ASC) VISIBLE,
  INDEX `fk_userid_idx` (`Userid` ASC) VISIBLE,
  CONSTRAINT `fk_interviewers`
    FOREIGN KEY (`Interviewerid`)
    REFERENCES `InterviewApp`.`Interviewers` (`Interviewerid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users`
    FOREIGN KEY (`Userid`)
    REFERENCES `InterviewApp`.`Users` (`Userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `InterviewApp`.`InterviewsRecords` (
  `Interviewid` INT(4) NOT NULL AUTO_INCREMENT,
  `Interviewerid` INT(4) NULL,
  `Userid` INT(4) NULL,
  PRIMARY KEY (`Interviewid`),
  INDEX `fk_interviewerRecords_idx` (`Interviewerid` ASC) VISIBLE,
  INDEX `fk_userRecords_idx` (`Userid` ASC) VISIBLE,
  CONSTRAINT `fk_interviewerRecords`
    FOREIGN KEY (`Interviewerid`)
    REFERENCES `InterviewApp`.`Interviewers` (`Interviewerid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_userRecords`
    FOREIGN KEY (`Userid`)
    REFERENCES `InterviewApp`.`Users` (`Userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Interviews`
    FOREIGN KEY (`Interviewid`)
    REFERENCES `InterviewApp`.`InterviewSceduled` (`Interviewid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

 ALTER TABLE Admin AUTO_INCREMENT = 1000;
 
 ALTER TABLE Users AUTO_INCREMENT = 0001;
 
 ALTER TABLE Interviewers AUTO_INCREMENT = 2000;
 
 ALTER TABLE DemoQuestions AUTO_INCREMENT = 5000;
 
 ALTER TABLE InterviewSceduled AUTO_INCREMENT = 3000;

ALTER TABLE FeedbackRecords AUTO_INCREMENT = 0001;


 INSERT into Users (FirstName,LastName,Email,Password,Mobile,Address,Dob,Qualification,LastModified,Gender,Role)
values('Aniket','Pawar','anikets@gmail.com','user','9998887771','pune','1999-01-01','B.Tech',now(),'Male','User');
 
 Insert into Admin(Name,Email,Password,Role)
 values('Aniket','aniket1@gmail.com','aniket','admin');

INSERT INTO Interviewers(FirstName,LastName,Email,Password,Mobile,Address,Dob,CompanyPosition,QualifiedDegree,ProfileUpdated,Gender,Role) 
                   values('Aniket','pawar','aniket@gmail.com','interviewer','999999999','pune','2000-01-01','Microsoft','M.Tech',now(),'Male','Interviewer');

 insert into SubjectsTypes(Subjects,Title) values('Programming','Java');
 
 select * from Users;
 SELECT * FROM Admin;
 select * from Interviewers;
 select * from SubjectsTypes;

select * from DemoQuestions;
 
 
 Insert into DemoQuestions(Question,Answer,Subjectid) values('Question: Explain the concept of encapsulation in Java and provide an example.',
 "Answer Encapsulation is one of the four fundamental Object-Oriented Programming (OOP) concepts. It refers to the bundling of data (attributes) and methods (functions) that operate on the data into a single unit known as a class. Encapsulation restricts direct access to some of an object's components, providing a protective barrier around the object's internal state."
 ,1);
