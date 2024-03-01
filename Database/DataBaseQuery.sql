-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema InterviewApp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema InterviewApp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `InterviewApp` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `InterviewApp` ;

-- -----------------------------------------------------
-- Table `InterviewApp`.`Admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `InterviewApp`.`Admin` (
  `Adminid` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(20) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(20) NOT NULL,
  `Role` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`Adminid`),
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 1008
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `InterviewApp`.`Interviewers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `InterviewApp`.`Interviewers` (
  `Interviewerid` INT NOT NULL AUTO_INCREMENT,
  `FirstName` VARCHAR(20) NOT NULL,
  `LastName` VARCHAR(20) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(20) NOT NULL,
  `Mobile` VARCHAR(20) NULL DEFAULT NULL,
  `Address` VARCHAR(45) NULL DEFAULT NULL,
  `Dob` DATE NOT NULL,
  `CompanyPosition` VARCHAR(45) NULL DEFAULT NULL,
  `QualifiedDegree` VARCHAR(100) NULL DEFAULT NULL,
  `Profile` VARCHAR(100) NULL DEFAULT NULL,
  `ProfileUpdated` DATETIME NULL DEFAULT NULL,
  `Gender` VARCHAR(9) NOT NULL,
  `Role` VARCHAR(15) NULL DEFAULT NULL,
  `Adminid` INT NULL DEFAULT NULL,
  `Titles` VARCHAR(500) NULL DEFAULT NULL,
  PRIMARY KEY (`Interviewerid`),
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE,
  INDEX `fk_admin_Interviewers_idx` (`Adminid` ASC) VISIBLE,
  CONSTRAINT `fk_admin_control_1`
    FOREIGN KEY (`Adminid`)
    REFERENCES `InterviewApp`.`Admin` (`Adminid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 2022
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `InterviewApp`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `InterviewApp`.`Users` (
  `Userid` INT NOT NULL AUTO_INCREMENT,
  `FirstName` VARCHAR(20) NOT NULL,
  `LastName` VARCHAR(20) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(20) NULL DEFAULT NULL,
  `Mobile` VARCHAR(20) NOT NULL,
  `Address` VARCHAR(45) NULL DEFAULT NULL,
  `Dob` DATE NOT NULL,
  `Qualification` VARCHAR(20) NOT NULL,
  `Profile` VARCHAR(100) NULL DEFAULT NULL,
  `LastModified` DATETIME NULL DEFAULT NULL,
  `Gender` VARCHAR(9) NOT NULL,
  `Role` VARCHAR(9) NOT NULL,
  `Adminid` INT NULL DEFAULT NULL,
  PRIMARY KEY (`Userid`),
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE,
  INDEX `fk_admin_user_idx` (`Adminid` ASC) VISIBLE,
  CONSTRAINT `fk_admin_control`
    FOREIGN KEY (`Adminid`)
    REFERENCES `InterviewApp`.`Admin` (`Adminid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 59
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `InterviewApp`.`FeedbackRecords`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `InterviewApp`.`FeedbackRecords` (
  `Feedbackid` INT NOT NULL AUTO_INCREMENT,
  `Interviewerid` INT NULL DEFAULT NULL,
  `Userid` INT NULL DEFAULT NULL,
  `Feedback` TEXT NULL DEFAULT NULL,
  `Interviewid` INT NULL DEFAULT NULL,
  PRIMARY KEY (`Feedbackid`),
  INDEX `fk_interviewerid_idx` (`Interviewerid` ASC) VISIBLE,
  INDEX `fk_userid_idx` (`Userid` ASC) VISIBLE,
  CONSTRAINT `fk_interviewer_feedback`
    FOREIGN KEY (`Interviewerid`)
    REFERENCES `InterviewApp`.`Interviewers` (`Interviewerid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `new_fk_user_feedback`
    FOREIGN KEY (`Userid`)
    REFERENCES `InterviewApp`.`Users` (`Userid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `InterviewApp`.`InterviewSceduled`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `InterviewApp`.`InterviewSceduled` (
  `Interviewid` INT NOT NULL AUTO_INCREMENT,
  `Date` DATETIME NULL DEFAULT NULL,
  `Title` INT NULL DEFAULT NULL,
  `Interviewerid` INT NULL DEFAULT NULL,
  `Userid` INT NULL DEFAULT NULL,
  `Status` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`Interviewid`),
  INDEX `fk_interviewerid_idx` (`Interviewerid` ASC) VISIBLE,
  INDEX `fk_userid_idx` (`Userid` ASC) VISIBLE,
  CONSTRAINT `fk_interviewers`
    FOREIGN KEY (`Interviewerid`)
    REFERENCES `InterviewApp`.`Interviewers` (`Interviewerid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `new_fk_users`
    FOREIGN KEY (`Userid`)
    REFERENCES `InterviewApp`.`Users` (`Userid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 3091
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `InterviewApp`.`Skills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `InterviewApp`.`Skills` (
  `skillid` INT NOT NULL AUTO_INCREMENT,
  `skill` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`skillid`))
ENGINE = InnoDB
AUTO_INCREMENT = 50
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `InterviewApp`.`InterviewerSkill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `InterviewApp`.`InterviewerSkill` (
  `interviewer_id` INT NULL DEFAULT NULL,
  `skillid` INT NULL DEFAULT NULL,
  INDEX `interviewer_id` (`interviewer_id` ASC) VISIBLE,
  INDEX `skillid` (`skillid` ASC) VISIBLE,
  CONSTRAINT `InterviewerSkill_ibfk_1`
    FOREIGN KEY (`interviewer_id`)
    REFERENCES `InterviewApp`.`Interviewers` (`Interviewerid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `InterviewerSkill_ibfk_2`
    FOREIGN KEY (`skillid`)
    REFERENCES `InterviewApp`.`Skills` (`skillid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `InterviewApp`.`QuestionsForUsers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `InterviewApp`.`QuestionsForUsers` (
  `Questionid` INT NOT NULL AUTO_INCREMENT,
  `Question` TEXT NULL DEFAULT NULL,
  `Answer` TEXT NULL DEFAULT NULL,
  `skillid` INT NULL DEFAULT NULL,
  PRIMARY KEY (`Questionid`),
  INDEX `fk_subjectid_idx` (`skillid` ASC) VISIBLE,
  CONSTRAINT `fk_skillid`
    FOREIGN KEY (`skillid`)
    REFERENCES `InterviewApp`.`Skills` (`skillid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 14
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `InterviewApp`.`InterviewRecords`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `InterviewApp`.`InterviewRecords` (
  `InterviewidR` INT(4) NULL,
  `IntervieweridR` INT(4) NULL,
  `UseridR` INT(4) NULL,
  INDEX `fk_InterviewRecords_1_idx` (`UseridR` ASC) VISIBLE,
  INDEX `fk_InterviewRecords_2_idx` (`IntervieweridR` ASC) VISIBLE,
  INDEX `fk_InterviewRecords_3_idx` (`InterviewidR` ASC) VISIBLE,
  CONSTRAINT `fk_InterviewRecords_1`
    FOREIGN KEY (`UseridR`)
    REFERENCES `InterviewApp`.`Users` (`Userid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_InterviewRecords_2`
    FOREIGN KEY (`IntervieweridR`)
    REFERENCES `InterviewApp`.`Interviewers` (`Interviewerid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_InterviewRecords_3`
    FOREIGN KEY (`InterviewidR`)
    REFERENCES `InterviewApp`.`InterviewSceduled` (`Interviewid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
