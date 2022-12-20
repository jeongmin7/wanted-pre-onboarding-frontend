## 프로젝트의 실행 방법

1.  `git clone git@github.com:jeongmin7/wanted-pre-onboarding-frontend.git`
2.  압축 파일을 푼 뒤 폴더 주소로 터미널에 `npm install && npm start` 입력


<br/>

## 배포

[배포사이트](https://jeongmin7.github.io/wanted-pre-onboarding-frontend)

## 구현 원리 ?

```
📦src
 ┣ 📂components
 ┃ ┣ 📂Todo
 ┃ ┃ ┣ 📜NewTodo.jsx
 ┃ ┃ ┣ 📜Todo.jsx
 ┃ ┃ ┣ 📜TodoBox.jsx
 ┃ ┃ ┣ 📜TodoButton.jsx
 ┃ ┃ ┗ 📜TodoList.jsx
 ┃ ┣ 📜Button.jsx
 ┃ ┣ 📜Login.jsx
 ┃ ┣ 📜LoginInput.jsx
 ┃ ┗ 📜LoginStatus.jsx
 ┣ 📂pages
 ┃ ┣ 📜Main.jsx
 ┃ ┣ 📜NotFound.jsx
 ┃ ┗ 📜Todo.jsx
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜index.css
 ┗ 📜index.js
```
우선 페이지를 크게 3가지로 나누었습니다. 

```
로그인과 회원가입을 하는 <Main/>
```
```
todo를 관리하는 <Todo/>
```
```
그리고 그외의 주소를 입력했을 때  <NotFound/>
```
그리고 해당 페이지에서 사용되는 컴포넌트를 todo폴더와 auth폴더로 나누었어야 했는데 일단 저는 todo폴더만 따로 생성했고
## 완성된 GIF

<details>
  <summary>로그인 </summary>
    <div markdown="1">
      <img src= "https://user-images.githubusercontent.com/91598778/206627927-9afe7c68-cb8c-4f99-abd0-34770c8a7fe6.gif">
    </div>
</details>

<details>
  <summary>회원가입</summary>
    <div markdown="1">
       <img src= "https://user-images.githubusercontent.com/91598778/206627937-e6a68836-40cd-486e-b299-b04d40e89897.gif">
    </div>
</details>
로그인과 회원가입의 경우 ui가 동일하기 때문에 /라우터에서 관리하였습니다. const [login, setLogin] = useState(true);로 상태를 관리하여 login이 true일 경우 로그인을 false의 경우 회원가입을 할 수 있도록 button컴포넌트에 props로 넘겨주어 처리하였습니다. 

```
<Button  disabled={!validEmail || !validPassword}
loginInfo={loginInfo}
login={login}
setLogin={setLogin}
></Button>
```
        

<details>
  <summary>todo 추가</summary>
    <div markdown="1">
      <img src= "https://user-images.githubusercontent.com/91598778/206627950-2d8c23cc-bdd4-4987-aedf-bd0b430b21db.gif">
    </div>
</details>


<details>
  <summary>todo 삭제 </summary>
    <div markdown="1">
      <img src= "https://user-images.githubusercontent.com/91598778/206627966-1f8b3105-d0c4-4cb5-b354-d4b2bba47b18.gif">
    </div>
</details>


<details>
  <summary>todo 수정</summary>
    <div markdown="1">
   <img src= "https://user-images.githubusercontent.com/91598778/206627984-27c10991-c290-46b0-9736-537b436ee883.gif">
    </div>
</details>


<details>
  <summary>todo완료 여부 </summary>
    <div markdown="1">
   <img src= "https://user-images.githubusercontent.com/91598778/206628025-0525f245-780b-4cd1-bfef-6489b2c492cd.gif">
    </div>
</details>

<br/>

## 기능

1. 로그인 / 회원가입

- [x] Assignment1
  - [x] 이메일과 비밀번호의 유효성 검사기능 구현(이메일 조건: @ 포함 비밀번호 조건: 8자 이상)
  - [x] 입력된 이메일과 비밀번호가 유효성 검사를 통과했을 때 만 버튼이 활성화 되도록 구현
- [x] Assignment2
  - [x] 로그인 성공시 응답 받은 JWT를 로컬스토리지에 저장 후 /todo 경로로 이동 
- [x] Assignment3
  - [x] 로그인 여부에 따른 리다이렉트 구현 

:: 2. 투두 리스트

- [x] Assignment4
  - [x] /todo경로에 접속하면 투두 리스트의 목록 확인하도록 구현 
  - [x] 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시 구현
  - [x] 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가되도록 구현
- [x] Assignment5
  - [x] 투두 리스트의 수정, 삭제 기능을 구현
  - [x] 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정할 수 있도로고 구현 
  - [x] 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있도록 구현
  - [x] 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제되도록 구현 
