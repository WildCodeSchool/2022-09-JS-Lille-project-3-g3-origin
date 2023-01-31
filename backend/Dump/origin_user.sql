-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: 146.59.227.176    Database: origin
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(16) NOT NULL,
  `email` varchar(45) NOT NULL,
  `hashedpassword` varchar(100) NOT NULL,
  `firstname` varchar(16) DEFAULT NULL,
  `lastname` varchar(16) DEFAULT NULL,
  `premium` tinyint NOT NULL,
  `address` varchar(45) DEFAULT NULL,
  `city` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (10,'toto3','toto3.zero@mail.com','$argon2id$v=19$m=65536,t=2,p=1$ZzGaOQW9JQhbL6MOHcRBuQ$ddYwVeCr9YxCeSpz+O8rpJ64fty8fFOk1HpISMDrBIA','','toto3',1,'',''),(11,'toto','toto.zero@mail.com','$argon2id$v=19$m=65536,t=2,p=1$UJ5+2ukaf5Jind/yr0ND4Q$E8uGiGmgqN4SDq8UKNTU3+oSLvCww5f5RlKtvRt2FG8','Toto','zero',1,'15 rue des Palmiers','Paris'),(12,'toto2','toto2.zero@mail.com','$argon2id$v=19$m=65536,t=2,p=1$jRdOpQtYcaqeLy+wf1YNFQ$3/tkzgpQ+n70ndY52pPPn5nT10SMbCCiqlwGbImjQVE','','zero',0,'',''),(19,'marie','marie@mail.com','$argon2id$v=19$m=65536,t=2,p=1$2WjySz3ulqABdNo3GDBw6w$0KL6WeJ76CdXwLygAgEtU5kLtFLdZr3R8xA7VuA63pc','marie','marie',1,'1 rue des Marguerite','Lille'),(23,'lulu','lulu@mail.com','$argon2id$v=19$m=65536,t=2,p=1$uPadmKKzYw6nVny8ilqNdg$MojqzPP5+GZmzSe8DfnWCpVXqfCr0ANZlpn+zKaL0q0','','lulu',0,'',''),(24,'dsczc','zezec@hotmal.fr','$argon2id$v=19$m=65536,t=2,p=1$dGSATsKYeVEbQ2WF2QN/Zw$eMmpeEIsZBLCfQX9LhNWBKBRU7kAPCuUsjzxpSSHPrI','','zdczc',0,'','');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-31 10:12:02
