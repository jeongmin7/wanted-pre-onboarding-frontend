## 프로젝트의 실행 방법

1.  `git clone git@github.com:jeongmin7/wanted-pre-onboarding-frontend.git`
2.  압축 파일을 푼 뒤 폴더 주소로 터미널에 `npm install && npm start` 입력


<br/>

## 배포

[배포사이트](https://jeongmin7.github.io/wanted-pre-onboarding-frontend)


## 완성된 GIF

<details>
  <summary>로그인 </summary>
    <div markdown="1">
       ![로그인](https://user-images.githubusercontent.com/91598778/206627927-9afe7c68-cb8c-4f99-abd0-34770c8a7fe6.gif)
    </div>
</details>

<details>
  <summary>회원가입</summary>
    <div markdown="1">
       ![회원가입](https://user-images.githubusercontent.com/91598778/206627937-e6a68836-40cd-486e-b299-b04d40e89897.gif)
    </div>
</details>

<details>
  <summary>todo 추가</summary>
    <div markdown="1">
        ![추가하기](https://user-images.githubusercontent.com/91598778/206627950-2d8c23cc-bdd4-4987-aedf-bd0b430b21db.gif)
    </div>
</details>


<details>
  <summary>todo 삭제 </summary>
    <div markdown="1">
        ![삭제하기](https://user-images.githubusercontent.com/91598778/206627966-1f8b3105-d0c4-4cb5-b354-d4b2bba47b18.gif)
    </div>
</details>


<details>
  <summary>todo 수정</summary>
    <div markdown="1">
    ![수정하기](https://user-images.githubusercontent.com/91598778/206627984-27c10991-c290-46b0-9736-537b436ee883.gif)
    </div>
</details>


<details>
  <summary>todo완료 여부 </summary>
    <div markdown="1">
    ![완료여부](https://user-images.githubusercontent.com/91598778/206628025-0525f245-780b-4cd1-bfef-6489b2c492cd.gif)
    </div>
</details>

<br/>

## 기능

1. 로그인 / 회원가입
   / 경로에 로그인 / 회원가입 기능을 개발해주세요
   페이지 안에 이메일 입력창, 비밀번호 입력창, 제출 버튼이 포함된 형태로 구성해주세요
   로그인, 회원가입을 별도의 경로로 분리해도 무방합니다.

- [x] Assignment1
  - [x] 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
  - [x] 이메일 조건: @ 포함 비밀번호 조건: 8자 이상
  - [x] 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록 해주세요
- [x] Assignment2
  - [x] 로그인 API를 호출하고, 올바른 응답을 받았을 때 /todo 경로로 이동해주세요
  - [x] 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다. 응답받은 JWT는 로컬 스토리지에 저장해주세요
- [x] Assignment3
  - [x] 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
  - [x] 로컬 스토리지에 토큰이 있는 상태로 / 페이지에 접속한다면 /todo 경로로 리다이렉트 시켜주세요
  - [x] 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 / 경로로 리다이렉트 시켜주세요

:: 2. 투두 리스트

- [x] Assignment4
  - [x] /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
  - [x] 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되어야 합니다.
  - [x] 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가되도록 해주세요
- [x] Assignment5
  - [x] 투두 리스트의 수정, 삭제 기능을 구현해주세요
  - [x] 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정할 수 있도록 해주세요
  - [x] 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있도록 해주세요
  - [x] 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제되도록 해주세요
