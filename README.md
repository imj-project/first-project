# imj-first-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## Vue CLI 

### 1. 시작하기

* [Vue CLI](https://kr.vuejs.org/v2/guide/installation.html#CLI)
* [Vue CLI github](https://github.com/vuejs/vue-cli)
* `Vue CLI` : Vue 개발 환경을 빠르게 구축할 수 있도록 도와주는 툴
* [node.js 설치](https://nodejs.org/ko/) : 개발환경 구축
* node.js 설치 후 버전 확인 명령어 : `node -v`

### 2. 설치하기

* [공식문서](https://cli.vuejs.org/guide/installation.html)
* `npm install -g @vue/cli`
  * 만약 에러 발생 시 관리자 권한을 획득할 수 있는 `sudo`명령어를 앞에 붙여서 설치
* 설치가 완료된 다음 `vue --version` 명령어를 통해 설치된 vue의 버전 확인

#### Vue project 생성

* `vue create 프로젝트 이름` : 프로젝트 생성 명령어

![1562413848182](assets/1562413848182.png)

* `Manually select features`선택

![1562413913604](assets/1562413913604.png)

* 어떤 개발 환경을 구축할 것인지 선택하는 페이지 등장, 스페이스로 선택
* `Router`, `Vuex` 선택

![1562414004645](assets/1562414004645.png)

* 히스토리 모드를 router에서 사용할 것인가? Y

![1562414103885](assets/1562414103885.png)

* 패키지.json 개발환경에 대해 저장하는 것이 좋다면 `In package.json`

![1562414168080](assets/1562414168080.png)

* 위에서 선택한 개발 환경을 저장할 것인가?

![1562414226894](assets/1562414226894.png)

* 패키지 관리자 선택

![1562414560013](assets/1562414560013.png)

* Vue CLI 프로젝트 생성 완료

![1562415153761](assets/1562415153761.png)

* 생성된 폴더로 이동한 후 `npm run serve` 를 입력하면 서버 동작

![1562414714879](assets/1562414714879.png)



### 3. 프로젝트 생성

* [Vuetify 시작하기](https://vuetifyjs.com/ko/getting-started/quick-start)

* `vue add vuetify` : vuetify를 사용하기 위한 plugin 설치