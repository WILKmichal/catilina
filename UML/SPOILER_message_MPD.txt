
CREATE DATABASE IF NOT EXISTS `mydb`;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`ROLE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ROLE` (
  `ID_ROLE` INT NOT NULL,
  `ROLE` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`ID_ROLE`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Nationalité`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Nationalité` (
  `ID_NATIONALITE` VARCHAR(3) NOT NULL,
  `NOM_NATIONALITE` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`ID_NATIONALITE`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `User` (
  `ID_USER` INT NOT NULL AUTO_INCREMENT,
  `NOM` VARCHAR(255) NOT NULL,
  `D_NAISS` DATE NOT NULL,
  `SEXE` TINYINT NOT NULL,
  `ADRESSE` VARCHAR(255) NOT NULL,
  `TEL` INT NOT NULL,
  `COURRIEL` VARCHAR(255) NOT NULL,
  `ETAT_CIVIL` VARCHAR(255) NOT NULL,
  `ID_P` VARCHAR(255) NOT NULL,
  `FACEBOOK` VARCHAR(255) NULL,
  `TWITTER` VARCHAR(255) NULL,
  `INSTAGRAM` VARCHAR(255) NULL,
  `MDP` VARCHAR(255) NOT NULL,
  `PRENOM` VARCHAR(255) NOT NULL,
  `ID_NATIONALITE` VARCHAR(3) NOT NULL,
  `ID_ROLE` INT NOT NULL,
  PRIMARY KEY (`ID_USER`),
  FOREIGN KEY (`ID_NATIONALITE`) REFERENCES `mydb`.`Nationalité` (`ID_NATIONALITE`),
  FOREIGN KEY (`ID_ROLE`)REFERENCES `ROLE`(`ID_ROLE`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Log`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Log` (
  `ACTION` VARCHAR(255) NOT NULL,
  `DATE_LOG` DATE NOT NULL,
  `ID_USER` INT NOT NULL,
  FOREIGN KEY (`ID_USER`)REFERENCES `User`(`ID_USER`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Theme`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Theme` (
  `ID_THEME` INT NOT NULL,
  `NOM_THEME` VARCHAR(255) NULL,
  PRIMARY KEY (`ID_THEME`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`SousTheme`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SousTheme` (
  `ID_SOUS_THEME` INT NOT NULL,
  `NOM_SOUS_THEME` VARCHAR(255) NOT NULL,
  `ID_THEME` INT NOT NULL,
  PRIMARY KEY (`ID_SOUS_THEME`),
  FOREIGN KEY (`ID_THEME`)REFERENCES `Theme`(`ID_THEME`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Concours`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Concours` (
  `ID_CONCOURS` INT NOT NULL AUTO_INCREMENT,
  `LIBEL_SH` VARCHAR(255) NOT NULL,
  `LIBEL_L` VARCHAR(7000) NOT NULL,
  `DATE_FIN` DATE NOT NULL,
  `ID_SOUS_THEME` INT NOT NULL,
  PRIMARY KEY (`ID_CONCOURS`),
  FOREIGN KEY (`ID_SOUS_THEME`)REFERENCES `SousTheme`(`ID_SOUS_THEME`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Photo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Photo` (
  `PATH_IMG` VARCHAR(255) NOT NULL,
  `ID_PATH` INT NOT NULL,
    FOREIGN KEY (`ID_PATH`)REFERENCES `User` (`ID_USER`),
    FOREIGN KEY (`ID_PATH`)REFERENCES `Concours` (`ID_CONCOURS`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Statut`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Statut` (
  `ID_STATUT` INT NOT NULL,
  `NOM_STATUT` VARCHAR(255) NULL,
  PRIMARY KEY (`ID_STATUT`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Inscription`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Inscription` (
  `ID_USER` INT NOT NULL,
  `ID_STATUT` INT NOT NULL,
  `ID_CONCOURS` INT NOT NULL,
    FOREIGN KEY (`ID_USER`)REFERENCES `User` (`ID_USER`),
    FOREIGN KEY (`ID_STATUT`)REFERENCES `Statut` (`ID_STATUT`),
    FOREIGN KEY (`ID_CONCOURS`)REFERENCES `Concours` (`ID_CONCOURS`))
ENGINE = InnoDB;



