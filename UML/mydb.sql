-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : Dim 11 oct. 2020 à 23:57
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
  `LIBEL_SH` varchar(255) DEFAULT NULL,
  `LIBEL_L` varchar(7000) DEFAULT NULL,
  `DATE_FIN` date DEFAULT NULL,
  `ID_SOUS_THEME` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `inscription`
--

DROP TABLE IF EXISTS `inscription`;
CREATE TABLE `inscription` (
  `ID_USER` int(11) DEFAULT NULL,
  `ID_PROFIL` int(11) DEFAULT NULL,
  `ID_STATUT` int(11) DEFAULT NULL,
  `ID_CONCOURS` int(11) DEFAULT NULL,
  `ACTIVATION` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `inscription`
--

INSERT INTO `inscription` (`ID_USER`, `ID_PROFIL`, `ID_STATUT`, `ID_CONCOURS`, `ACTIVATION`) VALUES
(1, 0, 1, 1, 0),
(1, 0, 1, 2, 0),
(1, 0, 2, 3, 0),
(1, 0, 3, 4, 0),
(2, 0, 1, 1, 0),
(2, 0, 1, 2, 0),
(2, 0, 2, 3, 0),
(2, 0, 3, 4, 0),
(3, 0, 1, 1, 0),
(3, 0, 1, 2, 0),
(3, 0, 2, 3, 0),
(3, 0, 3, 4, 0),
(76, 303, 0, 2147483647, 0),
(76, 314, 0, 2147483647, 0),
(76, 315, 0, 2, 0),
(76, 316, 0, 2, 0);

-- --------------------------------------------------------

--
-- Structure de la table `log`
--

DROP TABLE IF EXISTS `log`;
CREATE TABLE `log` (
  `ACTION` varchar(255) DEFAULT NULL,
  `DATE_LOG` date DEFAULT NULL,
  `ID_USER` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `NOM_NATIONALITE` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `PATH_IMG` varchar(255) DEFAULT NULL,
  `ID_PATH` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `ROLE` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`ID_ROLE`, `ROLE`) VALUES
(0, 'etudiant'),
(1, 'equipe specialisé'),
(2, 'equipe de recrutement'),
(3, 'superadmin'),
(4, 'version d\'inscription');

-- --------------------------------------------------------

--
-- Structure de la table `soustheme`
--

DROP TABLE IF EXISTS `soustheme`;
CREATE TABLE `soustheme` (
  `ID_SOUS_THEME` int(11) NOT NULL,
  `NOM_SOUS_THEME` varchar(255) DEFAULT NULL,
  `ID_THEME` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `soustheme`
--

INSERT INTO `soustheme` (`ID_SOUS_THEME`, `NOM_SOUS_THEME`, `ID_THEME`) VALUES
(0, 'fefefefefef', 24),
(2, 'fefefefefef', 24);

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
-- Déchargement des données de la table `theme`
--

INSERT INTO `theme` (`ID_THEME`, `NOM_THEME`) VALUES
(18, 'elle'),
(19, 'elle'),
(20, 'elle'),
(21, 'elle'),
(22, 'elle'),
(24, 'eeee'),
(25, 'ddd');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `ID_USER` int(11) NOT NULL,
  `NOM` varchar(255) DEFAULT NULL,
  `D_NAISS` date DEFAULT NULL,
  `SEXE` tinyint(4) DEFAULT NULL,
  `ADRESSE` varchar(255) DEFAULT NULL,
  `TEL` int(11) DEFAULT NULL,
  `COURRIEL` varchar(255) DEFAULT NULL,
  `ETAT_CIVIL` varchar(255) DEFAULT NULL,
  `ID_P` varchar(255) DEFAULT NULL,
  `FACEBOOK` varchar(255) DEFAULT NULL,
  `TWITTER` varchar(255) DEFAULT NULL,
  `INSTAGRAM` varchar(255) DEFAULT NULL,
  `MDP` varchar(255) DEFAULT NULL,
  `PRENOM` varchar(255) DEFAULT NULL,
  `ID_NATIONALITE` varchar(3) NOT NULL DEFAULT 'FR',
  `ID_ROLE` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`ID_USER`, `NOM`, `D_NAISS`, `SEXE`, `ADRESSE`, `TEL`, `COURRIEL`, `ETAT_CIVIL`, `ID_P`, `FACEBOOK`, `TWITTER`, `INSTAGRAM`, `MDP`, `PRENOM`, `ID_NATIONALITE`, `ID_ROLE`) VALUES
(76, NULL, NULL, 0, NULL, NULL, 'michal@gmail.co', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'FR', 2),
(80, 'candidat', NULL, NULL, NULL, NULL, 'candidat@candidat.com', NULL, NULL, NULL, NULL, NULL, '$2a$10$TAitNZwRg0xOJ4Md//FilONybrWeycJypfKK7v2SXWoZqka1vxnia', NULL, 'FR', 0),
(310, 'admin', NULL, NULL, NULL, NULL, 'admin@admin.com', NULL, NULL, NULL, NULL, NULL, '$2a$10$m8K1sriuJsMxB7WYNroxw.lO/9Xj0.a43nd783TJnGf7CnJ90V6yO', NULL, 'FR', 3),
(311, 'recrut', NULL, NULL, NULL, NULL, 'recrut@recrut.com', NULL, NULL, NULL, NULL, NULL, '$2a$10$BmdWXdz9v9WYKZ7cToDW0OI8My6MJgj2V1WLG631jgQLqS2i5/Y/a', NULL, 'FR', 2),
(312, 'gestcandidat', NULL, NULL, NULL, NULL, 'gc@gc.com', NULL, NULL, NULL, NULL, NULL, '$2a$10$chZiYu/9Yqu9d28A.QIgre78S4JukCZxAJ2XpnBekqcmcq8ZSKYTi', NULL, 'FR', 1),
(314, NULL, NULL, 0, NULL, NULL, 'michal@gmail.co', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'FR', 4),
(315, NULL, NULL, 0, NULL, NULL, 'michal@gmail.co', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'FR', 4),
(317, 'michal', NULL, NULL, NULL, NULL, 'lel@lel.fr', NULL, NULL, NULL, NULL, NULL, '$2a$10$IYnihsn8ZU6NIWb0kx4x4u0iA3lswgxGo2J6W2zvBaW7PZA/S1iye', NULL, 'FR', 1),
(318, NULL, NULL, NULL, NULL, NULL, 'micw@hotmail.fr', NULL, NULL, NULL, NULL, NULL, '$2a$10$1zEg/ia.S8hyvULJj3ZT7O93DptffqW6LEgJzV.dRjWTw.UzTMo2y', NULL, 'FR', 1),
(319, NULL, NULL, NULL, NULL, NULL, 'micw@hotmaoil.fr', NULL, NULL, NULL, NULL, NULL, '$2a$10$OWcfoNGpcyDpFQqGK1f/W.HyN4DQaP3CKZ6Q0AG4krOI5itQ2Kzby', NULL, 'FR', 0),
(320, NULL, NULL, NULL, NULL, NULL, 'micwi@hotmaoil.fr', NULL, NULL, NULL, NULL, NULL, '$2a$10$cswbgzVYa0IkwcXdtZgqtuGO.oFylJbCYTY7WPDo7iScRJD.zQgSG', NULL, 'FR', 0),
(321, NULL, NULL, NULL, NULL, NULL, 'micwi@hotkmaoil.fr', NULL, NULL, NULL, NULL, NULL, '$2a$10$tVXV3L8LtXa5HPV8750UFOiPWnRMwxUCQ5OSrr4oDt7ySXygvagvu', NULL, 'FR', 0),
(322, NULL, NULL, NULL, NULL, NULL, 'micwi@hotklmaoil.fr', NULL, NULL, NULL, NULL, NULL, '$2a$10$QRNgqluEo9.5Fk0cQn2g/OuereO6zNf7zj50L/EgLC2MTxPD9XFb6', NULL, 'FR', 0),
(323, NULL, NULL, NULL, NULL, NULL, 'micwi@hotkllmaoil.fr', NULL, NULL, NULL, NULL, NULL, '$2a$10$uGis6FYeBafVHAPrLzb2sO.tcM5pyyR5AElRRESf1lkxUjt9ihOZ6', NULL, 'FR', 0),
(324, NULL, NULL, NULL, NULL, NULL, 'micwi@hotkllgmaoil.fr', NULL, NULL, NULL, NULL, NULL, '$2a$10$TxffIIqONOP6WAwnXu8qFu0jnOuM23FZF3isGjCJ2rztmPnEFjBC2', NULL, 'FR', 0),
(325, NULL, NULL, NULL, NULL, NULL, 'micpwi@hotkllgmaoil.fr', NULL, NULL, NULL, NULL, NULL, '$2a$10$ont4NbzzKv8s3ietzDEcoe0XKw3vZxPvEbi.3CvKzaEz28G0G/dTK', NULL, 'FR', 0),
(326, NULL, NULL, NULL, NULL, NULL, 'micpwi@hoptkllgmaoil.fr', NULL, NULL, NULL, NULL, NULL, '$2a$10$LCJss4A4w0kcPqFWHbYD.O0fBQAOJ/75I1TIkpZaeVZpcaUma809O', NULL, 'FR', 0),
(327, NULL, NULL, NULL, NULL, NULL, 'micpwi@hopmtkllgmaoil.fr', NULL, NULL, NULL, NULL, NULL, '$2a$10$b5hv4ZTRsUepgK3Pc2ZHS.bCvX/JOdPDnHSkLLX2zOeilDwO3tE5G', NULL, 'FR', 0),
(328, NULL, NULL, NULL, NULL, NULL, 'etudiant@etudiant.com', NULL, NULL, NULL, NULL, NULL, '$2a$10$OTJH1pr8TDWtADw57GMq3eaU1jfTjaXYqGsNc5PEJqWDfAy4GJAHW', NULL, 'FR', 0);

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
  MODIFY `ID_CONCOURS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
  

--
-- AUTO_INCREMENT pour la table `theme`
--
ALTER TABLE `theme`
  MODIFY `ID_THEME` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `ID_USER` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=329;

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

  ALTER TABLE `soustheme`
  MODIFY `ID_SOUS_THEME` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
