-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 08 oct. 2020 à 13:06
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
(16, 'Lead Identity Orchestrator', 'Try to synthesize the AI sensor, maybe it will back up the back-end array!', '2020-10-05', 5),
(17, 'elle', 'FNIZFNZINZNIFNZIFZINZNF', '0000-00-00', 3);

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
(0, 'elle'),
(1, 'theme aide a la personne'),
(2, 'theme dev'),
(3, ' theme reseau'),
(17, 'elle'),
(18, 'elle'),
(19, 'elle'),
(20, 'elle'),
(21, 'elle'),
(22, 'elle'),
(23, 'elle');

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
(310, 'admin', NULL, NULL, NULL, NULL, 'admin@admin.com', NULL, NULL, NULL, NULL, NULL, '$2a$10$m8K1sriuJsMxB7WYNroxw.lO/9Xj0.a43nd783TJnGf7CnJ90V6yO', NULL, 'FR', 3),
(311, 'recrut', NULL, NULL, NULL, NULL, 'recrut@recrut.com', NULL, NULL, NULL, NULL, NULL, '$2a$10$BmdWXdz9v9WYKZ7cToDW0OI8My6MJgj2V1WLG631jgQLqS2i5/Y/a', NULL, 'FR', 2),
(312, 'gestcandidat', NULL, NULL, NULL, NULL, 'gc@gc.com', NULL, NULL, NULL, NULL, NULL, '$2a$10$chZiYu/9Yqu9d28A.QIgre78S4JukCZxAJ2XpnBekqcmcq8ZSKYTi', NULL, 'FR', 1),
(313, 'candidat', NULL, NULL, NULL, NULL, 'candidat@candidat.com', NULL, NULL, NULL, NULL, NULL, '$2a$10$TAitNZwRg0xOJ4Md//FilONybrWeycJypfKK7v2SXWoZqka1vxnia', NULL, 'FR', 0),
(314, NULL, NULL, 0, NULL, NULL, 'michal@gmail.co', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'FR', 4),
(315, NULL, NULL, 0, NULL, NULL, 'michal@gmail.co', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'FR', 4),
(316, NULL, NULL, 0, NULL, NULL, 'michal@gmail.co', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'FR', 4);

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
  MODIFY `ID_THEME` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `ID_USER` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=317;

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
