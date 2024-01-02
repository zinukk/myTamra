# 나의 탐라 : 나는 제주의 모습은?

<img src="https://user-images.githubusercontent.com/97172321/219431038-2bb12055-5cb9-4712-849b-aa3a1ed366d0.png" >

# 구름톤 4기 최우수상 작품

<div align="center">
<img src="https://velog.velcdn.com/images/zinukk/post/cfc33f92-e92a-454c-9f8e-52e9e93cfecf/image.png" ><br>
</div>

<br>

## 구름톤이란?

### Kakao x Goorm 에서 주최한 해커톤

<pre>
구름톤은 마음껏 몰입하고 스스로 성장하는 IT 인재로 거듭나고 싶은 사람들을 위해 카카오와 구름이 주최한 해커톤입니다. 

구름톤(9oormthon)은 카카오 클라우드 플랫폼의 이름인 '9rum'과 구름의 영문명 '9oorm', 

'Hackathon'의 합성어로 두 구름이 만나 열리는 해커톤이라는 의미를 담고 있습니다.
</pre>

<br>

# 프로젝트 요약 🍊

- 기간 : 2022.12.15 ~ 2022.12.16
- 개발 언어 : Typescript
- 개발 라이브러리 : Next.js
- 배포 환경 : AWS EC2, S3, CodeDeploy, Loadbalancer, Gihub Actions를 이용한 https 및 CI/CD 적용
- 디자인 패턴 : VAC 패턴
- 협업 툴 : Git / Notion / Figma

<br>

# 프로젝트 멤버 🍊

<img src="https://user-images.githubusercontent.com/97172321/219441042-9eaa1b56-ca3e-4a27-9d99-2956e7cf4497.png" />

<br>

# 프로젝트 설명 🍊

<img src="https://user-images.githubusercontent.com/97172321/219434983-a6e9f816-1dcf-4c8a-88c1-36069dd56654.png" />

<img src="https://user-images.githubusercontent.com/97172321/219468634-82903738-c42d-49c0-8476-bbc5e70825f2.png" />

<pre>
"나는 제주의 어떤 모습일까?"

나의 탐라는 현재 제주도의 환경문제에 대한 인식을 높이기 위해 만든 서비스입니다. 

일반적인 사람들의 경우 환경에 대한 어느 정도의 관심은 있지만 크게 신경 쓰지 않는 경우가 대다수이기 때문에 

최근에 유행하는 MBTI 테스트 형식으로 접근의 허들을 낮추고 제주의 심각한 환경 상태를 서비스에 녹여냈습니다.

나의 탐라에서 유저들은 질문지를 통해 결과 페이지에서 본인과 흡사한 제주 해안을 추천받고 해당 지역 근처의 숙소, 맛집 정보를 받을 수 있으며

동시에 현재와 미래의 제주 모습을 대비적으로 보여줌으로써 제주 환경에 대한 경각심을 일깨우고 있습니다. 
</pre>

<br>

# 누구에게 필요할까? 🍊

<img src="https://user-images.githubusercontent.com/97172321/221405085-1d392a1f-8060-4c2b-a3fd-78c61b2103c6.png" />

<br>

# 프로젝트 아키텍쳐 🍊

<img src="https://user-images.githubusercontent.com/97172321/219953786-a369e73e-6e78-48b8-81fd-7f991cbb4f8d.png" />

<br>

# 프로젝트 페이지 구성 🍊

|         페이지          |                                                           시연 영상                                                            |                                                                                                                                                                      기능 및 설명                                                                                                                                                                       |
| :---------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `홈 & 질문 선택 & 로딩` | <img src="https://user-images.githubusercontent.com/97172321/220843334-198ddf47-abb5-4f61-9d26-bd41924127aa.gif" width="50%"/> | - 파이썬의 셀레니움 크롤링을 통해 제주도 해안과 가장 어울리는 단어 및 형용사를 추출해 근거있는 질문지 작성 <br /> <br /> - UI/UX를 고려해 유저에게 한 번에 모든 질문지를 보여주는 것이 아닌 앞의 질문지를 선택해야 다음 질문지가 나오도록 구현 <br /> <br /> - 유저에게 나의 탐라가 만들어지고 있다는 느낌을 주기 위해 의도적으로 구현한 로딩 및 스피너 |
|         `결과`          | <img src="https://user-images.githubusercontent.com/97172321/220882644-ecf88517-f099-4c6e-b002-f7beebc92287.gif" width="50%"/> |                                                                 - 질문지를 통해 추천받은 제주도 해안의 현재 모습과 2060년 제주도 해안의 모습을 양쪽 스와이프 기능을 통해 구현 <br /> <br /> - 완전히 대비되는 제주도 해안 모습을 통해 유저들에게 제주도 환경문제에 대한 경각심을 일깨움                                                                 |
|         `결과`          | <img src="https://user-images.githubusercontent.com/97172321/220885424-32ebe768-58bd-44e8-9f65-6b7892e9047a.gif" width="50%"/> |                       - 추천받은 제주도 해안 주변 맛집이나 카페를 유저들에게 추천해줄수 있도록 구현 <br /> <br /> - 오늘의 차귀도,범섬 등 현재의 제주도 해안 탭에서는 맛집이나 카페를 추천하지만 미래의 제주도 해안에서는 플로깅과 같은 제주도 환경 보호 운동 링크를 걸어둠으로써 경각심뿐만 아니라 실천으로 옮길 수 있도록 구현                        |
|         `결과`          | <img src="https://user-images.githubusercontent.com/97172321/221405413-9521ff0e-3da5-4e3a-9761-85cab383ba25.gif" width="50%"/> |                                                                                                                                                                   - 카카오 공유 기능                                                                                                                                                                    |
|         `결과`          | <img src="https://user-images.githubusercontent.com/97172321/221405753-8864109d-6ff1-4b90-9e1f-51eef897250c.gif" width="50%"/> |                                                                                                                                                                  - 클립보드 복사 기능                                                                                                                                                                   |
