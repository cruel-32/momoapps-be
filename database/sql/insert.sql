-- Category
INSERT INTO `Category` (`id`, `name`, `parentId`) VALUES (1, '아웃도어/여행', NULL);
INSERT INTO `Category` (`id`, `name`, `parentId`) VALUES (2, '운동/스포츠', NULL);
INSERT INTO `Category` (`id`, `name`, `parentId`) VALUES (3, '인문학/책/글', NULL);
INSERT INTO `Category` (`id`, `name`, `parentId`) VALUES (4, '문화/공연/축제', NULL);
INSERT INTO `Category` (`id`, `name`, `parentId`) VALUES (5, '사교/인맥', NULL);
INSERT INTO `Category` (`id`, `name`, `parentId`) VALUES (6, '차/오토바이', NULL);
INSERT INTO `Category` (`id`, `name`, `parentId`) VALUES (7, '게임/오락', NULL);
INSERT INTO `Category` (`id`, `name`, `parentId`) VALUES (8, '업종/직무', NULL);
INSERT INTO `Category` (`id`, `name`, `parentId`) VALUES (9, '외국/언어', NULL);
INSERT INTO `Category` (`id`, `name`, `parentId`) VALUES (10, '음악/악기', NULL);
INSERT INTO `Category` (`id`, `name`, `parentId`) VALUES (11, '공예/만들기', NULL);
INSERT INTO `Category` (`id`, `name`, `parentId`) VALUES (12, '댄스/무용', NULL);
INSERT INTO `Category` (`id`, `name`, `parentId`) VALUES (13, '봉사활동', NULL);
INSERT INTO `Category` (`id`, `name`, `parentId`) VALUES (14, '사진/영상', NULL);
INSERT INTO `Category` (`id`, `name`, `parentId`) VALUES (15, '요리/제조', NULL);
INSERT INTO `Category` (`id`, `name`, `parentId`) VALUES (16, '반려동물', NULL);
INSERT INTO `Category` (`id`, `name`, `parentId`) VALUES (17, '가족/결혼', NULL);
INSERT INTO `Category` (`id`, `name`, `parentId`) VALUES (18, '자유주제', NULL);
INSERT INTO `Category` (`id`, `name`, `parentId`) VALUES (19, '등산', 1);
INSERT INTO `Category` (`id`, `name`, `parentId`) VALUES (20, '산책/트래킹', 1);

-- Role
INSERT INTO `Role` (`id`, `code`, `name`) VALUES (1, 'user000', '마스터');
INSERT INTO `Role` (`id`, `code`, `name`) VALUES (2, 'user001', '관리자');
INSERT INTO `Role` (`id`, `code`, `name`) VALUES (3, 'user002', '미인증사용자');
INSERT INTO `Role` (`id`, `code`, `name`) VALUES (4, 'user003', '일반사용자');
INSERT INTO `Role` (`id`, `code`, `name`) VALUES (5, 'user004', '결제사용자');
INSERT INTO `Role` (`id`, `code`, `name`) VALUES (6, 'user005', '모임장');
INSERT INTO `Role` (`id`, `code`, `name`) VALUES (7, 'user006', '운영진');
INSERT INTO `Role` (`id`, `code`, `name`) VALUES (8, 'user007', '탈퇴회원');
