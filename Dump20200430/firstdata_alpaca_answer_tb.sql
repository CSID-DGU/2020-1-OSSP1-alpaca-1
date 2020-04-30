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
-- Table structure for table `answer_tb`
--

DROP TABLE IF EXISTS `answer_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answer_tb` (
  `answer_text` text NOT NULL,
  `Anum` int NOT NULL,
  `Qnum` int DEFAULT NULL,
  PRIMARY KEY (`Anum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer_tb`
--

LOCK TABLES `answer_tb` WRITE;
/*!40000 ALTER TABLE `answer_tb` DISABLE KEYS */;
INSERT INTO `answer_tb` VALUES ('A:표준에는 정의되어 있지 않지만 대부분 컴파일러들은 멤버함수를 멤버변수보다 먼저 정의해도 동작되게 만들어져 있다.\\n즉, 대부분 컴파일러들은 이렇게 구문분석을 하는게 유리하기 때문에\\n굳이 표준으로 정하지 않더라도 후선언된 함수나, 변수를 칮는다.\\n하지만 표준에서 권장하는건 먼저사용될 변수나 클래스를 먼저 선언하는 방법이다.',1,1),('A:가장 좋은 방법은 팩토리 함수를 생성 Object하고 팩토리의 주소를 전달 하는 팩토리 함수 / 메소드를 갖는 것입니다.',2,2),('A:참조자를 넣지 않고 함수로 전달하면 인자의 크기만큼 메모리에 복사하여 전달하게 됩니다. (깊은복사)만약 덩치가 큰 객체를 복사하게 되면 메모리 낭비가 그만큼 심하게 될 것입니다.반면에 참조자나 포인터를 넣게되면 주소만큼만 복사하하므로 (얕은복사)메모리 측면에서 이득이기때문에 대부분 참조자를 넣습니다.',3,3);
/*!40000 ALTER TABLE `answer_tb` ENABLE KEYS */;
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
