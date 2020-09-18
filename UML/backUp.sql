-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 18 sep. 2020 à 17:10
-- Version du serveur :  10.4.13-MariaDB
-- Version de PHP : 7.4.7

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `mydb`
--
CREATE DATABASE IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `mydb`;

-- --------------------------------------------------------

--
-- Structure de la table `concours`
--

DROP TABLE IF EXISTS `concours`;
CREATE TABLE `concours` (
  `ID_CONCOURS` int(11) NOT NULL,
  `LIBEL_SH` varchar(255) NOT NULL,
  `LIBEL_L` varchar(7000) NOT NULL,
  `DATE_FIN` date NOT NULL,
  `ID_SOUS_THEME` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONS POUR LA TABLE `concours`:
--   `ID_SOUS_THEME`
--       `soustheme` -> `ID_SOUS_THEME`
--

--
-- Déchargement des données de la table `concours`
--

INSERT INTO `concours` (`ID_CONCOURS`, `LIBEL_SH`, `LIBEL_L`, `DATE_FIN`, `ID_SOUS_THEME`) VALUES
(1, 'Internal Quality Liaison', 'synthesizing the alarm won\'t do anything, we need to hack the redundant THX circuit!', '2020-08-24', 1),
(2, 'Legacy Program Specialist', 'I\'ll override the primary ADP interface, that should sensor the XSS matrix!', '2021-07-16', 1),
(3, 'Lead Identity Orchestrator', 'Try to synthesize the AI sensor, maybe it will back up the back-end array!', '2020-10-05', 1),
(4, 'Internal Quality Liaison', 'synthesizing the alarm won\'t do anything, we need to hack the redundant THX circuit!', '2020-08-24', 2),
(5, 'Legacy Program Specialist', 'I\'ll override the primary ADP interface, that should sensor the XSS matrix!', '2021-07-16', 2),
(6, 'Lead Identity Orchestrator', 'Try to synthesize the AI sensor, maybe it will back up the back-end array!', '2020-10-05', 2),
(7, 'Internal Quality Liaison', 'synthesizing the alarm won\'t do anything, we need to hack the redundant THX circuit!', '2020-08-24', 3),
(8, 'Internal Quality Liaison', 'synthesizing the alarm won\'t do anything, we need to hack the redundant THX circuit!', '2020-08-24', 3),
(9, 'Legacy Program Specialist', 'I\'ll override the primary ADP interface, that should sensor the XSS matrix!', '2021-07-16', 3),
(10, 'Lead Identity Orchestrator', 'Try to synthesize the AI sensor, maybe it will back up the back-end array!', '2020-10-05', 3),
(11, 'Internal Quality Liaison', 'synthesizing the alarm won\'t do anything, we need to hack the redundant THX circuit!', '2020-08-24', 4),
(12, 'Legacy Program Specialist', 'I\'ll override the primary ADP interface, that should sensor the XSS matrix!', '2021-07-16', 4),
(13, 'Lead Identity Orchestrator', 'Try to synthesize the AI sensor, maybe it will back up the back-end array!', '2020-10-05', 4),
(14, 'Internal Quality Liaison', 'synthesizing the alarm won\'t do anything, we need to hack the redundant THX circuit!', '2020-08-24', 5),
(15, 'Legacy Program Specialist', 'I\'ll override the primary ADP interface, that should sensor the XSS matrix!', '2021-07-16', 5),
(16, 'Lead Identity Orchestrator', 'Try to synthesize the AI sensor, maybe it will back up the back-end array!', '2020-10-05', 5);

-- --------------------------------------------------------

--
-- Structure de la table `inscription`
--

DROP TABLE IF EXISTS `inscription`;
CREATE TABLE `inscription` (
  `ID_USER` int(11) NOT NULL,
  `ID_STATUT` int(11) NOT NULL,
  `ID_CONCOURS` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONS POUR LA TABLE `inscription`:
--   `ID_USER`
--       `user` -> `ID_USER`
--   `ID_STATUT`
--       `statut` -> `ID_STATUT`
--   `ID_CONCOURS`
--       `concours` -> `ID_CONCOURS`
--

--
-- Déchargement des données de la table `inscription`
--

INSERT INTO `inscription` (`ID_USER`, `ID_STATUT`, `ID_CONCOURS`) VALUES
(1, 1, 1),
(1, 1, 2),
(1, 2, 3),
(1, 3, 4),
(2, 1, 1),
(2, 1, 2),
(2, 2, 3),
(2, 3, 4),
(3, 1, 1),
(3, 1, 2),
(3, 2, 3),
(3, 3, 4);

-- --------------------------------------------------------

--
-- Structure de la table `log`
--

DROP TABLE IF EXISTS `log`;
CREATE TABLE `log` (
  `ACTION` varchar(255) NOT NULL,
  `DATE_LOG` date NOT NULL,
  `ID_USER` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONS POUR LA TABLE `log`:
--   `ID_USER`
--       `user` -> `ID_USER`
--

--
-- Déchargement des données de la table `log`
--

INSERT INTO `log` (`ACTION`, `DATE_LOG`, `ID_USER`) VALUES
('insertion', '2020-08-24', 1),
('lecture', '2020-08-24', 2),
('insertion', '2020-08-24', 2);

-- --------------------------------------------------------

--
-- Structure de la table `nationalité`
--

DROP TABLE IF EXISTS `nationalité`;
CREATE TABLE `nationalité` (
  `ID_NATIONALITE` varchar(3) NOT NULL,
  `NOM_NATIONALITE` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONS POUR LA TABLE `nationalité`:
--

--
-- Déchargement des données de la table `nationalité`
--

INSERT INTO `nationalité` (`ID_NATIONALITE`, `NOM_NATIONALITE`) VALUES
('AD', 'Andorre'),
('AE', 'Émirats arabes unis'),
('AF', 'Afghanistan'),
('AG', 'Antigua-et-Barbuda'),
('AI', 'Anguilla'),
('AL', 'Albanie'),
('AM', 'Arménie'),
('AN', 'Antilles néerlandaises'),
('AO', 'Angola'),
('AQ', 'Antarctique'),
('AR', 'Argentine'),
('AS', 'Samoa américaines'),
('AT', 'Autriche'),
('AU', 'Australie'),
('AW', 'Aruba'),
('AZ', 'Azerbaïdjan'),
('BA', 'Bosnie-Herzégovine'),
('BB', 'Barbade'),
('BD', 'Bangladesh'),
('BE', 'Belgique'),
('BF', 'Burkina Faso'),
('BG', 'Bulgarie'),
('BH', 'Bahreïn'),
('BI', 'Burundi'),
('BJ', 'Bénin'),
('BM', 'Bermudes'),
('BN', 'Brunei'),
('BO', 'Bolivie'),
('BR', 'Brésil'),
('BS', 'Bahamas'),
('BT', 'Bhoutan'),
('BV', 'Ile Bouvet'),
('BW', 'Botswana'),
('BY', 'Biélorussie'),
('BZ', 'Belize'),
('CA', 'Canada'),
('CC', 'Iles des Cocos (Keeling)'),
('CD', 'République démocratique du Congo'),
('CF', 'République centrafricaine'),
('CG', 'Congo'),
('CH', 'Suisse'),
('CI', 'Côte d\'Ivoire'),
('CK', 'Iles Cook'),
('CL', 'Chili'),
('CM', 'Cameroun'),
('CN', 'Chine'),
('CO', 'Colombie'),
('CR', 'Costa Rica'),
('CU', 'Cuba'),
('CV', 'Cap-Vert'),
('CX', 'Ile Christmas'),
('CY', 'Chypre'),
('CZ', 'République tchèque'),
('DE', 'Allemagne'),
('DJ', 'Djibouti'),
('DK', 'Danemark'),
('DM', 'Dominique'),
('DO', 'République dominicaine'),
('DZ', 'Algérie'),
('EC', 'Équateur'),
('EE', 'Estonie'),
('EG', 'Égypte'),
('EH', 'Sahara occidental'),
('ER', 'Érythrée'),
('ES', 'Espagne'),
('ET', 'Éthiopie'),
('FI', 'Finlande'),
('FJ', 'Iles Fidji'),
('FK', 'Iles Falkland'),
('FM', 'Micronésie'),
('FO', 'Iles Féroé'),
('FR', 'France'),
('GA', 'Gabon'),
('GB', 'Royaume-Uni'),
('GD', 'Grenade'),
('GE', 'Géorgie'),
('GF', 'Guyane française'),
('GH', 'Ghana'),
('GI', 'Gibraltar'),
('GL', 'Groenland'),
('GM', 'Gambie'),
('GN', 'Guinée'),
('GP', 'Guadeloupe'),
('GQ', 'Guinée équatoriale'),
('GR', 'Grèce'),
('GS', 'Iles Géorgie du Sud et Sandwich du Sud'),
('GT', 'Guatemala'),
('GU', 'Guam'),
('GW', 'Guinée-Bissao'),
('GY', 'Guyana'),
('HK', 'Hong Kong'),
('HM', 'Iles Heard et McDonald'),
('HN', 'Honduras'),
('HR', 'Croatie'),
('HT', 'Haïti'),
('HU', 'Hongrie'),
('ID', 'Indonésie'),
('IE', 'Irlande'),
('IL', 'Israël'),
('IN', 'Inde'),
('IO', 'Territoire britannique de l`Océan Indien'),
('IQ', 'Iraq'),
('IR', 'Iran'),
('IS', 'Islande'),
('IT', 'Italie'),
('JM', 'Jamaïque'),
('JO', 'Jordanie'),
('JP', 'Japon'),
('KE', 'Kenya'),
('KG', 'Kirghizistan'),
('KH', 'Cambodge'),
('KI', 'Kiribati'),
('KM', 'Comores'),
('KN', 'Saint-Christophe-et-Niévès'),
('KP', 'Corée du Nord'),
('KR', 'Corée du Sud'),
('KW', 'Koweït'),
('KY', 'Iles Cayman'),
('KZ', 'Kazakhstan'),
('LA', 'Laos'),
('LB', 'Liban'),
('LC', 'Sainte-Lucie'),
('LI', 'Liechtenstein'),
('LK', 'Sri Lanka'),
('LR', 'Liberia'),
('LS', 'Lesotho'),
('LT', 'Lituanie'),
('LU', 'Luxembourg'),
('LV', 'Lettonie'),
('LY', 'Libye'),
('MA', 'Maroc'),
('MC', 'Monaco'),
('MD', 'Moldavie'),
('MG', 'Madagascar'),
('MH', 'Iles Marshall'),
('MK', 'ex-République yougoslave de Macédoine'),
('ML', 'Mali'),
('MM', 'Birmanie'),
('MN', 'Mongolie'),
('MO', 'Macao'),
('MP', 'Mariannes du Nord'),
('MQ', 'Martinique'),
('MR', 'Mauritanie'),
('MS', 'Montserrat'),
('MT', 'Malte'),
('MU', 'Maurice'),
('MV', 'Maldives'),
('MW', 'Malawi'),
('MX', 'Mexique'),
('MY', 'Malaisie'),
('MZ', 'Mozambique'),
('NA', 'Namibie'),
('NC', 'Nouvelle-Calédonie'),
('NE', 'Niger'),
('NF', 'Ile Norfolk'),
('NG', 'Nigeria'),
('NI', 'Nicaragua'),
('NL', 'Pays-Bas'),
('NO', 'Norvège'),
('NP', 'Népal'),
('NR', 'Nauru'),
('NU', 'Nioué'),
('NZ', 'Nouvelle-Zélande'),
('OM', 'Oman'),
('PA', 'Panama'),
('PE', 'Pérou'),
('PF', 'Polynésie française'),
('PG', 'Papouasie-Nouvelle-Guinée'),
('PH', 'Philippines'),
('PK', 'Pakistan'),
('PL', 'Pologne'),
('PM', 'Saint-Pierre-et-Miquelon'),
('PN', 'Iles Pitcairn'),
('PR', 'Porto Rico'),
('PT', 'Portugal'),
('PW', 'Belau'),
('PY', 'Paraguay'),
('QA', 'Qatar'),
('RE', 'Réunion'),
('RO', 'Roumanie'),
('RU', 'Russie'),
('RW', 'Rwanda'),
('SA', 'Arabie saoudite'),
('SB', 'Iles Salomon'),
('SC', 'Seychelles'),
('SD', 'Soudan'),
('SE', 'Suède'),
('SG', 'Singapour'),
('SH', 'Sainte-Hélène'),
('SI', 'Slovénie'),
('SJ', 'Iles Svalbard et Jan Mayen'),
('SK', 'Slovaquie'),
('SL', 'Sierra Leone'),
('SM', 'Saint-Marin'),
('SN', 'Sénégal'),
('SO', 'Somalie'),
('SR', 'Suriname'),
('ST', 'Sao Tomé-et-Principe'),
('SV', 'Salvador'),
('SY', 'Syrie'),
('SZ', 'Swaziland'),
('TC', 'Iles Turks-et-Caicos'),
('TD', 'Tchad'),
('TF', 'Terres australes françaises'),
('TG', 'Togo'),
('TH', 'Thaïlande'),
('TJ', 'Tadjikistan'),
('TK', 'Tokélaou'),
('TL', 'Timor Oriental'),
('TM', 'Turkménistan'),
('TN', 'Tunisie'),
('TO', 'Tonga'),
('TR', 'Turquie'),
('TT', 'Trinité-et-Tobago'),
('TV', 'Tuvalu'),
('TW', 'Taïwan'),
('TZ', 'Tanzanie'),
('UA', 'Ukraine'),
('UG', 'Ouganda'),
('UM', 'Iles mineures éloignées des États-Unis'),
('US', 'États-Unis'),
('UY', 'Uruguay'),
('UZ', 'Ouzbékistan'),
('VA', 'Saint-Siège '),
('VC', 'Saint-Vincent-et-les-Grenadines'),
('VE', 'Venezuela'),
('VG', 'Iles Vierges britanniques'),
('VI', 'Iles Vierges américaines'),
('VN', 'ViÃªtNam'),
('VU', 'Vanuatu'),
('WF', 'Wallis-et-Futuna'),
('WS', 'Samoa'),
('YE', 'Yémen'),
('YT', 'Mayotte'),
('YU', 'Yougoslavie'),
('ZA', 'Afrique du Sud'),
('ZM', 'Zambie'),
('ZW', 'Zimbabwe');

-- --------------------------------------------------------

--
-- Structure de la table `photo`
--

DROP TABLE IF EXISTS `photo`;
CREATE TABLE `photo` (
  `PATH_IMG` varchar(255) NOT NULL,
  `ID_PATH` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONS POUR LA TABLE `photo`:
--   `ID_PATH`
--       `user` -> `ID_USER`
--   `ID_PATH`
--       `concours` -> `ID_CONCOURS`
--

--
-- Déchargement des données de la table `photo`
--

INSERT INTO `photo` (`PATH_IMG`, `ID_PATH`) VALUES
('http://lorempixel.com/640/480/sports', 0),
('http://lorempixel.com/640/480/nature', 1),
('http://lorempixel.com/640/480/food', 2),
('http://lorempixel.com/640/480/people', 3),
('http://lorempixel.com/640/480/city', 4),
('http://lorempixel.com/640/480/technics', 5),
('http://lorempixel.com/640/480/nightlife', 6),
('http://lorempixel.com/640/480/food', 7),
('http://lorempixel.com/640/480/abstract', 8),
('http://lorempixel.com/640/480/cats', 9),
('http://lorempixel.com/640/480/transport', 10),
('http://lorempixel.com/640/480/business', 11),
('http://lorempixel.com/640/480/cats', 12),
('http://lorempixel.com/640/480/fashion', 13),
('http://lorempixel.com/640/480/people', 14),
('http://lorempixel.com/640/480/sports', 15),
('http://lorempixel.com/640/480/cats', 16),
('http://lorempixel.com/640/480/abstract', 17),
('http://lorempixel.com/640/480/city', 18),
('http://lorempixel.com/640/480/food', 19),
('http://lorempixel.com/640/480/cats', 20),
('http://lorempixel.com/640/480/business', 21),
('http://lorempixel.com/640/480/fashion', 22),
('http://lorempixel.com/640/480/sports', 23),
('http://lorempixel.com/640/480/nightfall', 24),
('loul', 0),
('loul', 0),
('loul3', 0),
('loul3', 0),
('lell', 281),
('lell', 283),
('lell', 284),
('lell', 284),
('lell', 286),
('lell', 287),
('lell', 288);

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `ID_ROLE` int(11) NOT NULL,
  `ROLE` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONS POUR LA TABLE `role`:
--

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`ID_ROLE`, `ROLE`) VALUES
(0, 'etudiant'),
(1, 'equipe specialisé'),
(2, 'equipe de recrutement'),
(3, 'superadmin');

-- --------------------------------------------------------

--
-- Structure de la table `soustheme`
--

DROP TABLE IF EXISTS `soustheme`;
CREATE TABLE `soustheme` (
  `ID_SOUS_THEME` int(11) NOT NULL,
  `NOM_SOUS_THEME` varchar(255) NOT NULL,
  `ID_THEME` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONS POUR LA TABLE `soustheme`:
--   `ID_THEME`
--       `theme` -> `ID_THEME`
--

--
-- Déchargement des données de la table `soustheme`
--

INSERT INTO `soustheme` (`ID_SOUS_THEME`, `NOM_SOUS_THEME`, `ID_THEME`) VALUES
(1, 'sous theme n°1 pompier', 1),
(2, 'sous theme n°2 infirmier', 1),
(3, 'sous theme n°3 random', 2),
(4, 'sous theme n°4 dev', 2),
(5, 'sous theme n°5 reseau', 3);

-- --------------------------------------------------------

--
-- Structure de la table `statut`
--

DROP TABLE IF EXISTS `statut`;
CREATE TABLE `statut` (
  `ID_STATUT` int(11) NOT NULL,
  `NOM_STATUT` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONS POUR LA TABLE `statut`:
--

--
-- Déchargement des données de la table `statut`
--

INSERT INTO `statut` (`ID_STATUT`, `NOM_STATUT`) VALUES
(0, 'transmis'),
(1, 'en cours de traitement'),
(2, 'validé'),
(3, 'refusé');

-- --------------------------------------------------------

--
-- Structure de la table `theme`
--

DROP TABLE IF EXISTS `theme`;
CREATE TABLE `theme` (
  `ID_THEME` int(11) NOT NULL,
  `NOM_THEME` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONS POUR LA TABLE `theme`:
--

--
-- Déchargement des données de la table `theme`
--

INSERT INTO `theme` (`ID_THEME`, `NOM_THEME`) VALUES
(0, 'elle'),
(1, 'theme aide a la personne'),
(2, 'theme dev'),
(3, ' theme reseau');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `ID_USER` int(11) NOT NULL,
  `NOM` varchar(255) NOT NULL,
  `D_NAISS` date NOT NULL,
  `SEXE` tinyint(4) NOT NULL,
  `ADRESSE` varchar(255) NOT NULL,
  `TEL` int(11) NOT NULL,
  `COURRIEL` varchar(255) NOT NULL,
  `ETAT_CIVIL` varchar(255) NOT NULL,
  `ID_P` varchar(255) NOT NULL,
  `FACEBOOK` varchar(255) DEFAULT NULL,
  `TWITTER` varchar(255) DEFAULT NULL,
  `INSTAGRAM` varchar(255) DEFAULT NULL,
  `MDP` varchar(255) NOT NULL,
  `PRENOM` varchar(255) NOT NULL,
  `ID_NATIONALITE` varchar(3) NOT NULL DEFAULT 'FR',
  `ID_ROLE` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONS POUR LA TABLE `user`:
--   `ID_NATIONALITE`
--       `nationalité` -> `ID_NATIONALITE`
--   `ID_ROLE`
--       `role` -> `ID_ROLE`
--

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`ID_USER`, `NOM`, `D_NAISS`, `SEXE`, `ADRESSE`, `TEL`, `COURRIEL`, `ETAT_CIVIL`, `ID_P`, `FACEBOOK`, `TWITTER`, `INSTAGRAM`, `MDP`, `PRENOM`, `ID_NATIONALITE`, `ID_ROLE`) VALUES
(1, 'WILK', '1998-07-16', 1, 'une adresse 24 avenue de savoie', 809, 'loubou@gmail.com', 'etat civil', '123IO23I232302392', 'lienfacebook', 'lien twitter', 'lien intagram', 'mot de passe asher', 'michal', 'FR', 0),
(2, 'SEGIN', '1478-07-16', 1, 'une adresse SEGIN', 0, 'lacrim@gmail.com', 'etat civil', 'O3U2IO3N2E2IEN23IUOEN', 'lienfacebook', 'lien twitter', 'lien instagram', 'mot de passe ashe', 'ayrton', 'TF', 0),
(3, 'TOMATO', '2000-07-16', 0, 'une adresse TOMATO', 4292, 'OMEGALUL@yahoo.net', 'etat civil', '23OIO2IHEO2HIE2', 'lienfacebook', 'lien twitter', 'lien instagram', 'mot de passe pasher', 'rapahael', 'FR', 0),
(4, 'BONAPORTE', '2021-07-16', 1, 'une adresse BONANPORT', 2147483647, 'sky@hotmail.gr', 'etat civil', '29U2N3EN3UDE3D', 'lienfacebook', 'lien twitter', 'lien intzagarm', 'mot de passer asher', 'eric', 'GR', 0),
(5, 'LEFEVRE', '1998-07-16', 0, 'une adresse LEFEVRE', 294, 'rouquin@outlook.fr', 'etat civil', '3IHE3IUBDI3UBDI3', 'lienfacebook', 'lien twitter', 'lien instagram', 'mot de passe ashe', 'andre', 'PL', 0),
(6, 'BONAPORTE', '2001-07-16', 0, 'une adresse BONALPOER', 2147483647, 'lououou@gmail.com', 'etat civil', '3OUE3INE3IND3IN', 'lienfacebook', 'lien twitter', 'lien instagram', 'mot de passer asher', 'jerome', 'VU', 0),
(7, 'LEJEUNE', '1974-07-16', 0, 'une adresse le jeune', 2147483647, 'jenaimare@msm.net', 'etat civil', '32INE3IN3INDN3', 'lienfacebook', 'lien twitter', 'lien instzgrazm', 'mot de passe asher', 'gui', 'VE', 1),
(8, 'SARKO', '1956-07-16', 0, 'une adresse sarko', 2147483647, 'trandom@skyblog.net', 'etat civil', '2IEN3INE3IEN3EI', 'lienfacebook', 'lien twitter', 'lien indtagam', 'mot de passer asher', 'chantal', 'GR', 2),
(9, 'DEPARDIEU', '1909-07-16', 0, 'une adresse depardieu', 2, 'transandance@gmail.fr', 'etat civil', '2IEN32IN3INE', 'lienfacebook', 'lien twitter', 'lien instagram', 'mot de passer asher', 'serge', 'FR', 3),
(10, '', '0000-00-00', 0, '', 0, 'lel', '', '', NULL, NULL, NULL, 'lel', '', '', 0),
(11, '', '0000-00-00', 0, '', 0, 'lel', '', '', NULL, NULL, NULL, 'loul', '', '', 0),
(22, '', '0000-00-00', 0, '', 0, 'lel@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$.YB6NEcKszsN6/M0cLXEHuYXNMZSVpDFgzJ1AQOspm.edK0Q0fzvC', '', '', 0),
(27, '', '0000-00-00', 0, '', 0, 'lel@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$yr/2QaTPUObYKrgEOyo2M.fP161BrKkNQKiKhbDyjV0G4tREs9QOi', '', '', 0),
(28, '', '0000-00-00', 0, '', 0, 'lel@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$KAL/tjQYDQBiLd/Ubs.Ny.zzk1YBQ0sbBTiqG8w3FcTiu.WxfX6PG', '', '', 0),
(33, '', '0000-00-00', 0, '', 0, 'lel1@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$Uxq.YVB4FunF4/h.sKOUUesSmz5kG6mMfc1.zoorFHpNMYrWs/NE.', '', '', 0),
(37, '', '0000-00-00', 0, '', 0, 'lel12@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$cK18KKlplUD7McuBVYtT8eNZDDTjWtKBo6wC/7P.E1YLtVDaTAQPy', '', '', 0),
(43, '', '0000-00-00', 0, '', 0, 'lel123@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$Hnms718KpMnnqSn84LZBneNyUXsSH/OElv7uRZKky0rSmnQLaRPyi', '', '', 0),
(44, '', '0000-00-00', 0, '', 0, 'lel1234@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$.qJRmhV44GzFy/56i/ehKu2oiWbR3fJmKMb1f1fWpFpMXg.TGadr.', '', '', 0),
(45, '', '0000-00-00', 0, '', 0, 'lel1234@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$DpqQDcMDG5eWnVJz8hE8NOvEb5qiFyVXWVbYyAZf7Oc3bFzUf8zpm', '', '', 0),
(46, '', '0000-00-00', 0, '', 0, 'lel12345@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$J6bZ5HZ15hZHTVnYOSzD4OAK7YhH/Hkt9i0q.7nETpWy3cl5i2voq', '', '', 0),
(47, '', '0000-00-00', 0, '', 0, 'lel12345@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$0.IEbxRumjrqQdEutRsqOu49DOCIUWkrQhj5ddkPm.7XoV/x79ZRO', '', '', 0),
(48, '', '0000-00-00', 0, '', 0, 'lel12345@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$BbkRIFRZAD1L7Ig5a2eAIugMHa37LmAWga8T5I5NoSA5147UGuatu', '', '', 0),
(49, '', '0000-00-00', 0, '', 0, 'lel12345@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$dmvWgkSvVJIDHYYVNz.VvusKnAOH1ZI.eTaufBFMJWfLMsGN8LTu6', '', '', 0),
(50, '', '0000-00-00', 0, '', 0, 'lel12345@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$lV1HUm4vgKxwXuu16Oi4.uH8uVHkpW4qXJLk0TMmeJyYVVBD4Rb/u', '', '', 0),
(51, '', '0000-00-00', 0, '', 0, 'lel12345@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$bqMnG8H3y8UTtcDstChK1.g0XqiHtbfjN6IkH0RMXcsWoiMLTTEhK', '', '', 0),
(52, '', '0000-00-00', 0, '', 0, 'lel12345@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$NPxQ3K6r.crN5Oe3n09.n.wrGEwAOFxQI5BRFS/hTk86YZPOBozjW', '', '', 0),
(53, '', '0000-00-00', 0, '', 0, 'lel123456@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$By9P6SodpL.8Z/hZ1EP8R.CkDI9zm9DDpInTygyoEyP2Bb3a9T4ny', '', '', 0),
(54, '', '0000-00-00', 0, '', 0, 'lel123456@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$v5CRjtw84/ltkzfFcypLEOc6lTKs5SWU0rvt6O82h.TcmblCH0YQy', '', '', 0),
(55, '', '0000-00-00', 0, '', 0, 'lel123456@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$ZYjzytW3P7TYyDSSvUfU.OKfcyKrC1To93UQ6vD9xwsuJ6sxeOQ3S', '', '', 0),
(56, '', '0000-00-00', 0, '', 0, 'lel123456@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$zm8nqbqHn9sbTB252nIE5.u/HgwZboOXh.vpXXojj6mr3MR688t6K', '', '', 0),
(57, '', '0000-00-00', 0, '', 0, 'lel123456@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$OUS6sMhKvFH..y0bS7oN.e.prQ1MouWXETjlCjEv2y4MEGpD1Aib.', '', '', 0),
(58, '', '0000-00-00', 0, '', 0, 'lel123456@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$NBCJGelIdODibtnVygVk1uLxzWUva2sPmjKiE/sr2FV6A3fdUdYLG', '', '', 0),
(59, '', '0000-00-00', 0, '', 0, 'lel123456@hotmail.fr', '', '', NULL, NULL, NULL, 'AZERTY', '', '', 0),
(60, '', '0000-00-00', 0, '', 0, 'lel123456@hotmail.fr', '', '', NULL, NULL, NULL, 'AZERTY', '', '', 0),
(61, '', '0000-00-00', 0, '', 0, 'lel1234567@hotmail.fr', '', '', NULL, NULL, NULL, 'AZERTY', '', '', 0),
(62, '', '0000-00-00', 0, '', 0, 'lel12345678@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$QViEHV.i1L5UbLkuAPfxsOcYUgpMxsV5hQKfSjOh/BiiZSzrXVqL6', '', '', 0),
(63, '', '0000-00-00', 0, '', 0, 'lel12345678@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$dt7hjJdkC/ieLpekUdSEhu.tqnW8NaVE71qPCeDRh2bVyxUeuaKyq', '', '', 0),
(64, '', '0000-00-00', 0, '', 0, 'lel123456789@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$v3BWjYF.mWz2ER5pnLgMueEWQWV3O811uzTajWJTgjxKo47IwysZS', '', '', 0),
(65, '', '0000-00-00', 0, '', 0, 'lel12345678910@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$G3XklftPDCgx2r16ZEtgIezjKa1ZPgoXsKZ8kOZO0Z29DKr.HDx06', '', '', 0),
(66, '', '0000-00-00', 0, '', 0, 'lel12345678910@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$oaHZwlOqj.mpxNUPuOPSo.TY.ez13Bkt23tzAxwdmoCK/jhXr3ehy', '', '', 0),
(67, '', '0000-00-00', 0, '', 0, 'lel1234567891011@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$2UIloMIo2kiE.j9tVogbE.rC58mA0xtB9ydn7I13VRpdKGnXE05JG', '', '', 0),
(68, '', '0000-00-00', 0, '', 0, 'lel1234567891011hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$YajRN4a1mtHe2i.YP/Qbhuwtl3GW.OITMuqLWRPAOSX5O9vZ.qxbq', '', '', 0),
(69, '', '0000-00-00', 0, '', 0, 'lel1234567891011@hotmailfr', '', '', NULL, NULL, NULL, '$2a$10$d/QxvQNkoZr3UHmJYxubBejTnZCH4W8gLePxPrYl3HlcIZydN/a1S', '', '', 0),
(70, '', '0000-00-00', 0, '', 0, 'lel1234567891011@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$PsvaPojmGzJ1taRf9zE8LuogbA2vcvVt2mVlJnvd8PeSuvCHrh0j2', '', '', 0),
(71, '', '0000-00-00', 0, '', 0, 'lel1234567891011@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$2Niu0KyYHxaH1y3YGdUGjeKTkbXrlAwxen3xB1g977aKOPKKN2NfO', '', '', 0),
(72, '', '0000-00-00', 0, '', 0, 'lel1234567891011@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$FIvj/z9RVGU1tqLoAmRVuu5yLbw3sbtt7nN8fknQSly7PxdnJSDNi', '', '', 0),
(73, '', '0000-00-00', 0, '', 0, 'lel1234567891011@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$bQdnP1awCJll02.9TvaZz.Vqb1qWb5rirp/Vfkue5iJF28ug6KFbu', '', '', 0),
(74, '', '0000-00-00', 0, '', 0, 'lel1234567891011@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$8qaYKhy62Mlr71POi.SDvOj.471mrk7bgDQ57669d7uC596SY7ld2', '', '', 0),
(75, '', '0000-00-00', 0, '', 0, 'lel1234567891011@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$NcXDxQxkgy/MMegFvQBVNeVaU41v0cCy3JjUV/ZLGmXsMrv6PmqVO', '', '', 0),
(76, '', '0000-00-00', 0, '', 0, 'michal@gmail.com', '', '', NULL, NULL, NULL, '$2a$10$P/CULUolCG6HzHv.GUOhHepl8YdkI2.tHHauGApleGf7sO2uQ.wVy', '', '', 0),
(77, '', '0000-00-00', 0, '', 0, 'michal@gmail.com', '', '', NULL, NULL, NULL, '$2a$10$6OLZe6dpOomExZJaAUBG1eOLRTfzTaQoXre6jGobH3QslDvWHkoFm', '', '', 0),
(78, '', '0000-00-00', 0, '', 0, 'michal@yahoo.com', '', '', NULL, NULL, NULL, '$2a$10$693xfi/0eL3GTKv3Ej2OkOfvZlf0rKQxbz63PvKN.k3nFyeyeON4y', '', '', 0),
(79, '', '0000-00-00', 0, '', 0, 'michou@yahoo.com', '', '', NULL, NULL, NULL, '$2a$10$tfcJebGne16jwM6edwdwmOGWBM9Iud7LSqAje3cPy/AUJRxnLtH0m', '', '', 1),
(211, '', '0000-00-00', 0, '', 0, 'lourdeurX59rtzerreffrgg@hotmail.com', '', '', NULL, NULL, NULL, '$2a$10$4WP5oyiExr0U56pEmTLbMOV1bqk7LjqSkR7/Ob.Hg7X21P.oMxl5m', '', '', 1),
(212, '', '0000-00-00', 0, '', 0, 'lourdeurX59rtzerreffrgg@hotmail.com', '', '', NULL, NULL, NULL, '$2a$10$HMocdd1mBuR8Ibd0gxt5IekxLHMKb9QsePIxKHlMbZn13Imrs/9K.', '', '', 1),
(213, '', '0000-00-00', 0, '', 0, 'lourdeurX59rtzerreffrgg@hotmail.com', '', '', NULL, NULL, NULL, '$2a$10$UShUhFiQ9GMbL8Oxmb.fg.lkBD.sl.noSpSCdS158BIhH6Q82Tau.', '', '', 1),
(214, '', '0000-00-00', 0, '', 0, 'lourdeurX59rtzerreffrgg@hotmmail.com', '', '', NULL, NULL, NULL, '$2a$10$Zk4Or/jT8vgb4HYLSUFstu3GyDKOevXWPAQtpHV1j97IfAFGzGqw2', '', '', 1),
(215, '', '0000-00-00', 0, '', 0, 'lourdeurX59rtzerreffrgg@hotmmail.com', '', '', NULL, NULL, NULL, '$2a$10$3f8j7Nmuuco7B3kTPyEUzeBZAT9H5bn7WEXhdczPoUpJMvgUt.Yw2', '', '', 1),
(216, '', '0000-00-00', 0, '', 0, 'lourdeurX59rtzerreffrgg@hotmmail.com', '', '', NULL, NULL, NULL, '$2a$10$7AH0Pm2S8.T8KCsw56g4XeDmRFkkKXHUuS4DfcW2WI5L8sPbWDpl6', '', '', 1),
(217, '', '0000-00-00', 0, '', 0, 'lourdeurX59rtzerreffrggr@hotmmail.com', '', '', NULL, NULL, NULL, '$2a$10$aiIOk6sYx66LHubF/hMGvOhP5iWiD5NxJSoNfDjGIschnorGNOvyC', '', '', 1),
(218, '', '0000-00-00', 0, '', 0, 'lourdeurX59rtzerreffrgrgr@hotmmail.com', '', '', NULL, NULL, NULL, '$2a$10$dPl0tI4nl/B.wg1R7GIsfOJCUGbvxzsP.foYa/OS95hhp0VRtIApK', '', '', 1),
(219, '', '0000-00-00', 0, '', 0, 'lourdeurX59rtzerreffrgrgr@hotmmail.com', '', '', NULL, NULL, NULL, '$2a$10$qYGnnm.hCAus9gzuPrKcV.iiMyMwX.G7B.OV.rCgdxeEANULuzVKG', '', '', 1),
(220, '', '0000-00-00', 0, '', 0, 'lourdeurX59rtzerreffrgrgr@hotmmail.com', '', '', NULL, NULL, NULL, '$2a$10$XUl56EjfbqcTZznzJfam.eVR6Ef.OJBCOgsYVGEot8DtNXbCD7dH.', '', '', 1),
(221, '', '0000-00-00', 0, '', 0, 'lourdeurX59rtzerreffrgrgrggrgr@hotmmail.com', '', '', NULL, NULL, NULL, '$2a$10$CsnZIlXv1klvb1BtoTUmlOa8nu73ixUUT6zyPla9oRXq0hYpD4mXu', '', '', 1),
(222, '', '0000-00-00', 0, '', 0, 'lourdeurX59rtzerrdgdgeffrgrgrggrgr@hotmmail.com', '', '', NULL, NULL, NULL, '$2a$10$qpVUQqLmHQayeX41bLrIQufjEEfMtwCpKWTbVv2BOS2hkxsuKdZN6', '', '', 1),
(223, '', '0000-00-00', 0, '', 0, 'lourdeurX59rtzerrdgdgeffrgrgrggrgr@hotmmail.com', '', '', NULL, NULL, NULL, '$2a$10$XXSroQjGQMe2jEoCuRTM8./DiNpVlzTOrYIsQgrjJNca38oeiDWmO', '', '', 1),
(224, '', '0000-00-00', 0, '', 0, 'lourdeurX59rtzerrdgdgeffrgrgrggrgr@hotmmail.com', '', '', NULL, NULL, NULL, '$2a$10$iRS7.dSroqyZEzvF/1IxLuvCtyJjoOtlMXNKJZ2N2mUkrufqdYEWu', '', '', 1),
(225, '', '0000-00-00', 0, '', 0, 'lourdeurX59rtzerrdgdgeffrgrgrfbvfbggrgr@hotmmail.com', '', '', NULL, NULL, NULL, '$2a$10$fYNdTOXP2V9tkpsw4VwDc.Fydq/Jyy./RgVVQ18/2T8eAlU.Y8EFa', '', '', 1),
(226, '', '0000-00-00', 0, '', 0, 'lourdeurX59rtzevfvfrrrdgdgeffrgrgrfbvfbggrgr@hotmmail.com', '', '', NULL, NULL, NULL, '$2a$10$P8t3zxepIUy127n07F6iSOuelkLAJbVFA0bV1ad3dvHng9SH5.SrO', '', '', 1),
(227, '', '0000-00-00', 0, '', 0, 'lourdeurX59rtzevfvfrrrdgdgeffrgrgrfbvfbggrgr@hotmmail.com', '', '', NULL, NULL, NULL, '$2a$10$w0iaetsLgfhsQH3C.AzwSuXyjEU4FdegJ7.uR2Kt.c39w0pyT3qQe', '', '', 1),
(244, '', '0000-00-00', 0, '', 0, '', '', '', NULL, NULL, NULL, '$2a$10$V8CnUxpGwiHWyowZ6mZ3BOKcblbXqBQ.jlipizDc3Y61aXAWkxqpi', '', 'FR', 1),
(245, '', '0000-00-00', 0, '', 0, '', '', '', NULL, NULL, NULL, '$2a$10$Wx9VrSVhYsoU3A4AD48Nqu4Q6PvatDWzhL/XZlWQ0kZVEVhE/2n5W', '', 'FR', 1),
(246, '', '0000-00-00', 0, '', 0, '', '', '', NULL, NULL, NULL, '$2a$10$qnRkVTDbiL0ay8NGFdniFO4MmT1AMYwZaYYRNPhdo1e/a3SOyCbYe', '', 'FR', 1),
(247, '', '0000-00-00', 0, '', 0, 'lel12345678910111@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$eLaBSC5QM0aea5CibMrHqOwijf12K8.Kr1f1oxNQZJvflRbD.t9Zq', '', 'FR', 1),
(248, '', '0000-00-00', 0, '', 0, '', '', '', NULL, NULL, NULL, '$2a$10$DAnJ8IPpU.JVIZNK5hmSvea0KrbCRPDefqYDAkZv468tkl4lTGQkO', '', 'FR', 1),
(249, '', '0000-00-00', 0, '', 0, 'lel123452678910111@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$GMvA4.Riq3IoO.sxugWcxuDpM4qnLxty9tD4z6M9ZaepfrwiCcd4C', '', 'FR', 1),
(250, '', '0000-00-00', 0, '', 0, 'lel123452678910111@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$6HjyPOnaieXBwYbDeG51seIS9z6uHQ0alowmQrwOH8entb1.cbkce', '', 'FR', 1),
(251, '', '0000-00-00', 0, '', 0, 'lel123452678910111@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$UdZuI45YUxeniiV3bEvHYeNS.a7XDqqHxjZZqkmGlbY7eVKvIlHuS', '', 'FR', 1),
(252, '', '0000-00-00', 0, '', 0, 'lel1234526789410111@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$DYDgHvTmrQEKQT8cXNyHRuuM/qzkXU6AtvDSoYvQG2.24e8UFkWgu', '', 'FR', 1),
(253, '', '0000-00-00', 0, '', 0, 'lel1234526789410111@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$pkafKQ3BS5rW4NSgimePJ.N1k6cgGhfJBjQCw6sFFoduSigSpHZtO', '', 'FR', 1),
(254, '', '0000-00-00', 0, '', 0, 'lel12345267894310111@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$lVBg9KXiVkZlmZbXptvqtOdmGyy6a1yHOSZJEAv59B23/LOtkgAcm', '', 'FR', 1),
(255, '', '0000-00-00', 0, '', 0, 'lel12345267894310111@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$TwwV/nPY23yvu5MV0KgcxO/nqc1I/c2oMki1OiON.foaW.DJJ0YjW', '', 'FR', 1),
(256, '', '0000-00-00', 0, '', 0, 'lel123452678943101311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$Fv9dpL6ulJqOqUChNwK.UO/MpqxJopnvNOJmWrGdrpYYjbkk8feQG', '', 'FR', 1),
(257, '', '0000-00-00', 0, '', 0, 'lel123452678943101311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$5UNBoyFYLwj2xsyhUGDg1uCakXJ/u9Wy7zHrsTElpM0hAtW2p0RKm', '', 'FR', 1),
(258, '', '0000-00-00', 0, '', 0, 'lel1234526789431031311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$2EtOAHjr3ejS3ihYqBaGROKDVjQKERtmTe7pOMzJUgigfESiZXXBq', '', 'FR', 1),
(259, '', '0000-00-00', 0, '', 0, 'lel1234526789431031311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$N3hA2jpsyqjjtNBaglrXtO5t.To1vVDxIKPtgJ2yvK6b20XjnVSDu', '', 'FR', 1),
(260, '', '0000-00-00', 0, '', 0, 'lel12345267894331031311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$8wL2PcmGC0lMd/8oENk3fexnWNQ.XiqGw4MCwNj6.5h2NnZAJOWJ2', '', 'FR', 1),
(261, '', '0000-00-00', 0, '', 0, 'lel123452678943310301311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$L.8.lWcP7IH0L42LWGsT6uXelMPlfLTbV46l2d9JkjvK2CnuX4Xri', '', 'FR', 1),
(262, '', '0000-00-00', 0, '', 0, 'lel1234526789433103031311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$4Zrex32bVIOWtklS72CdGuh4U04rwFgkBiggzBW8KpI0NkSVp4Key', '', 'FR', 1),
(263, '', '0000-00-00', 0, '', 0, 'lel1234526789433103031311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$coEF/q38tbWIDj/BSRn6BO0b5vxn66JtHXUA0ATaNuO/boxEKJweu', '', 'FR', 1),
(264, '', '0000-00-00', 0, '', 0, 'lel12345226789433103031311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$c0XnLayk74/cOiWQu1sMCuW2zxMS/yxMDtIBjcxqld9kJPcjJPOKC', '', 'FR', 1),
(265, '', '0000-00-00', 0, '', 0, 'lel12345226789433103031311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$ObqRrmCKzlxOexYNJlRgDOCZC.M8raenoW1OI9/IoxBioKQZvjGJK', '', 'FR', 1),
(266, '', '0000-00-00', 0, '', 0, 'lel12345226789433103031311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$xLMwtz5ZyZB6JM9PS2xrBu.kT7gql0vBj8Ie54vBprdX97estlvEi', '', 'FR', 1),
(267, '', '0000-00-00', 0, '', 0, 'lel12345226789433103031311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$b5qjFr/785sR8UqAo.Whz.b1rQyfE/xVTB23xhKmiYPhvchHMo28.', '', 'FR', 1),
(268, '', '0000-00-00', 0, '', 0, 'lel123452267894331033031311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$Io6NolK.Bb8ydc/Z5uKYNun.y0teAaEpVHbbTvjZxVdPy9bOt8jg.', '', 'FR', 1),
(269, '', '0000-00-00', 0, '', 0, 'lel123452267894331033031311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$oSKaQLz9UZYhhLasgWpP4O1LGUWgfrjNKuAeOj2QOMl1X0lFN5Vvi', '', 'FR', 1),
(270, '', '0000-00-00', 0, '', 0, 'lel1234522678943310330331311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$1TT7p/3LmzJXctp0Bp561emPU.2uJJo9WQbpzWpWzswiwG7.1tH0m', '', 'FR', 1),
(271, '', '0000-00-00', 0, '', 0, 'lel1234522678943310330331311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$pSKY0x7195.uiBqVnkj0Tu63959Ef1RAEVv8VEYnqEQ7fehv5nrDa', '', 'FR', 1),
(272, '', '0000-00-00', 0, '', 0, 'lel12345226789433103303313311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$la5DOWIPoE1q9/RzoSdBhOLzHN8a9KTTMnFyNnOKCRTOVDK9xvaQ.', '', 'FR', 1),
(273, '', '0000-00-00', 0, '', 0, 'lel12345226789433103303313311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$/rnx0znUB7yWXLrHbKvih.wf.qYeymtwINyO8WYUdW8kIsptmfH2e', '', 'FR', 1),
(274, '', '0000-00-00', 0, '', 0, 'lel123452267894331033033313311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$0EakiSKXodsIFppBdLTKqed1vyojl77uBOiyS/BFDes7YFBL2tATq', '', 'FR', 1),
(275, '', '0000-00-00', 0, '', 0, 'lel123452267894331033033313311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$rh6IHoudcn5JaBDA/dDspurQVtL/UOJINrdTh5.qthfxpyk0Idr6K', '', 'FR', 1),
(276, '', '0000-00-00', 0, '', 0, 'lel1234522678943310330333313311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$S5IpizmixRVYQxEVkjaMmeSpyByER9ow9F1QNDAYl0QcjiU9PaeHy', '', 'FR', 1),
(277, '', '0000-00-00', 0, '', 0, 'lel1234522678943310330333313311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$KPanRShf7SDi8RB88kEmjOOCNni9KCRYBxPKgIeD6RtlzxZ.JYUQ.', '', 'FR', 1),
(278, '', '0000-00-00', 0, '', 0, 'lel12345226789433310330333313311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$jmlTPelOwA33tZJXsxPZB.ltSH62atL2b4jRrfi5Mc.gRxNoNMZUW', '', 'FR', 1),
(279, '', '0000-00-00', 0, '', 0, 'lel12345226789433310330333313311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$NOv7RMjBkb4IquXFq2Qk3.KU9aEFBjQOSYRQ0QP.t1KdayvN57L2C', '', 'FR', 1),
(280, '', '0000-00-00', 0, '', 0, 'lel123452267894333103340333313311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$wKtOa2P8nc4KerdxD85SGOcH4ktwHGE6yV8AqTgsn/B1VYd8pqT82', '', 'FR', 1),
(281, '', '0000-00-00', 0, '', 0, 'lel1234522678943331033403333313311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$xvbTUY3rORav.0bdC3SZwew5KMk5xmiW3X7vvo45GsFF/b5Ia8tL6', '', 'FR', 1),
(282, '', '0000-00-00', 0, '', 0, 'lel1234522678943331033403333313311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$P8.OJ1ShnNMSnGtAsMXVe.cfp/Sbk4mJ1G.YWeHIz3iBuCTcwvxi2', '', 'FR', 1),
(283, '', '0000-00-00', 0, '', 0, 'lel12345226789433310333403333313311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$imX1FzT5GvP6jxmohBYbi.N.84a2JcU2ot51dTGAKb0B.p6V.Th6O', '', 'FR', 1),
(284, '', '0000-00-00', 0, '', 0, 'lel123452267894333120333403333313311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$ftAzn/56yFipsBu6Qtl7k.FhQkTKbEG3r5idcVjdj77j9GAdH4DVC', '', 'FR', 1),
(285, '', '0000-00-00', 0, '', 0, 'lel123452267894333120333403333313311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$FowxfDTbb0Abmdxt1HcsAuB23tKu9B.kmM6JsuKPBwmWmeiqlk4vS', '', 'FR', 1),
(286, '', '0000-00-00', 0, '', 0, 'lel1234522678943333120333403333313311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$EQqpjGmFTXnwO5qsshZVqe4U9Sv.PxdUbms7KEbV9JHgQx.hsKQ5y', '', 'FR', 1),
(287, '', '0000-00-00', 0, '', 0, 'lel12345226789433333120333403333313311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$jT8EDKe.huHRVt0MpjZfE.VE0IXkXxDub2/hInpETZBNmtg4/.CTS', '', 'FR', 1),
(288, '', '0000-00-00', 0, '', 0, 'lel123452267894333331230333403333313311@hotmail.fr', '', '', NULL, NULL, NULL, '$2a$10$KIqlOihTqyDgm1vIrJJnk.NfXC6n2BIia/C26T7yLat6k2m.fRGFa', '', 'FR', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `concours`
--
ALTER TABLE `concours`
  ADD PRIMARY KEY (`ID_CONCOURS`),
  ADD KEY `ID_SOUS_THEME` (`ID_SOUS_THEME`);

--
-- Index pour la table `inscription`
--
ALTER TABLE `inscription`
  ADD KEY `ID_USER` (`ID_USER`),
  ADD KEY `ID_STATUT` (`ID_STATUT`),
  ADD KEY `ID_CONCOURS` (`ID_CONCOURS`);

--
-- Index pour la table `log`
--
ALTER TABLE `log`
  ADD KEY `ID_USER` (`ID_USER`);

--
-- Index pour la table `nationalité`
--
ALTER TABLE `nationalité`
  ADD PRIMARY KEY (`ID_NATIONALITE`);

--
-- Index pour la table `photo`
--
ALTER TABLE `photo`
  ADD KEY `ID_PATH` (`ID_PATH`);

--
-- Index pour la table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`ID_ROLE`);

--
-- Index pour la table `soustheme`
--
ALTER TABLE `soustheme`
  ADD PRIMARY KEY (`ID_SOUS_THEME`),
  ADD KEY `ID_THEME` (`ID_THEME`);

--
-- Index pour la table `statut`
--
ALTER TABLE `statut`
  ADD PRIMARY KEY (`ID_STATUT`);

--
-- Index pour la table `theme`
--
ALTER TABLE `theme`
  ADD PRIMARY KEY (`ID_THEME`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID_USER`),
  ADD KEY `ID_NATIONALITE` (`ID_NATIONALITE`),
  ADD KEY `ID_ROLE` (`ID_ROLE`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `concours`
--
ALTER TABLE `concours`
  MODIFY `ID_CONCOURS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

-- AUTO_INCREMENT pour la table `theme`
--
ALTER TABLE `theme`
  MODIFY `ID_THEME` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `ID_USER` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=289;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `concours`
--
ALTER TABLE `concours`
  ADD CONSTRAINT `concours_ibfk_1` FOREIGN KEY (`ID_SOUS_THEME`) REFERENCES `soustheme` (`ID_SOUS_THEME`);

--
-- Contraintes pour la table `inscription`
--
ALTER TABLE `inscription`
  ADD CONSTRAINT `inscription_ibfk_1` FOREIGN KEY (`ID_USER`) REFERENCES `user` (`ID_USER`),
  ADD CONSTRAINT `inscription_ibfk_2` FOREIGN KEY (`ID_STATUT`) REFERENCES `statut` (`ID_STATUT`),
  ADD CONSTRAINT `inscription_ibfk_3` FOREIGN KEY (`ID_CONCOURS`) REFERENCES `concours` (`ID_CONCOURS`);

--
-- Contraintes pour la table `log`
--
ALTER TABLE `log`
  ADD CONSTRAINT `log_ibfk_1` FOREIGN KEY (`ID_USER`) REFERENCES `user` (`ID_USER`);

--
-- Contraintes pour la table `photo`
--
ALTER TABLE `photo`
  ADD CONSTRAINT `photo_ibfk_1` FOREIGN KEY (`ID_PATH`) REFERENCES `user` (`ID_USER`),
  ADD CONSTRAINT `photo_ibfk_2` FOREIGN KEY (`ID_PATH`) REFERENCES `concours` (`ID_CONCOURS`);

--
-- Contraintes pour la table `soustheme`
--
ALTER TABLE `soustheme`
  ADD CONSTRAINT `soustheme_ibfk_1` FOREIGN KEY (`ID_THEME`) REFERENCES `theme` (`ID_THEME`);

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`ID_NATIONALITE`) REFERENCES `nationalité` (`ID_NATIONALITE`),
  ADD CONSTRAINT `user_ibfk_2` FOREIGN KEY (`ID_ROLE`) REFERENCES `role` (`ID_ROLE`);
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
