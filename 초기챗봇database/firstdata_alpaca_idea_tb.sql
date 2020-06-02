-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: firstdata_alpaca
-- ------------------------------------------------------
-- Server version	8.0.20

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
-- Table structure for table `idea_tb`
--

DROP TABLE IF EXISTS `idea_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `idea_tb` (
  `Iname` varchar(15) NOT NULL,
  `Ideanum` int NOT NULL,
  `Cnum` int NOT NULL,
  `content_text` mediumtext NOT NULL,
  PRIMARY KEY (`Ideanum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `idea_tb`
--

LOCK TABLES `idea_tb` WRITE;
/*!40000 ALTER TABLE `idea_tb` DISABLE KEYS */;
INSERT INTO `idea_tb` VALUES ('객체',1,1,'객체란 변수들과 그와 관련된 메소드들이 모여서 이룬 하나의 꾸러미이다.\\c++클래스 문법은 다음과 같다.\\class 클래스 이름\\{\\t접근제어지시자;\\t멤버변수 선언;\\t멤버함수 선언 및 정의;\\};'),('객체포인터',2,2,'객체 포인터란 객체를 가리킬 수 있는 포인터를 의미한다. 즉, 객체의 주소값을 저장할 수 있는 포인터이다.'),('함수의참조',3,3,'참조자는 변수에 별명을 붙인다고 한다.\\n그 별명을 통해서 변수의 메모리공간에 접근이 가능하다.\\n 참조자는 이름 앞에 \'&\'를 붙여 선언한다.');
/*!40000 ALTER TABLE `idea_tb` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-30 22:40:39
